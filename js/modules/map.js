// js/modules/map.js

import { lisbonRestaurants } from '../data/restaurants-lisbon.js';
import { londonRestaurants } from '../data/restaurants-london.js';
import { oxfordRestaurants } from '../data/restaurants-oxford.js';
import { parisRestaurants } from '../data/restaurants-paris.js';

// NOTA: Removidas as importações de 'sabores.js' e 'ui.js' para evitar dependências circulares.

const restaurantData = {
    lisboa: lisbonRestaurants,
    londres: londonRestaurants,
    oxford: oxfordRestaurants,
    paris: parisRestaurants
};

let map = null;
let markers = null;
let userLocationMarker = null; // Para guardar o marcador da localização do usuário
const resizeObserver = new ResizeObserver(() => adjustMapHeight());

// --- FUNÇÕES HELPER ---

function slugify(text) {
    if (!text) return '';
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/\//g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Raio da Terra em km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance.toFixed(1);
}

// --- AJUSTE DINÂMICO DA ALTURA DO MAPA ---

function adjustMapHeight() {
    if (!map) return;
    const mapContainer = document.getElementById('map-container');
    const topNav = document.querySelector('.top-nav');
    const mainContent = document.getElementById('main-content');
    const viewToggler = document.getElementById('view-toggle-list')?.parentElement.parentElement;
    const mapFilters = document.getElementById('map-filters');

    if (!mapContainer || !topNav || !mainContent || !viewToggler || !mapFilters) return;

    const topNavHeight = topNav.offsetHeight;
    const viewTogglerHeight = viewToggler.offsetHeight;
    const mapFiltersHeight = mapFilters.offsetHeight;
    const mainContentPaddingTop = parseFloat(window.getComputedStyle(mainContent).paddingTop);
    const mainContentPaddingBottom = parseFloat(window.getComputedStyle(mainContent).paddingBottom);
    
    const margin = 16;
    const totalOffset = topNavHeight + mainContentPaddingTop + viewTogglerHeight + mapFiltersHeight + (margin * 3);
    const availableHeight = window.innerHeight - totalOffset - mainContentPaddingBottom;
    const minHeight = 300; 
    mapContainer.style.height = `${Math.max(availableHeight, minHeight)}px`;
    map.invalidateSize();
}

// --- DEFINIÇÕES E CRIAÇÃO DO MAPA ---

function createCustomIcons() {
    const baseStyle = `width: 32px; height: 32px; display: flex; justify-content: center; align-items: center; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); box-shadow: 0 2px 5px rgba(0,0,0,0.3); border: 2px solid white;`;
    const innerStyle = `transform: rotate(45deg); color: white; font-size: 16px;`;
    return {
        safe: L.divIcon({ className: 'custom-div-icon', html: `<div style="${baseStyle} background-color: #10B981;"><i class="fas fa-check-circle" style="${innerStyle}"></i></div>`, iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] }),
        accredited: L.divIcon({ className: 'custom-div-icon', html: `<div style="${baseStyle} background-color: #0EA5E9;"><i class="fas fa-shield-alt" style="${innerStyle}"></i></div>`, iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] }),
        caution: L.divIcon({ className: 'custom-div-icon', html: `<div style="${baseStyle} background-color: #F59E0B;"><i class="fas fa-exclamation-triangle" style="${innerStyle}"></i></div>`, iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] }),
        user: L.divIcon({ className: 'custom-user-icon', html: `<div style="width: 20px; height: 20px; background-color: #3b82f6; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(59, 130, 246, 0.7);"></div>`, iconSize: [20, 20], iconAnchor: [10, 10] })
    };
}

function createPopupContent(restaurant, address, userLocation = null) {
    const safetyInfo = {
        safe: { text: 'Seguro', class: 'popup-safety-safe' },
        accredited: { text: 'Acreditado', class: 'popup-safety-accredited' },
        caution: { text: 'Cautela', class: 'popup-safety-caution' }
    };
    const currentSafety = safetyInfo[restaurant.safety.level] || { text: 'N/A', class: '' };
    const nameSlug = slugify(restaurant.name);
    let distanceHtml = '';
    if (userLocation && address.lat && address.lng) {
        const distance = getDistanceFromLatLonInKm(userLocation.lat, userLocation.lng, address.lat, address.lng);
        distanceHtml = `<p class="popup-distance"><i class="fas fa-location-arrow fa-xs mr-1"></i>Aprox. <strong>${distance} km</strong> de você</p>`;
    }
    return `
        <div class="popup-container">
            <h4 class="popup-title">${restaurant.name}</h4>
            <p class="popup-address">${address.address}</p>
            ${distanceHtml}
            <div class="popup-safety ${currentSafety.class}">${currentSafety.text}</div>
            <div class="popup-buttons">
                <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address.address)}" target="_blank" class="popup-button popup-button-route"><i class="fas fa-directions"></i> Rota</a>
                <button data-restaurant-slug="${nameSlug}" class="popup-button popup-button-details"><i class="fas fa-info-circle"></i> Detalhes</button>
            </div>
        </div>`;
}

function updateMapSafetyFilters(city) {
    const restaurantsInCity = restaurantData[city] || [];
    const availableLevels = new Set(restaurantsInCity.map(r => r.safety.level));
    const safetyButtons = document.querySelectorAll('.map-filter-btn');
    safetyButtons.forEach(button => {
        const filterLevel = button.dataset.filter;
        button.style.display = (filterLevel === 'all' || availableLevels.has(filterLevel)) ? 'inline-flex' : 'none';
    });
    const activeButton = document.querySelector('.map-filter-btn.active');
    if (activeButton && activeButton.style.display === 'none') {
        document.querySelector('.map-filter-btn[data-filter="all"]').click();
    }
}

export function updateMapMarkers(userLocation = null) {
    if (!map || !markers) return;
    const city = document.querySelector('.map-city-btn.active').dataset.city;
    const nameFilter = document.getElementById('map-filter-name').value.toLowerCase().trim();
    updateMapSafetyFilters(city);
    markers.clearLayers();
    const icons = createCustomIcons();
    const safety = document.querySelector('.map-filter-btn.active').dataset.filter;
    const locations = [];
    const restaurantsInCity = restaurantData[city] || [];
    const filteredRestaurants = restaurantsInCity.filter(r => {
        const safetyMatch = safety === 'all' || r.safety.level === safety;
        const nameMatch = nameFilter === '' || r.name.toLowerCase().includes(nameFilter);
        return safetyMatch && nameMatch;
    });
    filteredRestaurants.forEach(restaurant => {
        restaurant.addresses.forEach(address => {
            if (address.lat && address.lng) {
                const icon = icons[restaurant.safety.level] || icons.caution;
                const marker = L.marker([address.lat, address.lng], { icon: icon });
                marker.bindTooltip(restaurant.name, { permanent: true, direction: 'top', offset: [0, -35], className: 'map-label' });
                marker.bindPopup(createPopupContent(restaurant, address, userLocation));
                markers.addLayer(marker);
                locations.push([address.lat, address.lng]);
            }
        });
    });
    if (userLocationMarker) {
        map.removeLayer(userLocationMarker);
        userLocationMarker = null;
    }
    if (userLocation) {
        userLocationMarker = L.marker([userLocation.lat, userLocation.lng], { icon: icons.user, zIndexOffset: 1000 }).addTo(map);
        userLocationMarker.bindPopup("<b>Você está aqui!</b>").openPopup();
    }
    if (locations.length > 0) {
        if (!userLocation) {
             map.fitBounds(locations, { padding: [50, 50] });
        }
    } else {
        const cityCenters = { londres: [51.5074, -0.1278], oxford: [51.7520, -1.2577], lisboa: [38.7223, -9.1393] };
        map.setView(cityCenters[city] || [51.5074, -0.1278], 12);
    }
}

function setupMapFilters() {
    const cityButtons = document.querySelectorAll('.map-city-btn');
    const safetyButtons = document.querySelectorAll('.map-filter-btn');
    const nameInput = document.getElementById('map-filter-name');
    const filterHandler = () => updateMapMarkers();
    cityButtons.forEach(button => {
        button.addEventListener('click', () => {
            cityButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterHandler();
        });
    });
    nameInput?.addEventListener('input', filterHandler);
    safetyButtons.forEach(button => {
        button.addEventListener('click', () => {
            safetyButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterHandler();
        });
    });
}

export function initializeMap() {
    if (map) return;
    const mapContainer = document.getElementById('map-container');
    if (!mapContainer) return;

    if (!document.getElementById('map-label-styles')) {
        const style = document.createElement('style');
        style.id = 'map-label-styles';
        style.innerHTML = `
            .map-label { background-color: rgba(255, 255, 255, 0.85); border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); color: #1e293b; font-size: 10px; font-weight: 600; padding: 2px 6px; white-space: nowrap; }
            .popup-distance { font-size: 0.75rem; color: #0ea5e9; margin-bottom: 0.5rem; text-align: center; }`;
        document.head.appendChild(style);
    }

    map = L.map(mapContainer, { scrollWheelZoom: false, zoomControl: false });
    L.control.zoom({ position: 'bottomleft' }).addTo(map);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; CartoDB Positron'
    }).addTo(map);

    markers = L.markerClusterGroup();
    map.addLayer(markers);
    setupMapFilters();
    adjustMapHeight();
    const mainContent = document.getElementById('main-content');
    if(mainContent) resizeObserver.observe(mainContent);
    window.addEventListener('resize', adjustMapHeight);
    updateMapMarkers(); 
}

export function destroyMap() {
    if (map) {
        map.remove();
        map = null;
        markers = null;
        userLocationMarker = null;
    }
    resizeObserver.disconnect();
    window.removeEventListener('resize', adjustMapHeight);
}

export function panToAndOpenPopup(lat, lng) {
    if (!map || !markers) return;
    let targetLayer = null;
    markers.eachLayer(layer => {
        const layerLatLng = layer.getLatLng();
        if (layerLatLng.lat === lat && layerLatLng.lng === lng) {
            targetLayer = layer;
        }
    });
    if (targetLayer) {
        markers.zoomToShowLayer(targetLayer, () => targetLayer.openPopup());
    } else {
        console.warn(`Marcador com coordenadas ${lat}, ${lng} não encontrado.`);
    }
}

/**
 * Pede a localização do usuário e mostra os restaurantes próximos no mapa.
 */
export function findNearbyRestaurantsOnMap() {
    if (!navigator.geolocation) {
        alert("Geolocalização não é suportada por este navegador.");
        return;
    }
    if (!map) {
        console.error("O mapa não foi inicializado.");
        return;
    }
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            updateMapMarkers(userLocation);
            map.setView([userLocation.lat, userLocation.lng], 14);
        },
        () => {
            alert("Não foi possível obter sua localização. Verifique as permissões do navegador.");
            updateMapMarkers(); // Carrega marcadores sem localização do usuário
        }
    );
}
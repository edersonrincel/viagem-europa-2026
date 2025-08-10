// js/modules/map.js

import { restaurantData } from './data.js';
import { navigateToRestaurant } from './sabores.js';

let map = null;
let markers = null;
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

// --- AJUSTE DINÂMICO DA ALTURA DO MAPA ---

function adjustMapHeight() {
    if (!map) return;
    const mapContainer = document.getElementById('map-container');
    const topNav = document.querySelector('.top-nav');
    const mainContent = document.getElementById('main-content');
    const viewToggler = document.getElementById('view-toggle-list')?.parentElement.parentElement; // Pega o container do toggler
    const mapFilters = document.getElementById('map-filters');

    if (!mapContainer || !topNav || !mainContent || !viewToggler || !mapFilters) return;

    // Calcula a altura dos elementos acima do mapa
    const topNavHeight = topNav.offsetHeight;
    const viewTogglerHeight = viewToggler.offsetHeight;
    const mapFiltersHeight = mapFilters.offsetHeight;
    const mainContentPaddingTop = parseFloat(window.getComputedStyle(mainContent).paddingTop);
    const mainContentPaddingBottom = parseFloat(window.getComputedStyle(mainContent).paddingBottom);
    
    // Margem entre os elementos
    const margin = 16; // 1rem

    // Altura total dos elementos fixos e de conteúdo acima do mapa
    const totalOffset = topNavHeight + mainContentPaddingTop + viewTogglerHeight + mapFiltersHeight + (margin * 3);
    
    // Calcula a altura disponível
    const availableHeight = window.innerHeight - totalOffset - mainContentPaddingBottom;

    // Define uma altura mínima para evitar que o mapa desapareça
    const minHeight = 300; 
    mapContainer.style.height = `${Math.max(availableHeight, minHeight)}px`;

    // Informa ao Leaflet que o tamanho do container mudou
    map.invalidateSize();
}

// --- DEFINIÇÕES E CRIAÇÃO DO MAPA ---

function createCustomIcons() {
    const baseStyle = `
        width: 32px; 
        height: 32px; 
        display: flex; 
        justify-content: center; 
        align-items: center; 
        border-radius: 50% 50% 50% 0; 
        transform: rotate(-45deg); 
        box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        border: 2px solid white;
    `;
    const innerStyle = `
        transform: rotate(45deg); 
        color: white; 
        font-size: 16px;
    `;

    return {
        safe: L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="${baseStyle} background-color: #10B981;"><i class="fas fa-check-circle" style="${innerStyle}"></i></div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32],
        }),
        accredited: L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="${baseStyle} background-color: #0EA5E9;"><i class="fas fa-shield-alt" style="${innerStyle}"></i></div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32],
        }),
        caution: L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="${baseStyle} background-color: #F59E0B;"><i class="fas fa-exclamation-triangle" style="${innerStyle}"></i></div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32],
        })
    };
}

function createPopupContent(restaurant, address) {
    const safetyInfo = {
        safe: { text: 'Seguro', class: 'popup-safety-safe' },
        accredited: { text: 'Acreditado', class: 'popup-safety-accredited' },
        caution: { text: 'Cautela', class: 'popup-safety-caution' }
    };
    const currentSafety = safetyInfo[restaurant.safety.level] || { text: 'N/A', class: '' };
    const nameSlug = slugify(restaurant.name);

    return `
        <div class="popup-container">
            <h4 class="popup-title">${restaurant.name}</h4>
            <p class="popup-address">${address.address}</p>
            <div class="popup-safety ${currentSafety.class}">${currentSafety.text}</div>
            <div class="popup-buttons">
                <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address.address)}" target="_blank" class="popup-button popup-button-route">
                    <i class="fas fa-directions"></i> Rota
                </a>
                <button data-restaurant-slug="${nameSlug}" class="popup-button popup-button-details">
                    <i class="fas fa-info-circle"></i> Detalhes
                </button>
            </div>
        </div>
    `;
}

function updateMapSafetyFilters(city) {
    const restaurantsInCity = restaurantData[city] || [];
    const availableLevels = new Set(restaurantsInCity.map(r => r.safety.level));
    
    const safetyButtons = document.querySelectorAll('.map-filter-btn');
    safetyButtons.forEach(button => {
        const filterLevel = button.dataset.filter;
        if (filterLevel === 'all') {
            button.style.display = 'inline-flex';
        } else {
            button.style.display = availableLevels.has(filterLevel) ? 'inline-flex' : 'none';
        }
    });

    // Se o filtro ativo foi escondido, reseta para "Todos"
    const activeButton = document.querySelector('.map-filter-btn.active');
    if (activeButton && activeButton.style.display === 'none') {
        document.querySelector('.map-filter-btn[data-filter="all"]').click();
    }
}


function updateMapMarkers() {
    if (!map || !markers) return;

    const city = document.getElementById('map-filter-city').value;
    
    // Atualiza a visibilidade dos botões de filtro de segurança
    updateMapSafetyFilters(city);

    markers.clearLayers();
    const icons = createCustomIcons();
    const safety = document.querySelector('.map-filter-btn.active').dataset.filter;

    const locations = [];
    const restaurantsInCity = restaurantData[city] || [];

    const filteredRestaurants = restaurantsInCity.filter(r => safety === 'all' || r.safety.level === safety);

    filteredRestaurants.forEach(restaurant => {
        restaurant.addresses.forEach(address => {
            if (address.lat && address.lng) {
                const icon = icons[restaurant.safety.level] || icons.caution;
                const marker = L.marker([address.lat, address.lng], { icon: icon });
                marker.bindPopup(createPopupContent(restaurant, address));
                markers.addLayer(marker);
                locations.push([address.lat, address.lng]);
            }
        });
    });

    if (locations.length > 0) {
        map.fitBounds(locations, { padding: [50, 50] });
    } else {
        // Padrão para o centro da cidade se não houver marcadores
        const cityCenters = {
            londres: [51.5074, -0.1278],
            oxford: [51.7520, -1.2577],
            lisboa: [38.7223, -9.1393],
            paris: [48.8566, 2.3522]
        };
        map.setView(cityCenters[city] || [51.5074, -0.1278], 12);
    }
}

function setupPopupDetailButtons() {
    map.on('popupopen', function (e) {
        const detailButton = e.popup._container.querySelector('.popup-button-details');
        if (detailButton) {
            detailButton.addEventListener('click', function () {
                const slug = this.dataset.restaurantSlug;
                navigateToRestaurant(slug);
            });
        }
    });
}

function setupMapFilters() {
    const citySelect = document.getElementById('map-filter-city');
    const safetyButtons = document.querySelectorAll('.map-filter-btn');

    citySelect?.addEventListener('change', updateMapMarkers);
    safetyButtons.forEach(button => {
        button.addEventListener('click', () => {
            safetyButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            updateMapMarkers();
        });
    });
}

export function initializeMap() {
    if (map) return;

    const mapContainer = document.getElementById('map-container');
    if (!mapContainer) return;

    map = L.map(mapContainer, {
        // Desativa o zoom com o scroll do mouse para evitar zoom acidental ao rolar a página
        scrollWheelZoom: false,
        // Remove o controle de zoom da posição padrão (topleft)
        zoomControl: false 
    });

    // Adiciona o controle de zoom na nova posição (bottomleft)
    L.control.zoom({ position: 'bottomleft' }).addTo(map);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">CartoDB Positron</a> contributors'
    }).addTo(map);

    markers = L.markerClusterGroup();
    map.addLayer(markers);

    setupPopupDetailButtons();
    setupMapFilters();
    
    // CORREÇÃO: Ajusta a altura PRIMEIRO, para que o mapa saiba seu tamanho antes de enquadrar os pontos.
    adjustMapHeight();
    const mainContent = document.getElementById('main-content');
    if(mainContent) {
        resizeObserver.observe(mainContent);
    }
    window.addEventListener('resize', adjustMapHeight);

    // Popula os marcadores e enquadra no mapa DEPOIS que o mapa tem o tamanho correto.
    updateMapMarkers(); 
}

export function destroyMap() {
    if (map) {
        map.remove();
        map = null;
        markers = null;
    }
    // Para de observar as mudanças de tamanho e remove o listener
    resizeObserver.disconnect();
    window.removeEventListener('resize', adjustMapHeight);
}

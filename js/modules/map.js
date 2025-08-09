// js/modules/map.js

import { restaurantData } from './data.js';
import { navigateToRestaurant } from './sabores.js';

let map = null;

// --- FUNÇÕES HELPER ---

/**
 * Converte uma string para um formato "slug" (ex: "Italiano / Pizza" -> "italiano-pizza").
 * @param {string} text - O texto a ser convertido.
 * @returns {string} - O texto em formato slug.
 */
function slugify(text) {
    if (!text) return '';
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-') // Substitui espaços por -
        .replace(/\//g, '-') // Substitui / por -
        .replace(/[^\w\-]+/g, '') // Remove todos os caracteres não-alfanuméricos exceto -
        .replace(/\-\-+/g, '-') // Substitui múltiplos - por um único -
        .replace(/^-+/, '') // Remove - do início
        .replace(/-+$/, ''); // Remove - do fim
}

// --- DEFINIÇÕES E CRIAÇÃO DO MAPA ---

/**
 * Cria ícones personalizados para os marcadores do mapa com base no nível de segurança.
 * @returns {object} - Um objeto contendo os ícones para cada nível.
 */
function createCustomIcons() {
    const baseIcon = {
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    };

    return {
        safe: L.icon({ ...baseIcon, iconUrl: 'https://img.icons8.com/plasticine/100/000000/marker.png' }),
        accredited: L.icon({ ...baseIcon, iconUrl: 'https://img.icons8.com/ultraviolet/80/000000/marker.png' }),
        caution: L.icon({ ...baseIcon, iconUrl: 'https://img.icons8.com/fluency/96/000000/marker.png' }),
        user: L.icon({
            iconUrl: 'https://img.icons8.com/pulsar-color/96/user-location.png',
            iconSize: [38, 38],
            iconAnchor: [19, 38],
            popupAnchor: [0, -38],
        }),
    };
}

/**
 * Cria o conteúdo HTML para o pop-up de um marcador.
 * @param {object} restaurant - O objeto do restaurante.
 * @param {object} address - O objeto do endereço específico.
 * @returns {string} - O HTML do pop-up.
 */
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

/**
 * Adiciona todos os restaurantes ao mapa como marcadores.
 */
function addRestaurantMarkers(icons) {
    if (!map) return;

    Object.values(restaurantData).flat().forEach(restaurant => {
        restaurant.addresses.forEach(address => {
            if (address.lat && address.lng) {
                const icon = icons[restaurant.safety.level] || icons.caution;
                const marker = L.marker([address.lat, address.lng], { icon: icon }).addTo(map);
                marker.bindPopup(createPopupContent(restaurant, address));
            }
        });
    });
}

/**
 * Adiciona um listener para os botões "Ver detalhes" nos pop-ups.
 */
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


/**
 * Adiciona a localização do usuário ao mapa.
 */
function addUserLocation(icons) {
    if (!map) return;
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            L.marker([latitude, longitude], { icon: icons.user }).addTo(map)
                .bindPopup("Sua localização atual").openPopup();
            map.setView([latitude, longitude], 13);
        },
        () => {
            console.warn("Não foi possível obter a localização do usuário.");
            // Centraliza em Londres como padrão se a localização falhar
            map.setView([51.5074, -0.1278], 11);
        }
    );
}

/**
 * Inicializa o mapa Leaflet, adiciona camadas, marcadores e a localização do usuário.
 */
export function initializeMap() {
    if (map) return; // Previne reinicialização

    const mapContainer = document.getElementById('map-container');
    if (!mapContainer) return;

    map = L.map(mapContainer);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const icons = createCustomIcons();
    addRestaurantMarkers(icons);
    addUserLocation(icons);
    setupPopupDetailButtons();
}

/**
 * Destrói a instância do mapa para liberar recursos.
 */
export function destroyMap() {
    if (map) {
        map.remove();
        map = null;
    }
}

// js/modules/roteiro.js

/**
 * @file Controla a renderização dinâmica do conteúdo da página do roteiro, incluindo os mapas interativos.
 */

import { itineraryData, hotelCoords } from '../data/roteiro-data.js';

// Armazena as instâncias dos mapas para evitar recriação
// ALTERADO: de 'const' para 'let' para permitir o reset
let mapInstances = {};

/**
 * Cria o HTML para um único evento dentro da linha do tempo de um dia.
 * @param {object} event - O objeto do evento.
 * @returns {string} - O HTML do item do evento.
 */
function createEventElement(event) {
    const typeClasses = {
        'transporte': 'bg-sky-500',
        'chegada': 'bg-emerald-500',
        'partida': 'bg-rose-500',
        'passeio': 'bg-violet-500',
        'cultura': 'bg-amber-500',
        'refeicao': 'bg-orange-500',
        'hospedagem': 'bg-indigo-500',
        'default': 'bg-slate-500'
    };
    const bgColor = typeClasses[event.type] || typeClasses['default'];

    return `
        <div class="timeline-item-new">
            <div class="timeline-time">${event.time}</div>
            <div class="timeline-marker-container">
                <div class="timeline-marker-line"></div>
                <div class="timeline-marker-dot ${bgColor}">
                    <i class="${event.icon} text-white text-xs"></i>
                </div>
            </div>
            <div class="timeline-content-new">
                <h5 class="font-semibold text-slate-800 text-sm">${event.title}</h5>
                <p class="text-xs text-slate-600">${event.description}</p>
            </div>
        </div>
    `;
}

/**
 * Gera e insere o conteúdo da linha do tempo para um dia específico do roteiro.
 * @param {object} dayData - Os dados para um dia do roteiro.
 */
function renderDayTimeline(dayData) {
    const containerId = `timeline-view-dia-${dayData.day}`;
    const container = document.getElementById(containerId);

    if (!container) {
        console.warn(`Container da timeline para o dia ${dayData.day} não encontrado.`);
        return;
    }

    const eventsHtml = dayData.events.map(createEventElement).join('');
    container.innerHTML = `
        <div class="day-summary">
            <p class="text-sm font-semibold text-sky-700">Objetivo do Dia:</p>
            <p class="text-sm text-slate-600">${dayData.objective}</p>
        </div>
        <div class="timeline-container-new">
            ${eventsHtml}
        </div>
    `;
}

/**
 * Cria e inicializa um mapa para um dia específico do roteiro.
 * @param {number} dayNumber - O número do dia.
 * @param {object} dayData - Os dados do dia do roteiro.
 */
function initializeDayMap(dayNumber, dayData) {
    const mapContainerId = `map-container-dia-${dayNumber}`;
    const mapContainer = document.getElementById(mapContainerId);

    // Se já houver um mapa, apenas garante que o tamanho está correto
    if (mapInstances[dayNumber]) {
        mapInstances[dayNumber].invalidateSize();
        return;
    }
    
    if (!mapContainer) return;

    const map = L.map(mapContainer).setView([51.505, -0.09], 13);
    mapInstances[dayNumber] = map; // Armazena a instância do mapa

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '© CartoDB'
    }).addTo(map);

    const points = [];
    const markers = L.featureGroup();

    // 1. Adiciona o ponto de partida (hotel)
    const cityKey = dayData.city === 'Oxford' ? 'londres' : dayData.city.toLowerCase();
    const startPoint = hotelCoords[cityKey];
    if (startPoint) {
        points.push([startPoint.lat, startPoint.lng]);
        const hotelMarker = L.marker([startPoint.lat, startPoint.lng], {
            icon: L.divIcon({ 
                className: 'custom-hotel-icon', 
                html: '<i class="fas fa-bed"></i>',
                iconSize: [32, 32],
                iconAnchor: [16, 32]
            })
        }).bindPopup("<b>Ponto de Partida:</b><br>Hotel");
        markers.addLayer(hotelMarker);
    }

    // 2. Adiciona os marcadores para cada evento com coordenadas
    let eventCounter = 0;
    dayData.events.forEach((event) => {
        if (event.coords) {
            eventCounter++;
            points.push([event.coords.lat, event.coords.lng]);
            const marker = L.marker([event.coords.lat, event.coords.lng], {
                icon: L.divIcon({ 
                    className: 'custom-event-icon', 
                    html: `<span class="font-bold">${eventCounter}</span>`,
                    iconSize: [32, 32],
                    iconAnchor: [16, 32]
                })
            }).bindPopup(`<b>${eventCounter}. ${event.title}</b><br>${event.time}`);
            markers.addLayer(marker);
        }
    });

    // 3. Adiciona os marcadores e a linha do percurso ao mapa
    map.addLayer(markers);
    if (points.length > 1) {
        const polyline = L.polyline(points, { color: '#F97316', weight: 3 }).addTo(map);
        map.fitBounds(polyline.getBounds(), { padding: [40, 40] });
    } else if (points.length === 1) {
        map.setView(points[0], 15);
    } else {
        // Se não houver pontos, centraliza no hotel
        if(startPoint) map.setView([startPoint.lat, startPoint.lng], 15);
    }
}

/**
 * Alterna a visualização entre linha do tempo e mapa para um dia específico.
 * @param {number} dayNumber - O número do dia.
 * @param {'timeline' | 'map'} viewToShow - A visualização a ser exibida.
 */
function switchDayView(dayNumber, viewToShow) {
    const timelineView = document.getElementById(`timeline-view-dia-${dayNumber}`);
    const mapView = document.getElementById(`map-view-dia-${dayNumber}`);
    const allTogglesForDay = document.querySelectorAll(`.day-view-toggle[data-day='${dayNumber}']`);
    
    allTogglesForDay.forEach(toggle => {
        const isCurrent = toggle.dataset.view === viewToShow;
        toggle.classList.toggle('bg-white', isCurrent);
        toggle.classList.toggle('text-sky-600', isCurrent);
        toggle.classList.toggle('shadow', isCurrent);
        toggle.classList.toggle('text-slate-600', !isCurrent);
    });

    if (viewToShow === 'timeline') {
        timelineView.style.display = 'block';
        mapView.style.display = 'none';
    } else {
        timelineView.style.display = 'none';
        mapView.style.display = 'block';
        // Encontra os dados do dia para passar para a função do mapa
        const dayData = itineraryData.find(d => d.day === dayNumber);
        if (dayData) {
            // A inicialização do mapa é chamada aqui para garantir que o contêiner está visível
            initializeDayMap(dayNumber, dayData);
        }
    }
}

/**
 * Inicializa a página do roteiro, renderizando todos os cards e configurando os seletores de visualização.
 */
export function initializeRoteiroPage() {
    // *** CORREÇÃO ADICIONADA AQUI ***
    // Reseta as instâncias de mapa sempre que a página do roteiro é inicializada.
    // Isso garante que os mapas sejam recriados quando o usuário navega de volta para a página.
    for (const key in mapInstances) {
        if (mapInstances[key]) {
            mapInstances[key].remove(); // Remove o mapa antigo da memória
        }
    }
    mapInstances = {}; // Limpa o objeto de rastreamento

    itineraryData.forEach(dayData => {
        // Renderiza a linha do tempo (que fica pronta mas escondida até ser mostrada)
        renderDayTimeline(dayData);
    });

    // Configura os listeners para TODOS os botões de toggle
    const allToggles = document.querySelectorAll('.day-view-toggle');
    allToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const day = parseInt(toggle.dataset.day, 10);
            const view = toggle.dataset.view;
            switchDayView(day, view);
        });
    });
}
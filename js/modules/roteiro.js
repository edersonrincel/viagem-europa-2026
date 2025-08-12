// js/modules/roteiro.js

/**
 * @file Controla a renderização dinâmica do conteúdo da página do roteiro.
 */

import { itineraryData } from '../data/roteiro-data.js';

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
 * Gera e insere o conteúdo HTML para um dia específico do roteiro.
 * @param {object} dayData - Os dados para um dia do roteiro.
 */
function renderDayCard(dayData) {
    const containerId = `content-roteiro-dia-${dayData.day}`;
    const container = document.getElementById(containerId);

    if (!container) {
        console.warn(`Container para o dia ${dayData.day} não encontrado.`);
        return;
    }

    const eventsHtml = dayData.events.map(createEventElement).join('');

    container.innerHTML = `
        <div class="day-card-content">
            <div class="day-summary">
                <p class="text-sm font-semibold text-sky-700">Objetivo do Dia:</p>
                <p class="text-sm text-slate-600">${dayData.objective}</p>
            </div>
            <div class="timeline-container-new">
                ${eventsHtml}
            </div>
        </div>
    `;
}

/**
 * Inicializa a página do roteiro, renderizando todos os cards de dia.
 */
export function initializeRoteiroPage() {
    itineraryData.forEach(dayData => {
        renderDayCard(dayData);
    });
}

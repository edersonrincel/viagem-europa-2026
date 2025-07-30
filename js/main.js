// js/main.js

/**
 * @file Ponto de entrada principal da aplicação.
 * Orquestra a inicialização de todos os módulos e do Service Worker.
 */

import { initializeUI } from './modules/ui.js';
import { initializePwa } from './modules/pwa.js';
import { initializeFirebaseAndNotifications } from './modules/notifications.js';

// --- INICIALIZAÇÃO GERAL ---

// Registra o plugin de datalabels para os gráficos
// Assegura que o Chart.js e o plugin estão carregados antes de usar
if (window.Chart && window.ChartDataLabels) {
    window.Chart.register(window.ChartDataLabels);
}


// Inicializa os componentes da interface do usuário quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    initializeUI();
    initializePwa();
});

// --- INICIALIZAÇÃO DO SERVICE WORKER E NOTIFICAÇÕES ---

window.addEventListener('load', async () => {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.register('/service-worker.js');
            console.log('Service Worker registado com escopo:', registration.scope);
            
            // Espera o SW estar ativo
            await navigator.serviceWorker.ready;
            console.log('Service Worker está ativo e pronto.');

            // Inicializa o Firebase e a UI de notificações, passando o registro do SW
            initializeFirebaseAndNotifications(registration);

        } catch (err) {
            console.error('Falha na configuração do Service Worker:', err);
        }
    }
});
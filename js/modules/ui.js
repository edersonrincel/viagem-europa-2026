// js/modules/ui.js

/**
 * @file Controla todos os aspectos da interface do usuário (UI), como navegação,
 * carregamento de conteúdo dinâmico, componentes interativos e deeplinks.
 */

import { generateEpisodeList, checkAndShowNewEpisodeToast, dismissToast } from './podcast.js';
import * as charts from './charts.js';
import { initializeSaboresPage, navigateToRestaurant, showMapAndFindLocation } from './sabores.js';
import { initializeRoteiroPage } from './roteiro.js';
import { itineraryData } from '../data/roteiro-data.js';

// --- SELETORES DE ELEMENTOS DOM ---
const mainContent = document.getElementById('main-content');
const navItems = document.querySelectorAll('.nav-item');

// --- LÓGICA DE DEEPLINK ---

function handleDeepLink() {
    const hash = window.location.hash.substring(1);
    if (!hash) return false;

    const [pageName, paramsString] = hash.split('?');
    const params = new URLSearchParams(paramsString);
    const elementToExpandId = params.get('expand');

    if (pageName) {
        const onPageLoad = () => {
            if (elementToExpandId) {
                const trigger = document.querySelector(`[aria-controls='${elementToExpandId}']`);
                if (trigger) {
                    if (trigger.getAttribute('aria-expanded') === 'false') {
                        trigger.click();
                    }
                    setTimeout(() => {
                        const topNav = document.querySelector('.top-nav');
                        const navHeight = topNav ? topNav.offsetHeight : 0;
                        const elementPosition = trigger.getBoundingClientRect().top + window.scrollY;
                        const offsetPosition = elementPosition - navHeight - 16; 
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }, 400); 
                }
            }
        };
        switchPage(pageName, onPageLoad);
    }

    history.pushState("", document.title, window.location.pathname + window.location.search);
    return true;
}

// --- FUNÇÕES DE NAVEGAÇÃO E CARREGAMENTO ---

async function loadPage(pageName, onPageLoadCallback = null) {
    if (!mainContent) return;
    
    try {
        const response = await fetch(`pages/${pageName}.html`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        mainContent.innerHTML = await response.text();
        
        const newSection = mainContent.querySelector('.page-section');
        if (newSection) {
             setTimeout(() => newSection.classList.add('active'), 10);
        }

        initializePageComponents(pageName);
        
        if (onPageLoadCallback) onPageLoadCallback();

    } catch (error) {
        console.error(`Erro ao carregar a página ${pageName}:`, error);
        mainContent.innerHTML = `<div class="card text-center p-8"><p class="text-red-500 font-semibold">Erro ao carregar a página.</p><p class="text-slate-600 mt-2">Por favor, tente novamente.</p></div>`;
    }
}

export function switchPage(pageId, callback = null) {
    navItems.forEach(item => {
        item.classList.toggle('active', item.dataset.page === pageId);
    });
    
    loadPage(pageId, callback);
    
    if (!callback) window.scrollTo(0, 0);
}

// --- INICIALIZAÇÃO DE COMPONENTES DE PÁGINA ---

function initializePageComponents(pageName) {
    // A funcionalidade de collapsible agora é gerenciada por um único listener em initializeUI()
    if (pageName === 'geral') initializeGeralPage();
    if (pageName === 'roteiro') initializeRoteiroPage();
    if (pageName === 'sabores') initializeSaboresPage();

    if (pageName === 'custos') {
        const btnPorPessoa = document.getElementById('btnPorPessoa');
        const btnPeloGrupo = document.getElementById('btnPeloGrupo');

        if (btnPorPessoa && btnPeloGrupo) {
            const toggleHandler = (showPessoa) => {
                btnPorPessoa.classList.toggle('active', showPessoa);
                btnPeloGrupo.classList.toggle('active', !showPessoa);
                charts.updateCustoTotalChartVisibility(showPessoa);
                charts.updateCustoCategoriaChartVisibility(showPessoa);
            };
            btnPorPessoa.addEventListener('click', () => toggleHandler(true));
            btnPeloGrupo.addEventListener('click', () => toggleHandler(false));
        }
    }
}

function startCountdown() {
    const countDownDate = new Date("Jan 22, 2026 00:00:00").getTime();
    const timerDiv = document.getElementById("countdown-timer-new");
    if (!timerDiv) return;

    const interval = setInterval(() => {
        const distance = countDownDate - new Date().getTime();
        
        const elements = {
            days: document.getElementById("days"),
            hours: document.getElementById("hours"),
            minutes: document.getElementById("minutes"),
            seconds: document.getElementById("seconds")
        };

        if (distance < 0) {
            clearInterval(interval);
            timerDiv.innerHTML = "<p class='text-green-500 font-bold py-2 text-xl'>A VIAGEM COMEÇOU!</p>";
            const titleElement = document.getElementById("countdown-container-new")?.querySelector("h3");
            if (titleElement) titleElement.style.display = 'none';
            return;
        }

        if(elements.days) elements.days.innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
        if(elements.hours) elements.hours.innerText = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        if(elements.minutes) minutes.innerText = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        if(elements.seconds) seconds.innerText = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
    }, 1000);
}

function setupToastInteractions() {
    const closeToastBtn = document.getElementById('close-toast');
    const toastButton = document.getElementById('toast-button');
    
    if (closeToastBtn) closeToastBtn.addEventListener('click', dismissToast);

    if (toastButton) {
        toastButton.addEventListener('click', () => {
            switchPage('geral');
            setTimeout(() => {
                document.getElementById('podcast-card')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 200);
            dismissToast();
        });
    }
}

// --- LÓGICA DO "MODO VIAGEM" ---

function buildTravelModeDashboard(dayData) {
    const container = document.getElementById('travel-mode-view');
    if (!container) return;

    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    const nextEvent = dayData.events.find(event => event.time > currentTime) || dayData.events[dayData.events.length - 1];

    const eventsHtml = dayData.events.map(event => `
        <li class="flex items-start py-2 border-b border-slate-200 last:border-b-0">
            <span class="font-semibold text-sky-600 w-16">${event.time}</span>
            <div class="flex-1">
                <p class="font-medium text-slate-800">${event.title}</p>
                <p class="text-xs text-slate-500">${event.description}</p>
            </div>
        </li>`).join('');

    const cityKey = dayData.city.toLowerCase() === 'oxford' ? 'londres' : dayData.city.toLowerCase();

    container.innerHTML = `
        <div class="card p-4 md:p-6">
            <h2 class="text-2xl font-bold text-sky-700 text-center mb-1">Painel do Dia</h2>
            <p class="text-center text-slate-500 font-semibold mb-6">${dayData.date} - ${dayData.city} ${dayData.countryFlag}</p>
            <div class="card bg-sky-50 border-sky-200 p-4 mb-6">
                <h3 class="font-bold text-sky-800 mb-2"><i class="fas fa-stopwatch mr-2"></i>Próximo Evento:</h3>
                <div class="flex items-start">
                    <span class="font-bold text-orange-500 text-lg w-16">${nextEvent.time}</span>
                    <div class="flex-1">
                        <p class="font-semibold text-slate-800">${nextEvent.title}</p>
                        <p class="text-sm text-slate-600">${nextEvent.description}</p>
                    </div>
                </div>
            </div>
            <div class="card bg-slate-50 border-slate-200 p-4 mb-6">
                <h3 class="font-bold text-slate-800 mb-3"><i class="fas fa-route mr-2"></i>Roteiro de Hoje:</h3>
                <ul>${eventsHtml}</ul>
            </div>
            <div class="card bg-slate-50 border-slate-200 p-4">
                <h3 class="font-bold text-slate-800 mb-3"><i class="fas fa-bolt mr-2"></i>Links Rápidos:</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button id="find-nearby-gf-btn" data-city="${cityKey}" class="action-button bg-emerald-500 hover:bg-emerald-600 flex-1 justify-center py-3 text-sm">
                        <i class="fas fa-map-marker-alt mr-2"></i>Restaurantes Perto (GF)
                    </button>
                    <a href="#logistica?expand=content-mapas-transporte" class="action-button bg-violet-500 hover:bg-violet-600 flex-1 justify-center py-3 text-sm">
                        <i class="fas fa-subway mr-2"></i>Mapas de Transporte
                    </a>
                </div>
            </div>
        </div>`;
}

// NOVA FUNÇÃO para a interação do balão de informações dos viajantes
function setupTravelerInfoInteraction() {
    const facesContainer = document.querySelector('.traveler-faces');
    const infoBox = document.getElementById('traveler-info-box');
    const infoText = document.getElementById('traveler-info-text');
    let activeContainer = null;

    if (!facesContainer || !infoBox || !infoText) return;

    const travelerContainers = facesContainer.querySelectorAll('.traveler-face-container');

    travelerContainers.forEach(container => {
        container.addEventListener('click', (e) => {
            e.stopPropagation(); // Impede que o clique no documento feche a caixa imediatamente

            // Se a mesma pessoa for clicada, esconde a caixa
            if (activeContainer === container) {
                infoBox.classList.remove('show');
                activeContainer = null;
                return;
            }
            
            activeContainer = container;

            // Pega a informação e o posicionamento
            const info = container.dataset.info;
            const rect = container.getBoundingClientRect();
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Atualiza o texto e mostra a caixa
            infoText.textContent = info;
            infoBox.classList.remove('hidden'); // Garante que não está com display none
            infoBox.classList.add('show');

            // Posiciona a caixa abaixo da imagem clicada
            // O cálculo considera o centro da imagem para alinhar a seta
            const infoBoxWidth = infoBox.offsetWidth;
            infoBox.style.left = `${rect.left + scrollLeft + (rect.width / 2) - (infoBoxWidth / 2)}px`;
            infoBox.style.top = `${rect.bottom + scrollTop + 12}px`; // 12px de espaço
        });
    });

    // Fecha a caixa se clicar em qualquer outro lugar do documento
    document.addEventListener('click', () => {
        if (activeContainer) {
            infoBox.classList.remove('show');
            activeContainer = null;
        }
    });
}


function initializeGeralPage() {
    const preTravelView = document.getElementById('pre-travel-view');
    const travelModeView = document.getElementById('travel-mode-view');
    if (!preTravelView || !travelModeView) return;

    const tripStartDate = new Date(2026, 0, 23);
    const tripEndDate = new Date(2026, 1, 4);
    
    //const currentDate = new Date(2026, 1, 2); 
    const currentDate = new Date();

    currentDate.setHours(0, 0, 0, 0);
    tripStartDate.setHours(0, 0, 0, 0);
    tripEndDate.setHours(0, 0, 0, 0);
    
    const isDuringTrip = currentDate >= tripStartDate && currentDate < tripEndDate;

    preTravelView.classList.toggle('hidden', isDuringTrip);
    travelModeView.classList.toggle('hidden', !isDuringTrip);

    if (isDuringTrip) {
        const monthAbbr = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
        const dateStringPattern = `${String(currentDate.getDate()).padStart(2, '0')}/${monthAbbr[currentDate.getMonth()]}`;
        const todayItinerary = itineraryData.find(day => day.date.startsWith(dateStringPattern));

        if (todayItinerary) {
            buildTravelModeDashboard(todayItinerary);
        } else {
            travelModeView.innerHTML = `<div class="card p-6 text-center"><p>Não há roteiro planejado para hoje.</p></div>`;
        }
    } else {
        startCountdown();
        generateEpisodeList();
        checkAndShowNewEpisodeToast();
        setupTravelerInfoInteraction(); // <<< AJUSTE APLICADO AQUI
    }
}

// --- FUNÇÃO DE INICIALIZAÇÃO PRINCIPAL ---

export function initializeUI() {
    // Listener de navegação principal
    navItems.forEach(item => {
        item.addEventListener('click', () => switchPage(item.dataset.page));
    });
    
    // Configura os toasts de notificação
    setupToastInteractions();

    // Adiciona um único listener de eventos no container principal
    // para gerenciar todos os cliques em componentes dinâmicos.
    mainContent.addEventListener('click', (event) => {
        const collapsibleTrigger = event.target.closest('.collapsible-trigger');
        const findNearbyBtn = event.target.closest('#find-nearby-gf-btn');

        // Lógica para os Collapsibles
        if (collapsibleTrigger) {
            const contentId = collapsibleTrigger.getAttribute('aria-controls');
            const content = document.getElementById(contentId);
            const icon = collapsibleTrigger.querySelector('.collapsible-icon');
            if (!content || !icon) return;

            const isExpanded = collapsibleTrigger.getAttribute('aria-expanded') === 'true';
            collapsibleTrigger.setAttribute('aria-expanded', !isExpanded);
            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');

            if (!isExpanded && (contentId === 'content-financeiro-graficos' || contentId === 'content-financeiro-parcelas')) {
                setTimeout(() => {
                    if (contentId === 'content-financeiro-graficos') charts.createCostCharts();
                    if (contentId === 'content-financeiro-parcelas') charts.createPagamentoMensalChart();
                }, 50);
            }
        }

        // Lógica para o botão "Restaurantes Perto"
        if (findNearbyBtn) {
            const city = findNearbyBtn.dataset.city;
            switchPage('sabores', () => {
                showMapAndFindLocation(city);
            });
        }
    });

    // Listener global para botões dentro de popups do mapa (que estão fora do mainContent)
    document.addEventListener('click', (event) => {
        const detailButton = event.target.closest('.popup-button-details');
        if (detailButton && detailButton.dataset.restaurantSlug) {
            event.preventDefault();
            navigateToRestaurant(detailButton.dataset.restaurantSlug);
        }
    });
    
    // Carregamento inicial
    if (!handleDeepLink()) {
        switchPage('geral');
    }

    window.addEventListener('hashchange', handleDeepLink);
}

// js/modules/ui.js

/**
 * @file Controla todos os aspectos da interface do usuário (UI), como navegação,
 * carregamento de conteúdo dinâmico e componentes interativos.
 */

import { generateEpisodeList, checkAndShowNewEpisodeToast, dismissToast } from './podcast.js';
import * as charts from './charts.js';

// --- SELETORES DE ELEMENTOS DOM ---
const mainContent = document.getElementById('main-content');
const navItems = document.querySelectorAll('.nav-item');

// --- FUNÇÕES DE NAVEGAÇÃO E CARREGAMENTO ---

async function loadPage(pageName) {
    if (!mainContent) return;
    
    try {
        const response = await fetch(`pages/${pageName}.html`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const content = await response.text();
        mainContent.innerHTML = content;
        
        const newSection = mainContent.querySelector('.page-section');
        if (newSection) {
             setTimeout(() => {
                newSection.classList.add('active');
            }, 10);
        }

        initializePageComponents(pageName);

    } catch (error) {
        console.error(`Erro ao carregar a página ${pageName}:`, error);
        mainContent.innerHTML = `<div class="card text-center p-8"><p class="text-red-500 font-semibold">Erro ao carregar a página.</p><p class="text-slate-600 mt-2">Por favor, tente novamente.</p></div>`;
    }
}

export function switchPage(pageId) {
    navItems.forEach(item => {
        item.classList.toggle('active', item.dataset.page === pageId);
    });
    
    loadPage(pageId);
    
    window.scrollTo(0, 0);
}

// --- INICIALIZAÇÃO DE COMPONENTES DE PÁGINA ---

function initializePageComponents(pageName) {
    setupCollapsibleSections(); 

    if (pageName === 'geral') {
        startCountdown();
        generateEpisodeList();
        checkAndShowNewEpisodeToast();
    }
    
    if (pageName === 'custos') {
        const btnPorPessoa = document.getElementById('btnPorPessoa');
        const btnPeloGrupo = document.getElementById('btnPeloGrupo');

        if (btnPorPessoa && btnPeloGrupo) {
            btnPorPessoa.addEventListener('click', () => {
                btnPorPessoa.classList.add('active');
                btnPeloGrupo.classList.remove('active');
                charts.updateCustoTotalChartVisibility(true);
                charts.updateCustoCategoriaChartVisibility(true);
            });

            btnPeloGrupo.addEventListener('click', () => {
                btnPeloGrupo.classList.add('active');
                btnPorPessoa.classList.remove('active');
                charts.updateCustoTotalChartVisibility(false);
                charts.updateCustoCategoriaChartVisibility(false);
            });
        }
    }
}

function setupCollapsibleSections() {
    const triggers = document.querySelectorAll('.collapsible-trigger');
    triggers.forEach(trigger => {
        const contentId = trigger.getAttribute('aria-controls');
        const content = document.getElementById(contentId);
        const icon = trigger.querySelector('.collapsible-icon');

        trigger.addEventListener('click', () => {
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
            trigger.setAttribute('aria-expanded', !isExpanded);
            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');

            if (!isExpanded) {
                setTimeout(() => {
                    if (contentId === 'content-financeiro-graficos') {
                        charts.createCostCharts();
                    } else if (contentId === 'content-financeiro-parcelas') {
                        charts.createPagamentoMensalChart();
                    }
                }, 50);
            }
        });
    });
}

function startCountdown() {
    const countDownDate = new Date("Jan 22, 2026 00:00:00").getTime();
    const timerDiv = document.getElementById("countdown-timer-new");
    if (!timerDiv) return;

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        if(daysEl) daysEl.innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
        if(hoursEl) hoursEl.innerText = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        if(minutesEl) minutesEl.innerText = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        if(secondsEl) secondsEl.innerText = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

        if (distance < 0) {
            clearInterval(interval);
            timerDiv.innerHTML = "<p class='text-green-500 font-bold py-2 text-xl'>A VIAGEM COMEÇOU!</p>";
            const titleElement = document.getElementById("countdown-container-new")?.querySelector("h3");
            if (titleElement) titleElement.style.display = 'none';
        }
    }, 1000);
}

function setupToastInteractions() {
    const closeToastBtn = document.getElementById('close-toast');
    const toastButton = document.getElementById('toast-button');
    
    if (closeToastBtn) {
        closeToastBtn.addEventListener('click', dismissToast);
    }

    if (toastButton) {
        toastButton.addEventListener('click', () => {
            switchPage('geral');
            setTimeout(() => {
                const podcastCard = document.getElementById('podcast-card');
                if (podcastCard) podcastCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 200);
            dismissToast();
        });
    }
}


// --- FUNÇÃO DE INICIALIZAÇÃO EXPORTADA ---

export function initializeUI() {
    navItems.forEach(item => {
        item.addEventListener('click', () => switchPage(item.dataset.page));
    });
    
    setupToastInteractions();
    
    // Carrega a página inicial
    switchPage('geral');
}
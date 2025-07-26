import { podcastEpisodes } from './config.js';
import { initializeFinanceCharts, initializeInstallmentsChart } from './charts.js';

/**
 * Alterna a visualização entre as diferentes seções (páginas) do aplicativo.
 * @param {string} pageId - O ID da página a ser exibida.
 */
export function switchPage(pageId) {
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.toggle('active', section.id === pageId);
    });

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.page === pageId);
    });
    
    // Rola a tela para o topo
    window.scrollTo(0, 0); 

    // Se a página de custos for aberta, inicializa os gráficos
    if (pageId === 'page-custos') {
        // Atraso para garantir que a seção está visível antes de renderizar os gráficos
        setTimeout(() => {
            const isPorPessoaActive = document.getElementById('btnPorPessoa')?.classList.contains('active');
            
            if (!document.getElementById('content-financeiro-graficos').classList.contains('hidden')) {
                 initializeFinanceCharts(isPorPessoaActive);
            }
            if (!document.getElementById('content-financeiro-parcelas').classList.contains('hidden')) {
                 initializeInstallmentsChart();
            }
        }, 50);
    }
}

/**
 * Configura o comportamento de abrir/fechar das seções "collapsible".
 */
export function setupCollapsibleSections() {
    document.querySelectorAll('.collapsible-trigger').forEach(trigger => {
        const contentId = trigger.getAttribute('aria-controls');
        const content = document.getElementById(contentId);
        const icon = trigger.querySelector('.collapsible-icon');

        if (!content) return;

        trigger.addEventListener('click', () => {
            const isCurrentlyExpanded = trigger.getAttribute('aria-expanded') === 'true';
            trigger.setAttribute('aria-expanded', !isCurrentlyExpanded);
            content.classList.toggle('hidden');
            icon?.classList.toggle('rotate-180');
            
            // Se a seção expandida for a de gráficos, (re)inicializa-os
            if (!isCurrentlyExpanded) {
                setTimeout(() => {
                    if (contentId === 'content-financeiro-graficos') {
                        const isPorPessoaActive = document.getElementById('btnPorPessoa').classList.contains('active');
                        initializeFinanceCharts(isPorPessoaActive);
                    } else if (contentId === 'content-financeiro-parcelas') {
                        initializeInstallmentsChart();
                    }
                }, 50); // Atraso para garantir a renderização correta
            }
        });
    });
}

/**
 * Inicia a contagem regressiva para a data da viagem.
 */
export function startCountdown() {
    const countDownDate = new Date("Jan 22, 2026 00:00:00").getTime();
    const elements = {
        days: document.getElementById("days"),
        hours: document.getElementById("hours"),
        minutes: document.getElementById("minutes"),
        seconds: document.getElementById("seconds"),
        timerDiv: document.getElementById("countdown-timer-new"),
        container: document.getElementById("countdown-container-new")
    };

    if (!elements.days || !elements.hours || !elements.minutes || !elements.seconds) return;

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        if (distance < 0) {
            clearInterval(interval);
            elements.timerDiv.innerHTML = "<p class='text-green-500 font-bold py-2 text-xl'>A VIAGEM COMEÇOU!</p>";
            elements.container.querySelector("h3").style.display = 'none';
            return;
        }

        elements.days.innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
        elements.hours.innerText = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        elements.minutes.innerText = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        elements.seconds.innerText = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
    }, 1000);
}

// --- LÓGICA DO PODCAST ---

/**
 * Toca uma faixa de áudio do SoundCloud no player.
 * @param {string} trackId - O ID da faixa.
 * @param {string} token - O token secreto da faixa.
 * @param {HTMLElement} clickedElement - O elemento da lista que foi clicado.
 * @param {boolean} autoplay - Define se a faixa deve tocar automaticamente.
 */
function playTrack(trackId, token, clickedElement, autoplay = true) {
    const playerFrame = document.getElementById('podcast-player-iframe');
    if (!playerFrame) return;

    const soundcloudUrl = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}%3Fsecret_token%3Ds-${token}`;
    const params = `&color=%230ea5e9&auto_play=${autoplay}&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`;
    playerFrame.src = soundcloudUrl + params;

    document.querySelectorAll('.episode-item').forEach(item => item.classList.remove('active'));
    clickedElement?.classList.add('active');
}

/**
 * Gera a lista de episódios de podcast disponíveis.
 */
export function generateEpisodeList() {
    const listContainer = document.getElementById('episode-list');
    if (!listContainer) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const releasedEpisodes = podcastEpisodes.filter(ep => {
        const [day, month, year] = ep['Data lançamento'].split('/');
        return new Date(year, month - 1, day) <= today;
    });

    if (releasedEpisodes.length === 0) {
        listContainer.innerHTML = '<p class="text-center text-sm text-slate-500 py-4">Nenhum episódio lançado. Volte em breve!</p>';
        return;
    }

    listContainer.innerHTML = releasedEpisodes.map((ep, index) => `
        <div class="episode-item" data-track-id="${ep.trackId}" data-token="${ep.token}" data-episode-number="${ep['Episódio']}">
            ${index === 0 ? '<span class="new-badge">NOVO</span>' : ''}
            <div class="play-icon"><i class="fas fa-podcast"></i></div>
            <div class="episode-details">
                <div class="episode-title">Ep ${ep['Episódio']}: ${ep['Título']}</div>
                <div class="episode-meta">Voz: ${ep.Narrador}</div>
            </div>
            <div class="episode-duration">${ep['Duração']}</div>
        </div>
    `).join('');

    listContainer.querySelectorAll('.episode-item').forEach(item => {
        item.addEventListener('click', () => {
            playTrack(item.dataset.trackId, item.dataset.token, item, true);
        });
    });

    // Carrega o primeiro episódio da lista sem tocar automaticamente
    const firstEpisodeData = releasedEpisodes[0];
    if (firstEpisodeData) {
        const firstEpisodeElement = listContainer.querySelector('.episode-item');
        playTrack(firstEpisodeData.trackId, firstEpisodeData.token, firstEpisodeElement, false);
    }
}

/**
 * Verifica se há um novo episódio e exibe uma notificação (toast).
 */
export function checkAndShowNewEpisodeToast() {
    const toast = document.getElementById('new-episode-toast');
    if (!toast || podcastEpisodes.length === 0) return;

    const latestEpisode = podcastEpisodes[0]; // A lista já está ordenada
    const [day, month, year] = latestEpisode['Data lançamento'].split('/');
    const releaseDate = new Date(year, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const diffTime = today - releaseDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Mostra o toast se o último episódio foi lançado nos últimos 5 dias
    if (diffDays >= 0 && diffDays <= 5) {
        setTimeout(() => toast.classList.add('show'), 1500);
    }
}

/**
 * Configura os eventos da notificação (toast).
 */
export function setupToast() {
    const toast = document.getElementById('new-episode-toast');
    const closeToastBtn = document.getElementById('close-toast');
    const toastButton = document.getElementById('toast-button');

    if (!toast || !closeToastBtn || !toastButton) return;

    closeToastBtn.addEventListener('click', () => toast.classList.remove('show'));
    
    toastButton.addEventListener('click', () => {
        switchPage('page-geral');
        
        // Rola a tela até o card do podcast
        setTimeout(() => {
            const podcastCard = document.getElementById('podcast-card');
            podcastCard?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
        
        toast.classList.remove('show');
    });
}
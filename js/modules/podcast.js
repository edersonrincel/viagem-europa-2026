// js/modules/podcast.js

/**
 * @file Gerencia a lógica do podcast: exibe a lista, controla o player e verifica se há novos episódios.
 */

import { podcastEpisodes } from './data.js';

let toastDismissedThisSession = false;

// --- FUNÇÕES HELPER ---

const parseDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return new Date(year, month - 1, day);
};

// --- FUNÇÕES PRINCIPAIS ---

function playTrack(trackId, token, clickedElement, autoplay = true) {
    const playerFrame = document.getElementById('podcast-player-iframe');
    if (!playerFrame) return;

    const soundcloudUrl = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}%3Fsecret_token%3Ds-${token}`;
    const params = `&color=%230ea5e9&auto_play=${autoplay}&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`;
    playerFrame.src = soundcloudUrl + params;

    document.querySelectorAll('.episode-item').forEach(item => item.classList.remove('active'));
    if (clickedElement) clickedElement.classList.add('active');
}

export function generateEpisodeList() {
    const listContainer = document.getElementById('episode-list');
    if (!listContainer) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const sortedEpisodes = [...podcastEpisodes].sort((a, b) => {
        return parseDate(b['Data lançamento']) - parseDate(a['Data lançamento']);
    });

    const releasedEpisodes = sortedEpisodes.filter(ep => {
        return parseDate(ep['Data lançamento']) <= today;
    });

    if (releasedEpisodes.length === 0) {
        listContainer.innerHTML = '<p class="text-center text-sm text-slate-500 py-4">Nenhum episódio lançado ainda.</p>';
        return;
    }

    listContainer.innerHTML = releasedEpisodes.map((ep, index) => `
        <div class="episode-item" data-track-id="${ep.trackId}" data-token="${ep.token}" data-episode-number="${ep['Episódio']}">
            ${index === 0 ? '<span class="new-badge">NOVO</span>' : ''}
            <div class="play-icon"><i class="fas fa-podcast"></i></div>
            <div class="episode-details">
                <div class="episode-title">Ep ${ep['Episódio']}: ${ep['Título']}</div>
                <div class="episode-meta">By ${ep.Narrador}</div>
            </div>
            <div class="episode-duration">${ep['Duração']}</div>
        </div>
    `).join('');

    listContainer.querySelectorAll('.episode-item').forEach(item => {
        item.addEventListener('click', () => {
            playTrack(item.dataset.trackId, item.dataset.token, item, true);
        });
    });

    const firstEpisodeData = releasedEpisodes[0];
    if (firstEpisodeData) {
        const firstEpisodeElement = listContainer.querySelector(`.episode-item`);
        playTrack(firstEpisodeData.trackId, firstEpisodeData.token, firstEpisodeElement, false);
    }
}

export function checkAndShowNewEpisodeToast() {
    const toast = document.getElementById('new-episode-toast');
    if (!toast || toastDismissedThisSession) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const sortedEpisodes = [...podcastEpisodes].sort((a, b) => {
        return parseDate(b['Data lançamento']) - parseDate(a['Data lançamento']);
    });
    
    const releasedEpisodes = sortedEpisodes.filter(ep => parseDate(ep['Data lançamento']) <= today);

    if (releasedEpisodes.length === 0) return;

    const latestEpisode = releasedEpisodes[0];
    const releaseDate = parseDate(latestEpisode['Data lançamento']);

    const diffTime = today - releaseDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays >= 0 && diffDays <= 5) {
        setTimeout(() => {
            toast.style.top = '5rem';
            const toastTitle = toast.querySelector('.font-bold');
            if(toastTitle) toastTitle.textContent = `Novo episódio disponível!`;
        }, 1000);
    }
}

// Esta função é usada pelo módulo UI para controlar o estado do toast
export function dismissToast() {
    const toast = document.getElementById('new-episode-toast');
    if(toast) {
       toast.style.top = '-100%';
       toastDismissedThisSession = true;
    }
}
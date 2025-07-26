import { 
    updateCustoTotalChartVisibility, 
    updateCustoCategoriaChartVisibility 
} from './charts.js';

import { 
    switchPage, 
    setupCollapsibleSections, 
    startCountdown, 
    generateEpisodeList, 
    checkAndShowNewEpisodeToast,
    setupToast
} from './ui.js';

/**
 * O ponto de entrada principal do aplicativo.
 * Este evento é disparado quando o documento HTML inicial foi completamente carregado e analisado.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Registra o plugin de datalabels para o Chart.js
    if (window.ChartDataLabels) {
        Chart.register(window.ChartDataLabels);
    }

    // Seleciona os elementos da UI
    const navItems = document.querySelectorAll('.nav-item');
    const btnPorPessoa = document.getElementById('btnPorPessoa');
    const btnPeloGrupo = document.getElementById('btnPeloGrupo');

    // --- INICIALIZAÇÃO DAS FUNCIONALIDADES ---
    
    setupCollapsibleSections();
    startCountdown();
    generateEpisodeList();
    checkAndShowNewEpisodeToast();
    setupToast();
    
    // --- CONFIGURAÇÃO DOS EVENT LISTENERS ---

    // Navegação principal
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            switchPage(item.dataset.page);
        });
    });

    // Botões de alternância dos gráficos de custo
    if (btnPorPessoa && btnPeloGrupo) {
        btnPorPessoa.addEventListener('click', () => {
            btnPorPessoa.classList.add('active');
            btnPeloGrupo.classList.remove('active');
            updateCustoTotalChartVisibility(true);
            updateCustoCategoriaChartVisibility(true);
        });

        btnPeloGrupo.addEventListener('click', () => {
            btnPeloGrupo.classList.add('active');
            btnPorPessoa.classList.remove('active');
            updateCustoTotalChartVisibility(false);
            updateCustoCategoriaChartVisibility(false);
        });
    }

    // Inicia o aplicativo na página geral
    switchPage('page-geral');
});
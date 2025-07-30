// --- INICIALIZAÇÃO E CONFIGURAÇÃO DO FIREBASE ---
const firebaseConfig = {
    apiKey: "AIzaSyDRf55_pNkz3FqMMm93jFwqEwVfx7AtH_c",
    authDomain: "viagem-europa-2026.firebaseapp.com",
    projectId: "viagem-europa-2026",
    storageBucket: "viagem-europa-2026.firebasestorage.app",
    messagingSenderId: "731813444174",
    appId: "1:731813444174:web:389dc8d7dd58df5deca11f"
};

// Inicializa o Firebase
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// --- CONSTANTES E VARIÁVEIS GLOBAIS ---
let deferredPrompt;
const installBanner = document.getElementById('install-banner');
const installButton = document.getElementById('install-button');
const closeInstallBannerButton = document.getElementById('close-install-banner');
const notificationBanner = document.getElementById('notification-banner');
const enableNotificationsButton = document.getElementById('enable-notifications-button');
const closeNotificationBannerButton = document.getElementById('close-notification-banner');
const mainContent = document.getElementById('main-content');
const navItems = document.querySelectorAll('.nav-item');

// Dados para os gráficos e podcast
const numeroDeViajantes = 4;
const custoTotalPorPessoaArray = [4468.94, 2771.315, 240.43];
const custoCategoriaPorPessoaArray = [410.48, 3868.94, 189.52, 1633.9375, 918.978, 218.40, 240.43];
const pagamentoMensalValores = [1661.65, 679.71, 679.71, 679.71, 679.71, 559.71, 519.64, 519.64, 519.64, 519.64, 230.94, 230.94];
const pagamentoMensalLabels = ['Jun/25', 'Jul/25', 'Ago/25', 'Set/25', 'Out/25', 'Nov/25', 'Dez/25', 'Jan/26', 'Fev/26', 'Mar/26', 'Abr/26', 'Mai/26'];
const podcastEpisodes = [
    { "Episódio": 1, "Data lançamento": "07/06/2025", "Título": "A Origem da aventura", "Narrador": "Bruna", "Duração": "3:03", "trackId": "2109241797", "token": "I0JucbUhfCc" },
    { "Episódio": 2, "Data lançamento": "21/06/2025", "Título": "O Mapa da viagem", "Narrador": "Diego", "Duração": "3:50", "trackId": "2109241770", "token": "lPnekm8yTs2" },
    { "Episódio": 3, "Data lançamento": "05/07/2025", "Título": "Passaportes em dia", "Narrador": "Giovana", "Duração": "4:09", "trackId": "2109241779", "token": "Oxie7YtJM03" },
    { "Episódio": 4, "Data lançamento": "19/07/2025", "Título": "As siglas da viagem", "Narrador": "Eder", "Duração": "4:01", "trackId": "2109241794", "token": "UDBYOZgZ5tE" },
    { "Episódio": 5, "Data lançamento": "29/07/2025", "Título": "Nossa rede de segurança", "Narrador": "Bruna", "Duração": "3:52", "trackId": "2109241764", "token": "x0MUpRDm1jO" },
    { "Episódio": 6, "Data lançamento": "16/08/2025", "Título": "Libras, Euros & Cartões", "Narrador": "Diego", "Duração": "4:22", "trackId": "2109459120", "token": "WntGp7nwrSt" },
    { "Episódio": 7, "Data lançamento": "30/08/2025", "Título": "Conectados na Europa", "Narrador": "Giovana", "Duração": "4:39", "trackId": "2109241767", "token": "nCEgXnp8PTk" },
    { "Episódio": 8, "Data lançamento": "13/09/2025", "Título": "Fazendo as malas", "Narrador": "Eder", "Duração": "4:11", "trackId": "2109241806", "token": "xKGzVr2hwuH" },
    { "Episódio": 9, "Data lançamento": "27/09/2025", "Título": "Finanças do grupo", "Narrador": "Bruna", "Duração": "3:51", "trackId": "2109241830", "token": "YfD4McsMIob" },
    { "Episódio": 10, "Data lançamento": "11/10/2025", "Título": "London calling!", "Narrador": "Diego", "Duração": "5:00", "trackId": "2109461376", "token": "Q3MpmbtsDb6" },
    { "Episódio": 11, "Data lançamento": "18/10/2025", "Título": "Dominando o metrô de Londres", "Narrador": "Giovana", "Duração": "4:53", "trackId": "2109241782", "token": "5h9pdyxVgDk" },
    { "Episódio": 12, "Data lançamento": "25/10/2025", "Título": "Sabores de Londres", "Narrador": "Eder", "Duração": "4:10", "trackId": "2109241773", "token": "WuGoerCStbb" },
    { "Episódio": 13, "Data lançamento": "01/11/2025", "Título": "Ícones de Londres", "Narrador": "Bruna", "Duração": "3:53", "trackId": "2109241791", "token": "DlqbbPyxUjj" },
    { "Episódio": 14, "Data lançamento": "08/11/2025", "Título": "Mercados e parques de Londres", "Narrador": "Diego", "Duração": "3:41", "trackId": "2109241788", "token": "fX8LIOXe4CV" },
    { "Episódio": 15, "Data lançamento": "15/11/2025", "Título": "Um dia em Paris", "Narrador": "Giovana", "Duração": "4:29", "trackId": "2109241815", "token": "JiBmHu4QkMY" },
    { "Episódio": 16, "Data lançamento": "22/11/2025", "Título": "Chegada em Lisboa", "Narrador": "Eder", "Duração": "3:13", "trackId": "2109241812", "token": "rYejWZbphgs" },
    { "Episódio": 17, "Data lançamento": "29/11/2025", "Título": "Os elétricos de Lisboa", "Narrador": "Bruna", "Duração": "3:36", "trackId": "2109241818", "token": "8B8MFnnJHUf" },
    { "Episódio": 18, "Data lançamento": "06/12/2025", "Título": "Roteiro por Lisboa", "Narrador": "Diego", "Duração": "3:27", "trackId": "2109241803", "token": "tyqPhj1KBo6" },
    { "Episódio": 19, "Data lançamento": "13/12/2025", "Título": "A magia de Sintra", "Narrador": "Giovana", "Duração": "3:51", "trackId": "2109241800", "token": "Ywh2hP5svic" },
    { "Episódio": 20, "Data lançamento": "20/12/2025", "Título": "Sabores de Portugal", "Narrador": "Eder", "Duração": "3:41", "trackId": "2109241821", "token": "L0zo2ZW2MQc" },
    { "Episódio": 21, "Data lançamento": "03/01/2026", "Título": "A viagem de volta", "Narrador": "Bruna", "Duração": "3:14", "trackId": "2109241809", "token": "GTgyZ48GE1z" },
    { "Episódio": 22, "Data lançamento": "10/01/2026", "Título": "As regras das tarifas", "Narrador": "Diego", "Duração": "3:46", "trackId": "2109241827", "token": "PNzCktX4Sbe" },
    { "Episódio": 23, "Data lançamento": "17/01/2026", "Título": "Checklist final", "Narrador": "Giovana", "Duração": "4:07", "trackId": "2109462783", "token": "LJSbjMeqq7h" }
].sort((a, b) => b['Episódio'] - a['Episódio']);

// Instâncias dos gráficos
let appCustoTotalChartInstance = null;
let appCustoCategoriaChartInstance = null;
let appPagamentoMensalChartInstance = null;

// --- LÓGICA DE NAVEGAÇÃO E CARREGAMENTO DE PÁGINA ---

/**
 * Carrega o conteúdo de uma página HTML para a área principal.
 * @param {string} pageName - O nome da página a ser carregada (ex: 'geral').
 */
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
        console.error(`Error loading page ${pageName}:`, error);
        mainContent.innerHTML = `<div class="card text-center p-8"><p class="text-red-500 font-semibold">Erro ao carregar a página.</p><p class="text-slate-600 mt-2">Por favor, tente novamente.</p></div>`;
    }
}

/**
 * Inicializa os componentes JavaScript necessários para uma página específica.
 * @param {string} pageName - O nome da página que foi carregada.
 */
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
    }
}

/**
 * Lida com a troca de páginas, atualizando a UI.
 * @param {string} pageId - O ID da página para mostrar.
 */
function switchPage(pageId) {
    navItems.forEach(item => {
        item.classList.toggle('active', item.dataset.page === pageId);
    });
    
    loadPage(pageId);
    
    window.scrollTo(0, 0);
}

// --- LÓGICA DO PWA (INSTALAÇÃO) ---

const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installBanner && !isIOS()) {
        installBanner.style.transform = 'translateY(0)';
    }
});

if (installButton) {
    installButton.addEventListener('click', async () => {
        if (installBanner) {
            installBanner.style.transform = 'translateY(-150%)';
        }
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`User response to the install prompt: ${outcome}`);
            deferredPrompt = null;
        }
    });
}

if (isIOS() && !isInStandaloneMode()) {
    if (installBanner) {
        const bannerText = installBanner.querySelector('p.font-semibold');
        const bannerSubText = installBanner.querySelector('p.text-sm');
        if (bannerText) bannerText.textContent = 'Instale o App no seu iPhone';
        if (bannerSubText) bannerSubText.innerHTML = `Use o Safari, toque em <svg class="inline-block h-4 w-5 -mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"/></svg> e depois em "Adicionar à Tela de Início".`;
        if (installButton) installButton.style.display = 'none';
        installBanner.style.transform = 'translateY(0)';
    }
}

if (closeInstallBannerButton) {
    closeInstallBannerButton.addEventListener('click', () => {
        if (installBanner) {
            installBanner.style.transform = 'translateY(-150%)';
        }
    });
}

// --- LÓGICA DE NOTIFICAÇÕES (FCM) ---

async function sendTokenToServer(token) {
    const serverUrl = 'https://servidor-viagem-europa-2026.onrender.com/register-token';
    try {
        await fetch(serverUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: token }),
        });
        console.log('Token sent to server.');
    } catch (error) {
        console.error('Error sending token to server:', error);
    }
}

function getFCMToken(registration) {
    const VAPID_KEY = 'BHrRmsDe1Y9ZiUXp9C7Nb2TwpGFl-HBVEO4ngpWwuK3rg2xZWvbvFzGixkL-JV_6nhuu8Ywn81Wqg8xr9hqjh98';
    messaging.getToken({ vapidKey: VAPID_KEY, serviceWorkerRegistration: registration })
        .then((currentToken) => {
            if (currentToken) {
                console.log('FCM Token:', currentToken);
                sendTokenToServer(currentToken);
            } else {
                console.log('Could not get token.');
            }
        }).catch((err) => {
            console.error('Error getting token.', err);
        });
}

function requestNotificationPermission(registration) {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            getFCMToken(registration);
        }
    });
}

function initializeNotificationUI(registration) {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (isStandalone && Notification.permission === 'default') {
        if (notificationBanner) notificationBanner.style.display = 'flex';
    } else if (Notification.permission === 'granted') {
        getFCMToken(registration);
    }

    if (enableNotificationsButton) {
        enableNotificationsButton.addEventListener('click', () => {
            requestNotificationPermission(registration);
            if (notificationBanner) notificationBanner.style.display = 'none';
        });
    }

    if (closeNotificationBannerButton) {
        closeNotificationBannerButton.addEventListener('click', () => {
            if (notificationBanner) notificationBanner.style.display = 'none';
        });
    }
}

// --- LÓGICA DOS GRÁFICOS ---

function wrapLabel(str, maxWidth) {
    if (!str) return '';
    if (str.length <= maxWidth) return str;
    const words = str.split(' ');
    let currentLine = '';
    const lines = [];
    for (const word of words) {
        if ((currentLine + word).length > maxWidth && currentLine.length > 0) {
            lines.push(currentLine.trim());
            currentLine = '';
        }
        currentLine += word + ' ';
    }
    lines.push(currentLine.trim());
    return lines;
}

const custoTotalData = {
    labels: ['Voos', 'Hospedagem', 'Seguro'],
    datasets: [{
        label: 'Custo por Pessoa (R$)',
        data: custoTotalPorPessoaArray,
        backgroundColor: ['#0EA5E9', '#F97316', '#FACC15'],
        borderColor: '#f0f4f8',
        borderWidth: 2,
        hidden: false
    }, {
        label: 'Custo Total do Grupo (R$)',
        data: custoTotalPorPessoaArray.map(cost => cost * numeroDeViajantes),
        backgroundColor: ['#0EA5E9', '#F97316', '#FACC15'],
        borderColor: '#f0f4f8',
        borderWidth: 2,
        hidden: true
    }]
};

const custoCategoriaData = {
    labels: [
        wrapLabel('Voo GOL', 10), wrapLabel('Voo TAP', 10), wrapLabel('Voo LATAM', 10),
        wrapLabel('Hotel LON', 10), wrapLabel('Hotel LIS', 10), wrapLabel('Hotel GRU', 10),
        wrapLabel('Seguro', 10)
    ],
    datasets: [{
        label: 'Custo por Pessoa (R$)',
        data: custoCategoriaPorPessoaArray,
        backgroundColor: ['#0EA5E9', '#38BDF8', '#7DD3FC', '#F97316', '#FB923C', '#FDBA74', '#FACC15'],
        borderColor: '#f0f4f8',
        borderWidth: 1,
        hidden: false
    }, {
        label: 'Custo Total do Grupo (R$)',
        data: custoCategoriaPorPessoaArray.map(cost => cost * numeroDeViajantes),
        backgroundColor: ['#0EA5E9', '#38BDF8', '#7DD3FC', '#F97316', '#FB923C', '#FDBA74', '#FACC15'],
        borderColor: '#f0f4f8',
        borderWidth: 1,
        hidden: true
    }]
};

const pagamentoMensalData = {
    labels: pagamentoMensalLabels,
    datasets: [{
        label: 'Total Mensal por Pessoa (R$)',
        data: pagamentoMensalValores,
        fill: true,
        backgroundColor: 'rgba(14, 165, 233, 0.2)',
        borderColor: '#0EA5E9',
        tension: 0.2,
        pointBackgroundColor: '#F97316',
        pointBorderColor: '#FFFFFF',
        pointRadius: 4,
        pointHoverRadius: 6
    }]
};

const commonChartOptions = (type) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: {
            backgroundColor: '#1e293b',
            titleColor: '#f0f4f8',
            bodyColor: '#cbd5e1',
            callbacks: {
                title: (tooltipItems) => {
                    const item = tooltipItems[0];
                    if (!item || !item.chart.data.labels) return '';
                    let label = item.chart.data.labels[item.dataIndex];
                    return Array.isArray(label) ? label.join(' ') : label;
                },
                label: (context) => {
                    let label = context.dataset.label || '';
                    label = label.replace(/\s\(R\$\)$/, '') + ': ';
                    const value = context.parsed.y || context.parsed;
                    return typeof value === 'number' ? label + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value) : label;
                }
            }
        },
        datalabels: { display: false }
    }
});

function createChart(canvasId, type, data, options) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error(`Canvas with id ${canvasId} not found.`);
        return null;
    }
    return new Chart(canvas, { type, data, options });
}

function updateCustoTotalChartVisibility(showPorPessoa) {
    const custoTotalTituloEl = document.getElementById('custoTotalTitulo');
    if (appCustoTotalChartInstance && custoTotalTituloEl) {
        appCustoTotalChartInstance.data.datasets[0].hidden = !showPorPessoa;
        appCustoTotalChartInstance.data.datasets[1].hidden = showPorPessoa;
        appCustoTotalChartInstance.update();
        custoTotalTituloEl.textContent = showPorPessoa ? 'Composição do Custo Total por Pessoa' : 'Composição do Custo Total do Grupo';
    }
}

function updateCustoCategoriaChartVisibility(showPorPessoa) {
    const custoCategoriaTituloEl = document.getElementById('custoCategoriaTitulo');
    if (appCustoCategoriaChartInstance && custoCategoriaTituloEl) {
        appCustoCategoriaChartInstance.data.datasets[0].hidden = !showPorPessoa;
        appCustoCategoriaChartInstance.data.datasets[1].hidden = showPorPessoa;
        appCustoCategoriaChartInstance.update();
        custoCategoriaTituloEl.textContent = showPorPessoa ? 'Custos Específicos por Pessoa' : 'Custos Específicos Totais do Grupo';
    }
}

// --- FUNÇÕES DE INICIALIZAÇÃO DE COMPONENTES ---

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
                        if (appCustoTotalChartInstance) appCustoTotalChartInstance.destroy();
                        if (appCustoCategoriaChartInstance) appCustoCategoriaChartInstance.destroy();
                        
                        // CORREÇÃO GRÁFICO DE PIZZA (DOUGHNUT)
                        const custoTotalChartOptions = { ...commonChartOptions('doughnut'), plugins: { ...commonChartOptions('doughnut').plugins, legend: { display: true, position: 'bottom', labels: { font: { size: 10 }, color: '#475569' } }, datalabels: { display: true, formatter: (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value), color: (context) => { const bgColor = context.dataset.backgroundColor[context.dataIndex]; if (!bgColor) return '#000'; const r = parseInt(bgColor.slice(1, 3), 16); const g = parseInt(bgColor.slice(3, 5), 16); const b = parseInt(bgColor.slice(5, 7), 16); return (0.2126 * r + 0.7152 * g + 0.0722 * b) > 120 ? '#1e293b' : '#FFFFFF'; }, font: { size: 10, weight: 'bold' } } } };
                        
                        // CORREÇÃO GRÁFICO DE BARRAS
                        const custoCategoriaChartOptions = { ...commonChartOptions('bar'), indexAxis: 'y', scales: { x: { beginAtZero: true, ticks: { display: false } }, y: { ticks: { font: { size: 9 }, color: '#475569', autoSkip: false } } }, plugins: { ...commonChartOptions('bar').plugins, datalabels: { display: (c) => c.dataset.data[c.dataIndex] > 0, anchor: 'end', align: (c) => (c.dataset.data[c.dataIndex] < Math.max(...c.dataset.data) * 0.25 ? 'right' : 'left'), offset: 4, color: (c) => { const value = c.dataset.data[c.dataIndex]; const maxValue = Math.max(...c.dataset.data); if (value < maxValue * 0.25) return '#334155'; const barColor = Array.isArray(c.dataset.backgroundColor) ? c.dataset.backgroundColor[c.dataIndex] : c.dataset.backgroundColor; const getLuminance = (hex) => { if (!hex || hex.length < 7) return 128; hex = hex.replace('#', ''); const r = parseInt(hex.substring(0, 2), 16), g = parseInt(hex.substring(2, 4), 16), b = parseInt(hex.substring(4, 6), 16); return 0.2126 * r + 0.7152 * g + 0.0722 * b; }; return getLuminance(barColor) > 120 ? '#1e293b' : '#FFFFFF'; }, font: { size: 9, weight: '500' }, formatter: (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value) } } };
                        
                        appCustoTotalChartInstance = createChart('appCustoTotalChart', 'doughnut', custoTotalData, custoTotalChartOptions);
                        appCustoCategoriaChartInstance = createChart('appCustoCategoriaChart', 'bar', custoCategoriaData, custoCategoriaChartOptions);
                        
                        const isPorPessoaActive = document.getElementById('btnPorPessoa')?.classList.contains('active');
                        updateCustoTotalChartVisibility(isPorPessoaActive);
                        updateCustoCategoriaChartVisibility(isPorPessoaActive);

                    } else if (contentId === 'content-financeiro-parcelas') {
                        if (appPagamentoMensalChartInstance) appPagamentoMensalChartInstance.destroy();
                        const pagamentoMensalChartOptions = { ...commonChartOptions('line'), scales: { y: { beginAtZero: true, ticks: { display: false } }, x: { ticks: { font: { size: 10 }, color: '#475569' } } }, plugins: { ...commonChartOptions('line').plugins, datalabels: { display: true, anchor: 'end', align: (c) => c.dataIndex % 2 === 0 ? 'top' : 'bottom', offset: (c) => c.dataIndex % 2 === 0 ? 6 : 10, color: '#4A5568', font: { size: 8, weight: '600' }, formatter: (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v) } } };
                        appPagamentoMensalChartInstance = createChart('appPagamentoMensalChart', 'line', pagamentoMensalData, pagamentoMensalChartOptions);
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

        document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById("hours").innerText = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        document.getElementById("minutes").innerText = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        document.getElementById("seconds").innerText = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

        if (distance < 0) {
            clearInterval(interval);
            timerDiv.innerHTML = "<p class='text-green-500 font-bold py-2 text-xl'>A VIAGEM COMEÇOU!</p>";
            const titleElement = document.getElementById("countdown-container-new")?.querySelector("h3");
            if (titleElement) titleElement.style.display = 'none';
        }
    }, 1000);
}

function playTrack(trackId, token, clickedElement, autoplay = true) {
    const playerFrame = document.getElementById('podcast-player-iframe');
    if (!playerFrame) return;

    const soundcloudUrl = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}%3Fsecret_token%3Ds-${token}`;
    const params = `&color=%230ea5e9&auto_play=${autoplay}&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`;
    playerFrame.src = soundcloudUrl + params;

    document.querySelectorAll('.episode-item').forEach(item => item.classList.remove('active'));
    if (clickedElement) clickedElement.classList.add('active');
}

function generateEpisodeList() {
    const listContainer = document.getElementById('episode-list');
    if (!listContainer) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const releasedEpisodes = podcastEpisodes.filter(ep => {
        const [day, month, year] = ep['Data lançamento'].split('/');
        return new Date(year, month - 1, day) <= today;
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

function checkAndShowNewEpisodeToast() {
    const toast = document.getElementById('new-episode-toast');
    if (!toast) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const latestEpisode = podcastEpisodes[0];
    const [day, month, year] = latestEpisode['Data lançamento'].split('/');
    const releaseDate = new Date(year, month - 1, day);

    const diffDays = Math.ceil((today - releaseDate) / (1000 * 60 * 60 * 24));

    if (diffDays >= 0 && diffDays <= 5) {
        setTimeout(() => toast.style.top = '5rem', 1000);
    }
}

// --- INICIALIZAÇÃO GERAL E DO SERVICE WORKER ---

document.addEventListener('DOMContentLoaded', () => {
    Chart.register(ChartDataLabels);

    navItems.forEach(item => {
        item.addEventListener('click', () => switchPage(item.dataset.page));
    });

    const toast = document.getElementById('new-episode-toast');
    const closeToastBtn = document.getElementById('close-toast');
    const toastButton = document.getElementById('toast-button');
    if (toast && closeToastBtn && toastButton) {
        closeToastBtn.addEventListener('click', () => toast.style.top = '-100%');
        toastButton.addEventListener('click', () => {
            switchPage('geral');
            setTimeout(() => {
                const podcastCard = document.getElementById('podcast-card');
                if (podcastCard) podcastCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 200);
            toast.style.top = '-100%';
        });
    }

    switchPage('geral');
});

window.addEventListener('load', async () => {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.register('/service-worker.js');
            console.log('Service Worker registered with scope:', registration.scope);
            await navigator.serviceWorker.ready;
            console.log('Service Worker is active and ready.');
            initializeNotificationUI(registration);
            messaging.onMessage((payload) => {
                console.log('Foreground message received.', payload);
            });
        } catch (err) {
            console.error('Service Worker setup failed:', err);
        }
    }
});

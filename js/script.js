// --- INICIALIZAÇÃO E CONFIGURAÇÃO DO FIREBASE ---
const firebaseConfig = {
    apiKey: "AIzaSyDRf55_pNkz3FqMMm93jFwqEwVfx7AtH_c",
    authDomain: "viagem-europa-2026.firebaseapp.com",
    projectId: "viagem-europa-2026",
    storageBucket: "viagem-europa-2026.firebasestorage.app",
    messagingSenderId: "731813444174",
    appId: "1:731813444174:web:389dc8d7dd58df5deca11f"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();


// --- GLOBAL CONSTANTS AND VARIABLES ---
let deferredPrompt;
const installBanner = document.getElementById('install-banner');
const installButton = document.getElementById('install-button');
const closeInstallBannerButton = document.getElementById('close-install-banner');
const notificationBanner = document.getElementById('notification-banner');
const enableNotificationsButton = document.getElementById('enable-notifications-button');
const closeNotificationBannerButton = document.getElementById('close-notification-banner');
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
    { "Episódio": 5, "Data lançamento": "02/08/2025", "Título": "Nossa rede de segurança", "Narrador": "Bruna", "Duração": "3:52", "trackId": "2109241764", "token": "x0MUpRDm1jO" },
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

let appCustoTotalChartInstance = null;
let appCustoCategoriaChartInstance = null;
let appPagamentoMensalChartInstance = null;

const navItems = document.querySelectorAll('.nav-item');
const pageSections = document.querySelectorAll('.page-section');
const appTitle = document.getElementById('appTitle');
const custoTotalTituloEl = document.getElementById('custoTotalTitulo');
const custoCategoriaTituloEl = document.getElementById('custoCategoriaTitulo');
const btnPorPessoa = document.getElementById('btnPorPessoa');
const btnPeloGrupo = document.getElementById('btnPeloGrupo');

// --- PWA INSTALLATION LOGIC ---

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installBanner) {
        installBanner.classList.add('show');
    }
});

if (installButton) {
    installButton.addEventListener('click', async () => {
        if (installBanner) {
            installBanner.classList.remove('show');
        }
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`User response to the install prompt: ${outcome}`);
            deferredPrompt = null;
        }
    });
}

if (closeInstallBannerButton) {
    closeInstallBannerButton.addEventListener('click', () => {
        if (installBanner) {
            installBanner.classList.remove('show');
        }
    });
}

// --- NOTIFICATION LOGIC ---

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
    console.log('Requesting notification permission...');
    if (Notification.permission === 'granted') {
        console.log('Permission already granted.');
        getFCMToken(registration);
    } else if (Notification.permission === 'default') {
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                console.log('Permission was granted.');
                getFCMToken(registration);
            } else {
                console.log('Permission was denied.');
            }
        });
    }
}

function isRunningStandalone() {
    return window.matchMedia('(display-mode: standalone)').matches;
}

function initializeNotificationUI(registration) {
    console.log('Initializing Notification UI...');
    if (isRunningStandalone() && Notification.permission === 'default') {
        console.log('Showing notification banner.');
        if (notificationBanner) notificationBanner.style.display = 'flex';
    } else {
        console.log('Not showing notification banner. Standalone:', isRunningStandalone(), 'Permission:', Notification.permission);
        if (Notification.permission === 'granted') {
            getFCMToken(registration);
        }
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


// --- CHART CONFIGURATION & OTHER FUNCTIONS ---

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

const tooltipTitleCallback = (tooltipItems) => {
    const item = tooltipItems[0];
    if (!item || !item.chart || !item.chart.data || !item.chart.data.labels || typeof item.dataIndex === 'undefined') {
        return '';
    }
    let label = item.chart.data.labels[item.dataIndex];
    return Array.isArray(label) ? label.join(' ') : label;
};

const commonChartOptions = (type) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
            position: 'top',
            labels: { font: { size: 10 }, color: '#475569' }
        },
        tooltip: {
            backgroundColor: '#1e293b',
            titleColor: '#f0f4f8',
            bodyColor: '#cbd5e1',
            callbacks: {
                title: tooltipTitleCallback,
                label: function (context) {
                    let label = context.dataset.label || '';
                    if (label) {
                        label = label.replace(/\s\(R\$\)$/, '') + ': ';
                    }
                    let value = 0;
                    const chartType = context.chart.config.type;
                    const indexAxis = context.chart.config.options.indexAxis;
                    if (chartType === 'doughnut' || chartType === 'pie') {
                        value = context.parsed;
                    } else if (chartType === 'bar') {
                        value = (indexAxis === 'y') ? context.parsed.x : context.parsed.y;
                    } else if (chartType === 'line') {
                        value = context.parsed.y;
                    }
                    return typeof value === 'number' ? label + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value) : label;
                }
            }
        },
        datalabels: {
            display: false
        }
    }
});

const custoTotalChartOptions = {
    ...commonChartOptions('doughnut'),
    plugins: {
        ...commonChartOptions('doughnut').plugins,
        legend: {
            display: true,
            position: 'bottom',
            labels: { font: { size: 10 }, color: '#475569' }
        },
        datalabels: {
            display: true,
            formatter: (value, context) => {
                if (context.chart.isDatasetVisible(context.datasetIndex)) {
                    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
                }
                return '';
            },
            color: (context) => {
                const bgColor = context.dataset.backgroundColor[context.dataIndex];
                if (!bgColor) return '#000';
                const r = parseInt(bgColor.slice(1, 3), 16);
                const g = parseInt(bgColor.slice(3, 5), 16);
                const b = parseInt(bgColor.slice(5, 7), 16);
                return (0.2126 * r + 0.7152 * g + 0.0722 * b) > 120 ? '#1e293b' : '#FFFFFF';
            },
            font: { size: 10, weight: 'bold' }
        }
    }
};

const custoCategoriaChartOptions = {
    ...commonChartOptions('bar'),
    indexAxis: 'y',
    plugins: {
        ...commonChartOptions('bar').plugins,
        legend: { display: false },
        datalabels: {
            display: (c) => c.dataset.data[c.dataIndex] > 0 && c.chart.isDatasetVisible(c.datasetIndex),
            anchor: 'end',
            align: (c) => (c.dataset.data[c.dataIndex] < Math.max(...c.dataset.data) * 0.25 ? 'right' : 'left'),
            offset: 4,
            color: (c) => {
                const value = c.dataset.data[c.dataIndex];
                const maxValue = Math.max(...c.dataset.data);
                if (value < maxValue * 0.25) return '#334155';
                const barColor = Array.isArray(c.dataset.backgroundColor) ? c.dataset.backgroundColor[c.dataIndex] : c.dataset.backgroundColor;
                const getLuminance = (hex) => {
                    if (!hex || hex.length < 7) return 128;
                    hex = hex.replace('#', '');
                    const r = parseInt(hex.substring(0, 2), 16), g = parseInt(hex.substring(2, 4), 16), b = parseInt(hex.substring(4, 6), 16);
                    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
                };
                return getLuminance(barColor) > 120 ? '#1e293b' : '#FFFFFF';
            },
            font: { size: 9, weight: '500' },
            formatter: (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value)
        }
    },
    scales: {
        x: { beginAtZero: true, ticks: { display: false, font: { size: 10 }, color: '#475569' } },
        y: { ticks: { font: { size: 9 }, color: '#475569', autoSkip: false } }
    }
};

const pagamentoMensalChartOptions = {
    ...commonChartOptions('line'),
    plugins: {
        ...commonChartOptions('line').plugins,
        datalabels: {
            display: true,
            anchor: 'end',
            align: (c) => c.dataIndex % 2 === 0 ? 'top' : 'bottom',
            offset: (c) => c.dataIndex % 2 === 0 ? 6 : 10,
            color: '#4A5568',
            font: { size: 8, weight: '600' },
            formatter: (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v)
        }
    },
    scales: {
        y: { beginAtZero: true, ticks: { display: false, font: { size: 10 }, color: '#475569' }, grid: { display: false } },
        x: { ticks: { font: { size: 10 }, color: '#475569' } }
    }
};

function switchPage(pageId, title) {
    pageSections.forEach(section => {
        section.classList.remove('active');
        if (section.id === pageId) {
            section.classList.add('active');
            document.querySelector('main').scrollTop = 0;
            window.scrollTo(0, 0);
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === pageId) {
            item.classList.add('active');
        }
    });

    if (appTitle) appTitle.textContent = title;

    if (pageId === 'page-custos') {
        const graficosContent = document.getElementById('content-financeiro-graficos');
        const parcelasContent = document.getElementById('content-financeiro-parcelas');
        const isPorPessoaActive = btnPorPessoa && btnPorPessoa.classList.contains('active');

        if (graficosContent && !graficosContent.classList.contains('hidden')) {
            setTimeout(() => {
                if (!appCustoTotalChartInstance) {
                    appCustoTotalChartInstance = new Chart(document.getElementById('appCustoTotalChart'), { type: 'doughnut', data: custoTotalData, options: custoTotalChartOptions });
                }
                updateCustoTotalChartVisibility(isPorPessoaActive);

                if (!appCustoCategoriaChartInstance) {
                    appCustoCategoriaChartInstance = new Chart(document.getElementById('appCustoCategoriaChart'), { type: 'bar', data: custoCategoriaData, options: custoCategoriaChartOptions });
                }
                updateCustoCategoriaChartVisibility(isPorPessoaActive);
            }, 50);
        }
        if (parcelasContent && !parcelasContent.classList.contains('hidden')) {
            setTimeout(() => {
                if (!appPagamentoMensalChartInstance) {
                    appPagamentoMensalChartInstance = new Chart(document.getElementById('appPagamentoMensalChart'), { type: 'line', data: pagamentoMensalData, options: pagamentoMensalChartOptions });
                }
            }, 50);
        }
    }
}

function setupCollapsibleSections() {
    const triggers = document.querySelectorAll('.collapsible-trigger');
    triggers.forEach(trigger => {
        const contentId = trigger.getAttribute('aria-controls');
        const content = document.getElementById(contentId);
        const icon = trigger.querySelector('.collapsible-icon');

        if (!content) {
            console.warn(`Collapsible content with ID '${contentId}' not found.`);
            return;
        }

        trigger.addEventListener('click', () => {
            const isCurrentlyExpanded = trigger.getAttribute('aria-expanded') === 'true';
            trigger.setAttribute('aria-expanded', !isCurrentlyExpanded);
            content.classList.toggle('hidden');
            if (icon) icon.classList.toggle('rotate-180');

            if (!isCurrentlyExpanded) {
                setTimeout(() => {
                    if (contentId === 'content-financeiro-graficos') {
                        const isPorPessoaActive = btnPorPessoa && btnPorPessoa.classList.contains('active');
                        if (appCustoTotalChartInstance) appCustoTotalChartInstance.destroy();
                        appCustoTotalChartInstance = new Chart(document.getElementById('appCustoTotalChart'), { type: 'doughnut', data: custoTotalData, options: custoTotalChartOptions });
                        if (btnPorPessoa) updateCustoTotalChartVisibility(isPorPessoaActive);

                        if (appCustoCategoriaChartInstance) appCustoCategoriaChartInstance.destroy();
                        appCustoCategoriaChartInstance = new Chart(document.getElementById('appCustoCategoriaChart'), { type: 'bar', data: custoCategoriaData, options: custoCategoriaChartOptions });
                        if (btnPorPessoa) updateCustoCategoriaChartVisibility(isPorPessoaActive);

                    } else if (contentId === 'content-financeiro-parcelas') {
                        if (appPagamentoMensalChartInstance) appPagamentoMensalChartInstance.destroy();
                        appPagamentoMensalChartInstance = new Chart(document.getElementById('appPagamentoMensalChart'), { type: 'line', data: pagamentoMensalData, options: pagamentoMensalChartOptions });
                    }
                }, 50);
            }
        });
    });
}

function startCountdown() {
    const countDownDate = new Date("Jan 22, 2026 00:00:00").getTime();
    const countdownContainerNew = document.getElementById("countdown-container-new");

    if (!countdownContainerNew) return;

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
        console.error("One or more countdown timer elements not found.");
        return;
    }

    const timerDiv = document.getElementById("countdown-timer-new");

    const interval = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        daysEl.innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
        hoursEl.innerText = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        minutesEl.innerText = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        secondsEl.innerText = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

        if (distance < 0) {
            clearInterval(interval);
            if (timerDiv) {
                timerDiv.innerHTML = "<p class='text-green-500 font-bold py-2 text-xl'>A VIAGEM COMEÇOU!</p>";
            }
            const titleElement = countdownContainerNew.querySelector("h3");
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

    document.querySelectorAll('.episode-item').forEach(item => {
        item.classList.remove('active');
    });
    if (clickedElement) {
        clickedElement.classList.add('active');
    }
}

function generateEpisodeList() {
    const listContainer = document.getElementById('episode-list');
    if (!listContainer) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const releasedEpisodes = podcastEpisodes.filter(ep => {
        const [day, month, year] = ep['Data lançamento'].split('/');
        const releaseDate = new Date(year, month - 1, day);
        return releaseDate <= today;
    });

    listContainer.innerHTML = '';

    if (releasedEpisodes.length === 0) {
        listContainer.innerHTML = '<p class="text-center text-sm text-slate-500 py-4">Nenhum episódio lançado ainda. Volte em breve!</p>';
        return;
    }

    releasedEpisodes.forEach((ep, index) => {
        const item = document.createElement('div');
        item.className = 'episode-item';
        item.setAttribute('data-track-id', ep.trackId);
        item.setAttribute('data-token', ep.token);
        item.setAttribute('data-episode-number', ep['Episódio']);

        let badgeHTML = (index === 0) ? '<span class="new-badge">NOVO</span>' : '';

        item.innerHTML = `
            ${badgeHTML}
            <div class="play-icon"><i class="fas fa-podcast"></i></div>
            <div class="episode-details">
                <div class="episode-title">Ep ${ep['Episódio']}: ${ep['Título']}</div>
                <div class="episode-meta">By ${ep.Narrador}</div>
            </div>
            <div class="episode-duration">${ep['Duração']}</div>
        `;

        item.addEventListener('click', () => {
            playTrack(ep.trackId, ep.token, item, true);
        });

        listContainer.appendChild(item);
    });

    const firstEpisodeData = releasedEpisodes[0];
    if (firstEpisodeData) {
        const firstEpisodeElement = listContainer.querySelector(`.episode-item[data-episode-number='${firstEpisodeData['Episódio']}']`);
        playTrack(firstEpisodeData.trackId, firstEpisodeData.token, firstEpisodeElement, false);
    }
}

function checkAndShowNewEpisodeToast() {
    const toast = document.getElementById('new-episode-toast');
    if (!toast) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const releasedEpisodes = podcastEpisodes.filter(ep => {
        const [day, month, year] = ep['Data lançamento'].split('/');
        const releaseDate = new Date(year, month - 1, day);
        return releaseDate <= today;
    });

    if (releasedEpisodes.length === 0) return;

    const latestEpisode = releasedEpisodes[0];
    const [day, month, year] = latestEpisode['Data lançamento'].split('/');
    const releaseDate = new Date(year, month - 1, day);

    const diffTime = today - releaseDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays >= 0 && diffDays <= 5) {
        setTimeout(() => {
            toast.classList.add('show');
        }, 1000);
    }
}

function updateCustoTotalChartVisibility(showPorPessoa) {
    if (appCustoTotalChartInstance && custoTotalTituloEl) {
        appCustoTotalChartInstance.data.datasets[0].hidden = !showPorPessoa;
        appCustoTotalChartInstance.data.datasets[1].hidden = showPorPessoa;
        appCustoTotalChartInstance.update();
        custoTotalTituloEl.textContent = showPorPessoa ? 'Composição do Custo Total por Pessoa' : 'Composição do Custo Total do Grupo';
    }
}

function updateCustoCategoriaChartVisibility(showPorPessoa) {
    if (appCustoCategoriaChartInstance && custoCategoriaTituloEl) {
        appCustoCategoriaChartInstance.data.datasets[0].hidden = !showPorPessoa;
        appCustoCategoriaChartInstance.data.datasets[1].hidden = showPorPessoa;
        appCustoCategoriaChartInstance.update();
        custoCategoriaTituloEl.textContent = showPorPessoa ? 'Custos Específicos por Pessoa' : 'Custos Específicos Totais do Grupo';
    }
}

// --- INITIALIZATION ---

// Função que inicializa a UI principal (tudo que não depende do Service Worker)
function initializeUI() {
    console.log('UI Initializing...');
    Chart.register(ChartDataLabels);
    setupCollapsibleSections();
    startCountdown();
    generateEpisodeList();
    checkAndShowNewEpisodeToast();

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            switchPage(item.dataset.page, item.dataset.title);
        });
    });

    const toast = document.getElementById('new-episode-toast');
    const closeToastBtn = document.getElementById('close-toast');
    const toastButton = document.getElementById('toast-button');

    if (toast && closeToastBtn && toastButton) {
        closeToastBtn.addEventListener('click', () => toast.classList.remove('show'));
        toastButton.addEventListener('click', () => {
            const geralNavItem = document.querySelector('.nav-item[data-page="page-geral"]');
            if (geralNavItem) {
                switchPage(geralNavItem.dataset.page, geralNavItem.dataset.title);
            }
            setTimeout(() => {
                const podcastCard = document.getElementById('podcast-card');
                const navMenu = document.querySelector('.top-nav');
                if (podcastCard && navMenu) {
                    const navHeight = navMenu.offsetHeight;
                    const cardTopPosition = podcastCard.offsetTop;
                    const targetScrollPosition = cardTopPosition - navHeight - 16;
                    window.scrollTo({ top: targetScrollPosition, behavior: 'smooth' });
                }
            }, 100);
            toast.classList.remove('show');
        });
    }

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

    const initialPageId = 'page-geral';
    const initialTitleElement = document.querySelector(`.nav-item[data-page="${initialPageId}"]`);
    if (initialTitleElement && initialTitleElement.dataset.title) {
        switchPage(initialPageId, initialTitleElement.dataset.title);
    } else {
        switchPage(initialPageId, 'Visão Geral');
        console.warn(`Initial navigation item for page "${initialPageId}" not found. Using default title.`);
    }
    console.log('UI Initialization complete.');
}

// Inicia a UI assim que o HTML for carregado
document.addEventListener('DOMContentLoaded', initializeUI);

// **NOVA ABORDAGEM DE INICIALIZAÇÃO DO SERVICE WORKER**
// Esta função é chamada quando a página termina de carregar
async function main() {
    console.log('Window loaded. Starting Service Worker setup...');
    if (!('serviceWorker' in navigator)) {
        console.log('Service Worker not supported.');
        return;
    }

    try {
        const registration = await navigator.serviceWorker.register('/service-worker.js');
        console.log('Service Worker registration promise resolved. Scope:', registration.scope);

        console.log('Waiting for Service Worker to be ready...');
        const readyRegistration = await navigator.serviceWorker.ready;
        console.log('Service Worker is active and ready.');
        
        // Agora é seguro inicializar a UI de notificação e o listener de mensagens
        initializeNotificationUI(readyRegistration);
        messaging.onMessage((payload) => {
            console.log('Foreground message received.', payload);
        });

    } catch (err) {
        console.error('A failure occurred during Service Worker setup:', err);
    }
}

window.addEventListener('load', main);

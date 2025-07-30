// js/modules/notifications.js

/**
 * @file Gerencia a inicialização do Firebase e a lógica de notificações push (FCM).
 */

// --- CONFIGURAÇÃO E INICIALIZAÇÃO DO FIREBASE ---

const firebaseConfig = {
    apiKey: "AIzaSyDRf55_pNkz3FqMMm93jFwqEwVfx7AtH_c",
    authDomain: "viagem-europa-2026.firebaseapp.com",
    projectId: "viagem-europa-2026",
    storageBucket: "viagem-europa-2026.appspot.com", // Corrigido para .appspot.com
    messagingSenderId: "731813444174",
    appId: "1:731813444174:web:389dc8d7dd58df5deca11f"
};

// Inicializa o Firebase
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// --- SELETORES DE ELEMENTOS DOM ---

const notificationBanner = document.getElementById('notification-banner');
const enableNotificationsButton = document.getElementById('enable-notifications-button');
const closeNotificationBannerButton = document.getElementById('close-notification-banner');

// --- LÓGICA DE NOTIFICAÇÕES ---

async function sendTokenToServer(token) {
    const serverUrl = 'https://servidor-viagem-europa-2026.onrender.com/register-token';
    try {
        await fetch(serverUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: token }),
        });
        console.log('Token enviado para o servidor.');
    } catch (error) {
        console.error('Erro ao enviar token para o servidor:', error);
    }
}

function getFCMToken(registration) {
    const VAPID_KEY = 'BHrRmsDe1Y9ZiUXp9C7Nb2TwpGFl-HBVEO4ngpWwuK3rg2xZWvbvFzGixkL-JV_6nhuu8Ywn81Wqg8xr9hqjh98';
    messaging.getToken({ vapidKey: VAPID_KEY, serviceWorkerRegistration: registration })
        .then((currentToken) => {
            if (currentToken) {
                console.log('Token FCM:', currentToken);
                sendTokenToServer(currentToken);
            } else {
                console.log('Não foi possível obter o token.');
            }
        }).catch((err) => {
            console.error('Erro ao obter o token.', err);
        });
}

function requestNotificationPermission(registration) {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Permissão de notificação concedida.');
            getFCMToken(registration);
        } else {
            console.log('Permissão de notificação negada.');
        }
    });
}

function setupNotificationUI(registration) {
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


export function initializeFirebaseAndNotifications(registration) {
    console.log('Inicializando Firebase e UI de notificações...');
    setupNotificationUI(registration);
    
    // Listener para mensagens recebidas enquanto o app está em primeiro plano
    messaging.onMessage((payload) => {
        console.log('Mensagem recebida em primeiro plano.', payload);
        // Opcional: mostrar uma notificação customizada dentro do app
    });
}
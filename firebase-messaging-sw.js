// firebase-messaging-sw.js
// IMPORTANTE: Este arquivo DEVE ficar na raiz do seu projeto.

// Importa os scripts do Firebase. A versão 9+ usa módulos.
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');

// --- COLE AQUI O SEU OBJETO firebaseConfig ---
// Este objeto é fornecido pelo console do Firebase ao criar seu app da web.
const firebaseConfig = {
    apiKey: "AIzaSyDRf55_pNkz3FqMMm93jFwqEwVfx7AtH_c",
    authDomain: "viagem-europa-2026.firebaseapp.com",
    projectId: "viagem-europa-2026",
    storageBucket: "viagem-europa-2026.firebasestorage.app",
    messagingSenderId: "731813444174",
    appId: "1:731813444174:web:389dc8d7dd58df5deca11f"
  };

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Obtém a instância do Messaging
const messaging = firebase.messaging();

// Adiciona um "handler" para quando uma notificação é recebida
// com o app em segundo plano (não visível para o usuário).
messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );

  // Extrai o título e as opções da notificação do payload.
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || '/images/icons/icon-192x192.png',
    badge: '/images/icons/icon-grupo-40x40.png',
    data: {
        url: payload.fcmOptions.link || '/' // Abre a URL enviada no push
    }
  };

  // Mostra a notificação para o usuário.
  self.registration.showNotification(notificationTitle, notificationOptions);
});
console.log('Service Worker: Script evaluation started.'); // Ponto de verificação 1

try {
    // Importa os scripts do Firebase PRIMEIRO
    importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
    importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');
    console.log('Service Worker: Firebase scripts imported successfully.'); // Ponto de verificação 2

    // --- Configuração do Firebase ---
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
    const messaging = firebase.messaging();
    console.log('Service Worker: Firebase initialized.'); // Ponto de verificação 3

    // --- Lógica de Notificações em Segundo Plano ---
    messaging.onBackgroundMessage((payload) => {
      console.log('[Service Worker] Received background message ', payload);
      const notificationTitle = payload.notification.title;
      const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon || '/images/icons/icon-192x192.png',
        badge: '/images/icons/icon-grupo-40x40.png',
        data: { url: payload.fcmOptions.link || '/' }
      };
      self.registration.showNotification(notificationTitle, notificationOptions);
    });

    // --- Lógica de Caching e Ciclo de Vida ---
    const CACHE_NAME = 'viagem-app-cache-v3'; // Versão do cache incrementada
    const URLS_TO_CACHE = [
      '/', 'index.html', 'css/style.css', 'js/script.js',
      '/images/icons/icon-192x192.png', '/images/icons/icon-512x512.png',
      'https://cdn.tailwindcss.com', 'https://cdn.jsdelivr.net/npm/chart.js'
    ];

    self.addEventListener('install', (event) => {
      console.log('Service Worker: Firing "install" event.'); // Ponto de verificação 4
      event.waitUntil(
        caches.open(CACHE_NAME)
          .then(cache => cache.addAll(URLS_TO_CACHE))
          .then(() => self.skipWaiting())
      );
    });

    self.addEventListener('activate', (event) => {
      console.log('Service Worker: Firing "activate" event.'); // Ponto de verificação 5
      event.waitUntil(
        caches.keys().then(cacheNames => {
          return Promise.all(
            cacheNames.map(cache => {
              if (cache !== CACHE_NAME) {
                return caches.delete(cache);
              }
            })
          );
        }).then(() => self.clients.claim())
      );
    });

    self.addEventListener('fetch', (event) => {
      if (event.request.method !== 'GET') return;
      event.respondWith(
        caches.match(event.request).then(response => {
          return response || fetch(event.request);
        })
      );
    });

    self.addEventListener('notificationclick', (event) => {
      console.log('On notification click: ', event.notification);
      event.notification.close();
      const urlToOpen = event.notification.data.url || '/';
      event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
          for (const client of clientList) {
            if (client.url === urlToOpen && 'focus' in client) {
              return client.focus();
            }
          }
          if (clients.openWindow) {
            return clients.openWindow(urlToOpen);
          }
        })
      );
    });

} catch (error) {
    console.error('Service Worker: A top-level error occurred during script evaluation:', error); // Ponto de verificação de erro
}

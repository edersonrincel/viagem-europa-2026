// service-worker.js usando Firebase v8 SDK para máxima estabilidade

console.log('Service Worker: Script evaluation started.'); // Ponto de verificação 1

try {
    // Importa os scripts do Firebase v8 (versão mais antiga e estável para SW)
    importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
    importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
    console.log('Service Worker: Firebase v8 scripts imported successfully.'); // Ponto de verificação 2

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
    console.log('Service Worker: Firebase v8 initialized.'); // Ponto de verificação 3

    // --- Lógica de Notificações em Segundo Plano ---
  messaging.onBackgroundMessage((payload) => {
    console.log('[Service Worker] Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon || '/images/icons/icon-192x192.png',
        badge: '/images/icons/icon-40x40.png',
        // Adicionamos o campo 'deepLink' aos dados da notificação.
        // Ele virá do payload da notificação que você envia.
        data: {
            url: payload.data.link || '/',
            deepLink: payload.data.deepLink || '' // Ex: 'custos?expand=content-conversor-moeda'
        }
    };
    return self.registration.showNotification(notificationTitle, notificationOptions);
});

    // --- Lógica de Caching e Ciclo de Vida ---
    const CACHE_NAME = 'viagem-app-cache-v1.1'; // Versão do cache incrementada
    const URLS_TO_CACHE = [
      '/',
      'index.html',
      'css/style.css',
      'js/script.js',
      '/images/icons/icon-192x192.png'
    ];

    self.addEventListener('install', (event) => {
      console.log('Service Worker: Firing "install" event.'); // Ponto de verificação 4
      event.waitUntil(
        caches.open(CACHE_NAME)
          .then(cache => {
              console.log('Service Worker: Caching app shell.');
              return cache.addAll(URLS_TO_CACHE);
          })
          .then(() => {
              console.log('Service Worker: skipWaiting() called.');
              return self.skipWaiting();
          })
          .catch(err => {
              console.error('Service Worker: Caching failed during install:', err);
          })
      );
    });

    self.addEventListener('activate', (event) => {
      console.log('Service Worker: Firing "activate" event.'); // Ponto de verificação 5
      event.waitUntil(
        caches.keys().then(cacheNames => {
          return Promise.all(
            cacheNames.map(cache => {
              if (cache !== CACHE_NAME) {
                console.log('Service Worker: Deleting old cache:', cache);
                return caches.delete(cache);
              }
            })
          );
        }).then(() => {
            console.log('Service Worker: clients.claim() called.');
            return self.clients.claim();
        })
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

    const deepLink = event.notification.data.deepLink;
    const baseUrl = self.location.origin;

    // Constrói a URL final. Se houver um deeplink, ele será adicionado como um "hash".
    // Ex: https://seu-site.com/#custos?expand=content-conversor-moeda
    const urlToOpen = deepLink ? `${baseUrl}/#${deepLink}` : (event.notification.data.url || '/');

    // Esta lógica verifica se o app já está aberto.
    // Se estiver, foca na aba existente e navega para a URL do deeplink.
    // Se não, abre uma nova aba.
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
            for (const client of clientList) {
                if (client.url === '/' && 'focus' in client) {
                    client.navigate(urlToOpen); // Navega na janela existente
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
    console.error('Service Worker: A top-level error occurred:', error); // Ponto de verificação de erro
}

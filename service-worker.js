// service-worker.js usando Firebase v8 SDK para máxima estabilidade

console.log('Service Worker: Script evaluation started.');

try {
    // Importa os scripts do Firebase v8
    importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
    importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
    console.log('Service Worker: Firebase v8 scripts imported successfully.');

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
    console.log('Service Worker: Firebase v8 initialized.');

    // --- Lógica de Notificações em Segundo Plano ---
    messaging.onBackgroundMessage((payload) => {
        console.log('[Service Worker] Received background message ', payload);

        const notificationTitle = payload.notification.title;
        const notificationOptions = {
            body: payload.notification.body,
            icon: payload.notification.icon || '/images/icons/icon-192x192.png',
            badge: '/images/icons/icon-40x40.png',
            data: {
                url: payload.data.link || '/',
                deepLink: payload.data.deepLink || ''
            }
        };
        return self.registration.showNotification(notificationTitle, notificationOptions);
    });

    // --- Lógica de Caching e Ciclo de Vida ---
    const CACHE_NAME = 'viagem-app-cache-v1.72'; 
    const URLS_TO_CACHE = [
        '/',
        '/index.html',
        '/manifest.json',
        '/css/style.css',
        // Scripts principais e módulos
        '/js/main.js',
        '/js/modules/ui.js',
        '/js/modules/pwa.js',
        '/js/modules/notifications.js',
        '/js/modules/podcast.js',
        '/js/modules/charts.js',
        '/js/modules/data.js',
        '/js/modules/sabores.js', 
        // Páginas HTML
        '/pages/geral.html',
        '/pages/logistica.html',
        '/pages/custos.html',
        '/pages/sabores.html',
        '/pages/dicas.html',
        // Ícones principais
        '/images/icons/icon-192x192.png',
        '/images/icons/icon-512x512.png',
        '/images/icons/icon-40x40.png'
    ];

    self.addEventListener('install', (event) => {
        console.log('Service Worker: Firing "install" event.');
        event.waitUntil(
            caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Service Worker: Caching app shell.');
                // O addAll é atômico. Se um arquivo falhar, a instalação inteira falha.
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
        console.log('Service Worker: Firing "activate" event.');
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
        
        // Estratégia: Cache, caindo para a rede
        event.respondWith(
            caches.match(event.request).then(response => {
                return response || fetch(event.request).then(fetchResponse => {
                    // Opcional: Adicionar novas requisições ao cache dinamicamente
                    return caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, fetchResponse.clone());
                        return fetchResponse;
                    });
                });
            })
        );
    });

    self.addEventListener('notificationclick', (event) => {
        console.log('On notification click: ', event.notification);
        event.notification.close();

        const deepLink = event.notification.data.deepLink;
        const baseUrl = self.location.origin;
        const urlToOpen = deepLink ? `${baseUrl}/#${deepLink}` : (event.notification.data.url || '/');

        event.waitUntil(
            clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
                for (const client of clientList) {
                    if (client.url === '/' && 'focus' in client) {
                        client.navigate(urlToOpen);
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
    console.error('Service Worker: A top-level error occurred:', error);
}

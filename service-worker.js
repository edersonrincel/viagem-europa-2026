// Define a unique name for the cache
const CACHE_NAME = 'viagem-app-cache-v1';

// List all the files that make up the "app shell"
const URLS_TO_CACHE = [
  '/',
  'index.html',
  'css/style.css',
  'js/script.js',
  '/images/icons/icon-40x40.png',    
  '/images/icons/icon-192x192.png', 
  '/images/icons/icon-512x512.png',
  '/images/icons/icon-grupo-40x40.png',    
  '/images/icons/icon-grupo-192x192.png', 
  '/images/icons/icon-grupo-512x512.png',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.2.0/dist/chartjs-plugin-datalabels.min.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'
];

// Event listener for the 'install' event
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching app shell');
        return cache.addAll(URLS_TO_CACHE);
      })
      .then(() => {
        console.log('Service Worker: Installation complete, forcing activation.');
        // **NOVA LINHA:** Força o novo Service Worker a se tornar ativo.
        return self.skipWaiting(); 
      })
  );
});

// Event listener for the 'activate' event
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
        console.log('Service Worker: Activation complete, claiming clients.');
        // **NOVA LINHA:** Garante que o SW controle a página imediatamente.
        return self.clients.claim();
    })
  );
});


// Event listener for the 'fetch' event
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        
        if (event.request.url.startsWith('http')) {
            return fetch(event.request);
        }

        return fetch(event.request).then(
            (networkResponse) => {
                if(!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                    return networkResponse;
                }

                var responseToCache = networkResponse.clone();

                caches.open(CACHE_NAME)
                    .then((cache) => {
                        cache.put(event.request, responseToCache);
                    });

                return networkResponse;
            }
        );
      })
  );
});

// Event listener for 'notificationclick' event
self.addEventListener('notificationclick', (event) => {
  console.log('On notification click: ', event.notification);
  event.notification.close();

  const urlToOpen = event.notification.data.url || '/';

  event.waitUntil(
    clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    }).then((clientList) => {
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
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
// This is where we download and cache the app shell
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching app shell');
        return cache.addAll(URLS_TO_CACHE);
      })
      .then(() => {
        console.log('Service Worker: Installation complete');
        return self.skipWaiting();
      })
  );
});

// Event listener for the 'activate' event
// This is where we clean up old caches
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
        console.log('Service Worker: Activation complete');
        return self.clients.claim();
    })
  );
});


// Event listener for the 'fetch' event
// This is where we intercept network requests and serve from cache if available
self.addEventListener('fetch', (event) => {
  // We only handle GET requests for caching
  if (event.request.method !== 'GET') {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // If the request is in the cache, return it
        if (response) {
          return response;
        }
        
        // For external resources (CDNs), fetch from network without caching
        if (event.request.url.startsWith('http')) {
            return fetch(event.request);
        }

        // For local assets, fetch and cache
        return fetch(event.request).then(
            (networkResponse) => {
                // Check if we received a valid response
                if(!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                    return networkResponse;
                }

                // IMPORTANT: Clone the response. A response is a stream
                // and because we want the browser to consume the response
                // as well as the cache consuming the response, we need
                // to clone it so we have two streams.
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

// O listener de 'push' foi movido para o firebase-messaging-sw.js
// para uma melhor organização e para seguir as práticas recomendadas do Firebase.
// O código antigo foi removido para evitar conflitos.

// Event listener for 'notificationclick' event
self.addEventListener('notificationclick', (event) => {
  console.log('On notification click: ', event.notification);
  event.notification.close();

  // O dado 'url' será definido no payload da notificação push
  const urlToOpen = event.notification.data.url || '/';

  event.waitUntil(
    clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    }).then((clientList) => {
      // Se uma janela do app já estiver aberta, foca nela
      for (const client of clientList) {
        // Verifica se o cliente pode ser focado e se a URL é a mesma
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      // Se não houver uma janela aberta ou a URL for diferente, abre uma nova
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});

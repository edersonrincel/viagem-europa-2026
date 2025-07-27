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

// Event listener for 'push' events
self.addEventListener('push', (event) => {
  let data = {};
  if (event.data) {
    try {
        data = event.data.json();
    } catch (e) {
        data = {
            title: 'Nova Notificação',
            body: event.data.text(),
            icon: '/images/icons/icon-192x192.png'
        };
    }
  }

  const title = data.title || 'Título Padrão';
  const options = {
    body: data.body || 'Corpo da notificação padrão.',
    icon: data.icon || '/images/icons/icon-192x192.png',
    badge: data.badge || '/images/icons/icon-grupo-40x40.png',
    tag: data.tag || 'default-tag',
    vibrate: [100, 50, 100],
    data: {
      url: data.url || '/'
    }
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// Event listener for 'notificationclick' event
self.addEventListener('notificationclick', (event) => {
  event.notification.close(); // Close the notification

  // Open the app or a specific URL
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // If a window for the app is already open, focus it
      for (const client of clientList) {
        const url = new URL(client.url);
        if (url.origin === self.location.origin) {
          return client.focus();
        }
      }
      // Otherwise, open a new window
      if (clients.openWindow) {
        return clients.openWindow(event.notification.data.url || '/');
      }
    })
  );
});

const CACHE_NAME = 'haf-monitor-v1';
const ASSETS = [
  './',
  './index.html',
  'https://www.gstatic.com/firebasejs/9.1.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/9.1.0/firebase-database-compat.js'
];

// Instalar Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Estrategia: Primero Red, si falla, Caché
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});

const cacheName = 'GdiF-CITES-cache-v1';
const staticAssets = [
  './',
  './index.html',
  // Aggiungi qui tutti gli altri file statici del tuo sito
  // ad esempio: './style.css', './immagine.jpg', './script.js'
];

self.addEventListener('install', async () => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
  const req = event.request;
  event.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
  const cachedResponse = await caches.match(req);
  return cachedResponse || fetch(req);
}


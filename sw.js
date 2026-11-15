const CACHE_NAME = 'tareq-al-amal-v1';
const assets = [
  './index.html',
  './manifest.json',
  './icon-gold-192.png',
  './icon-gold-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});

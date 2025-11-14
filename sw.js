const CACHE_NAME = 'mana-tracker-cache-v2';
const ASSETS_TO_CACHE = [
  './',
  './manifest.webmanifest',
  './index.html',
  './beleren-bold_P1.01.ttf',
  './MTG_W.svg',
  './MTG_U.svg',
  './MTG_B.svg',
  './MTG_R.svg',
  './MTG_G.svg',
  './MTG_C.svg',
  './icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});

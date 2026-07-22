const CACHE = 'hospoda-ai-v4';

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['/', '/index.html', '/manifest.json'])));
  self.skipWaiting();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || e.request.url.includes('overpass')) return;
  e.respondWith(fetch(e.request).then(r => { caches.open(CACHE).then(c => c.put(e.request, r.clone())); return r; }).catch(() => caches.match(e.request)));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

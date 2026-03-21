const cacheName = 'carvfit-v1';
const assets = ['./', './index.html', './manifest.json'];

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(assets);
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});

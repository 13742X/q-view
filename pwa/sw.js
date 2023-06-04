self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('your-cache-name').then(cache => {
      return cache.addAll([
        '/',
        './index.html',
        './css/styles.min.css',
        // Add any other static files you want to cache
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

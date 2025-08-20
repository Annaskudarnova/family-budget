self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("budget-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "expenses.html",
        "year.html",
        "css/style.css",
        "images/logo.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
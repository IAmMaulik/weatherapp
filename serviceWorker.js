const staticWeatherApp = "WeatherApp";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/index.js",
  "/js/request.js",
  "/img/cloud.svg",
  "/img/day_image.svg",
  "/img/favicon.svg",
  "/img/night_image.svg",
  "/img/up.svg",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticWeatherApp).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
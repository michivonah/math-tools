const workerCache = "math-tools-app-v1-0-3"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/manifest.json",
  "/assets/calc.js",
  "/assets/functions.js",
  "/assets/images/logo.svg",
  "/assets/images/logo_96.ico",
  "/assets/images/logo_96.png",
  "/assets/images/logo_256.png",
  "/assets/images/logo_512.png",
  "/assets/images/logo_720.png",
  "/assets/images/logo_1024.png",
  "/assets/images/math_background.svg",
  "/assets/images/phytagoras.svg",
  "https://unpkg.com/akar-icons-fonts",
  "https://unpkg.com/aos@2.3.1/dist/aos.js",
  "https://unpkg.com/aos@2.3.1/dist/aos.css",
  "https://fonts.googleapis.com/css2?family=Mali:wght@300;400;500;600;700&family=Open+Sans:wght@400;500;600;700;800&display=swap"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(workerCache).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
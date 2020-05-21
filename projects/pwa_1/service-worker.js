self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll(['/', '/index.html', '/images/logo.png'])
    })
  )
})
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      return res || fetch(event.request)
    })
  )
})

importScripts("workbox-sw.js");var PROJECT_NAME="balm-ui-pro",PROJECT_VERSION="v0500",CACHE_NAMES=[PROJECT_NAME+"-precache-"+PROJECT_VERSION,PROJECT_NAME+"-runtime-"+PROJECT_VERSION,PROJECT_NAME+"-ga-"+PROJECT_VERSION,"images"];workbox.core.setCacheNameDetails({prefix:PROJECT_NAME,suffix:PROJECT_VERSION,precache:"precache",runtime:"runtime",googleAnalytics:"ga"}),workbox.precaching.precacheAndRoute([{revision:"24209060d898448d169807ad60f51423",url:"css/app.ba9e8188.css"},{revision:"a3e106a969935846cae54c0583e8f139",url:"index.html"},{revision:"f6b41ecb9b4fd973330f850e6b79c219",url:"js/app.f6b41ecb.js"},{revision:"f90b4dc4b2e80c57e37674f3d3aac8e4",url:"js/vendor/balm-ui-pro.f90b4dc4.js"},{revision:"4a2c6a0e0d673424193b392e38b661ec",url:"js/vendor/hello.4a2c6a0e.js"},{revision:"d6e9eb44a24f1e781164287002302b0c",url:"workbox-sw.js"}]),workbox.routing.registerRoute((function(e){return"script"===e.request.destination||"style"===e.request.destination}),new workbox.strategies.StaleWhileRevalidate),workbox.routing.registerRoute((function(e){return"image"===e.request.destination}),new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]}),new workbox.expiration.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3})]})),workbox.routing.registerRoute(/\.(?:ico)|json|ttf|woff2?$/,new workbox.strategies.StaleWhileRevalidate),workbox.googleAnalytics.initialize(),self.addEventListener("activate",(function(e){e.waitUntil(caches.keys().then((function(e){return Promise.all(e.map((function(e){if(-1===CACHE_NAMES.indexOf(e))return caches.delete(e)})))})).then((function(){self.clients.claim()})))})),self.addEventListener("message",(function(e){"skipWaiting"===e.data.action&&self.skipWaiting()}));
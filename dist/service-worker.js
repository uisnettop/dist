importScripts("precache-manifest.f2bbaa9be1d67302ca714a241d74fa01.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");


debugger // eslint-disable-line no-debugger
if (workbox) {
  console.log(`Workbox is loaded`);
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
 } 
else {
  console.log(`Workbox didn't load`);
}

self.addEventListener("push", function(event) {
  console.log("[Service Worker] Push Received.", event.data.text());
});

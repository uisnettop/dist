importScripts("precache-manifest.2eb6298761dd7006e930454fe6c4915c.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");


debugger // eslint-disable-line no-debugger
if (workbox) {
  console.log(`Workbox is loaded`);
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
 } 
else {
  console.log(`Workbox didn't load`);
}

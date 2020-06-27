//make sure that service worker is supported

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../sw.js")
      .then((reg) => console.log("service worker registered"))
      .catch((err) => console.log(`Service worker: Error: ${err}`));
  });
}

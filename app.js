// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

// Selector
const video = document.querySelector(".video-container");
const btn = document.querySelector(".switch-btn");
const preloader = document.querySelector(".preloader");

// Event Listener
btn.addEventListener("click", slide);
// ketika konten sudah ter-load semuanya, jalankan fungsi hideLoad
window.addEventListener("load", hideLoad);

// Function
function slide() {
  // kalo pas di klik , btn gak punya class slide -> tambahin
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
    // kalo pas di klik, btn punya class slide -> hapus
  } else {
    btn.classList.remove("slide");
    video.play();
  }
}

// menghilangkan animasi loading ketika semua konten sudah terdeploy
function hideLoad() {
  preloader.classList.add("hide-preloader");
}

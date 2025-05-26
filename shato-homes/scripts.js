// scripts.js
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const images = document.querySelectorAll(".gallery-item");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

let prevScrollPos = window.pageYOffset; // Önceki kaydırma pozisyonu

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset; // Mevcut kaydırma pozisyonu
  if (prevScrollPos > currentScrollPos) {
    document.querySelector("nav").style.top = "0"; // Sayfa yukarı kaydırıldığında navbar görünür
  } else {
    document.querySelector("nav").style.top = "-60px"; // Sayfa aşağı kaydırıldığında navbar kaybolur
  }
  prevScrollPos = currentScrollPos; // Önceki kaydırma pozisyonunu güncelle
};

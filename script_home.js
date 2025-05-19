const container = document.getElementById("heartContainer");
const totalImages = 69;
const radius = 400; // Tăng kích thước trái tim

// Heart path parametric formula
function heartPath(t) {
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y = -(
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t)
  );
  return { x, y };
}

async function placeImages() {
  for (let i = 0; i < totalImages; i++) {
    const img = document.createElement("img");
    img.src = `images/${i + 1}.jpg`;
    img.classList.add("heart-image");

    const t = (Math.PI * 2 * i) / totalImages;
    const pos = heartPath(t);

    const x = (pos.x * radius) / 32 + container.clientWidth / 2 - 30;
    const y = (pos.y * radius) / 32 + container.clientHeight / 2 - 30;

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    container.appendChild(img);

    // Delay 500ms mỗi ảnh
    await new Promise((resolve) => setTimeout(resolve, 500));
    img.classList.add("visible");

    // Click để zoom
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  }
}

// Modal zoom logic
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementsByClassName("close")[0];

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

placeImages();

// Card modal logic
document.addEventListener("DOMContentLoaded", () => {
  const cardBtn = document.getElementById("cardBtn");
  const cardModal = document.getElementById("cardModal");
  const cardClose = cardModal.querySelector(".card-close");
  const wishesAudio = document.getElementById("wishesAudio");

  // Mặc định đã mở thiệp 1 lần
  cardModal.classList.add("show");

  // Khi click “Mở lại Thiệp nè”
  cardBtn.addEventListener("click", () => {
    cardModal.classList.add("show");
    wishesAudio.currentTime = 0;
    wishesAudio.play();
  });

  // Đóng thiệp
  cardClose.addEventListener("click", () => {
    cardModal.classList.remove("show");
  });
  cardModal.addEventListener("click", (e) => {
    if (e.target === cardModal) cardModal.classList.remove("show");
  });
});

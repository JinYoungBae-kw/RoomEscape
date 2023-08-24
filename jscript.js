const images = ["image/backscreen1.jpg", "image/backscreen2.jpg"]; // 이미지 파일명 리스트
let currentIndex = 0;

const currentImage = document.getElementById("current-image");
const nextButton = document.getElementById("next-button");

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    currentImage.src = images[currentIndex];
    currentImage.alt = "Image " + (currentIndex + 1);
});

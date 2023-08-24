const images = ["image/backscreen1.jpg", "image/backscreen2.jpg", "image/backscreen3.jpg"]; // 이미지 파일명 리스트
let currentIndex = 0;

const currentImage = document.getElementById("current-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

updateButtons(); // 초기 버튼 상태 업데이트

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    currentImage.src = images[currentIndex];
    currentImage.alt = "Image " + (currentIndex + 1);
    updateButtons(); // 버튼 상태 업데이트
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    currentImage.src = images[currentIndex];
    currentImage.alt = "Image " + (currentIndex + 1);
    updateButtons(); // 버튼 상태 업데이트
});

function updateButtons() {
    if (currentIndex === 0) {
        prevButton.style.visibility = "hidden"; // 첫 번째 이미지에서는 이전 이미지 버튼 숨김
    } else {
        prevButton.style.visibility = "visible";
    }

    if (currentIndex === images.length - 1) {
        nextButton.style.visibility = "hidden"; // 세 번째 이미지에서는 다음 이미지 버튼 숨김
    } else {
        nextButton.style.visibility = "visible";
    }
}

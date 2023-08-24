const images = ["image/backscreen1.jpg", "image/backscreen2.jpg", "image/backscreen3.jpg"]; // 이미지 파일명 리스트
let currentIndex = 0;

const currentImage = document.getElementById("current-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const inputBox = document.getElementById("text-input");
const feedbackMessage = document.getElementById("feedback-message");

updateButtons(); // 초기 버튼 상태 업데이트
updateInputVisibility(); // 초기 입력창 상태 업데이트

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    currentImage.src = images[currentIndex];
    currentImage.alt = "Image " + (currentIndex + 1);
    updateButtons(); // 버튼 상태 업데이트
    updateInputVisibility(); // 입력창 상태 업데이트
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    currentImage.src = images[currentIndex];
    currentImage.alt = "Image " + (currentIndex + 1);
    updateButtons(); // 버튼 상태 업데이트
    updateInputVisibility(); // 입력창 상태 업데이트
});

inputBox.addEventListener("input", () => {
  if (currentIndex === 1) { // 두 번째 이미지에서만 입력 결과에 따라 버튼 활성/비활성화
      if (inputBox.value.toLowerCase() === "성공") {
          nextButton.disabled = false;
          feedbackMessage.style.display = "none";
      } else {
          nextButton.disabled = true;
          feedbackMessage.style.display = "block";
      }
  }
});

function updateButtons() {
    if (currentIndex === 0) {
        prevButton.style.visibility = "hidden";
    } else {
        prevButton.style.visibility = "visible";
    }

    if (currentIndex === images.length - 1) {
        nextButton.style.visibility = "hidden";
    } else {
        nextButton.style.visibility = "visible";
    }

    if (currentIndex === 0) { // 이미지1에서는 항상 다음 버튼 활성화
      nextButton.disabled = false;
      feedbackMessage.style.display = "none";
    } else if (currentIndex === 1) {
      nextButton.disabled = true;
      feedbackMessage.style.display = "none";
    }
}

function updateInputVisibility() {
    if (currentIndex === 1) {
        inputBox.style.display = "block"; // 두 번째 이미지에서 입력창 보이게
        feedbackMessage.style.display = "none";
    } else {
        inputBox.style.display = "none";
        feedbackMessage.style.display = "none";
    }
}

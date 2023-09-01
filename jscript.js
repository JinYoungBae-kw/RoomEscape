/*const images = ["image/backscreen1.jpg", "image/backscreen2.jpg", "image/backscreen3.jpg", "image/X.jpg"]; // 이미지 파일명 리스트
let currentIndex = 0;
let answer = 0;
let xanwer = 0;

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

inputBox.addEventListener("input", () => {
  if (currentIndex === 1) { 
      if (inputBox.value.toLowerCase() === "성공") {
        answer = 1;
      }
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex === 1) {
    if (answer === 1) {
      currentIndex = (currentIndex + 1) % images.length;
      currentImage.src = images[currentIndex];
      updateButtons(); // 버튼 상태 업데이트
      updateInputVisibility(); // 입력창 상태 업데이트
    } else {
      xanwer = 3;
      currentImage.src = images[xanwer];
      updateButtons(); // 버튼 상태 업데이트
      updateInputVisibility(); // 입력창 상태 업데이트
    }
  } else {
    currentIndex = (currentIndex + 1) % images.length;
    currentImage.src = images[currentIndex];

    updateButtons(); // 버튼 상태 업데이트
    updateInputVisibility(); // 입력창 상태 업데이트
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
}

function updateInputVisibility() {
    if (currentIndex === 1) {
        inputBox.style.display = "block"; // 두 번째 이미지에서 입력창 보이게
    } else {
        inputBox.style.display = "none";
    }
}*/

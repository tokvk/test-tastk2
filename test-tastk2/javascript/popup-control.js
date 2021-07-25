let popUpElement = document.querySelector(".popup");
let popUpCloseBtn = document.querySelector(".popup__button-close");
let popUpOpenBtn = document.querySelector(".video-container__button");
popUpCloseBtn.addEventListener("click", () => {
    popUpElement.classList.toggle("popup--hidden");
});
popUpOpenBtn.addEventListener("click", () => {
    popUpElement.classList.toggle("popup--hidden");
});
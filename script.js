const button = document.querySelector("button");
button.addEventListener("click", function () {
    button.textContent = "Спасибо за нажатие!";
    button.classList.add("success");
});
const nav = document.querySelector(".nav");
const closeButton = document.querySelector(".nav__close");
const showBarButton = document.querySelector(".showbar__button");
const getWidgetsButton = document.querySelector(".nav__button");
const navText = document.querySelector(".nav__text");

function hideBar() {
  return nav.classList.remove("slide__animation");
}

function showBar() {
  return nav.classList.add("slide__animation");
}

function showAlertMessage(message) {
  alert(message);
}

function Bar({ message, position }) {
  this.message = navText.textContent = message;
  this.position = nav.classList.add(position);
}

closeButton.addEventListener("click", () => hideBar());
showBarButton.addEventListener("click", () => showBar());
getWidgetsButton.addEventListener("click", () =>
  showAlertMessage("Hello, world!")
);

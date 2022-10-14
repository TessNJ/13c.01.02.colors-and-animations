"usescript";
document.addEventListener("DOMContentLoaded", start);

function start() {
  const flyingAnimation = rocket.animate(flyKeyframes, flyProperties);
  background.classList.add("fadeInAnimation");
  headerH1.classList.add("fadeInAnimation");
  headerP.classList.add("fadeInAnimation");
  // secondaryAnimations();
}

function secondaryAnimations() {}

//Rocket
const flyProperties = {
  duration: 1500,
  iterations: 1,
  easing: "ease-in-out",
  composite: "add",
};

const flyKeyframes = [{ transform: "translateY(65vw)" }, { transform: "translateY(0)" }];
const rocket = document.querySelector(".header_graphics object");

const background = document.querySelector(".header_graphics");
const headerH1 = document.querySelector(".header_text h1");
const headerP = document.querySelector(".header_text p");

let darkModeState = false;

const button = document.querySelector(".btn");

const useDark = window.matchMedia("(prefers-color-scheme: dark)");

function toggleDarkMode(state) {
  document.documentElement.classList.toggle("dark-mode", state);
  darkModeState = state;
}

function setDarkModeLocalStorage(state) {
  localStorage.setItem("dark-mode", state);
}

toggleDarkMode(localStorage.getItem("dark-mode") == "true");

useDark.addListener((evt) => toggleDarkMode(evt.matches));

button.addEventListener("click", () => {
  darkModeState = !darkModeState;

  toggleDarkMode(darkModeState);
  setDarkModeLocalStorage(darkModeState);
});

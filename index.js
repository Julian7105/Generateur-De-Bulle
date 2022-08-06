const compteur = document.getElementById("compteur");
const body = document.querySelector("body");
const start = document.querySelector(".start");
const stopp = document.querySelector(".stop");


compteur.textContent = 0;

const generateurBulle = () => {
  const bulle = document.createElement("span");
  bulle.classList.add("bulle");
  document.body.appendChild(bulle);

  let couleurBulle =
    "rgba(" +
    Math.random() * 250 +
    20 +
    "," +
    Math.random() * 250 +
    20 +
    "," +
    Math.random() * 250 +
    20 +
    "," +
    0.6;
  let dimensionBulle = Math.random() * 200 + 100 + "px";

  bulle.style.height = dimensionBulle;
  bulle.style.width = dimensionBulle;
  bulle.style.background = couleurBulle;
  bulle.style.top = Math.random() * 100 + 70 + "%";
  bulle.style.left = Math.random() * 100 + "%";

  const plusMoins = Math.random() > 0.5 ? 1 : -1;
  bulle.style.setProperty("---left", Math.random() * 100 * plusMoins + "%");

  function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //Utilisation
  //La variable contient un nombre aléatoire compris entre 1 et 4
  var entier = entierAleatoire(1, 6);

  function ring() {
    let audio = new Audio();
    audio.src = entier + ".mp3";
    audio.play();
  }
  bulle.addEventListener("click", () => {
    bulle.remove();
    ring();
    compteur.textContent++;
  });

  setTimeout(() => {
    bulle.remove();
  }, 8000);
};

let inter;

function run() {
  inter = setInterval(generateurBulle, 400);
}

function clear() {
  clearInterval(inter);
  compteur.textContent = 0;
}

start.addEventListener("click", run);
stopp.addEventListener("click", clear);

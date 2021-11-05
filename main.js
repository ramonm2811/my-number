"use strict";

//paso 1: Crear un numero aleatorio
let numeroAleatorio = Math.floor(Math.random() * 20) + 1;

//Variables del DOM
let score = Number(document.querySelector(".scoreNumber").textContent);
let highscore = Number(document.querySelector(".highScoreNumber").textContent);

//paso 2: Event listener botón Check y Again
document.querySelector(".check").addEventListener("click", logicaJuego);
document.querySelector(".again").addEventListener("click", init);

function logicaJuego() {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "Favor adivine un Número!";
    decreaseScore();
  } else if (guess > 20 || guess <= 0) {
    decreaseScore();
    document.querySelector(".message").textContent =
      "Debe ser un numero entre 1 y 20";
  } else if (guess !== numeroAleatorio) {
    document.querySelector(".message").textContent =
      guess > numeroAleatorio ? "Numero muy alto 📈" : "Numero muy bajo 📉";
    decreaseScore();
  } else if (guess === numeroAleatorio) {
    document.querySelector(".message").textContent =
      "FELICITACIONES GANASTE ✨🎉";
    ganaste();
  }
}

function decreaseScore() {
  score--;
  document.querySelector(".scoreNumber").textContent = score;
}

function ganaste() {
  document.querySelector("body").style.backgroundColor = "green";
  document.querySelector(".box").textContent = numeroAleatorio;
  if (score > highscore) {
    highscore = score;
    document.querySelector(".highScoreNumber").textContent = highscore;
  }
  console.log(score);
}

function init() {
  //paso 1: Crear un numero aleatorio
  numeroAleatorio = Math.floor(Math.random() * 20) + 1;
  //Variables del DOM
  score = 20;
  document.querySelector(".scoreNumber").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".box").textContent = "?";
  console.log(score);
}

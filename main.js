"use strict";

//paso 1: Crear un numero aleatorio
const numeroAleatorio = Math.floor(Math.random() * 20) + 1;
console.log(numeroAleatorio);
//paso 2: Event listener botón Check
document.querySelector(".check").addEventListener("click", logicaJuego);

function logicaJuego() {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "Favor adivine un Número!";
  } else if (guess !== numeroAleatorio) {
    document.querySelector(".message").textContent =
      guess > numeroAleatorio ? "Numero muy alto 📈" : "Numero muy bajo 📉";
  } else if (guess === numeroAleatorio) {
    document.querySelector(".message").textContent =
      "FELICITACIONES GANASTE ✨🎉";
  }
}

/* 
Game Logic: 

- Crear un numero aleatorio el cual nosotros debemos adivinar 
- Comenzamos con una puntuacion inicial (score)
- Sí hacemos un guess incorrecto, se nos disminuye en 1 unidad el score
    Sí nuestro guess es muy alto entonces obtenemos un mensaje (Muy alto)
    Sí nuestro guess es muy bajo entonces obtenemos un mensaje (Muy bajo)
- Sí adivinamos correctamente el numero aleatorio:
    * La pantalla pasa a verde
    * El numero aleatorio aparece en pantalla
    * Obtenemos el mensaje, Numero correcto Felicitaciones
    * Tenemos un contador que nos mantiene el score mas alto (highscore)
- Tenemos un botón Again para reiniciar el juego




TIPS:
Manten el codigo DRY
Puedes utilizar funciones cuando lineas de codigo se repiten
*/

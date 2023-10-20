/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const suits = ["♦", "♥", "♠", "♣"];
  const numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  function getRandomCard() {
    //generar aleatoriamente un suit y un numero

    const randomSuitIndex = Math.floor(Math.random() * suits.length);
    const randomSuit = suits[randomSuitIndex];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

    //link para html

    document.getElementById("top-suit").innerHTML = randomSuit;
    document.getElementById("card-number").innerHTML = randomNumber;
    document.getElementById("bottom-suit").innerHTML = randomSuit;

    const cardContain = document.getElementById("card-contain");

    widthInput.addEventListener("input", function() {
      cardContain.style.width = widthInput.value + "px";
    });

    heightInput.addEventListener("input", function() {
      cardContain.style.height = heightInput.value + "px";
    });

    //condicion para que cambie de color los items
    if (randomSuit === "♦" || randomSuit === "♥") {
      cardContain.classList.add("red");
    } else {
      cardContain.classList.remove("red");
    }
    // concatenar cadenas
    return randomSuit + randomSuit + randomNumber;
  }
  //selecciono el elemento HTML con el ID card-contain y lo asigna a la variable cardContain
  const cardContain = document.getElementById("card-contain");
  getRandomCard();

  letterChange.addEventListener("click", getRandomCard);

  //Temporizador que cambia la carta cada 10 segundos
  setInterval(getRandomCard, 10000);
};

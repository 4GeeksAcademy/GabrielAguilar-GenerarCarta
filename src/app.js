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

    //condicion para que cambie de color los items

    if (randomSuit === "♦" || randomSuit === "♥") {
      cardContain.classList.add("red");
    } else {
      cardContain.classList.remove("red");
    }
    // respuesta
    return randomSuit + randomSuit + randomNumber;
  }
  //asignacion de divs html padre a la condicion
  const cardContain = document.getElementById("card-contain");
  //llamar a la funcion principal
  getRandomCard();

  const refreshButton = document.getElementById("refresh-button");

  refreshButton.addEventListener("click", function() {
    getRandomCard();
  });

  //Temporizador que cambia la carta cada 10 segundos
  setInterval(function() {
    getRandomCard();
  }, 10000);
};

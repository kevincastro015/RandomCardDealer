/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
  let suit = ["heart", "club", "spades", "diamonds"];

  let numberIndx = Math.floor(Math.random() * number.length);
  let suitIndx = Math.floor(Math.random() * suit.length);

  let selectedNumber = number[numberIndx];

  let selectedSuit = suit[suitIndx];
  //   document.querySelector("#randomCardGenerator").innerHTML = arr;
  //   console.log("Hello Rigo from the console!");
};

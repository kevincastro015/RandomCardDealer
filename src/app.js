/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
  let suit = ["&hearts;", "&clubs;", "&spades;", "&diams;"];

  let numberIndx = Math.floor(Math.random() * number.length);
  let suitIndx = Math.floor(Math.random() * suit.length);

  let selectedNumber = number[numberIndx];
  let selectedSuit = suit[suitIndx];
  // document.querySelector("#randomCardGenerator").innerHTML = arr;
  console.log(selectedNumber);
  console.log(selectedSuit);
  document.querySelector("#number").innerHTML = selectedNumber;
  let suit1HTML = document.querySelector("#suit1");
  let suit2HTML = document.querySelector("#suit2");
  suit1HTML.innerHTML = selectedSuit;
  suit2HTML.innerHTML = selectedSuit;
  if (selectedSuit === "&hearts;" || selectedSuit === "&diams;") {
    suit1HTML.style.color = "red";
    suit2HTML.style.color = "red";
  }
};

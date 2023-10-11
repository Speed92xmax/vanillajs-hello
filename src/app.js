/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let subject = ["Yo ", "Tu ", "El ", "Ella ", "Nosotros "];
  let verb = [
    "estuvimos en ",
    "fuimos a ",
    "tuvimos que ",
    "saltamos a ",
    "nos corrieron "
  ];
  let rest = [
    "sin zapatos en la playa.",
    "dentro de su casa.",
    "debajo de un coche.",
    "una montaña.",
    "sin saber."
  ];

  let subNum = Math.floor(Math.random() * 5);
  let verbNum = Math.floor(Math.random() * 5);
  let restNum = Math.floor(Math.random() * 5);

  let $excussesContainer = (document.querySelector("#container").innerHTML =
    subject[subNum] + verb[verbNum] + rest[restNum]);

  console.log($excussesContainer);
};

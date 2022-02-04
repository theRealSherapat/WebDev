var body = document.querySelector("body");
var tilfeldigTall = document.querySelector("#tilfeldigTall");
var brukerTall = document.querySelector("#brukerTall");
var knapp1 = document.querySelector("#knapp1");
var knapp2 = document.querySelector("#knapp2");
var knapp3 = document.querySelector("#knapp3");

var tall1 = Math.floor(Math.random()*99+1);
var tall2 = 0;
var trykk = 0;

tilfeldigTall.innerHTML = tall1;
brukerTall.innerHTML = tall2;

knapp1.addEventListener("click",pluss2);
knapp2.addEventListener("click",minus7);
knapp3.addEventListener("click",pluss22);
body.addEventListener("keyup",keyUp);

function pluss2() {
  tall2 += 2;
  kameratSjekk();
}

function minus7() {
  if (tall2 >= 7) {
    tall2 -= 7;
  }
  kameratSjekk();
}

function pluss22() {
  tall2 += 22;
  kameratSjekk();
}

function keyUp(e) {
  if (e.keyCode === 38 && e.ctrlKey) {
    tall2 += 22;
    kameratSjekk();
    console.log(e);
  }
  else if (e.keyCode === 40 && e.shiftKey) {
    if (tall2 >= 7) {
      tall2 -= 7;
    }
    kameratSjekk();
  } else if (e.keyCode === 38) {
    tall2 += 2;
    kameratSjekk();
  }
}

function kameratSjekk() {
  trykk++;
  brukerTall.innerHTML = tall2;
  if (tall2 === tall1) {
    knapp1.removeEventListener("click",pluss2);
    knapp2.removeEventListener("click",minus7);
    knapp3.removeEventListener("click",pluss22);
    body.removeEventListener("keyup",keyUp);
    var gz = document.createElement("h1");
    if (trykk <= 5) {
    gz.innerHTML = "Kjempebra! du brukte bare " + trykk + " trykk";
  } else if (trykk <= 15 && trykk >= 6) {
    gz.innerHTML = "Decent, men du klarer bedre enn " + trykk + ".";
  } else if (trykk <= 25 && trykk >= 16) {
    gz.innerHTML = "Prøv igjen du. " + trykk + " er litt vel mye";
  } else if (trykk <= 30 && trykk >= 26) {
    gz.innerHTML = trykk + " trykk? Virkelig?";
  } else if (trykk >= 40) {
    gz.innerHTML = "Nå kødder du bare. Gå vekk.";
  }
    body.appendChild(gz);
  }
}

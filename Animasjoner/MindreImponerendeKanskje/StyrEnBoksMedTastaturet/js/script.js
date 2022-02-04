var body = document.querySelector("body");
var boksEl = document.querySelector("div");

var venstre = 0;
var topp = 0;

var FART = 50;

body.addEventListener("keydown", flyttBoks);

function flyttBoks(e) {
  if (e.keyCode === 37) {
    venstre -= FART;
  } else if (e.keyCode === 39) {
    venstre += FART;
  } else if (e.keyCode === 38) {
    topp -= FART;
  } else if (e.keyCode === 40) {
    topp += FART;
  }

  boksEl.style.top = topp + "px";
  boksEl.style.left = venstre + "px";
}

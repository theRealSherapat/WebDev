var body = document.querySelector("body");
var egg = document.querySelector(".egg");
var paragraf = document.querySelector("p");
var tall = Math.floor(Math.random()*50+1);

paragraf.innerHTML = tall;
egg.addEventListener("click",eggTrykk);

function eggTrykk() {
  tall--;
  paragraf.innerHTML = tall;
  if (tall === 0) {
    egg.removeEventListener("click",eggTrykk);
    egg.removeChild(paragraf);
    egg.className = "egg2";
  }
}

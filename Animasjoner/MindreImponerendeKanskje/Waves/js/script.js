var innpakningEl = document.querySelector(".innpakning");
var antallBokser = 70;

innpakningEl.style.width = antallBokser * 20 + "px";

for (var i = 0; i < antallBokser; i++) {
  var nyBoks = document.createElement("div");
  nyBoks.className = "animer";
  nyBoks.style.left = i * 20 + "px";
  nyBoks.style.animationDelay = i * (Math.random()*10) + "ms";
  nyBoks.style.animationDuration = (Math.random()*6+1) + "s";
  nyBoks.style.backgroundColor = "hsl(" + i * 5 + ", 100%, 50%)";
  innpakningEl.appendChild(nyBoks);
}

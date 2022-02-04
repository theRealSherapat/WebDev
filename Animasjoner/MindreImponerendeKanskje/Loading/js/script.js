var boks = document.querySelector(".boks");
var sirkel = document.querySelector(".sirkel");

boks.addEventListener("animationiteration", sikle);
sirkel.addEventListener("animationiteration", bokser);


function sikle() {
  sirkel.style.animationPlayState = "running";
  boks.style.animationPlayState = "paused";
}

function bokser() {
  boks.style.animationPlayState = "running";
  sirkel.style.animationPlayState = "paused";
}

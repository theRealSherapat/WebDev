var form = document.querySelector("form");
var inputEl = document.querySelector("input");
var vindstyrkeStatus = document.querySelector("#vindstyrke");
var molleBlad = document.querySelector("#vmblad");
var lydklipp = document.querySelector("audio");
var blad1 = document.querySelector("#blad1");
var blad2 = document.querySelector("#blad2");
var tre = document.querySelector("#tre");

form.addEventListener("submit", registrerSkjema);

var valgtVindstyrke = Number(inputEl.value);

var vindstyrkeIntervaller = ["0 - 0,2 m/s", "3,4 - 5,4 m/s", "13,9 - 17,1 m/s"];
var vindstyrkeIntervall;

function registrerSkjema(e) {
  e.preventDefault();

  valgtVindstyrke = Number(inputEl.value);

  if (valgtVindstyrke >= 0 && valgtVindstyrke <= 0.2) {
    molleBlad.style.animationDuration = 8 + "s";
    molleBlad.style.animationPlayState = "running";

    lydklipp.pause();
    lydklipp.currentTime = 0;

    blad1.style.animationPlayState = "paused";
    blad2.style.animationPlayState = "paused";

    tre.style.animationPlayState = "paused";

    vindstyrkeIntervall = 0;
  } else if (valgtVindstyrke >= 3.4 && valgtVindstyrke <= 5.4) {
    molleBlad.style.animationDuration = 4 + "s";
    molleBlad.style.animationPlayState = "running";

    lydklipp.currentTime = 0;
    lydklipp.play();

    blad1.style.animationPlayState = "running";
    blad2.style.animationPlayState = "running";

    tre.style.animationPlayState = "paused";

    vindstyrkeIntervall = 1;
  } else if (valgtVindstyrke >= 13.9 && valgtVindstyrke <= 17.1) {
    molleBlad.style.animationDuration = 2 + "s";
    molleBlad.style.animationPlayState = "running";

    lydklipp.currentTime = 0;
    lydklipp.play();

    blad1.style.animationPlayState = "running";
    blad2.style.animationPlayState = "running";

    tre.style.animationPlayState = "running";

    vindstyrkeIntervall = 2;
  } else {
    molleBlad.style.animationPlayState = "paused";

    blad1.style.animationPlayState = "paused";
    blad2.style.animationPlayState = "paused";

    tre.style.animationPlayState = "paused";

    lydklipp.currentTime = 0;
    lydklipp.pause();

    vindstyrkeIntervall = 3;
  }

  if (vindstyrkeIntervall >= 0 && vindstyrkeIntervall <= 2) {
    vindstyrkeStatus.innerHTML = "Vindstyrke: " + vindstyrkeIntervaller[vindstyrkeIntervall];
  } else {
    vindstyrkeStatus.innerHTML = "";
  }
}

var body = document.querySelector("body");
var html = document.querySelector("html");
var canvas = document.querySelector(".container");
var inputEl = document.querySelector("input");
var button = document.querySelector(".button");
var bilde = document.querySelector("img");

button.addEventListener("click", simuler);
body.addEventListener("keydown", enter);
inputEl.addEventListener("input", delForsok);

var delForsok = Number(inputEl.value);

function delForsok() {
  delForsok = Number(inputEl.value);
}

function enter(e) {
  if (e.keyCode === 13) {
    simuler();
  }
}

function sammenligningsFunksjon(a,b) {
  return a - b;
}

function simuler() {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }

  inputEl.removeAttribute("onfocus");

  var soyler = [];

  for (var i = 0; i < delForsok; i++) {
    var sum = 0;
    for (var j = 0; j < 30; j++) {
      var terning = Math.floor(Math.random()*6+1);
      sum += terning;
    }
    soyler.push(sum);
    soyler.sort(sammenligningsFunksjon);
  }

  var counts = {};
  soyler.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });

  var konstant = 1;

  if (delForsok <= 4000 && delForsok >= 3000) {
    konstant = 2;
  } else if (delForsok < 3000 && delForsok >= 2000) {
    konstant = 3;
  }else if (delForsok < 2000 && delForsok >= 1000) {
    konstant = 5;
  } else if (delForsok < 1000 && delForsok > 300) {
    konstant = 7;
  }else if (delForsok <= 300 && delForsok >= 200) {
    konstant = 20;
  } else if (delForsok <= 150) {
    konstant = 30;
  }

  var skjermBredde = 10;

  if (screen.width > 1600) {
    skjermBredde = 11;
  } else if (screen.width > 1920) {
    skjermBredde = 12;
  }

  for (var egenskap in counts) {
    var soyle = document.createElement("div");
    soyle.style.marginLeft = egenskap * skjermBredde - 520 + "px";
    soyle.style.height = counts[egenskap] * konstant + "px";
    soyle.style.top = 650 - counts[egenskap] * konstant + "px";
    canvas.appendChild(soyle);
  }

  var setning = document.createElement("p");
  var rettskrivingsOrd = " times";
  if (delForsok === 1) {
    rettskrivingsOrd = " time";
  }
  setning.innerHTML = "30 dices thrown and summarized " + delForsok + rettskrivingsOrd;
  canvas.appendChild(setning);
}


//David Thorvaldsen 07.02.17

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var body = document.querySelector("body");
var container = document.querySelector(".container");
var sjanserIgjenEl = document.querySelector("#sjanserIgjen");
var riktigeBokstaverEl = document.querySelector("#riktigeBokstaver");
var brukteBokstaverEl = document.querySelector("#brukteBokstaver");
var tekstfeltEl = document.querySelector("#bokstav");
var knapp = document.querySelector(".button");
var span = document.querySelector("span");
var forgrunnsvindu = document.querySelector("#forgrunnsvindu");
var audio = document.querySelector("audio");
var muteKnapp = document.querySelector("#mute");

body.addEventListener("keydown", enter);
knapp.addEventListener("click", tallSjekk);
muteKnapp.addEventListener("click", playPause);

var losningsord = ["paris", "datamus", "kulepenn", "bordduk", "gresskarkonkurranse"];
for (var i = 0; i < losningsord.length; i++) {
  losningsord[i] = losningsord[i].toUpperCase();
}

//Velger tilfeldig løsningsord
//skriver og tegner opp all info vi har
var tilfeldigord = tilfeldigOrd();
var brukteBokstaver = [];
var riktigeBokstaver = [];

for (var i = 0; i < tilfeldigord.length; i++) {
  riktigeBokstaver.push("_");
}

var antallSjanser = 6;
var hjerter = document.createElement("span");
for (var i = 0; i < antallSjanser; i++) {
  var hjerte = document.createElement("img");
  hjerte.style.width = 41 + "px";
  hjerte.style.height = 40.25 + "px";
  hjerte.src = "media/hjerte.png";
  hjerter.appendChild(hjerte);
}

riktigeBokstaverEl.innerHTML = "<h3>Løsningsord:</h3> " + riktigeBokstaver;
brukteBokstaverEl.innerHTML = "<h3>Brukte bokstaver:</h3> " + brukteBokstaver;
sjanserIgjenEl.appendChild(hjerter);

tegnGalge();

tekstfeltEl.focus();

//Deklarerer variabler som hjelper oss i funksjonene
var ferdigSpill = false;
var musikkSpiller = true;
var gyldigBokstav, gyldigEnter;

function enter(e) {
  if (e.keyCode === 13) {
    tallSjekk();
  } else if (e.keyCode >= 65 && e.keyCode <= 90) {
    gyldigBokstav = true;
  } else if (e.keyCode === 192 || e.keyCode === 221 || e.keyCode === 222) {
    gyldigBokstav = true;
  }
}

function tallSjekk() {
  if (!ferdigSpill) {
    if (gyldigBokstav && tekstfeltEl.value !== "") {
      mottaBokstav();
    } else {
      tekstfeltEl.value = "";
      tekstfeltEl.select();
    }
  } else {
    restart();
  }
}

function mottaBokstav() {
  var gjettetBokstav = tekstfeltEl.value;
  gjettetBokstav = gjettetBokstav.toUpperCase();

  //Sjekker om bokstaven allerede allerede er gjettet
  //( indexOf returnerer -1 hvis bokstaven ikke er i arrayen )
  if (brukteBokstaver.indexOf(gjettetBokstav) === -1) {
    //Ikke i arrayen
    brukteBokstaver.push(gjettetBokstav);

    //Sjekker om bokstaven er i kodeordet
    if (tilfeldigord.indexOf(gjettetBokstav) === -1) {
      //Ikke i kodeordet
      antallSjanser--;
      hjerter.removeChild(hjerter.firstChild);

      if (antallSjanser === 5) {
        tegnHode();
      } else if (antallSjanser === 4) {
        tegnKropp();
      } else if (antallSjanser === 3) {
        tegnVenstreArm();
      } else if (antallSjanser === 2) {
        tegnHoyreArm();
      } else if (antallSjanser === 1) {
        tegnVenstreBein();
      } else if (antallSjanser === 0) {
        tegnHoyreBein();
        tekstfeltEl.value = "";
        tekstfeltEl.blur();
        tekstfeltEl.setAttribute("onfocus", "this.blur();");
        knapp.className = "button1";
        span.innerHTML = "Spill på nytt";
        brukteBokstaverEl.style.marginBottom = 88 + "px";
        ferdigSpill = true;
        visvindu("TAP");
      }
    } else {
      //I kodeordet
      //Sjekker om gjettet bokstav finnes i løsningsordet
      for (var i = 0; i < tilfeldigord.length; i++) {
        if (tilfeldigord[i] === gjettetBokstav) {
          riktigeBokstaver[i] = gjettetBokstav;
        }
      }
    }
  } else {
    alert("Bokstaven er allerede gjettet!");
  }

  brukteBokstaver.sort();

  riktigeBokstaverEl.innerHTML = "<h3>Løsningsord:</h3> " + riktigeBokstaver;
  brukteBokstaverEl.innerHTML = "<h3>Brukte bokstaver:</h3> " + brukteBokstaver;

  tekstfeltEl.value = "";
  tekstfeltEl.select();

  var ordSjekk = "";

  for (var i = 0; i < riktigeBokstaver.length; i++) {
    if (riktigeBokstaver[i] !== "_") {
      ordSjekk += riktigeBokstaver[i];
    }
  }

  if (ordSjekk === tilfeldigord) {
    tekstfeltEl.value = "";
    tekstfeltEl.blur();
    tekstfeltEl.setAttribute("onfocus", "this.blur();");
    knapp.className = "button1";
    span.innerHTML = "Spill på nytt";
    ferdigSpill = true;
    visvindu("SEIER");
  }

  gyldigBokstav = false;
}

function tilfeldigOrd() {
  return losningsord[Math.floor(Math.random()*losningsord.length)];
}

function playPause() {
  if (musikkSpiller) {
    audio.pause();
    muteKnapp.src = "media/unmute.png";
    musikkSpiller = false;
  } else {
    audio.play();
    muteKnapp.src = "media/mute.png";
    musikkSpiller = true;
  }
}

function visvindu(situasjon) {
  if (situasjon === "SEIER") {
    var topp = (screen.height - 320) / 2;
    var venstre = (screen.width - 820) / 2;
    forgrunnsvindu.style.top = topp + "px";
    forgrunnsvindu.style.left = venstre + "px";
    forgrunnsvindu.style.display = "initial";
    var resultat = document.createElement("h1");
    resultat.id = "seier";
    resultat.innerHTML = "Gratulerer, Du vant!";
    forgrunnsvindu.appendChild(resultat);
  } else {
    var topp = (screen.height - 320) / 2;
    var venstre = (screen.width - 820) / 2;
    forgrunnsvindu.style.top = topp + "px";
    forgrunnsvindu.style.left = venstre + "px";
    forgrunnsvindu.style.display = "initial";
    var resultat = document.createElement("h1");
    resultat.id = "tap";
    resultat.innerHTML = "Go practice pls";
    forgrunnsvindu.appendChild(resultat);
  }
}

function restart() {
  //Fjerner alt fra forrige runde
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  forgrunnsvindu.removeChild(forgrunnsvindu.firstChild);
  forgrunnsvindu.style.display = "none";

  while (hjerter.firstChild) {
    hjerter.removeChild(hjerter.firstChild);
  }

  //Lager et nytt spill
  tekstfeltEl.removeAttribute("onfocus");
  knapp.className = "button";
  span.innerHTML = "Test bokstav";
  tekstfeltEl.select();

  tilfeldigord = tilfeldigOrd();
  antallSjanser = 6;

  for (var i = 0; i < antallSjanser; i++) {
    var hjerte = document.createElement("img");
    hjerte.style.width = 41 + "px";
    hjerte.style.height = 40.25 + "px";
    hjerte.src = "media/hjerte.png";
    hjerter.appendChild(hjerte);
  }

  brukteBokstaver = [];
  riktigeBokstaver = [];
  ferdigSpill = false;

  for (var i = 0; i < tilfeldigord.length; i++) {
    riktigeBokstaver.push("_");
  }

  riktigeBokstaverEl.innerHTML = "<h3>Løsningsord:</h3> " + riktigeBokstaver;
  brukteBokstaverEl.innerHTML = "<h3>Brukte bokstaver:</h3> " + brukteBokstaver;
  sjanserIgjenEl.appendChild(hjerter);

  brukteBokstaverEl.style.marginBottom = 15 + "px";

  tegnGalge();
}

function tegnGalge() {
  ctx.beginPath();
  ctx.moveTo(140, 360);
  ctx.lineTo(140, 340);
  ctx.lineTo(540, 340);
  ctx.lineTo(540, 360);
  ctx.moveTo(240, 340);
  ctx.lineTo(240, 60);
  ctx.lineTo(390, 60);
  ctx.lineTo(390, 90);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "white";
  ctx.stroke();
}

function tegnHode() {
  ctx.beginPath();
  ctx.arc(390, 115, 25, 0, Math.PI * 2);
  ctx.stroke();
}

function tegnKropp() {
  ctx.beginPath();
  ctx.moveTo(390, 140);
  ctx.lineTo(390, 265);
  ctx.stroke();
}

function tegnVenstreArm() {
  ctx.beginPath();
  ctx.moveTo(390, 165);
  ctx.lineTo(340, 215);
  ctx.stroke();
}

function tegnHoyreArm() {
  ctx.beginPath();
  ctx.moveTo(390, 165);
  ctx.lineTo(440, 215);
  ctx.stroke();
}

function tegnVenstreBein() {
  ctx.beginPath();
  ctx.moveTo(390, 265);
  ctx.lineTo(340, 315);
  ctx.stroke();
}

function tegnHoyreBein() {
  ctx.beginPath();
  ctx.moveTo(390, 265);
  ctx.lineTo(440, 315);
  ctx.stroke();
}

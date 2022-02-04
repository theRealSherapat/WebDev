// Antall poeng for å vinne
var VINNERSUM = 5;

var spillerPoeng = 0;
var maskinPoeng = 0;

// Henter ut elementer
var spillerPoengElement = document.querySelector("#spillerPoeng");
var maskinPoengElement = document.querySelector("#maskinPoeng");
var infoElement = document.querySelector("#info");
var steinElement = document.querySelector("#stein");
var saksElement = document.querySelector("#saks");
var papirElement = document.querySelector("#papir");
var maskinElement = document.querySelector("#maskin");

steinElement.addEventListener("click", sjekkResultat);
saksElement.addEventListener("click", sjekkResultat);
papirElement.addEventListener("click", sjekkResultat);

infoElement.innerHTML = "Velg stein, saks eller papir. Førstemann til " + VINNERSUM + " poeng vinner spillet";

function sjekkResultat(e) {
  var spillerValg = e.target.id;

  console.log(spillerValg);

  var maskinValg;
  var tilfeldig = Math.floor(Math.random()*3);
  if (tilfeldig === 0) {
    maskinValg = "stein";
  } else if (tilfeldig === 1) {
    maskinValg = "saks";
  } else {
    maskinValg = "papir";
  }

  console.log(maskinValg);

  maskinElement.src = "media/maskin_" + maskinValg + ".png";

  if (spillerValg === "stein") {
    if (maskinValg === "saks") {
      spillerPoeng++;
    } else if (maskinValg === "papir") {
      maskinPoeng++;
    }
  }
  if (spillerValg === "saks") {
    if (maskinValg === "papir") {
      spillerPoeng++;
    } else if (maskinValg === "stein") {
      maskinPoeng++;
    }
  }
  if (spillerValg === "papir") {
    if (maskinValg === "stein") {
      spillerPoeng++;
    } else if (maskinValg === "saks") {
      maskinPoeng++;
    }
  }

  spillerPoengElement.innerHTML = spillerPoeng;
  maskinPoengElement.innerHTML = maskinPoeng;

  if (spillerPoeng === VINNERSUM || maskinPoeng === VINNERSUM) {
    steinElement.removeEventListener("click", sjekkResultat);
    saksElement.removeEventListener("click", sjekkResultat);
    papirElement.removeEventListener("click", sjekkResultat);
  }

  if (spillerPoeng === VINNERSUM) {
    infoElement.innerHTML = "Grattis. Du fikk " + VINNERSUM + " poeng før kompressoren!";
  } else if (maskinPoeng === VINNERSUM) {
    infoElement.innerHTML = "Det var synd. Maskinen fikk " + VINNERSUM + " poeng før deg.";
  } else {
    setTimeout(tilbakestillMaskin, 1500);
    steinElement.removeEventListener("click", sjekkResultat);
    saksElement.removeEventListener("click", sjekkResultat);
    papirElement.removeEventListener("click", sjekkResultat);
    infoElement.innerHTML = "Du må nesten vente i 1500 millisekunder før neste runde.";
  }


}

function tilbakestillMaskin(){
  maskinElement.src = "media/maskin_ukjent.png";
  steinElement.addEventListener("click", sjekkResultat);
  saksElement.addEventListener("click", sjekkResultat);
  papirElement.addEventListener("click", sjekkResultat);
  infoElement.innerHTML = "KJØR!";
}

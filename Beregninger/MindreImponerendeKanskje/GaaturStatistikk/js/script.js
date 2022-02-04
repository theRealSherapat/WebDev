var skjema = document.querySelector("form");
var lengdeInput = document.querySelector("input");
var antTurerEl = document.querySelector("#antall");
var lengsteTurEl = document.querySelector("#lengste");
var gjennomsnittEl = document.querySelector("#snitt");
var turUnder2El = document.querySelector("#prosUnder");
var turOver2El = document.querySelector("#prosOver");
var underDiv = document.querySelector("#under");
var overDiv = document.querySelector("#over");

skjema.addEventListener("submit", registrerSkjema);

var turHistorikk = [];
var antTurer = 0;
var lengsteTur = 0;
var gjennomsnitt = 0;
var turUnder2 = 0;
var turOver2 = 0;
var prosentUnder = 0;
var prosentOver = 0;
var telling = 0;

antTurerEl.innerHTML = antTurer;
lengsteTurEl.innerHTML = lengsteTur;
gjennomsnittEl.innerHTML = gjennomsnitt;
turUnder2El.innerHTML = turUnder2;
turOver2El.innerHTML = turOver2;

lengdeInput.focus();

function registrerSkjema(e) {
  e.preventDefault();

  var tur = Number(lengdeInput.value);
  turHistorikk.push(tur);

  if (tur > 20) {
    turOver2++;
  } else {
    turUnder2++;
  }

  telling = turOver2 + turUnder2;

  antTurer++;

  var sum = 0;

  for (var i = 0; i < turHistorikk.length; i++) {
    if (turHistorikk[i] > lengsteTur) {
      lengsteTur = turHistorikk[i];
    }

    sum += turHistorikk[i];
  }

  gjennomsnitt = sum / antTurer;

  prosentUnder = (100 / telling) * turUnder2;
  prosentOver = (100 / telling) * turOver2;

  antTurerEl.innerHTML = antTurer;
  lengsteTurEl.innerHTML = lengsteTur;
  gjennomsnittEl.innerHTML = gjennomsnitt;
  turUnder2El.innerHTML = prosentUnder;
  turOver2El.innerHTML = prosentOver;

  underDiv.style.width = 0. + prosentUnder + "px";
  underDiv.style.height = 0. + prosentUnder + "px";

  overDiv.style.width = 0. + prosentOver + "px";
  overDiv.style.height = 0. + prosentOver + "px";

  lengdeInput.value = "";

  lengdeInput.focus();
}

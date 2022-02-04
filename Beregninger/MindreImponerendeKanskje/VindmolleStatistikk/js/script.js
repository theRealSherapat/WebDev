var form = document.querySelector("form");
var vindStyrkeInput = document.querySelector("input");
var periodeValgEl = document.querySelector("select");
var tabellVerdier = document.querySelectorAll("td");
var resultatEl = document.querySelector("#resultat");

form.addEventListener("submit", registrerSkjema);

var vindstyrkeInfo = [
  [[0, 0.2], 0],
  [[0.3, 2.4], 0],
  [[2.5, 3.3], 2],
  [[3.4, 5.4], 10],
  [[5.5, 7.9], 60],
  [[8, 10.7], 150],
  [[10.8, 13.8], 400],
  [[13.9, 15], 500],
  [[15.1, 20.7], 0],
  [[20.8, 24.4], 0],
  [[28.5, 32.6], 0],
  [[32.7, Number.MAX_VALUE], 0]
];

var vindstyrker = ["", "", "", ""];
var totalWattProduksjon = 0;

var periodeValgt = Number(periodeValgEl.value);
var vindstyrkeValgt = Number(vindStyrkeInput.value);

for (var i = 0; i < vindstyrker.length; i++) {
  //Skriver verdiene for vindstyrkene inn i tabellen
  tabellVerdier[i].innerHTML = vindstyrker[i] + " m/s";
}

function registrerSkjema(e) {
  e.preventDefault();

  totalWattProduksjon = 0;
  periodeValgt = Number(periodeValgEl.value);
  vindstyrkeValgt = Number(vindStyrkeInput.value);

  //Endrer den gamle verdien med den nye
  vindstyrker[periodeValgt] = vindstyrkeValgt;

  for (var i = 0; i < vindstyrker.length; i++) {
    tabellVerdier[i].innerHTML = vindstyrker[i] + " m/s";

    //Finner wattproduksjon per time som gjelder for hver av periodenes vindstyrker
    for (var j = 0; j < vindstyrkeInfo.length; j++) {
      if (vindstyrker[i] >= vindstyrkeInfo[j][0][0] && vindstyrker[i] <= vindstyrkeInfo[j][0][1]) {
        totalWattProduksjon += vindstyrkeInfo[j][1] * 6; //Wattproduksjon per time * 6 = wattproduksjon per periode
      }
    }
  }

  resultatEl.innerHTML = "Vindmølla produserer cirka <span>" + totalWattProduksjon + "</span> watt dette døgnet";
}

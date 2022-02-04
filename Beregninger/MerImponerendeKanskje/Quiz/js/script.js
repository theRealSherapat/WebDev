var container = document.querySelector(".container");
var resultat = document.createElement("p");

var quiz = [/*{   sporsmaal: "Hvor høy er Galdhøpiggen?",
alternativ: ["2469 m", "2686 m", "2372 m"],
fasit: ["feil", "feil", "riktig"]},*/
{   sporsmaal: "Hvor bra internett er det på Kvitsund?",
alternativ: ["Kjempebra", "Greit", "Bås"],
fasit: ["feil", "feil", "riktig"]},
/*{   sporsmaal: "Hvor lang er glomma?",
alternativ: ["327 km", "32 km", "604 km"],
fasit: ["feil", "feil", "riktig"]},*/
{   sporsmaal: "Hvor gammel er Erna Solberg?",
alternativ: [48, 51, 55],
fasit: ["feil", "feil", "riktig"]},
{   sporsmaal: "Hvilke av disse har Donald Trump vært?",
alternativ: ["Skuespiller", "President", "Casino-eier"],
fasit: ["riktig", "riktig", "riktig"]}
];

var lydSporsmaal = [{
                    sporsmaal: "Hvilken artist er dette?",
                    alternativ: ["Calvin Harris", "Juur", "Rihanna"],
                    fasit: ["feil", "riktig", "feil"],
                    lydkilde: "media/gecko.mp3"
                  }];

//Legger til alle spørsmål uten lyd
for (var i = 0; i < quiz.length; i++) {
  var spm = document.createElement("p");
  spm.className = "css";
  spm.innerHTML += "<h3>" + quiz[i].sporsmaal + "</h3><br>";

  for (var j = 0; j < quiz[i].alternativ.length; j++) {
    var option = document.createElement("input");
    option.type = "checkbox";
    option.value = quiz[i].fasit[j];

    spm.appendChild(option);

    spm.innerHTML += quiz[i].alternativ[j] + "<br>";
  }

  container.appendChild(spm);
}

//Legger til alle spørsmål med lyd
for (var i = 0; i < lydSporsmaal.length; i++) {
  var lydSpm = document.createElement("p");
  lydSpm.className = "css";
  lydSpm.innerHTML += "<h3>" + lydSporsmaal[i].sporsmaal + "</h3><br>";

  var lydKilde = document.createElement("audio");
  lydKilde.innerHTML = '<source src="' + lydSporsmaal[i].lydkilde + '" type="audio/mpeg">';
  lydKilde.setAttribute("data-isplaying", "false");
  lydSpm.appendChild(lydKilde);

  var playStop = document.createElement("div");
  playStop.className = "play";
  playStop.id = "lydKnapp" + i;
  playStop.innerHTML = "Spill av lyd ";
  lydSpm.appendChild(playStop);


  for (var j = 0; j < lydSporsmaal[i].alternativ.length; j++) {
    var lydOption = document.createElement("input");
    lydOption.type = "checkbox";
    lydOption.value = lydSporsmaal[i].fasit[j];

    lydSpm.appendChild(lydOption);
    var alternativLyd = document.createElement("span");
    alternativLyd.innerHTML = lydSporsmaal[i].alternativ[j] + "<br>";
    lydSpm.appendChild(alternativLyd);
  }

  playStop.addEventListener("click", playTheBeat);
  container.appendChild(lydSpm);
}

function playTheBeat(e) {
  var parent = e.target.parentNode;
  console.log(e.target.parentNode);
  var lydFil = parent.querySelector("audio");
  var isPlaying = e.target.getAttribute("data-isplaying");
  lydFil.play();

  if (isPlaying === "false") {
    lydFil.play();
    isplaying = true;
    e.target.innerHTML = "Pause ";
    e.target.className = "stop";
    console.log(isPlaying);
  } else {
    lydFil.pause();
    isplaying = false;
    e.target.innerHTML = "Gjenoppta "
    e.target.className = "stop";
    console.log(isPlaying);
  }
}

/*
var checkBoxes = document.querySelectorAll("input[type='checkbox']");
for (var i = 0; i < checkBoxes.length; i++) {
  checkBoxes[i].className = "padding";
}*/

var button = document.createElement("div");
button.innerHTML = "Sjekk svar";
button.className = "button";

button.addEventListener("click", finnPoeng);

var poengSum = 0;
var riktige = 0;
var feil = 0;
var antallSporsmaal = 0;

function finnPoeng() {
  var checkBoxes = document.querySelectorAll("input[type='checkbox']");
  for (var i = 0; i < checkBoxes.length; i++) {
    if (checkBoxes[i].checked) {
      if (checkBoxes[i].value === "riktig") {
        poengSum ++;
        riktige ++;
      } else {
        poengSum --;
        feil ++;
      }
    }
    if (checkBoxes[i].value === "riktig") {
      var hake = document.createElement("span");
      hake.innerHTML = "&#9989";
      antallSporsmaal++;
      checkBoxes[i].parentNode.insertBefore(hake, checkBoxes[i]);
    } else {
      var kryss = document.createElement("span");
      kryss.innerHTML = "&#10060";
      checkBoxes[i].parentNode.insertBefore(kryss, checkBoxes[i]);
    }
  }

  /*
  for (var i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].className = "nopadding";
  }
  */

  resultat.innerHTML = "Du fikk " + poengSum + " av " + antallSporsmaal + " poeng! " + "Du hadde " + riktige + " riktig og " + feil + " feil.";
  container.insertBefore(resultat, button);
  button.removeEventListener("click", finnPoeng);
}

container.appendChild(button);

var bildekarusell = document.querySelector(".bildekarusell");
var bildeElementer = document.querySelectorAll(".bildekarusell .bilde");
var indeksSynligBilde = 0;
var TID = 3000;

// Skjuler alle bilder unntatt det første
for (var i = 1; i < bildeElementer.length; i++) {
    bildeElementer[i].style.display = "none";
}

function flyttBilde() {
  var indeksNesteBilde;

  // Bestemmer hva som skal være neste bilde, velger første bilde om siste bildet vises nå
  if (indeksSynligBilde === bildeElementer.length - 1) {
    indeksNesteBilde = 0;
  } else {
    indeksNesteBilde = indeksSynligBilde + 1;
  }

  // Bildet settes inn til høyre for nåværende bilde og animeres inn
  bildeElementer[indeksNesteBilde].style.left = "600px";
  bildeElementer[indeksNesteBilde].style.display = "initial";
  bildeElementer[indeksNesteBilde].style.animation = "innFraHoyre 2s forwards";

  // Synlig bilde animeres ut til venstre
  bildeElementer[indeksSynligBilde].style.animation = "utTilVenstre 2s forwards";

  indeksSynligBilde = indeksNesteBilde;

  setTimeout(flyttBilde, TID);
}

setTimeout(flyttBilde, TID);

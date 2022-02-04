var boks = document.querySelector("div");
var knapp = document.querySelector("button");

knapp.addEventListener("click", knappFunksjon);

function knappFunksjon() {
  boks.classList.toggle("flyttHoyre");

  if (knapp.innerHTML === "Start") {
    knapp.innerHTML = "Tilbake";
  } else {
    knapp.innerHTML = "Start";
  }
}

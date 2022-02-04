var body = document.querySelector("body");
var sirkelEl = document.querySelector("div");

body.addEventListener("mousemove", flyttSirkel);

var konstant = 10;
var bredde1, bredde2;

function flyttSirkel(e) {
  sirkelEl.style.left = (e.clientX/2) + "px";
  sirkelEl.style.top = (e.clientY-50) + "px";
  sirkelEl.style.backgroundColor = "hsl(" + e.clientX + "," + e.clientY + "%, 50%)";
  if (e.clientX < window.innerWidth/2) {
    bredde1 = e.clientX;
    sirkelEl.style.width = bredde1 + "px";
    sirkelEl.style.height = bredde1 + "px";
  } else {
    bredde2 = window.innerWidth - e.clientX;
    sirkelEl.style.width = bredde2 + "px";
    sirkelEl.style.height = bredde2 + "px";
  }
}

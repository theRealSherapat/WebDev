var game = document.querySelector("#game");
var body = document.querySelector("body");
var poengteller = document.querySelector("#poengteller");
var infoboks = document.querySelector("#infoboks");
var startSpillet = document.querySelector("#startSpillet");

// Egenskaper som kan endres --------------------------------------------------
var STARTFART = 150; // antall millisekund slangen bruker på flytte seg en rute
var ANTALL_RUTER_X = 40;
var ANTALL_RUTER_Y = 20;
var FART_OKNING = 12; // antall millisekund gjennomsnittlig fartsøkning per tiende poeng

// visningstiden for candy er fart ganger visningtid for candytypen
var VISNINGSTID_CANDY_ENKEL = 250;
var VISNINGSTID_CANDY_MIDDELS = 125;
var VISNINGSTID_CANDY_VANSKELIG = 50;
var VISNINGSTID_CANDY_SUPER = 20;
// ----------------------------------------------------------------------------

var speed = STARTFART;
var lastTimestamp = 0;
var bredde = game.clientWidth;
var hoyde = game.clientHeight;
var bevegelse = 'x'; // x, y
var retning = 1; // 1, -1
var gameStatus = "running"; // running, failed
var poeng = 0;

var spilleruter = [];
var slange = [{x: ANTALL_RUTER_X / 2 + 1, y: ANTALL_RUTER_Y / 2}, {x: ANTALL_RUTER_X / 2, y: ANTALL_RUTER_Y / 2}];
var candyList = [];

// Initialiserer
for (var i = 0; i < ANTALL_RUTER_Y; i++) {
  spilleruter.push([]);
  var rad = document.createElement("tr");

  for (var j = 0; j < ANTALL_RUTER_X; j++) {
    var rute = document.createElement("td");
    spilleruter[i][j] = rute;
    rad.appendChild(rute);
  }

  game.appendChild(rad);
}

body.addEventListener("keyup", registrerRetningbytte);
var retningbytter = [];

function registrerRetningbytte(e) {

  if (e.key === "ArrowUp") {
    retningbytter.push({bevegelse: 'y', retning: -1});
    startGame();

  } else if (e.key === "ArrowDown") {
    retningbytter.push({bevegelse: 'y', retning: 1});
    startGame();

  } else if (e.key === "ArrowLeft") {
    retningbytter.push({bevegelse: 'x', retning: -1});
    startGame();

  } else if (e.key === "ArrowRight") {
    retningbytter.push({bevegelse: 'x', retning: 1});
    startGame();
  }

}

function byttRetning() {
  var rb;

  do {
    rb = retningbytter.shift();
  } while (rb !== undefined && rb.bevegelse === bevegelse);

  if (rb === undefined) {
    return;
  }

  bevegelse = rb.bevegelse;
  retning = rb.retning;
}

function cloneSlangedel(a) {
  var newDel = {x: a.x, y: a.y};
  return newDel;
}

function clearGrid() {
  for (var i = 0; i < ANTALL_RUTER_Y; i++) {
    for (var j = 0; j < ANTALL_RUTER_X; j++) {
      spilleruter[i][j].className = "";
    }
  }
}

function paintSlange() {
  for (var k = 0; k < slange.length; k++) {
    spilleruter[slange[k].y][slange[k].x].className = "slangeKropp";
  }

  spilleruter[slange[0].y][slange[0].x].className = "slangeHode";
  spilleruter[slange[slange.length - 1].y][slange[slange.length - 1].x].className = "slangeHale";
}

function moveSlange() {
  var tail = slange.pop();

  var head = slange[0];
  var newHead = cloneSlangedel(head);
  newHead[bevegelse] = head[bevegelse] + retning;
  slange.unshift(newHead);
}

function incrementSlangelengde(value) {
  value = typeof value !== 'undefined' ? value : 1;

  for (var i = 0; i < value; i++) {
    slange.push(cloneSlangedel(slange[slange.length - 1]));
  }
}

function checkSlange() {
  var head = slange[0];

  var failBorder = head.x < 0 || head.y < 0 || head.x > ANTALL_RUTER_X - 1 || head.y > ANTALL_RUTER_Y - 1;

  var failSnake = false;
  for (var i = 1; i < slange.length; i++) {
    if (slange[i].x === head.x && slange[i].y === head.y) {
      failSnake = true;
    }
  }

  if (failBorder || failSnake) {
    gameStatus = "failed";

    if (poeng !== 0) {
      infoboks.innerHTML = "Gratulerer! Du fikk " + poeng + " poeng!";
    } else {
      infoboks.innerHTML = "Beklager.. Du fikk " + poeng + " poeng..";
    }
    return false;
  }

  return true;
}

function createCandy() {
  var x = Math.floor(Math.random() * ANTALL_RUTER_X);
  var y = Math.floor(Math.random() * ANTALL_RUTER_Y);

  var candytype = Math.floor(Math.random() * 4) + 1;

  var candy = {x: x, y: y, timestamp: Date.now(), typeNumber: candytype};
  if (candytype === 1) {
    candy.type = "candyEnkel";
    candy.visningtid = VISNINGSTID_CANDY_ENKEL;
  } else if (candytype === 2) {
    candy.type = "candyMiddels";
    candy.visningtid = VISNINGSTID_CANDY_MIDDELS;
  } else if (candytype === 3) {
    candy.type = "candyVanskelig";
    candy.visningtid = VISNINGSTID_CANDY_VANSKELIG;
  } else {
    candy.type = "candySuper";
    candy.visningtid = VISNINGSTID_CANDY_SUPER;
  }

  candyList.push(candy);
}

function paintCandy() {
  for (var i = 0; i < candyList.length; i++) {
    var c = candyList[i];
    spilleruter[c.y][c.x].className = c.type;
  }
}

function addRemoveCandy() {
  var now = Date.now();

  // remove candy
  for (var i = candyList.length - 1; i >= 0; i--) {
    var c = candyList[i];
    if (now - c.timestamp > speed * c.visningtid || c.status === "remove") {
      candyList.splice(i, 1);
    }
  }

  // create candy
  var shouldCreate = Math.random();
  if (candyList.length < 3 && shouldCreate < 0.3) {
    createCandy();
  }
}

function checkCandy() {
  var head = slange[0];

  for (var i = 0; i < candyList.length; i++) {
    var c = candyList[i];
    if (head.x === c.x && head.y === c.y) {
      incrementSlangelengde(c.typeNumber);
      c.status = "remove";
    }
  }
}

function increaseSpeed() {
  speed = STARTFART - slange.length * FART_OKNING / 10;
}

function gameLoop(timestamp) {
  if (gameStatus === "failed") {
    return;
  }

  if (Date.now() - lastTimestamp < speed) {
    window.requestAnimationFrame(gameLoop);
    return;
  }

  byttRetning();
  moveSlange();
  if (checkSlange() === false) {
    return;
  }

  checkCandy();
  addRemoveCandy();
  clearGrid();
  paintCandy();
  paintSlange();

  poeng = slange.length - 2;
  poengteller.innerHTML = poeng;

  increaseSpeed();

  lastTimestamp = Date.now();
  window.requestAnimationFrame(gameLoop);
}

function startGame() {
  startSpillet.style.display = "none";
  window.requestAnimationFrame(gameLoop);
}

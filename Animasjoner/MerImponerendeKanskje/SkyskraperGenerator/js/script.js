var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

for (var stjerne = 0; stjerne < 500; stjerne++) {
  var x = Math.random()*canvas.width;
  var y = Math.random()*canvas.height;
  ctx.fillStyle = "white";
  ctx.fillRect(x, y, 3, 3);
}

var telling = 0;
var avstand = 130;

for (var x = 20; x <= canvas.width - 100; x += 130) {
  telling++;
  var y = Math.floor(Math.random()*230+50);
  var randomNumber = Math.floor(Math.random()*360);
  var tilfeldigFarge = "hsl(" + randomNumber + ", 100%, 60%)";
  ctx.fillStyle = "rgb(54, 54, 54)";
  ctx.fillRect(x, y, 100, canvas.height);
  if (telling === 1) {
    for (var hoyde = 480; hoyde > y; hoyde-= 20) {
      ctx.fillStyle = tilfeldigFarge;
      ctx.fillRect(32.5, hoyde, 10, 10);
      ctx.fillRect(55, hoyde, 10, 10);
      ctx.fillRect(78, hoyde, 10, 10);
      ctx.fillRect(100, hoyde, 10, 10);
    }
  } else if (telling === 2) {
    for (var hoyde = 480; hoyde > y; hoyde-= 20) {
      ctx.fillStyle = tilfeldigFarge;
      ctx.fillRect(32.5 + avstand, hoyde, 10, 10);
      ctx.fillRect(55 + avstand, hoyde, 10, 10);
      ctx.fillRect(78 + avstand, hoyde, 10, 10);
      ctx.fillRect(100 + avstand, hoyde, 10, 10);
    }
  } else if (telling === 3) {
    for (var hoyde = 480; hoyde > y; hoyde-= 20) {
      ctx.fillStyle = tilfeldigFarge;
      ctx.fillRect(32.5 + avstand * 2, hoyde, 10, 10);
      ctx.fillRect(55 + avstand * 2, hoyde, 10, 10);
      ctx.fillRect(78 + avstand * 2, hoyde, 10, 10);
      ctx.fillRect(100 + avstand * 2, hoyde, 10, 10);
    }
  } else if (telling === 4) {
    for (var hoyde = 480; hoyde > y; hoyde-= 20) {
      ctx.fillStyle = tilfeldigFarge;
      ctx.fillRect(32.5 + avstand * 3, hoyde, 10, 10);
      ctx.fillRect(55 + avstand * 3, hoyde, 10, 10);
      ctx.fillRect(78 + avstand * 3, hoyde, 10, 10);
      ctx.fillRect(100 + avstand * 3, hoyde, 10, 10);
    }
  } else if (telling === 5) {
    for (var hoyde = 480; hoyde > y; hoyde-= 20) {
      ctx.fillStyle = tilfeldigFarge;
      ctx.fillRect(32.5 + avstand * 4, hoyde, 10, 10);
      ctx.fillRect(55 + avstand * 4, hoyde, 10, 10);
      ctx.fillRect(78 + avstand * 4, hoyde, 10, 10);
      ctx.fillRect(100 + avstand * 4, hoyde, 10, 10);
    }
  } else if (telling === 6) {
    for (var hoyde = 480; hoyde > y; hoyde-= 20) {
      ctx.fillStyle = tilfeldigFarge;
      ctx.fillRect(32.5 + avstand * 5, hoyde, 10, 10);
      ctx.fillRect(55 + avstand * 5, hoyde, 10, 10);
      ctx.fillRect(78 + avstand * 5, hoyde, 10, 10);
      ctx.fillRect(100 + avstand * 5, hoyde, 10, 10);
    }
  }
}

/*
//Tegning av tilfeldige rektangler
function tegnTilfeldigeRektangler(antall) {
  for (var i = 0; i < antall; i++) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var bredde = Math.random() * 60 + 15;
    var lengde = Math.random() * 60 + 15;
    ctx.fillStyle = "hsl(" + i * 30 + ", 100%, 50%)";
    ctx.fillRect(x,y,bredde,lengde);
  }
}

tegnTilfeldigeRektangler(5000);




//Tegning av by med skyskrapere
for (var stjerne = 0; stjerne < 500; stjerne++) {
  var x = Math.random()*canvas.width;
  var y = Math.random()*canvas.height;
  ctx.fillStyle = "white";
  ctx.fillRect(x, y, 1, 1);
}

var telling = 0;
var avstand = 130;

for (var x = 20; x <= canvas.width - 100; x += 130) {
  telling++;
  var y = Math.floor(Math.random()*230+50);
  ctx.fillStyle = "rgb(161, 161, 161)";
  ctx.fillRect(x, y, 100, canvas.height);
  if (telling === 1) {
    for (var hoyde = 480; hoyde > y; hoyde-= 20) {
      ctx.fillStyle = "rgb(236, 255, 19)";
      ctx.fillRect(32.5, hoyde, 10, 10);
      ctx.fillRect(55, hoyde, 10, 10);
      ctx.fillRect(78, hoyde, 10, 10);
      ctx.fillRect(100, hoyde, 10, 10);
    }
  } else if (telling === 2) {
    for (var hoyde = 480; hoyde > y; hoyde-= 20) {
      ctx.fillStyle = "rgb(236, 255, 19)";
      ctx.fillRect(32.5 + avstand, hoyde, 10, 10);
      ctx.fillRect(55 + avstand, hoyde, 10, 10);
      ctx.fillRect(78 + avstand, hoyde, 10, 10);
      ctx.fillRect(100 + avstand, hoyde, 10, 10);
    }
  } else if (telling === 3) {
    for (var hoyde = 480; hoyde > y; hoyde-= 20) {
      ctx.fillStyle = "rgb(236, 255, 19)";
      ctx.fillRect(32.5 + avstand * 2, hoyde, 10, 10);
      ctx.fillRect(55 + avstand * 2, hoyde, 10, 10);
      ctx.fillRect(78 + avstand * 2, hoyde, 10, 10);
      ctx.fillRect(100 + avstand * 2, hoyde, 10, 10);
    }
  } else if (telling === 4) {
    for (var hoyde = 480; hoyde > y; hoyde-= 20) {
      ctx.fillStyle = "rgb(236, 255, 19)";
      ctx.fillRect(32.5 + avstand * 3, hoyde, 10, 10);
      ctx.fillRect(55 + avstand * 3, hoyde, 10, 10);
      ctx.fillRect(78 + avstand * 3, hoyde, 10, 10);
      ctx.fillRect(100 + avstand * 3, hoyde, 10, 10);
    }
  } else if (telling === 5) {
    for (var hoyde = 480; hoyde > y; hoyde-= 20) {
      ctx.fillStyle = "rgb(236, 255, 19)";
      ctx.fillRect(32.5 + avstand * 4, hoyde, 10, 10);
      ctx.fillRect(55 + avstand * 4, hoyde, 10, 10);
      ctx.fillRect(78 + avstand * 4, hoyde, 10, 10);
      ctx.fillRect(100 + avstand * 4, hoyde, 10, 10);
    }
  } else if (telling === 6) {
    for (var hoyde = 480; hoyde > y; hoyde-= 20) {
      ctx.fillStyle = "rgb(236, 255, 19)";
      ctx.fillRect(32.5 + avstand * 5, hoyde, 10, 10);
      ctx.fillRect(55 + avstand * 5, hoyde, 10, 10);
      ctx.fillRect(78 + avstand * 5, hoyde, 10, 10);
      ctx.fillRect(100 + avstand * 5, hoyde, 10, 10);
    }
  }
}




//Tegning av tre
function tegnEtTre(x,y) {
ctx.fillStyle = "rgb(100, 201, 52)";
ctx.fillRect(x, y, 150, 150);

ctx.fillStyle = "rgb(172, 99, 52)";
ctx.fillRect(x + 50, y + 90, 50, 200);
}

tegnEtTre(60,50);
*/

//14.1 - 14.9

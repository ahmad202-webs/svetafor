let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");

let h1Red = document.querySelector(".h1Red");
let h1Yellow = document.querySelector(".h1Yellow");
let h1Green = document.querySelector(".h1Green");

let counter = 25;
let redcounter = 11;
let yellowcounter = 4;
let greencounter = 11;

function resetLights() {
  red.classList.remove("active");
  yellow.classList.remove("active");
  green.classList.remove("active");
  h1Red.innerHTML = "";
  h1Yellow.innerHTML = "";
  h1Green.innerHTML = "";
}

setInterval(() => {
  counter--;

  if (counter > 13) {
    resetLights();
    red.classList.add("active");
    redcounter--;
    h1Red.innerHTML = redcounter;
  }

  if (counter <= 13 && counter > 10) {
    resetLights();
    yellow.classList.add("active");
    yellowcounter--;
    h1Yellow.innerHTML = yellowcounter;
  }

  if (counter <= 10 && counter > 0) {
    resetLights();
    green.classList.add("active");
    greencounter--;
    h1Green.innerHTML = greencounter;
  }

  if (counter === 0) {
    resetLights();
    counter = 23;
    redcounter = 11;
    yellowcounter = 4;
    greencounter = 11;
  }
}, 1000);

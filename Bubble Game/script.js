let bubcont = "";
let newhit;
let score = 0;
function generateBubble() {
  for (let i = 0; i < 126; i++) {
    let randomnum = Math.floor(Math.random() * 10);
    bubcont += `<div class="bubble">${randomnum}</div>`;
    document.querySelector(".content").innerHTML = bubcont;
  }
  bubcont = "";
}

function timeFun() {
  let time = 60;

  setInterval(() => {
    if (time > 0) {
      time--;
      document.getElementById("timer").innerText = time;
    } else {
      document.querySelector(
        ".content"
      ).innerHTML = `Game over Your Score is ${score}`;
    }
  }, 1000);
}

function scoreHandler() {
  score += 10;
  document.getElementById("score").innerText = score;
}

function hitChanger() {
  newhit = Math.floor(Math.random() * 10);
  document.querySelector("#hit").innerText = newhit;
  generateBubble();
  document.querySelector(".content").addEventListener("click", (sag) => {
    let bubnum = Number(sag.target.innerText);

    if (bubnum === newhit) {
      scoreHandler();
      hitChanger();
    }
  });
}

timeFun();
hitChanger();

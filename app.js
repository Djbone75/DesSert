let number = 6;
let total = 0;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let player = 0;

let deRandom, deRandomSmall;

const messageBienvenue = "Bienvenue à Dés Sert !";
const messagePerdant = "désole vous avez fait 1 !";
const messageGagnant = "le gagnant est le joueur numéro " + `${player + 1}`;

const des = document.querySelector("#des");
const desPlayer = document.querySelectorAll("#des-player");

const buttonRoll = document.querySelector("#buttonRoll");
const buttonHold = document.querySelector("#buttonHold");
const buttonNewGame = document.querySelector("#buttonNewGame");
const totalPlayer = document.querySelectorAll("#total-player");
const container = document.querySelector("#container");
const scPlayer1 = document.querySelector("#totalPlayer1");
const scPlayer2 = document.querySelector("#totalPlayer2");
const whoplay = document.querySelectorAll("#whoPlay");
const modal = document.querySelector("#modal");

buttonRoll.addEventListener("click", lanceDe);
buttonHold.addEventListener("click", Hold);
buttonNewGame.addEventListener("click", beginning);

deRandom = document.createElement("img");
deRandom.className = "w-32 h-32";
des.append(deRandom);
beginning();

function beginning() {
  player = 0;
  reset();
  showMessage(messageBienvenue);
  deRandom.setAttribute("src", "src/img/d_" + number + ".jpg");
  deRandomSmall = document.createElement("img");
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  scPlayer1.textContent = scorePlayer1;
  scPlayer2.textContent = scorePlayer2;
  totalPlayer.forEach((total) => {
    total.textContent = "00";
  });
  whoplay[1].classList.remove("bg-red-500");

  whoplay[0].classList.add("bg-red-500");
  showMessage(messageBienvenue);

  return;
}

function lanceDe() {
  number = Math.floor(Math.random() * 6) + 1;

  if (number != 1) {
    total += number;
    deRandom.setAttribute("src", "src/img/d_" + number + ".jpg");
    deRandomSmall = document.createElement("img");
    deRandomSmall.setAttribute("src", "src/img/d_" + number + ".jpg");
    deRandomSmall.className = "w-10 h-10";
    desPlayer[player].append(deRandomSmall);
    totalPlayer[player].textContent = total;

    return;
  }
  showMessage(messagePerdant);
  ChangePlayer();
}

function Hold() {
  if (player == 0) {
    scorePlayer1 += total;
    if (scorePlayer1 > 100) {
      showMessage(messageGagnant);
      setTimeout(() => {
        beginning();
      }, 2000);
      return;
    }
    scPlayer1.textContent = scorePlayer1;
    ChangePlayer();
    return;
  }
  scorePlayer2 += total;
  if (scorePlayer2 > 100) {
    showMessage(messageGagnant);
    setTimeout(() => {
      beginning();
    }, 2000);
    return;
  }
  scPlayer2.textContent = scorePlayer2;
  ChangePlayer();
  return;
}

function ChangePlayer() {
  reset();
  container.classList.toggle("player2");
  whoplay[player].classList.remove("bg-red-500");
  player == 0 ? (player = 1) : (player = 0);
  whoplay[player].classList.add("bg-red-500");
  return;
}

function reset() {
  total = 0;
  desPlayer.forEach((des) => {
    des.innerHTML = "";
  });
  totalPlayer.forEach((totals) => {
    totals.textContent = "00";
  });

  container.classList.remove("player2");
  return;
}

function showMessage(message) {
  modal.innerHTML = `<div class="flex h-full items-center justify-center">
        <p class="bg-white p-10 my-auto border-solid border-8 border-black ring-2 ring-red-500 uppercase">${message}  </p>
      </div>;`;
  container.classList.add("blur");
  modal.style.display = "block";

  setTimeout(() => {
    container.classList.remove("blur");
    modal.style.display = "none";
  }, 2000);
  return;
}

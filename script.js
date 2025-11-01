let btns = document.querySelectorAll(".game-btn");

let reset = document.querySelector("#reset");
let newg = document.querySelector("#new-game");

let ply1 = document.querySelector("#ply1");
let ply2 = document.querySelector("#ply2");

let turnX = true;

const arr = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

let ply1Score = 0;
let ply2Score = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnX) {
      btn.innerText = "X";
      turnX = false;
    } else {
      btn.innerText = "O";
      turnX = true;
    }
    btn.disabled = true;

    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of arr) {
    let pos1Val = btns[pattern[0]].innerText;
    let pos2Val = btns[pattern[1]].innerText;
    let pos3Val = btns[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        if (pos1Val === "X") Xwin();
        else Owin();
      }
    }
  }
};

const disable = () => {
  btns.forEach((btn) => {
    btn.disabled = true;
  });
};

const enable = () => {
  btns.forEach((btn) => {
    btn.disabled = false; 
    btn.innerText = "";
  });
  turnX = true;
};

const Xwin = () => {
  disable();
  ply1Score++;
  ply1.innerText = ply1Score;
  alert("Player 1 (X) wins!!");
};

const Owin = () => {
  disable();
  ply2Score++;
  ply2.innerText = ply2Score;
  alert("Player 2 (O) wins!!");
};

reset.addEventListener("click",enable);

newg.addEventListener("click", () => {
  ply1Score = 0;
  ply2Score = 0;
  ply1.innerText = "0";
  ply2.innerText = "0";
  enable();
});

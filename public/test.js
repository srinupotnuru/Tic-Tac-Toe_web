card = [
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""]
];
let count = 9;
let bot = "X";
let human = "O";
let curr = human;
function move(str) {
  ind1 = parseInt(str[0]);
  ind2 = parseInt(str[1]);
  if (curr == human) {
    if (card[ind1][ind2] == "") {
      document.getElementById(str).style.backgroundColor = "blue";
      count--;
      var temp = checkWinner();
      if (count == 0) {
        console.log("tie");
        draw();
      }
      if (temp == "b") {
        drawa();
      }
      card[ind1][ind2] = human;
      curr = bot;
      if (count == 0) {
        draw();

        return;
      }
      bestMove();
      var temp = checkWinner();
      if (temp == "b") {
        drawa();
      }
    }
  }
}
function bestMove() {
  let bestScore = -Infinity;
  let pre;
  let var1;
  let var2;
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (card[i][j] == "") {
        card[i][j] = bot;
        let temp = checkWinner();
        if (count == 0) {
          console.log("tie");
        }
        if (temp == "X") console.log("x wins");
        if (temp == "O") console.log("o wins");
        let score = myAlgo(card, 0, false);
        card[i][j] = "";
        if (score > bestScore) {
          bestScore = score;
          var1 = i;
          var2 = j;
        }
      }
    }
  }
  st = var1.toString();
  st = st + var2.toString();
  card[var1][var2] = bot;
  document.getElementById(st).style.backgroundColor = "green";
  count--;
  if (count == 0) return;
  curr = human;
}
let scores = {
  X: 10,
  O: -10,
  tie: 0
};
function myAlgo(card, dep, isMax) {
  let result = checkWinner();
  if (result != null) {
    return scores[result];
  }
  if (isMax) {
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (card[i][j] == "") {
          card[i][j] = bot;
          let score = myAlgo(card, dep + 1, false);
          card[i][j] = "";
          if (score > bestScore) {
            bestScore = score;
          }
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (card[i][j] == "") {
          card[i][j] = human;
          let score = myAlgo(card, dep + 1, true);
          card[i][j] = "";
          if (score < bestScore) {
            bestScore = score;
          }
        }
      }
    }
    return bestScore;
  }
}

function equal(a, b, c) {
  return a == b && b == c && a != "";
}

function checkWinner(card) {
  for (let i = 0; i < 3; i++) {
    if (equal(this.card[i][0], this.card[i][1], this.card[i][2]))
      return this.card[i][0];
    if (equal(this.card[0][i], this.card[1][i], this.card[2][i]))
      return this.card[0][i];
  }
  if (equal(this.card[0][0], this.card[1][1], this.card[2][2]))
    return this.card[0][0];
  if (equal(this.card[2][0], this.card[1][1], this.card[0][2]))
    return this.card[2][0];

  let count = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (this.card[i][j] == "") count++;
    }
  }

  if (count == 0) return "tie";
}
function myfunc(str1) {
  document.getElementById(str1).style.display = "none";
}
function draw() {
  alert("Its a Draw");
}
function drawa() {
  alert("a wins");
}

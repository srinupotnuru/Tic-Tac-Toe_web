function bestMove(card, flag) {
  let bestScore = -Infinity;
  let pre;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (card[i][j] == 0) {
        card[i][j] = 1;
        let score = myAlgo(card, 0, false);
        bestScore = max(score, bestScore);
        card[i][j] = 0;
      }
    }
  }
  card[performance.i][performance.j] = 1;
  flag = flag ^ 1;
}
function myAlgo(card, dep, isMax) {
  if (isMax) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (card[i][j] == 0) {
          card[i][j] = 1;
        }
      }
    }
  }
}

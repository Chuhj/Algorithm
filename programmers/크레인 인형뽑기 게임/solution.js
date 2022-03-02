function solution(board, moves) {
  let answer = 0;
  let basket = [];

  for (let i = 0; i < moves.length; i++) {
    const move = moves[i] - 1;
    let isPopped = false; // 해당 번호의 인형을 뽑았는지 확인

    for (let j = 0; j < board.length; j++) {
      const floor = board[j];
      if (!floor[move] || isPopped) continue;

      isPopped = true;

      let top = basket[basket.length - 1];
      if (top === floor[move]) {
        // 뽑은 인형이 바구니 맨 위의 인형과 같을 때
        answer += 2;
        floor[move] = 0;
        basket.pop();
        continue;
      }

      basket.push(floor[move]);
      floor[move] = 0;
    }
  }

  return answer;
}

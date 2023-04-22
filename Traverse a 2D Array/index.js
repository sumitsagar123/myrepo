function traverse2dArray(N, M, matrix) {
  //write code here

  let bag = "";
  for (let i = 0; i < M; i++) {
    for (let j = N - 1; j >= 0; j--) {
      bag += matrix[j][i] + " ";
    }
  }
  console.log(bag);
}

traverse2dArray(3, 3, [
  [2, 3, 9],
  [5, 6, 7],
  [8, 9, 0],
]);

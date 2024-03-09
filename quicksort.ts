const { log } = require("console");

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  log(pivot, ":--pivot-)");
  const left = [];
  const right = [];
  for (let i = 0; i <= arr[arr.length - 1]; i++) {
    log(arr[i], ":---arr i ");
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  log(...left.concat(pivot, ...right))
  return [quickSort(...left), pivot, quickSort(...right)];
};

quickSort([-6, 20, 8, -2, 4]);

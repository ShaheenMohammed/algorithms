function checkSquare(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let val in frequencyCounter1) {
    if (!(val ** 2 in frequencyCounter2)) {
      return false;
    }
  }
  return true;
}

console.log(checkSquare([1, 2, 3, 4, 4], [1, 4, 16, 16]));
console.log(checkSquare([1, 2, 3, 4, 4], [1, 4, 16, 10, 16]));
console.log(checkSquare([1, 2, 3, 4], [1, 4, 9, 16]));

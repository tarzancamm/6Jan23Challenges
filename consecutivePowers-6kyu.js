const sumDigPow = (a, b) => {
  let answer = [];
  let sum = 0;

  for (let i = a; i <= b; i++) {
    let arr = i.toString().split("");
    for (let k = 0; k < arr.length; k++) {
      sum += Math.pow(arr[k], k + 1);
    }
    if (sum === i) {
      answer.push(i);
    }
    sum = 0;
  }
  return answer;
};

console.log(sumDigPow(1, 10));
console.log(sumDigPow(1, 100)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

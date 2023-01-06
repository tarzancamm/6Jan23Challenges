// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

const findOdd = (arr) => {
  let answer;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      let negativeNum = arr.filter((element) => element === arr[i]);
      if (negativeNum.length % 2 === 1) {
        let singleNum = negativeNum[0];
        answer = singleNum;
      }
    } else {
      let num = arr.filter((element) => element === arr[i]);
      if (num.length % 2 === 1) {
        let singleNum = num[0];
        answer = singleNum;
      }
    }
  }
  return answer;
};

console.log(findOdd([1, 1, 2])); // 2
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); //5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5, -1, -1])); //-1
console.log(findOdd([7])) //7
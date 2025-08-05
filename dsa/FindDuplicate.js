// find the duplicate in array

let array = [1, 1, 3, 4, 5, 5, 6, 4];

const findDuplicate = (array) => {
  let countNum = {};

  for (let num of array) {
    countNum[num] = (countNum[num] || 0) + 1;
  }
  let duplicate = [];

  for (let key in countNum) {
    if (countNum[key] > 1) {
      duplicate.push(Number(key));
    }
  }
  return duplicate;
};

console.log(findDuplicate(array));

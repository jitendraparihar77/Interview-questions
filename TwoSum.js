// find the target to sum two value and return the index numbers

let array = [2, 7, 10];
let target = 9;

// without hash table
const twoSum = (array, target) => {
  let found = false;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
        found = true;
      }
    }
  }
  if (!found) {
    console.log("target not found");
  }
};



console.log(twoSum(array, target));

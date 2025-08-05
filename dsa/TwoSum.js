// find the target to sum two value and return the index numbers

let array = [2, 7, 10];
let target = 9;

// without hash table
// const twoSum = (array, target) => {
//   let found = false;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === target) {
//         return [i, j];
//         found = true;
//       }
//     }
//   }
//   if (!found) {
//     console.log("target not found");
//   }
// };

// with hash table

const twoSum = (array, target) => {
  let map = {};

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    map[array[i]] = i;
  }
  return null;
};

console.log(twoSum(array, target));

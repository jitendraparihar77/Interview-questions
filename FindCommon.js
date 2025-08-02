// find common element in array

const findCommon = (array1, array2) => {
  let obj = {};
  for (let i = 0; i < array1.length; i++) {
    obj[array1[i]] = true;
  }

  for (let j = 0; j < array2.length; j++) {
    if (obj[array2[j]]) {
      return true;
    }
  }
  return false;
};

console.log(findCommon([1, 2, 8], [4, 6, 7]));

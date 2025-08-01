// find the Minimum and Maximum

let array = [1, 4, 0, 5, 3, 2];

const findMinMax = (array) => {
  let max = array[0];
  let min = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    } else if (array[i] < min) {
      min = array[i];
    }
  }
  return [min, max];
};

let result = findMinMax(array);
console.log(result);

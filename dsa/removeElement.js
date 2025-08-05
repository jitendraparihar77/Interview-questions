// remove given value in array

let array = [3, 2, 2, 3];
let value = 3;

const removeElement = (array, value) => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== value) {
      result[result.length] = array[i];
    }
  }
  return result;
};

console.log(removeElement(array, value));

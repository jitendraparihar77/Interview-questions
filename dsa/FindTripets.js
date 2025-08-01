// find the target add 3 numbers and get the result 0;

let array = [1, 2, 0, -1, -3];

const findTriplets = () => {
  let found = false;

  for (let i = 0; i < array.length - 2; i++) {
    for (let j = i + 1; j < array.length - 1; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === 0) {
          console.log(array[i], array[j], array[k]);
          found = true;
        }
      }
    }
  }
  if (!found) {
    console.log("target not found");
  }
};

let result = findTriplets(array);

console.log(result);

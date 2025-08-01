// find the longest string in a array

let array = ["apple", "orange", "mango", "pea"];

const findLongestString = (array) => {
  let longestString = "";

  for (let i = 0; i < array.length; i++) {
    let currentString = array[i];
    if (currentString.length > longestString.length) {
      longestString = currentString;
      
    }
  }
  return longestString;
};

let result = findLongestString(array);
console.log(result);

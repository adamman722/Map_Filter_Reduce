import Emoji from "./emojipedia";
var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// function double(x) {
//   return x * 2;
// }

// const newNumbers = numbers.map(double);
// console.log(newNumbers);
//Filter - Create a new array by keeping the items that return true.

// const newArray = numbers.filter(function (num) {
//   return num > 10;
// });

// var newArray = [];
// //below is the old way
// numbers.forEach(function (num) {
//   if (num < 10) {
//     newNumbers.push(num);
//   }
// });

//Reduce - Accumulate a value by doing something to each item in an array.

// var numbersss = numbers.reduce(function (Accumulate, currentNumber) {
//   console.log("accumulate =" + Accumulate);
//   console.log("currentNumber =" + currentNumber);
//   return Accumulate + currentNumber;
// });
// console.log(numbersss);
//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

function RemoveOthers(emojipedia) {
  if (emojipedia.meaning.length > 100) {
    emojipedia.meaning = emojipedia.meaning.substr(0, 100);
  }

  return emojipedia.meaning;
}

let newArray = Emoji.map(RemoveOthers);

console.log(newArray);

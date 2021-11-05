let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

//Print Odd Numbers in an array Using Anonymous Function
const getOddNumbers = function () {
  for (const odd of numbers) {
    if (odd % 2 !== 0) {
      console.log(`Odd Numbers in an array are: ${odd}`);
    }
  }
};
getOddNumbers();

//Print Odd Numbers in an array Using IIFE
(function () {
  for (const odd of numbers) {
    if (odd % 2 !== 0) {
      console.log(`Odd Numbers in an array are: ${odd}`);
    }
  }
})(numbers);

//Convert all the strings to title caps in a string array using Anonymous Function
let strings = ["India", "will", "win", "the", "world", "cup"];

const changetoTitleCase = function(){
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].charAt(0).toUpperCase() + strings[i].slice(1);
  }
  return strings.join(' ');
}
console.log(changetoTitleCase());

//Convert all the strings to title caps in a string array using IIFE
(function () {
  for (let i in strings) {
    strings[i] = strings[i].charAt(0).toUpperCase() + strings[i].slice(1);
  }
  console.log(strings.join(" "));
})(strings);

//Sum of all numbers in an array using Anonymous Function
const getSumofArray = function () {
  let sum = 0;
  for (let i in numbers){
    sum += numbers[i];
  }return sum;
}
console.log(getSumofArray());

//Sum of all numbers in an array using IIFE
(function () {
  let sum = 0;
  for (let i in numbers){
    sum += numbers[i];
  }
  console.log(sum);
})();

//Return all the prime numbers in an array using Anonymous Function
const getPrimeNumbers = function (num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(numbers.filter(getPrimeNumbers));

//Return all the prime numbers in an array using IFE
(function (num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
})(numbers);
console.log(numbers.filter(getPrimeNumbers));

//Median of two sorted arrays of same size using Anonymous Function
let num1 = [1, 3, 2];
let num2 = [5, 6, 4];
let arr = [...num1, ...num2];
const median = function (arr) {
  const midNum = Math.floor(arr.length / 2),
    sortedArray = [...arr].sort((a, b) => a - b);
  if (arr.length % 2 !== 0) {
    return sortedArray[midNum];
  } else {
    return (sortedArray[midNum - 1] + sortedArray[midNum]) / 2;
  }
};
console.log(median(arr));

//Median of two sorted arrays of same size using IIFE
(function (arr) {
  const midNum = Math.floor(arr.length / 2),
    sortedArray = [...arr].sort((a, b) => a - b);
  if (arr.length % 2 !== 0) {
    let result = sortedArray[midNum];
    console.log(result);
  } else {
    let result = (sortedArray[midNum - 1] + sortedArray[midNum]) / 2;
    console.log(result);
  }
})(arr);

//Remove duplicates from an array using Anonymous Function
let numArray = [11, 10, 11, 5, 5];
let removeDuplicates = function(num) {
  return num.filter((value, index) => num.indexOf(value) === index);
}
console.log(removeDuplicates(numArray));

//Remove duplicates from an array using IIFE
(function(num) {
  let result = num.filter((value, index) => num.indexOf(value) === index);
  console.log(result);
})(numArray);

// Rotate an array by k times using Anonymous Function
const rotateArray = function(num, k) {
  for (let i = 0; i < k; i++) {
      num.unshift(num.pop());
  }
  return num;
}
console.log(rotateArray(numbers, 3));

//Rotate an array by k times using IIFE
(function(num, k) {
  for (let i = 0; i < k; i++) {
      num.unshift(num.pop());
  }
  console.log(num);
})(numbers, 4);

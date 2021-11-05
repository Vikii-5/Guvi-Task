//Print Odd Numbers in an array Using Arrow Function
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const getOddNumbers = () => {
  for (const odd of numbers) {
    if (odd % 2 !== 0) {
      console.log(`Odd Numbers in an array are: ${odd}`);
    }
  }}
getOddNumbers();

//Convert all the strings to title caps in a string array using Arrow Function
let strings = ["India", "will", "win", "the", "world", "cup"];

const changetoTitleCase = () => {
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].charAt(0).toUpperCase() + strings[i].slice(1);
  }
  return strings.join(' ');
}
console.log(changetoTitleCase());

//Sum of all numbers in an array using Arrow Function
const getSumofArray = () => {
  let sum = 0;
  for (let i in numbers){
    sum += numbers[i];
  }return sum;
}
console.log(getSumofArray());

//Return all the prime numbers in an array using Arrow Function
const getPrimeNumbers = (num) => {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(numbers.filter(getPrimeNumbers));

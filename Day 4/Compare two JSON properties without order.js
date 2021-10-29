// Comparing JSON using Lodash isEqual() method
let object1 = { name: "Person 1", age: 5 };
let object2 = { age: 5, name: "Person 1" };

let result = _.isEqual(object1, object2);
console.log(result);
//true



// Comparing JSON using function
const obj1 = { name: "Person 1", age: 5 };
const obj2 = { age: 5, name: "Person 1" };

// Creating isEqual() Function to compare JSON
function isEqual(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  // Checking Keys are same
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  // Checking Values are same
  for (let objKey in obj1Keys) {
    if (obj1[objKey] !== obj2[objKey]) {
      return false;
    }
  }
  return true;
}
console.log(isEqual(obj1, obj2));
//true

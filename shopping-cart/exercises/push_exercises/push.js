// ========================================

let countries = [];
countries.push("Mexico");
countries.push("South Korea", "USA");
console.log(countries);

// Exercise 1: Basic `push()` method
// STEP 1: Create an empty array named "cars".
// STEP 2: Create an array named "carsToPush" containing car brand names.
// STEP 3: Add all elements from "carsToPush" into the "cars" array using push().
// STEP 4: Log the updated contents of the "cars" array.
let cars = [];
let carsToPush = ["BMW", "Mercedes", "Toyota"];
cars.push(carsToPush[0], carsToPush[2]);
console.log(cars);

// ========================================
// Exercise 2: Adding Multiple Elements with `push()`
// STEP 1: Create an array named "cities" with two city names.
// STEP 2: Add three more city names directly into the "cities" array using push().
// STEP 3: Log the updated contents of the "cities" array.
let cities = ["New York", "Philly"];
cities.push("San Francisco", "San Gabriel", "Alantic City");
console.log(cities);

// ========================================
// Exercise 3: Pushing Elements Using a Loop
// STEP 1: Create an empty array named "numbers".
// STEP 2: Use a loop to push numbers 1 through 5 into the "numbers" array.
// STEP 3: Log the contents of the "numbers" array.

let numbers = [];
for (let i = 1; i <= 5; i++) {
  numbers.push(i);
}
console.log(numbers);

// ========================================
// Exercise 4: Pushing Objects into an Array
// STEP 1: Create an empty array named "students".
// STEP 2: Define two objects named "alice" and "bob", each containing name and age.
// STEP 3: Add both objects to the "students" array using push().
// STEP 4: Log the contents of the "students" array.
let students = [];
const alice = {
  name: "Alice",
  age: 18,
};
const bob = {
  name: "Bob",
  age: 22,
};
students.push(alice, bob);
console.log(students);

// ========================================
// Exercise 5: Pushing Arrays into an Array (Nested Arrays)
// STEP 1: Create an empty array named "nestedArray".
// STEP 2: Define three separate arrays named "arr1", "arr2", and "arr3".
// STEP 3: Add all three arrays into "nestedArray" using push().
// STEP 4: Log the contents of the "nestedArray".
let nestedArray = [];
let arr1 = ["oranges", "strawberries", "bananas"];
let arr2 = [5, 6, 7, 8, 9];
let arr3 = ["a", "b", "c", "d"];

// nestedArray.push(...arr1);
// nestedArray.push(...arr2);
// nestedArray.push(...arr3);
nestedArray.push(arr1, arr2, arr3);

console.log(nestedArray);

// ========================================
// Exercise 6: Using Conditional Statements with push()
// STEP 1: Create an empty array named "evenNumbers".
// STEP 2: Create a function named "isEven" to check if a number is even.
// STEP 3: Loop from 1 to 10 and push even numbers into the array.
// STEP 4: Log the contents of the "evenNumbers" array.

let evenNumbers = [];
function isEven() {
  for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
      evenNumbers.push(i);
    }
  }
}
isEven();
console.log(evenNumbers);

let evenNumbers1 = [];
function isEven(n) {
  return n % 2 === 0;
}

for (let i = 1; i <= 10; i++) {
  if (isEven(i)) {
    evenNumbers1.push(i);
  }
}
console.log(evenNumbers1);

// ========================================
// Exercise 7: Merging Arrays Using push()
// STEP 1: Create two arrays named "array1" and "array2".
// STEP 2: Use push() and the spread operator to merge "array2" into "array1".
// STEP 3: Log the contents of the merged "array1".
const array1 = ["ubuntu"];
const array2 = ["windows", "mac", "mint"];
array1.push(...array2);
console.log(array1);

// array1 = ["new"];

// ========================================
// Exercise 8: Using push() with User Input
// STEP 1: Create an empty array named "userInputs".
// STEP 2: Dynamically create and add three input fields to the page.
// STEP 3: Add a button labeled "Submit Inputs".
// STEP 4: When clicked, collect input values and push them into the array.
// STEP 5: Log the contents of the "userInputs" array.

let userInputs = [];

for (let i = 0; i < 3; i++) {
  let input = document.createElement("input");
  input.placeholder = "Submit Inputs";
  document.getElementById("input-container").appendChild(input);
}
let submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", () => {
  let inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    userInputs.push(input.value);
  });
  console.log(userInputs);
});

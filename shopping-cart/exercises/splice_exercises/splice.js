// 🧠 Introduction to splice()
// splice() allows you to add, remove, or replace elements in an array at any position.

// Exercise 1: Remove elements using splice()
// STEP 1: Create an array of animals
// STEP 2: Use splice to remove "Rabbit"
// STEP 3: Log the updated array

let animals = ["Dog", "Cat", "Rabbit", "Fish"];
animals.splice(2, 1);
console.log(animals);

// Exercise 2: Insert elements using splice()
// STEP 1: Create an array of colors
// STEP 2: Use splice to insert "Yellow" between "Red" and "Blue"
// STEP 3: Log the updated array

let colors = ["Red", "Blue"];
colors.splice(1, 0, "Yellow");
console.log(colors);

// Exercise 3: Replace elements using splice()
// STEP 1: Create an array of tools
// STEP 2: Replace "Hammer" with "Drill"
// STEP 3: Log the updated array
let tools = ["Wrench", "Screwdriver", "Hammer"];
tools.splice(2, 1, "Drill");
console.log(tools);

// Exercise 4: Remove all elements from an index
// STEP 1: Create an array of letters
// STEP 2: Remove all letters starting from index 2
// STEP 3: Log the updated array
let letters = ["A", "B", "C", "D"];
letters.splice(2);
console.log(letters); //['A','B']

// Exercise 5: Insert multiple elements
// STEP 1: Create an array with [1, 5]
// STEP 2: Insert 2, 3, 4 between 1 and 5
// STEP 3: Log the updated array

let nums = [1, 5];
nums.splice(1, 0, 2, 3, 4);
console.log(nums);

// Exercise 6: Replace multiple elements
// STEP 1: Create an array of gadgets
// STEP 2: Replace "Tablet" and "Laptop" with "Smartwatch" and "Drone"
// STEP 3: Log the updated array
let gadgets = ["Phone", "Tablet", "Laptop", "Camera"];
gadgets.splice(1, 2, "Smartwatch", "Drone");
console.log(gadgets);

// Exercise 7: Remove first item
// STEP 1: Create an array of drinks
// STEP 2: Remove the first item using splice()
// STEP 3: Log the updated array
let drinks = ["Sprite", "Dite Pepsi", "Bubbl`r", "환타"];
drinks.splice(0, 1);
console.log(drinks);

// Exercise 8: Add item at beginning
// STEP 1: Create an array of programming languages
// STEP 2: Use splice to add "HTML" at the beginning
// STEP 3: Log the updated array

let langs = ["Python", "JavaScript", "C++"];
langs.splice(0, 0, "HTML");
console.log(langs);

// Replace multiple elements

// Create an array of different raw/cooked fish
// replace squid and tuna with salmon and flatfish
// log and update array
let fish = ["Squid", "Tuna", "Yellowtail", "Shrimp"];
fish.splice(0, 2, "salmon", "flatfish");
console.log(fish);

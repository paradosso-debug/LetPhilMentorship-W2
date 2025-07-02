// =============================
//  OBJECT DESTRUCTURING
// =============================
// STEP 1: Create an object called 'user' with name, age, and country
// STEP 2: Destructure name and age, then log them

const user = { name: "Nico", age: 28, country: "Ireland" };
const { name, age } = user;
console.log(name);
console.log(age);

// STEP 3: Create a 'settings' object with darkMode and notifications
// STEP 4: Destructure darkMode and log it
const settings = { darkMode: true, notifications: false };
const { darkMode } = settings;
console.log(darkMode);

// STEP 5: Create a 'car' object and destructure make and model

// STEP 6: Create a 'book' object and destructure title and pages

const car = { make: "Ford", model: "Mustang", year: 1970 };
const book = { title: "Lord of the rings", pages: 1000, author: "Tolkien" };

const { make, model } = car;
const { title, pages } = book;
console.log(make);
console.log(title);

// =============================
//  ARRAY DESTRUCTURING
// =============================
// STEP 7: Create a 'fruits' array and destructure the first two fruits

const fruits = ["mango", "kiwi", "dragon fruit"];
const [firstFruit, secondFruit] = fruits;
console.log(firstFruit, secondFruit);

// STEP 8: Create a 'numbers' array and destructure the first two values
const numbers = [1, 2, 3, 4, 5, 6, 7];
const [value1, value2] = numbers;
console.log(value1);
console.log(value2);

// STEP 9: Create a 'colors' array and destructure the third item
const colors = ["red", "green", "blue"];
const [, , thirdColor] = colors;
console.log(thirdColor);

// STEP 10: Create a 'tasks' array and destructure all three items
const tasks = ["write list", "walk outside", "drink water"];
const [task1, task2, task3] = tasks;
console.log(`Tasks: ${task1}, ${task2},${task3}`);

// =============================
//  FUNCTION PARAMS DESTRUCTURING
// =============================
// STEP 16: Create function printUser({ name, age }) and log values

function printUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

printUser({ name: "Arvin", age: 27 });

// STEP 17: Create showProduct({ title, stock }) and log values
function showProduct({ title, stock }) {
  console.log(`Title: ${title}, Stock: ${stock}`);
}

showProduct({ title: "Mouse", stock: 30 });

// STEP 18: Create renderCity({ name, population }) and log values

function renderCity({ name, population }) {
  console.log(`Name ${name}, population ${population}`);
}

renderCity({ name: "CDMX", population: 1000000 });

// STEP 19: Create logBook({ title, pages }) and log values

function logBook({ title, pages }) {
  console.log(`Title: ${title}, Pages: ${pages}`);
}

logBook({ title: "Encyclopedia", pages: 500 });

// =============================
//  VANILLA JS - REACT STYLE
// =============================
// STEP 11: Create a 'props1' object with name and age
// STEP 12: Destructure and use document.body.innerText to display them

const props1 = { name: "Jocelin", age: 32 };
const { name: x1, age: x2 } = props1;
document.body.innerText = `Hello ${x1}, age ${x2}`;

// STEP 13: Do the same with a 'product' object (item, price)
const product = { item: "keyboard", price: 90 };
const { item: x, price: y } = product;
document.body.innerText = `Item: ${x}, Price: ${y}`;

// STEP 14: Do the same with a 'weather' object (city, temp)

const weather = { city: "London", temp: 5 };
const { city, temp } = weather;
document.body.innerText = `City: ${city}, Temp: ${temp}`;

// STEP 15: Do the same with a 'movie' object (name, rating)

const movie = { name1: "F1", rating: 90 };
const { name1, rating } = movie;
document.body.innerText = `Movie Name: ${name1}, Rating: ${rating}`;

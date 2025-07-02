// =============================
// BASIC PROPS STYLE (Intro to props via objects and functions)
// =============================

// STEP 1: Create a function called displayUser(props)
// STEP 2: Inside the function, access props.name and props.age and log them
// STEP 3: Create a user object with name and age, and call displayUser(user)

function displayUser(props) {
  console.log("Name:", props.name);
  console.log("Age:", props.age);
}
const user = {
  name: "John",
  age: 32,
};

displayUser(user);

// STEP 4: Create a function called showProduct(props)
// STEP 5: Access props.title and props.price and log them
// STEP 6: Create a item object and call showProduct(product)
function showProduct(props) {
  console.log("Title: ", props.title);
  console.log("Price: ", props.price);
}

const item = {
  title: "Mouse",
  price: 80,
};

showProduct(item);

// =============================
//  VANILLA JS - REACT STYLE (props object used in document.body)
// =============================

// STEP 1: Create a 'props1' object with name and age
// STEP 2: Access props1.name and props1.age and use document.body.innerText to show them

const props1 = { name: "Nico", age: "18" };
document.body.innerText = `Hello ${props1.name}, age ${props1.age}`;

// STEP 3: Create a 'item2' object with title and price
// STEP 4: Show item title and price in document.body.innerText
const item2 = { title: "tablet", price: 500 };
document.body.innerText = `Item: ${item2.title} \nPrice: $${item2.price}`;

// STEP 5: Create a 'weather' object with city and temp
// STEP 6: Show city and temp in document.body.innerText
const weather = { city: "New York", temp: 98 };
document.body.innerText = `City: ${weather.city}. Temp ${weather.temp}`;

// STEP 7: Create a 'movie' object with name and rating
// STEP 8: Show movie rating in document.body.innerText
const movie = { name: "Pretty woman", rating: 100 };
document.body.innerText = ` Name: ${movie.name} Rating: ${movie.rating}`;

// =============================
// FUNCTION PARAMS (props passed into functions)
// =============================

// STEP 9: Define a function logUser(props) and access props.name and props.age

function logUser(props) {
  console.log(`User: ${props.name}, Age: ${props.age}`);
}

logUser({ name: "Luca", age: 45 });

// STEP 10: Define a function showCity(props) with city and country
function showCity(props) {
  console.log(`City: ${props.city}, Country: ${props.country}`);
}

showCity({ city: "Los Angeles", country: "USA" });

// STEP 11: Define a function displayBook(props) with title and author
function displayBook(props) {
  console.log(`Title: ${props.title} Author: ${props.author}`);
}

displayBook({ title: "clean code", author: "Rober Cecil Martin" });

// STEP 12: Define a function productInfo(props) with title and price
function productInfo(props) {
  console.log(`Title:${props.title},Price:${props.price} `);
}
productInfo({ title: "jays book", price: 124000000000 });

// =============================
// OBJECT STYLE PRACTICE
// =============================

// STEP 13: Create a props object and log props.name and props.age

const props = { name: "Tiago", age: 47 };
console.log("Name:", props.name);
console.log("Age", props.age);

// STEP 14: Pass props into a function and use dot notation inside
function myFunction(props) {
  console.log("Name: ", props.name);
  console.log("Age: ", props.age);
}

myFunction(props);

// STEP 15: Create a product object and pass it into a displayProduct function
const product = { item: "Keyboard", price: 90 };

function displayProduct(props) {
  // console.log("Item: ", props.item);
  // console.log("Price: ", props.price);
  console.log(`Item: ${props.item}, Price: ${props.price}`);
}

displayProduct(product);

// STEP 16: Show a city object on the page using document.body.innerText
const city = {
  name: "Chicago",
  state: "Illinois",
  population: 1000000,
  climate: "Windy",
  religion: "no clue",
  food: "pizza",
  drink: "bubbl'r",
  animal: "honey badger",

};

document.body.innerText = `name: ${city.name}\nstate: ${city.state} population: ${city.population}`;

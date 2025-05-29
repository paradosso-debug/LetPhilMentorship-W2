// Exercise 1: Save an object to localStorage
const user = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
};

// Convert the user object to a JSON string and save it to localStorage
localStorage.setItem("user", JSON.stringify(user));

// Exercise 2: Retrieve the object from localStorage
const userFromStorage = localStorage.getItem("user");

// Parse the JSON string back into an object
const parsedUser = JSON.parse(userFromStorage);

console.log(parsedUser); // { name: 'John Doe', age: 30, email: 'john.doe@example.com' }

// Exercise 3: Update a value in the stored object
parsedUser.age = 31;

// Save the updated object back to localStorage
localStorage.setItem("user", JSON.stringify(parsedUser));

// Exercise 4: Remove the object from localStorage
localStorage.removeItem("user");

// === Practice Tasks ===
// Task 1: Create a function that takes a book object and logs the title and author.
// Task 2: Create a function that receives a movie object and logs its name and rating.
// Task 3: Pass a product object to a function and display its name and price.
// Task 4: Create a function that logs weather info (temperature and condition) from a weather object.
// Task 5: Create a function that takes a profile object and logs username and bio.
// Task 6: Pass a dog object with name and breed to a function and log it.
// Task 7: Create a function that accepts a music track object and logs track name and artist.
// Task 8: Create a function that logs app settings (theme and notifications).
// Task 9: Create a function that takes a student object and logs name and grade.
// Task 10: Create a function that receives a location object and logs city and country.

const bookDisplay = (title, author) => {
  console.log(`Book:${title} by ${author}`);
};

bookDisplay("Avengers", "Hemingway");

function showBook({ title, author }) {
  console.log(`Book: ${title} by ${author}`);
}

showBook({ title: "Avengers", author: "Hemingway" });

const movieStats = ({ name, rating }) => {
  console.log(`Movie: ${name} has a rating of ${rating}`);
};

movieStats({ name: "Interstellar", rating: 4.5 });

function product({ name, price }) {
  console.log(`Dope product "${name}" costs ${price}`);
}

product({ name: "Banana", price: "$12.89" });

function showWeather({ temp, condition }) {
  console.log(`Temp: ${temp} -C Condition: ${condition}`);
}

showWeather({ temp: 22, condition: "Sunny" });

const profileInfo = ({ userName, bio }) => {
  console.log(
    `This is ${userName} and that's what we know about him/her: ${bio}`
  );
};

profileInfo({ userName: "Batman", bio: "Knight of the dark" });

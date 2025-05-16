# Introduction to DOM Manipulation

## 📌 Class Agenda

1. **Introduction to the DOM (15 minutes)**
2. **Basic DOM Manipulation (30 minutes)**
3. **Event Handling (20 minutes)**
4. **Building a Simple Interactive App (20 minutes)**
5. **Wrap-Up and Homework (5 minutes)**

---

## 1️⃣ Introduction to the DOM (15 minutes)

### What is the DOM?

- The **Document Object Model (DOM)** is a structured representation of an HTML document.
- JavaScript allows us to interact with the DOM to modify content dynamically.

### Basic DOM Structure:

```html
<html>
  <head>
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>Welcome to DOM Manipulation!</p>
    <button>Click me!</button>
  </body>
</html>
```

# 🏆 Exercise 1:

## 👉 Create a file named index.html and add the above structure. We will modify it soon!

## 2️⃣ Basic DOM Manipulation (30 minutes)

### Selecting Elements:

#### we can access HTML elements using the `document` object.

- `document.getElementById('id')`
- `document.getElementsByClassName('class')`
- `document.getElementsByTagName('tag')`
- `document.querySelector('ul li')` retrieves only first find
- `document.querySelectorAll('ul li')` retrieves all finds

### Changing Content:

```javascript
const element = document.getElementById("myElement");
element.innerHTML = "New Content";
```

# Exercise 2:

## 👉 Select the `<h1>` element and change its content to "Hello World from JavaScript!"

### Changing Styles:

```javascript
const element = document.getElementById("myElement");
element.style.color = "red";
element.style.backgroundColor = "black";
```

# Exercise 3:

## 👉 Select the `<p>` element and change its color to blue and background color to yellow.

## 3️⃣ Event Handling (20 minutes)

### What is an Event?

- An event is an action that occurs on an HTML element.

### Adding Event Listeners:

```javascript
const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  alert("Button Clicked!");
});
```

# Exercise 4:

## 👉 Add a click event listener to the button element and change the `<h1>` content to "Button Clicked!" when clicked.

### Handling Multiple Events:

```javascript
button.addEventListener("mouseover", function () {
  button.style.backgroundColor = "red";
});
```

# 4️⃣ Building a Simple Interactive App (20 minutes)

## 🎯 Project: To-Do List App

### Features:

- Add a new to-do item.
- Mark a to-do item as completed.
- Delete a to-do item.

```html
<h1>To-Do List</h1>
<input type="text" id="taskInput" placeholder="Add a new task" />
<button id="addButton">Add Task</button>
<ul id="taskList"></ul>
```

```javascript
let addButton = document.getElementById("addButton");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {
  let taskText = taskInput.value;
  if (taskText !== "") {
    let listItem = document.createElement("li");
    listItem.textContent = taskText;
    taskList.appendChild(listItem);
    taskInput.value = ""; // Clear input field
  }
});
```

# 🏆 Exercise 5:

## 👉 Add a delete button to each to-do item. When clicked, the item should be removed from the list.

## 5️⃣ Wrap-Up and Homework (5 minutes)

### Homework:

Create a Simple Counter App that:

- Displays a counter value starting at 0.
- Has a button to increase the counter by 1.
- Has another button to decrease the counter by 1.
- Updates the counter display every time a button is pressed.

---

## 📚 Resources:

- [MDN Web Docs: Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [W3Schools: JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)
- [JavaScript.info: Browser Environment](https://javascript.info/browser-environment)
- [DOM Enlightenment](http://domenlightenment.com/)
- [Eloquent JavaScript: The Document Object Model](https://eloquentjavascript.net/14_dom.html)

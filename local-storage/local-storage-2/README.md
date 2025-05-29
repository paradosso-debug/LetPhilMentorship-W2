**Introduction to LocalStorage in Web Development**

---

### **Introduction to Web Storage**

**Web Storage** is a crucial part of web development. It allows us to store data locally on the user’s browser. There are three main types of web storage:

1. **Cookies** – Small pieces of data sent with every request. They have an expiration date and are often used for tracking users.

- Small pieces of information (like little notes).
- Stored on your browser, but sent to the server every time you visit the website.
- They can expire (disappear) after some time or can last longer if set.

Analogy: Imagine you visit your friend’s house, and your friend gives you a small note that you carry home. Next time you visit, you bring this note back, and your friend recognizes you because of this note.
example:

```javascript
document.cookie = "username=JohnDoe; expires=Thu, 18 Dec 2023 12:00:00 UTC";
```

```javascript
//Creating a cookie that lasts 7 days
document.cookie = "user=Alex; max-age=" + 7 * 24 * 60 * 60;

//Reading cookies
console.log(document.cookie);
```

2. **SessionStorage** – Stores data for a session. Once you close the tab, the data disappears.

Analogy: Imagine a sticky note 📝 you write at your friend's house. It's there while you’re visiting, but as soon as you leave, your friend throws it away.

example:

```javascript
// Keping track of quiz score

// Saving data
sessionStorage.setItem("quizScore", "80%");

// Getting data
const quizScore = sessionStorage.getItem("quizScore");
console.log(quizScore); // "80%"
```

3. **LocalStorage** – Stores data indefinitely. Even if you close and reopen your browser, the data remains.

- Data stays saved until you or the website manually deletes it.

Analogy: Imagine a notebook you keep at your friend's house. Every time you visit, your notebook is still there. You can read or write things, and they stay forever unless you erase them.

example:

```javascript
//Remembering your username

// Saving data
localStorage.setItem("username", "Alex");

// Getting data
const username = localStorage.getItem("username");
console.log(username); // "Alex"
```

Today, we’ll focus on **LocalStorage** because it’s the easiest and most useful for many projects. Let’s get started!”

---

### **Understanding LocalStorage**

“LocalStorage is a simple key-value store built into the browser. Here are some key characteristics:

- Data is stored as strings in key-value pairs.
- It persists even after closing and reopening the browser.
- It only works within the same domain.”

**Live Coding Example:**

“Let’s open our browser console and test it out. Open your browser’s DevTools (F12 or right-click > Inspect) and go to the Console tab. Now type:

```javascript
localStorage.setItem("username", "JohnDoe"); // Store data
console.log(localStorage.getItem("username")); // Retrieve data
```

---

### **Basic LocalStorage Methods**

**Instructor:**  
“LocalStorage provides four main methods:

1. **setItem(key, value)** – Saves data.
   example:

```javascript
// "username" is your note's title (key)
// "Alex" is your note's content (value)
localStorage.setItem("username", "Alex");
```

2. **getItem(key)** – Retrieves data.
   example:

```javascript
// Retrieve the value of the note with the title "username"
const myName = localStorage.getItem("username");
console.log(myName); // prints "Alex"
```

3. **removeItem(key)** – Deletes a specific item.
   example:

```javascript
// Delete the note titled "username"
localStorage.removeItem("username");
```

4. **clear()** – Removes all stored data.
   example:

```javascript
// Deletes ALL notes from your notebook
localStorage.clear();
```

### Important Reminders:

- These methods (setItem, getItem, removeItem, and clear) always work with strings (text).
- If you want to store other data types (like numbers, arrays, or objects), you'll first need to turn them into text using methods like JSON.stringify() and back to their original type using JSON.parse().

---

### **Live Coding: LocalStorage Basics**

Create a simple webpage where users can select a theme (light or dark), and we’ll save that preference using LocalStorage.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Theme Selector</title>
  </head>
  <body>
    <button onclick="setTheme('light')">Light Mode</button>
    <button onclick="setTheme('dark')">Dark Mode</button>
    <script>
      function setTheme(theme) {
        localStorage.setItem("theme", theme);
        document.body.style.background = theme === "dark" ? "#333" : "#fff";
        document.body.style.color = theme === "dark" ? "#fff" : "#000";
      }

      // Load theme on page load
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
      }
    </script>
  </body>
</html>
```

---

### **Mini Project: To-Do List with LocalStorage**

**Instructor:**  
“Let’s level up by making a simple To-Do List that saves tasks in LocalStorage.”

**HTML & JavaScript:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>To-Do List</title>
  </head>
  <body>
    <input type="text" id="task" placeholder="Enter a task" />
    <button onclick="addTask()">Add Task</button>
    <ul id="taskList"></ul>

    <script>
      function addTask() {
        let taskInput = document.getElementById("task");
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(taskInput.value);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks();
        taskInput.value = "";
      }

      function displayTasks() {
        let taskList = document.getElementById("taskList");
        taskList.innerHTML = "";
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach((task, index) => {
          let li = document.createElement("li");
          li.innerHTML = `${task} <button onclick="removeTask(${index})">X</button>`;
          taskList.appendChild(li);
        });
      }

      function removeTask(index) {
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks();
      }

      displayTasks(); // Load tasks on page load
    </script>
  </body>
</html>
```

---

### **Debugging & Best Practices**

“Here are some important debugging tips:

- Open Chrome DevTools → Application → LocalStorage to inspect stored data.
- Use `JSON.stringify()` to store arrays and objects.
- Avoid storing sensitive data.
- Keep storage usage low (~5MB limit).”

---

### **Q&A and Wrap-up**

- LocalStorage is useful for saving user preferences and small amounts of data.
- Always be mindful of security.
- Explore further by building projects that use LocalStorage.

**Homework:**

- Modify the To-Do List to allow task editing.

**Final Project:**

- Create a simple Notes app that saves and loads notes using LocalStorage.

Thanks for joining! Happy coding! 🚀”

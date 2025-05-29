**Introduction to LocalStorage in Web Development**

---

### **Introduction to Web Storage**

**Web Storage** is a crucial part of web development. It allows us to store data locally on the user’s browser. There are three main types of web storage:

1. **Cookies** – Small pieces of data sent with every request. They have an expiration date and are often used for tracking users.
   example:

```javascript
document.cookie = "username=JohnDoe; expires=Thu, 18 Dec 2023 12:00:00 UTC";
```

2. **SessionStorage** – Stores data for a session. Once you close the tab, the data disappears.
   example:

```javascript
sessionStorage.setItem("username", "JohnDoe");
```

3. **LocalStorage** – Stores data indefinitely. Even if you close and reopen your browser, the data remains.
   example:

```javascript
localStorage.setItem("username", "JohnDoe");
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
2. **getItem(key)** – Retrieves data.
3. **removeItem(key)** – Deletes a specific item.
4. **clear()** – Removes all stored data.

Let’s try them in the console.”

```javascript
localStorage.setItem("theme", "dark"); // Store theme preference
console.log(localStorage.getItem("theme")); // Retrieve theme
localStorage.removeItem("theme"); // Remove theme
localStorage.clear(); // Clear all data
```

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

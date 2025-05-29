**Follow-Up Lesson: Reviewing LocalStorage with Exercises**

---

### **Lesson Objectives:**

By the end of this session, students will:

- Reinforce their understanding of LocalStorage.
- Complete hands-on exercises to practice LocalStorage methods.
- Debug common LocalStorage issues.
- Apply LocalStorage in a new interactive exercise.

---

### **Lesson Breakdown:**

| Activity                 | Description                                      |
| ------------------------ | ------------------------------------------------ |
| Quick Recap              | Review key LocalStorage concepts.                |
| Coding Exercises         | Hands-on challenges to test LocalStorage skills. |
| Interactive Mini-Project | Build a small feature using LocalStorage.        |
| Q&A & Homework           | Answer questions and assign homework.            |

---

### **1. Quick Recap**

1. `setItem(key, value)` – Stores data.
2. `getItem(key)` – Retrieves data.
3. `removeItem(key)` – Deletes a specific item.
4. `clear()` – Removes all stored data.

open DevTools and check if you still have data stored from our last lesson.

---

### **2. Coding Exercises**

**Exercise 1: Store and Retrieve User Data**

1. Open your browser console.
2. Run this code:

```javascript
localStorage.setItem("user", "Alice");
console.log(localStorage.getItem("user"));
```

3. Change the value and retrieve it again.

**Exercise 2: Storing an Object**

1. Store an object in LocalStorage:

```javascript
const user = { name: "Alice", age: 25 };
localStorage.setItem("userData", JSON.stringify(user));
```

2. Retrieve it and parse it back into an object:

```javascript
const storedUser = JSON.parse(localStorage.getItem("userData"));
console.log(storedUser);
```

**Exercise 3: Removing an Item**

1. Run this code:

```javascript
localStorage.removeItem("userData");
console.log(localStorage.getItem("userData")); // Should return null
```

**Exercise 4: Clear All Data**

1. Clear all stored data:

```javascript
localStorage.clear();
console.log(localStorage.length); // Should return 0
```

---

### **3. Interactive Mini-Project**

**Build a Simple Form Saver**
“Now, let’s create a simple form where users can enter their name and email. The data should persist even after refreshing the page.”

**HTML & JavaScript:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Form Persistence</title>
  </head>
  <body>
    <input type="text" id="name" placeholder="Enter name" />
    <input type="email" id="email" placeholder="Enter email" />
    <button onclick="saveData()">Save</button>
    <script>
      function saveData() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        localStorage.setItem("formData", JSON.stringify({ name, email }));
      }

      function loadData() {
        const storedData = JSON.parse(localStorage.getItem("formData"));
        if (storedData) {
          document.getElementById("name").value = storedData.name;
          document.getElementById("email").value = storedData.email;
        }
      }

      loadData();
    </script>
  </body>
</html>
```

### Try entering your name and email, then refresh the page. Your input should persist

---

### **4. Q&A & Homework**

**Q&A:**

**Homework:**

- Modify the Form Saver to allow users to clear their stored data.
- Bonus: Add a toggle button to switch between saving data in LocalStorage and SessionStorage.

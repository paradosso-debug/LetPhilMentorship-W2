# 🧠 Understanding the `pop()` Method in JavaScript

## 📌 What is `pop()`?

The `pop()` method removes the **last element** from an array and returns that removed element. It also **modifies the original array**.

---

## 🔍 Syntax

```js
let removed = array.pop();
```

- It removes the **last element** from the array
- It returns the removed value
- It changes the original array’s length

---

## 🧠 Visual Analogy

Imagine an array like a stack of pancakes 🥞:

- `pop()` removes the pancake on top (last item added)

---

## ✅ Examples

```js
let colors = ["Red", "Blue", "Green"];
let last = colors.pop();
console.log(last); // "Green"
console.log(colors); // ["Red", "Blue"]
```

---

## 💡 Why Use `pop()`?

- It's perfect for undo actions
- Great for working with stacks (LIFO: Last In, First Out)
- Used in game logic, browser history, undo-redo systems, etc.

---

## ⚠️ Important Notes

- It removes **only the last element**
- It does **not take any parameters**
- If the array is empty, it returns `undefined`

---

Keep popping! 🎈

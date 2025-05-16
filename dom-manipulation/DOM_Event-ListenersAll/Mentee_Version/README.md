# 🧠 DOM Manipulation & Event Listeners — Mentee Guide

## 🌐 What is the DOM?

The DOM (Document Object Model) is like a **map of a website** that JavaScript uses to read and change what's on the screen.

Imagine your webpage is a **house**:

- Each room = a section of HTML
- Each piece of furniture = an element (like a button or paragraph)
- JavaScript = your hand moving things around or changing colors!

---

## 🔎 DOM Selectors — How We "Grab" Elements

### 1. `getElementById("id")`

- Like calling a friend by name. Only one element has that ID.

### 2. `getElementsByClassName("class")`

- Like calling all your classmates who wear blue shoes. Gets multiple things.

### 3. `querySelector("selector")`

- Grabs **the first** match of anything (like the first paragraph).

### 4. `querySelectorAll("selector")`

- Grabs **all** matching items (like every list item).

---

## 👂 What is an Event Listener?

Event listeners wait for something to happen — like:

- 👆 A click
- 🖱️ A mouse move
- ⌨️ A key press

It’s like saying:

> “Hey button, when you’re clicked, do this!”

```js
element.addEventListener("click", function () {
  // Do something when clicked
});
```

---

## 🧰 Tools We Use

### 📝 `element.innerText`

- Changes the words inside an element.
  > Like erasing “Hi” and writing “Hello!”

### 🎨 `element.style`

- Changes how something **looks** (color, background, size).

### 🧱 `document.createElement()`

- Builds a new element (like making a new LEGO piece).

### 🗑️ `element.remove()`

- Deletes something from the screen.

---

## 📚 What You'll Practice in the Projects

Each of the 8 projects will help you:

- Select elements using all 4 selectors
- Add event listeners to buttons
- Change text and style
- Add and remove elements from the page

✅ Follow the comments in each file like a to-do list!  
No code is written for you — it’s your job to build it yourself.

---

🌟 Have fun and don’t worry if you make mistakes.  
You’re learning by doing — and that’s the best way!

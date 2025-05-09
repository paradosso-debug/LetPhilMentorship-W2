# ⚙️ JavaScript Basics — 03_js_basics

## 📚 What You’ll Learn:

- What JavaScript is used for
- How to link JavaScript to an HTML file
- How to make buttons interactive using **event listeners**
- How to show messages using **alert()**

## 🧠 Analogy:

- HTML = bones, CSS = style, JavaScript = brain!
- JS lets the webpage **respond to user actions**

## 🔤 JavaScript Basics:

- **Variables**: Store information.  
  Example: `let message = "Hello!";`
- **Functions**: Block of code that runs when called.  
  Example: `function greet() { alert("Hi!"); }`
- **Event Listeners**: Run code when an event happens.  
  Example: `button.addEventListener("click", greet);`
- **Accessing HTML Elements**:  
  Example: `document.querySelector("button")` gets the first `<button>`
  document.getElementById("important")
  document.getElementsByClassName("")
  document.querySelctorAll("")

## 🔗 How to Add JavaScript:

- Use this inside your HTML just before the closing `</body>`:
  ```html
  <script src="script.js"></script>
  ```

## ✅ Task for Students:

- Click a button to show a greeting
- Add a second button with a different message
- Use `console.log()` to print a message in the browser console

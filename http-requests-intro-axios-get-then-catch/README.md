# 📚 Introduction to Axios

## 🚀 What is Axios?

**Axios** is like a messenger 📨 that lets your website talk to other websites (called APIs) and bring back useful information — like jokes, weather, or user lists!

Instead of building your own car to go to the store, you can send a delivery guy (Axios!) to fetch data for you.

---

## 🧠 Why Use Axios?

- It’s **easy to use**
- Works in **any browser**
- Handles errors better than the native `fetch()` method
- Lets you write **cleaner, readable code**

---

## 🔍 Analogy

Imagine your web page is a chef 👩‍🍳. The chef doesn’t go to the farm directly. Instead, she calls a supplier (Axios) who delivers fresh ingredients (data) when she needs them.

---

## 🧪 Example Code

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

```js
axios
  .get("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    console.log(response.data.value); // Prints a random joke
  })
  .catch((error) => {
    console.log("Something went wrong!");
    console.error("Something went wrong!", error);
  });
```

---

## 📁 Mini Projects in This Lesson

1. **Joke Generator:** Pulls a random joke using Axios.
2. **Weather Lookup:** Enter a city and fetch weather info.
3. **User List Display:** Shows a list of users from an API.

Happy coding! 💻✨

# 🧠 Axios vs Async/Await — What's the Difference?

When building websites or web apps, you often need to **get data from APIs**. Two tools that help with this are **Axios** and **async/await**.

---

## ✅ 1. What Are They?

| Tool            | What it is               | Used for...                                |
| --------------- | ------------------------ | ------------------------------------------ |
| **Axios**       | A JavaScript **library** | Making HTTP requests like GET, POST, etc.  |
| **async/await** | A JavaScript **syntax**  | Handling asynchronous code (like promises) |

---

## 🔍 Axios vs async/await (Side-by-Side)

| Feature        | **Axios**                          | **Async/Await**                 |
| -------------- | ---------------------------------- | ------------------------------- |
| Type           | Library                            | Syntax feature                  |
| Use            | Makes API requests easier          | Makes async code easier to read |
| Install?       | ✅ Yes (`CDN` or `npm`)            | ❌ No, built into JS            |
| JSON Parsing   | ✅ Automatic                       | ❌ Manual (`.json()` required)  |
| Error Handling | Easier built-in                    | Must use `try/catch`            |
| Usage Together | ✅ You can use it WITH async/await | ✅ Works with fetch or Axios    |

---

## 🧪 Example: Axios + async/await

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>
  async function getUser() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    console.log(res.data);
  }
  getUser();
</script>
```

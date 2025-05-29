// 🔁 This function runs every time the "Add" button is clicked
function addTodo() {
  // Get the input element using its ID
  const todoInput = document.getElementById("todo-input");

  // Get the text the user typed and remove whitespace from both ends
  const todoText = todoInput.value.trim();

  // If the user didn’t type anything, do nothing and exit
  if (todoText === "") return;

  // Get existing todos from LocalStorage (convert from text to array), or use empty array if none exist
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  // Add the new todo to the array
  todos.push(todoText);

  // Convert array back to a string and store it in LocalStorage
  localStorage.setItem("todos", JSON.stringify(todos));

  // Clear the input field after adding the todo
  todoInput.value = "";

  // Update the screen with the new list of todos
  renderTodos();
}

// 🔁 This function displays all todo items from LocalStorage on the screen
function renderTodos() {
  // Get the unordered list element where todos will be displayed
  const todoList = document.getElementById("todo-list");

  // Clear the list to prevent duplicate entries when re-rendering
  todoList.innerHTML = "";

  // Get todos from LocalStorage and convert back to array
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  // Loop through each todo and display it
  todos.forEach((todo, index) => {
    // Create a new list item element
    const li = document.createElement("li");

    // Add a class for styling
    li.className = "todo-item";

    // Set the inner HTML of the list item to include the todo text and a remove button
    li.innerHTML = `
        <span>${todo}</span>
        <button onclick="removeTodo(${index})">Remove</button>
      `;

    // Add the new list item to the list
    todoList.appendChild(li);
  });
}

// 🔁 This function removes a specific todo based on its index in the array
function removeTodo(index) {
  // Get the current todos from LocalStorage
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  // Remove the todo at the given index (1 means remove 1 item only)
  todos.splice(index, 1);

  // Save the updated array back to LocalStorage
  localStorage.setItem("todos", JSON.stringify(todos));

  // Re-render the list to reflect the change
  renderTodos();
}

// 🔁 This function clears all todos from LocalStorage and the screen
function clearTodos() {
  // Remove the "todos" key from LocalStorage completely
  localStorage.removeItem("todos");

  // Refresh the list to show it’s empty
  renderTodos();
}

// 🏁 Run this function once the page loads to show existing todos
renderTodos();

// ✅ Log a message when script loads
console.log("LET'S GET STARTED");

// ✅ Function to generate HTML for each todo item
function ListItemUI(task, taskIdx) {
  return `
    <div draggable="true" class='list-item'>
      <p style="display: inline; text-decoration: ${
        task.completed ? "line-through" : "none"
      }">${task.value}</p>
      <span>
        <button onclick='markCompleted(${taskIdx})'>complete</button>
        <button onclick='editTask(${taskIdx})'>edit</button>
        <button onclick='removeTask(${taskIdx})'>remove</button>
      </span>
    </div>
  `;
}

// ✅ Array to hold all the todo tasks
let todos = [];

// ✅ When the page loads, try to get todos from LocalStorage
window.onload = function () {
  const storedTodos = localStorage.getItem("todos");

  // If there are saved todos, parse them back into the array
  if (storedTodos) todos = JSON.parse(storedTodos);

  // Display all existing tasks
  renderTodos();
};

// ✅ Function to mark a task as completed or uncompleted
function markCompleted(taskIdx) {
  // Select the <p> element of the task to check its style
  const completedTask = document.querySelector(
    `.list-item:nth-child(${taskIdx + 1}) > p`
  );

  // Toggle between completed and not completed
  if (completedTask.style.textDecoration === "line-through") {
    todos[taskIdx].completed = false;
  } else {
    todos[taskIdx].completed = true;
  }

  // Save changes to LocalStorage
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

// ✅ Function to edit a task's value
function editTask(taskIdx) {
  const task = document.querySelector(`.list-item:nth-child(${taskIdx + 1})`);
  const editButton = task.querySelector("button:nth-child(2)");

  if (editButton.innerText === "edit") {
    // Switch button text to 'save'
    editButton.innerText = "save";

    // Remove the <p> text element
    const p = task.querySelector("p");
    p.remove();

    // Create a new input with current task text
    const input = document.createElement("input");
    input.value = todos[taskIdx].value;

    // When the 'save' button is clicked
    editButton.addEventListener("click", function () {
      todos[taskIdx].value = input.value; // Save new value
      localStorage.setItem("todos", JSON.stringify(todos)); // Save to LocalStorage
      renderTodos(); // Refresh the display
    });

    task.prepend(input); // Add input box to the task element
  } else {
    editButton.innerText = "edit"; // Restore button text
  }
}

// ✅ Function to remove a task
function removeTask(taskIdx) {
  console.log("remove task");

  // Keep only tasks that don't match the one to remove
  todos = todos.filter((_, idx) => idx !== taskIdx);

  // Save updated list and render again
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

// ✅ Add new task when the Add button is clicked
addTodoButton.addEventListener("click", function () {
  // Create a new todo object and add it to the array
  todos.push({
    value: todoInput.value,
    completed: false,
  });

  // Save the new array to LocalStorage
  localStorage.setItem("todos", JSON.stringify(todos));

  // Refresh the task list on screen
  renderTodos();

  // Clear the input field
  todoInput.value = "";
});

// ✅ Function to show all tasks on screen
function renderTodos() {
  todoList.innerHTML = ""; // Clear existing list

  // Loop through todos and display each one
  for (let i = 0; i < todos.length; i++) {
    todoList.innerHTML += ListItemUI(todos[i], i);
  }
}

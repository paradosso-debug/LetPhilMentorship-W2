// ✅ Function to add a new task
// Get the input field element using its ID "task"
// Get the existing tasks from LocalStorage
// JSON.parse turns the string back into an array
// If there are no tasks yet, use an empty array []
// Push (add) the value typed by the user into the tasks array

// Convert the updated tasks array into a string and store it in LocalStorageL
// This is required because LocalStorage can only save strings
// Call the function to display the updated tasks on the screen

// Clear the input field after adding the task

// ✅ Function to display all tasks from LocalStorage

// Get the <ul> element where we will show the list of tasks

// Clear any previous content inside the list so it doesn't repeat

// Get the saved tasks from LocalStorage and turn them back into an array

// Use forEach to loop through the array and display each task

// Create a new <li> element for each task

// Set the content of the <li> to show the task and a delete button

// Add the <li> to the task list
// Remove 1 task from the array at the given index

// Save the updated tasks back into LocalStorage

// Update the display so the removed task disappears from the screen

// ✅ Automatically run displayTasks() when the page loads
// So any saved tasks show up immediately

function addTask() {
  const task = document.getElementById("task");
  let existingTask = JSON.parse(localStorage.getItem("tasks")) || [];
  existingTask.push(task.value);

  localStorage.setItem("tasks", JSON.stringify(existingTask));

  displayTasks();
  task.value = "";
}

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${task} <button onclick='deleteTask(${index})'>Delete</button>`;
    taskList.appendChild(li);
  });
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  displayTasks();
}
displayTasks();

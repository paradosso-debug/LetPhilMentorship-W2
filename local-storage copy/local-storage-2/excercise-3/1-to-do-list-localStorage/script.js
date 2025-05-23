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

function addTask() {
  const task = document.getElementById("task");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
  task.value = "";
}

// ✅ Function to display all tasks from LocalStorage

// Get the <ul> element where we will show the list of tasks

// Clear any previous content inside the list so it doesn't repeat

// Get the saved tasks from LocalStorage and turn them back into an array

// Use forEach to loop through the array and display each task

// Create a new <li> element for each task

// Set the content of the <li> to show the task and a delete button

// Add the <li> to the task list

// ✅ Function to remove a task from the list

// Get the current list of tasks from LocalStorage and turn it into an array

// Remove 1 task from the array at the given index

// Save the updated tasks back into LocalStorage

// Update the display so the removed task disappears from the screen

// ✅ Automatically run displayTasks() when the page loads
// So any saved tasks show up immediately

// ✅ Function that runs when the user clicks "Add Task"

// 🎯 Get the input box where the user typed the task

// 📥 Get the existing list of tasks from LocalStorage
// If there are no saved tasks yet, use an empty array []
// JSON.parse turns the string from LocalStorage back into an array

// ➕ Add the user's new task (what they typed) to the list of tasks

// 💾 Save the updated task list back into LocalStorage
// JSON.stringify converts the array to a string because LocalStorage only stores strings

// 👀 Call the function to update the screen and show all tasks

// 🧼 Clear the input box so it's ready for the next task

// ✅ Function that displays all tasks from LocalStorage on the screen

// 🎯 Get the <ul> element where we’ll display the tasks

// 🧽 Clear the current list to avoid repeating tasks
// This removes all existing list items before adding them again

// 📥 Get the saved task list from LocalStorage and convert it back into an array

// 🔁 Loop through each task in the array
// task = the text of the task, index = its position in the array

// 📝 Create a new list item element (<li>)

// 🧱 Set the HTML content of the list item to include the task and a delete button
// When the delete button is clicked, it will call removeTask(index)

// 📌 Add the new list item to the <ul> on the page

// ✅ Function to remove a task based on its index (position in the array)

// 📥 Get the current list of tasks from LocalStorage

// ❌ Remove the task at the given index (1 item only)

// 💾 Save the updated list back into LocalStorage

// 👀 Update the screen to reflect the changes

// ✅ When the page first loads, show any saved tasks immediately

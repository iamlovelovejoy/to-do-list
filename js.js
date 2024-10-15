/* Delete task function
function deleteTask(button) {
    // Remove the task from the list
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
} */ 

// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add task when button is clicked
addTaskBtn.addEventListener('click', addTask);

// Add task function
function addTask() {
    // Get the task value
    const task = taskInput.value;

    // Check if input is not empty
    if (task.trim() !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.innerHTML = `${task} <button onclick="markCompleted(this)">Mark as Completed</button>`;

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }
}

// Mark task as completed (dashed)
function markCompleted(button) {
    // Find the parent <li> element (task item)
    const taskItem = button.parentElement;
    
    // Toggle the 'completed' class to strike through or remove the dash
    taskItem.classList.toggle('completed');
}

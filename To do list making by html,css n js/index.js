
function addTask() {
    const newTask = document.createElement('li');  // Create a new <li> element for the task
    const taskList = document.getElementById('taskList');  // Get the task list container using the correct ID
    const taskText = document.getElementById('inputTask').value;  // Get the task text from the input field
    
    if (taskText.trim() === "") {
        return; 
    }

    newTask.textContent = taskText;  

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    
    // Append the delete button to the task
    newTask.appendChild(deleteButton);

    // Append the new task to the task list
    taskList.appendChild(newTask);

    // Clear the input field
    document.getElementById('inputTask').value = "";

    // Attach the delete event to the button
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(newTask);  // Remove the task from the list
    });
}


const taskList = document.getElementById("task-list");

function setupTaskList() {
    const newTaskButton = document.querySelector(".sidebar").querySelector("button");
    newTaskButton.addEventListener("click", addTask);

    addTask();
}

function addTask() {
    let taskInput = document.createElement("input");
    taskInput.style = "text";
    let newTask = document.createElement("li").appendChild(taskInput);
    newTask.value = "Task Name";

    taskList.appendChild(newTask);
    console.log("New Task Button Clicked");
}

setupTaskList();

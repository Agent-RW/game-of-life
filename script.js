const taskList = document.getElementById("task-list");

function setupTaskList() {
    let newTaskButton = document.querySelector(".sidebar").querySelector("button");
    newTaskButton.addEventListener("click", addTask);

    addTask();
}

/*
Create dom elements for a task item
*/
function createTask() {
    let task = document.createElement("div");

    let nameInput = document.createElement("input");
    nameInput.style = "text";
    nameInput.value = "Task Name";
    task.appendChild(nameInput);

    let rmButton = document.createElement("button");
    rmButton.value = "x";
    task.appendChild(rmButton);

    rmButton.addEventListener("click", () => {
        task.remove();
    })

    return task;
}

function addTask() {
    taskList.appendChild(createTask());
    console.log("New Task Button Clicked");
}

setupTaskList();

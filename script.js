const taskList = document.getElementById("task-list");
const goalList = document.getElementById("goal-list");

/*
Create dom elements for a Task item
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
    });
    
    return task;
}

/*
Add a new Task item to the Task List
*/
function addTask() {
    taskList.appendChild(createTask());
    console.log("New Task Button Clicked");
}

function setupTaskList() {
    let newTaskButton = document.querySelector(".sidebar button");
    newTaskButton.addEventListener("click", addTask);

    addTask();
}

/*
Create dom elements for a Goal item
*/
function createGoal() {
    let goal = document.createElement("div");

    let header = document.createElement("div");
    goal.appendChild(header);

    let nameInput = document.createElement("input");
    nameInput.style = "text";
    nameInput.value = "Goal Name";
    header.appendChild(nameInput);

    let rmButton = document.createElement("button");
    rmButton.value = "x";
    header.appendChild(rmButton);

    let description = document.createElement("textarea");
    goal.appendChild(description);

    rmButton.addEventListener("click", () => {
        goal.remove();
    });

    return goal;
}

function addGoal() {
    goalList.appendChild(createGoal());
    console.log("New Goal Button Clicked");
}

function setupGoalList(){
    let newGoalButton = document.querySelector(".content button");
    newGoalButton.addEventListener("click", addGoal);

    addGoal();
}

setupTaskList();
setupGoalList();

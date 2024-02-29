function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    if (task.trim() === "") {
        alert("Please enter a task!");
        return;
    }
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = task;
    li.addEventListener("click", function() {
        this.classList.toggle("completed");
    });
    ul.appendChild(li);
    input.value = "";
}

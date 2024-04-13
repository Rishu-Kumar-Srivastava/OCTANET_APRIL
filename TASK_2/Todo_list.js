function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value === "") {
        alert("Please Enter A Task !!!");
        return;
    }
    
    var li = document.createElement("li");
    var label = document.createElement("label");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.display = "none";
    label.appendChild(checkbox);
    label.textContent = taskInput.value;
    li.appendChild(label);
    
    var deleteButton = document.createElement("img");
    deleteButton.src = "cross.png";
    deleteButton.style.width = "20px";
    deleteButton.style.height = "20px";
    deleteButton.style.float = "right"; 
    deleteButton.style.marginLeft = "250px";
    deleteButton.onclick = function() {
        li.remove();
    };
    li.appendChild(deleteButton);
    
    li.onclick = function() {
        checkbox.checked = !checkbox.checked;
        if (checkbox.checked) {
            label.style.textDecoration = "line-through";
            label.style.opacity = 0.5;
            checkbox.style.display = "inline-block";
        } else {
            label.style.textDecoration = "none";
            label.style.opacity = 1;
            checkbox.style.display = "none";
        }
    };
    
    taskList.appendChild(li);
    taskInput.value = "";
}
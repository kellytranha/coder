document.getElementById("add-task").addEventListener("click", () => {
  const taskInput = document.getElementById("task-value");
  const taskValue = taskInput.value;
  addTask(taskValue);
  taskInput.value = "";
})

document.getElementById("task-value").addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
    const taskInput = event.target;
    const taskValue = taskInput.value;
		addTask(taskValue);
		taskInput.value = "";
	}
});

const addTask = (taskValue) => {
  const task = document.createElement("li");
  task.classList.add("task");
  task.classList.add("fill");
  task.setAttribute("draggable", "true");
  task.addEventListener("dragstart", dragStart);
  task.addEventListener("dragend", dragEnd);
  task.addEventListener("dblclick", (event) => {
    const content = task.getElementsByClassName("task-content")[0];
    currentInput = content.innerHTML;
    content.innerHTML = "";
    const newInput = document.createElement("input");
    newInput.value = currentInput;
    newInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const newText = event.target.value;
        content.innerHTML = newText;     
      }
    })
    content.appendChild(newInput);

  });

  const taskContent = document.createElement("div");
  taskContent.classList.add("task-content");
  taskContent.innerText = taskValue;

 

  const trash = document.createElement("div");
  trash.classList.add("trash");
  trash.innerHTML = '<i class="fas fa-times"></i>';
  trash.addEventListener("click", removeTask);

  const done = document.createElement("div");
  done.classList.add("done");
  done.innerHTML = '<i class="fas fa-check-square"></i>';
  done.addEventListener("click", moveToDone);

  task.appendChild(taskContent);
  task.appendChild(trash);
  task.appendChild(done);

  const tasks = document.getElementById("tasks-added");
  tasks.insertBefore(task, tasks.childNodes[0]);
}

const removeTask = (event) => {
  const tasks = event.target.parentNode.parentNode.parentNode;
  const task = event.target.parentNode.parentNode;
  tasks.removeChild(task);

}

const moveToDone = (event) => {
  const doneZone = document.getElementsByClassName("dropzone")[3].childNodes[3];
  const task = event.target.parentNode.parentNode;
  doneZone.appendChild(task)
}

let task;

const dragStart = (event) => {
  event.target.classList.add('hold');
  task = event.target;
  setTimeout(() => {
    event.target.classList.add('invisible')
  }, 0);
}

const dragEnd = (event) => {
  event.target.classList.remove("invisible");
}

const dragEnter = (event) => {
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("hovered");
  }
}

const dragOver = (event) => {
  event.preventDefault();
}

const dragLeave = (event) => {
  event.target.classList.remove("hovered");
}

const dragDrop = (event) => {
  event.target.classList.remove("hovered");
  event.target.childNodes[3].append(task);
}

const dropzones = document.getElementsByClassName("dropzone");

for (let index = 0; index < dropzones.length; index++) {
  const dropzone = dropzones[index];
  dropzone.addEventListener("dragenter", dragEnter);
  dropzone.addEventListener("dragover", dragOver);
  dropzone.addEventListener("dragleave", dragLeave);
  dropzone.addEventListener("drop", dragDrop);
}



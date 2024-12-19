document.addEventListener("DOMContentLoaded", () => {
  const todoInp = document.getElementById("todoinput");
  const addtaskbtn = document.getElementById("addtask");
  const todoList = document.getElementById("todolist");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => renderTasks(task));

  addtaskbtn.addEventListener("click", () => {
    const taskTest = todoInp.value.trim();
    if (taskTest === "") return;
    const newTask = {
      id: Date.now(),
      text: taskTest,
      completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    renderTasks(newTask);
    todoInp.value = "";
  });

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTasks(task) {
    const elem = document.createElement("li");
    elem.innerHTML = `${task.text} <button> Delete </button>`;
    todoList.appendChild(elem);

    if (task.completed) elem.classList.add("completed");

    elem.addEventListener("click", (e) => {
      if (e.target.tagName === "button") return;
      task.completed = !task.completed;
      elem.classList.toggle("completed");
      saveTasks();
    });

    elem.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      elem.remove(); //idk need to understand
      saveTasks();
    });
  }
});

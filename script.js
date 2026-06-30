const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", () => {
  const task = todoInput.value.trim();

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  // Create <li>
  const listItem = document.createElement("li");
  listItem.classList.add("todo-item");

  // Create <span>
  const taskText = document.createElement("span");
  taskText.textContent = task;

  taskText.addEventListener("click", () => {
    taskText.classList.toggle("completed");
  });

  // Create Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-btn");

  // Add span and button inside li
  listItem.appendChild(taskText);
  listItem.appendChild(deleteButton);

  // Add li inside ul
  todoList.appendChild(listItem);

  // Clear input
  todoInput.value = "";
});

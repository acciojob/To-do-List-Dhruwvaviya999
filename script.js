// Get references to DOM elements
const input = document.getElementById("newTodoInput");
const button = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

// Event listener on the button
button.addEventListener("click", function () {
  const todoText = input.value.trim(); // remove spaces from both sides

  // Check if input is not empty
  if (todoText !== "") {
    // Create new <li> element
    const li = document.createElement("li");
    li.textContent = todoText;

    // Add <li> to <ol>
    todoList.appendChild(li);

    // Clear input field
    input.value = "";
  }
});

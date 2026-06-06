const boardBtn = document.getElementById("add-boards");
const boardsContainer = document.querySelector(".boards-container");

boardBtn.addEventListener("click", () => {
  const value = prompt("Add new Board");

  renderBoards(value);
});

function renderBoards(value) {
  const board = JSON.parse(localStorage.getItem("boards")) || [];

  if (value) {
    board.push(value);
  }
  console.log(board);

  localStorage.setItem("boards", JSON.stringify(board));

  boardsContainer.innerHTML = board
    .map((item) =>
      item
        ? `

<div class="boards">
<h2>${item}</h2>
</div>


    `
        : null,
    )
    .join("");
}
renderBoards();

const taskButton = document.getElementById("add-task");

taskButton.addEventListener("click", () => {
  const task = prompt("Add Task");
  renderItems(task);
});

function renderItems(task) {
  const board = document.querySelector(".boards");

  const items = JSON.parse(localStorage.getItem("taskItems")) || [];

  if (task) {
    items.push(task);
  }

  localStorage.setItem("taskItems", JSON.stringify(items));

  const newItem = items
    .map(
      (item) =>
        `
    <div draggable="true" class="board-content">
          <h3>${item}</h3>
          <p>Very Important</p>
        </div>
      </div>
    `,
    )
    .join("")

  board.innerHTML = newItem
}

renderItems();

const content = document.querySelector(".board-content");

function dragContent(target) {
  target.addEventListener("dragstart", () => {
    console.log("dragStart");
    target.classList.add("flying");
    console.log(target);
  });
  target.addEventListener("dragend", () => {
    console.log("dragEnd");
    target.classList.remove("flying");
    console.log(target);
  });
}

dragContent(content);

const allBoards = document.querySelectorAll(".boards");

allBoards.forEach((item) => {
  item.addEventListener("dragover", () => {
    const flying = document.querySelector(".flying");
    item.appendChild(flying);
  });
});

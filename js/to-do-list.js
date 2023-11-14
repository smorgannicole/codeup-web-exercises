const createToDoItem = () => {
    const toDoInput = document.querySelector(`input#to-do`);
    let toDoInputValue = toDoInput.value;
    const toDoItem = document.createElement(`li`);
    toDoItem.classList.add(`to-do-item`, `list-group-item`, `d-flex`, `justify-content-between`, `align-items-center`);
    toDoItem.innerHTML = ` 
            <p class="m-0">${toDoInputValue}</p>
            <button class="btn btn-danger" data-done>Done</button>
       `;
    const doneButton = toDoItem.querySelector(`button[data-done]`);
    doneButton.addEventListener(`click`, (e) => {
        toDoItem.remove();
    });
    document.querySelector(`ul.list-group`).appendChild(toDoItem);
    toDoInputValue = ``;
}

// MAIN
(() => {
    const addToDoItemButton = document.querySelector("button.add");
    const inputNode = document.querySelector(`input#to-do`)
    addToDoItemButton.addEventListener(`click`, (e) => {
        e.preventDefault();
        createToDoItem();
    });
})();
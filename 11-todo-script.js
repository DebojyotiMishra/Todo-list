const todoList = [
    {
        name: 'make dinner',
        dueDate: '2022-12-22'
    },
    {
        name: 'wash dishes',
        dueDate: '2022-06-22'
    }
];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const html = `
        <div class="task-name">${name}</div>
        <div class="task-date">${dueDate}</div>    
        <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
        " class="delete-button">Delete</button>`;

        todoListHTML += html; 
    }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-input');
    let name = document.querySelector('.js-input').value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push(
        {
            name,
            dueDate
        }
    );

    inputElement.value = '';

    renderTodoList();
}
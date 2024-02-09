const todoList = [{
    name: 'make dinner', 
    dueDate: '2024-2-1'
  },{
    name: 'wash dishes',
    dueDate: '2024-3-1'
  }];

renderTodoList();

function renderTodoList(){
    let todoListHTML  =  '';

    todoList.forEach((todoObject, index) => {
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="" 
        class="delete-todo-button js-delete-todo-button">Delete</button>`;
        todoListHTML += html;
    });//for each method is much easier to use for traversing.
    console.log(todoListHTML);

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
            });
        });//We have two problems 1.the div containing delete is not on the page yet hence we write this code after line number 28. 2.We see that that querySelector will select only the first delete div hence we use querySelectorAll which will give us a list which works as an array.
}

document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
        addTodo();
    });

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name: name,
        dueDate: dueDate
    });
    console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}
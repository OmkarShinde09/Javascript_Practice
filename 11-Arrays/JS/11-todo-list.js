const todoList = [{
    name: 'make dinner', 
    dueDate: '2024-2-1'
  },{
    name: 'wash dishes',
    dueDate: '2024-3-1'
  }];//You can also give an object as an array element

renderTodoList();

function renderTodoList(){
      let todoListHTML  =  '';

    for(let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        // const {name, dueDate} = todoObject;//Destructuring an object
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
        " class="delete-todo-button">Delete</button>`;//This method is know as generating the HTML. Instead of writing HTML by hand in the .html file we generate it by looping through an array and used javascript.
        todoListHTML += html;
    }
    console.log(todoListHTML);

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name: name,
        dueDate: dueDate
    });
    // todoList.push({
    //     name,
    //     dueDate
    // })//Shorthand property of object
    console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}
//selector
const container = document.querySelector('#container');
const todoForm = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todoInput');
const todoBbtn = document.querySelector('#todoBbtn');
const todoList = document.querySelector('#list');


//create Element
const createTodo = (todoValue,todoId)=>{
    const todoNewRow = document.createElement('tr');
    const todoElement = document.createElement('td');
    todoElement.innerHTML = `
        <span>${todoValue}</span>
    `
    todoNewRow.appendChild(todoElement);
    todoList.appendChild(todoNewRow);
}

//create addTodo
const addTodo = (e)=>{
    e.preventDefault();
    const todoValue = todoInput.value;

    //create unique id
    const todoId = Date.now().toString();

    createTodo(todoValue, todoId);
    
}

//Add Listener
todoForm.addEventListener('submit', addTodo);
//selector

const container = document.querySelector('#container');
const todoForm = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todoInput');
const todoBbtn = document.querySelector('#todoBbtn');
const todoList = document.querySelector('#list');

//create Element
const createTodo = (todoValue, todoId) => {
    const todoNewRow = document.createElement('tr');
    const todoElement = document.createElement('td');
    todoElement.id = todoId;
    console.log(todoElement);
    todoElement.innerHTML = `
        <div class="d-flex d-row justify-content-between">
            <span>${todoValue}</span>
            <div class="action">
                <button type="submit" class="btn btn-success">Edit</button>
                <button type="submit" class="btn btn-danger">Delete</button>
            </div>
        </div>
    `
    todoNewRow.appendChild(todoElement);
    todoList.appendChild(todoNewRow);
}

//create addTodo
const addTodo = (e) => {
    e.preventDefault();
    const todoValue = todoInput.value;

    //create unique id
    const todoId = Date.now().toString();

    createTodo(todoValue, todoId);

    todoForm.reset(); //for clear From input filed after submitting
}

//Add Listener
todoForm.addEventListener('submit', addTodo);

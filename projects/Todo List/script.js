/*------------Working Process-----------

    1. Select all html class & ID,
    2. Add EventListener,
    3. Add Todo,
    4. Create Element,
    5. Add Todo in LocalStorage,
    6. Delete Todo form window & LocalStorage,
    7. Show all Todo 0n window from LocalStorage.

 */


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
    todoNewRow.id = todoId;
    todoElement.innerHTML = `
        <div class="d-flex d-row justify-content-between">
            <span>${todoValue}</span>
            <div class="action">
                <button type="submit" class="btn btn-success" id="editBtn">Edit</button>
                <button type="submit" class="btn btn-danger" id="deleteBtn">Delete</button>
            </div>
        </div>
    `
    todoNewRow.appendChild(todoElement);
    todoList.appendChild(todoNewRow);

    //deleteBtn
    const deleteBtn = todoElement.querySelector("#deleteBtn");
    deleteBtn.addEventListener('click', deleleTodo);
}

//deleteTodo
const deleleTodo = (e) => {
    const selectedTodo = e.target.parentElement.parentElement.parentElement.parentElement;
    todoList.removeChild(selectedTodo);
    let todos = localStorageTodos();
    todos = todos.filter((todo) => todo.todoId !== selectedTodo.id);
    localStorage.setItem("myTodos",JSON.stringify(todos));
}

//Check localStorage
const localStorageTodos = () => {
    return localStorage.getItem("myTodos") ? JSON.parse(localStorage.getItem("myTodos")) : [];
}

//create addTodo
const addTodo = (e) => {
    e.preventDefault();
    const todoValue = todoInput.value;

    //create unique id
    const todoId = Date.now().toString();
    //create Todo
    createTodo(todoValue, todoId);

    //for clear From input filed after submitting
    todoForm.reset(); 

    //localStorage
    const todos = localStorageTodos();
    todos.push({todoId,todoValue});
    localStorage.setItem("myTodos",JSON.stringify(todos));
}

//loadTodo
const loadTodo = () => {
    const ltodos = localStorageTodos();
    ltodos.map((item) => createTodo(item.todoId, item.todoValue));
}

//Add Listener
todoForm.addEventListener('submit', addTodo);
window.addEventListener('DOMContentLoaded', loadTodo); //Load previous all localStorage todos on window
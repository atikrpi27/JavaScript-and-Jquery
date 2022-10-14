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

    //editBtn
    const editBtn = todoElement.querySelector("#editBtn");
    editBtn.addEventListener('click', function(e, $todoValue, $todoId){
        // console.log("clicked");
        // console.log(todoValue);
        // console.log(todoId); 
        let todos = localStorageTodos();   
        // console.log(todoId);     
        // console.log(todoValue);
        const selectedTodos = e.target.parentElement.parentElement.parentElement.parentElement;
        // console.log(selectedTodos);
        let tdo = todos.filter(todo => todo.selectedTodos === todo.$todoId);
        console.log(tdo);
    });
}

// const myArray = [{id: 1, name:'pipi'}, {id: 2, name:'popo'}];
// const id = 2;

// const variableOne = myArray.filter(itemInArray => itemInArray.id === id);
// console.log(variableOne[0].id);

//editTodo
// const editTodo = () => {
//     console.log("Edit clicked");

//     // console.log(todoValue);
// }


//deleteTodo
const deleleTodo = (e) => {
    const selectedTodo = e.target.parentElement.parentElement.parentElement.parentElement;
    // console.log(selectedTodo)
    todoList.removeChild(selectedTodo);
    let todos = localStorageTodos();
    // console.log(todos)
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
const loadTodos = () => {
    const todos = localStorageTodos();
    todos.map((todo) => createTodo(todo.todoValue, todo.todoId))
}
 
//Add Listener
todoForm.addEventListener('submit', addTodo);
window.addEventListener('DOMContentLoaded', loadTodos); //Load previous all localStorage todos on window
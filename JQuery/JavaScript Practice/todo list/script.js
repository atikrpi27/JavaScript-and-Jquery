var input = document.querySelector('#userInput');
var enter = document.querySelector('#enter');
var ul = document.querySelector('ul')

enter.addEventListener('click', function () {
    if (input.value != "") {
        createElement();
    }
    else {
        alert("Please enter your todo...")
    }
})

function createElement() {
    var list = document.createElement('li');        // Create new List
    inputText = input.value;

    // Create Edit, Delete Button and put input field value in list variable
    list.innerHTML = `                             
            <div class="d-flex d-row justify-content-between">
                <span>${input.value}</span>
                <div class="action">
                    <button type="submit" class="btn btn-success" id="editBtn">Edit</button>
                    <button type="submit" class="btn btn-danger" id="deleteBtn">Delete</button>
                </div>
            </div>
        `

    ul.appendChild(list)                            // Append List in UnOrderList
    input.value = "";                               // Reset input field


    //Edit function
    var editBtn = list.querySelector('#editBtn')
    editBtn.addEventListener('click', function(){
    input.value =  inputText;
    // console.log(input.value)

    const parent = editBtn.parentElement.parentElement.parentElement;   //edit todo
    parent.parentElement.removeChild(parent);
    // console.log(parent)
    })

    //Delete function
    var deleteBtn = list.querySelector('#deleteBtn');
    deleteBtn.addEventListener('click', deleteTodo)
}

function deleteTodo(e){                             // Delete todo
    var selectTodo = e.target.parentElement.parentElement.parentElement
    // console.log(selectTodo)
    ul.removeChild(selectTodo)
}
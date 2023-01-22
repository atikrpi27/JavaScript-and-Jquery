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
    input.value = "";                                // Reset input field

}


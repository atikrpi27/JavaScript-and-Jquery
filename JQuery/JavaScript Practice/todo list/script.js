var input = document.querySelector('#userInput');
var enter = document.querySelector('#enter');
var ul = document.querySelector('ul')

enter.addEventListener('click', function(){
    if (input.value != ""){
        var list = document.createElement('li');        // Create new List
        list.innerText =  input.value;                  // Put input field value in List
        ul.appendChild(list)                            // Append List in UnOrderList
        input.value= "";                                // Reset input field
    }
    else{
        alert("Please enter your todo...")
    }
})
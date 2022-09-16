const name = document.querySelector('#name');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#list');

btn.addEventListener('click', function(e){
    e.preventDefault();

    if (name.value == '' || author.value == '' || year.value == '' ){
        alert('Please insert requried data!!');
    }

    else{
        const newRow = document.createElement('tr');  //create table row
        
        const newName = document.createElement('td'); //create table data as a name
        newName.innerHTML = name.value; //insert table data
        newRow.appendChild(newName); //append table data with table row

        const newAuthor = document.createElement('td');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        const newYear = document.createElement('td');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        bookList.appendChild(newRow) //append all table row with the main table
    }

        document.getElementById('myForm').reset();

})


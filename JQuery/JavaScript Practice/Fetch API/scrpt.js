
const btn = document.querySelector('#btn');
const display = document.querySelector("#show");

btn.addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then(res => res.text())
    .then(data => {
        display.innerText = data;
    })
})

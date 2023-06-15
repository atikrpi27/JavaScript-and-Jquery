
const btn = document.querySelector('#btn');
const btn1 = document.querySelector('#btn1');
const display = document.querySelector("#show");
const display1 = document.querySelector("#show1");

btn.addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.text())
        .then(data => {
            display.innerText = data;
            console.log(data);
    })
})

btn1.addEventListener('click', async function () {
    const route = await fetch('https://jsonplaceholder.typicode.com/todos/2')
    const data = await route.text();
    console.log(data);
    display1.innerText = data;
})


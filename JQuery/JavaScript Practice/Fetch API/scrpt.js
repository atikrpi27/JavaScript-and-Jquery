
const btn = document.querySelector('#btn');
const display = document.querySelector("#show");

// btn.addEventListener('click', function () {
//     fetch('https://jsonplaceholder.typicode.com/todos/2')
//         .then(res => res.text())
//         .then(data => {
//             display.innerText = data;
//     })
// })

// data()

btn.addEventListener('click', async function () {
    const route = await fetch('https://jsonplaceholder.typicode.com/todos/2')
    const data = await route.text();
    console.log(data);
    display.innerText = data;
})


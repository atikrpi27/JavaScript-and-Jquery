const form = document.querySelector("form");
const name = form.querySelector("#name");
const email = form.querySelector("#email");
const password = form.querySelector("#password");


form.addEventListener("submit", formHandeler);

function formHandeler(e){
    e.preventDefault();
    
    const userInfo = {
        name: name.value,
        email: email.value,
        password: password.value
    }

    console.log(userInfo);
    name.value = "";
    email.value = "";
    password.value = "";
    
};
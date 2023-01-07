let display = document.querySelector(".display");
let btn = Array.from(document.querySelectorAll(".button")); 
console.log(btn)

btn.map(btn => {
    btn.addEventListener("click" , (e)=> {
        switch(e.target.innerText){
            case "AC":
                display.innerText = "";
                break;
            case "DEL":
                display.innerHTML = display.innerHTML.slice(0,-1);
                break;

            case "=":
                try{
                    display.innerHTML = eval(display.innerHTML)
                }
                
                catch{
                    display.innerHTML = "Error!";
                }
                break;

            default:
                display.innerText += e.target.innerText;
        }

    })
})

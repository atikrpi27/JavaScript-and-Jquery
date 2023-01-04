/*==================== using Javascript =====================*/

var btn = document.querySelector("#loginBtn");

btn.addEventListener("click", function (e) {
    var pass = document.querySelector("#pass").value;
    var conPass = document.querySelector("#conPass").value;
    if (pass != "" && conPass != "") {
        if (pass == conPass) {
            alert("Login Successfull.")
        }
        else {
            alert("Password missmatch!");
        }
    }

    else {
        alert("Please enter your password using javascript.")
    }
})




/*==================== using JQurey =====================*/

$("#loginBtn1").click(function(){
    var username1 = document.querySelector("#username1");
    var pass1 = document.querySelector("#pass1").value;
    var conPass1 = document.querySelector("#conPass1").value;

    if ( pass1 !="" && conPass1 !=""){
        if (pass1 == conPass1){
            alert("Login Successfull using jqurey")
        }
        else{
            alert("Password missmatch using jqurey!")
        }
    }
    else{
        alert("Please enter your password using jqurey.")
    }
})
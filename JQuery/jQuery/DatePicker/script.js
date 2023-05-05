$(document).ready(function(){
    $(function(){
        $('#datePicker').datepicker();
    })

    $('.btn-submit').click(function(){
        let inputValue = $('#datePicker').val();
        console.log(inputValue);
        $('.output').html("Your Selected date is " + "<b style='color:black'>" + inputValue + "</b>" + "<br>") 
    })   
})
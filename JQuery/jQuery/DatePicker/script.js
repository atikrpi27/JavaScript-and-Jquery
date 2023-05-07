$(document).ready(function(){
    $(function(){
        $('#datePicker').datepicker("setDate", '22/03/2020')
        $('#datePicker').datepicker({
            // defaultDate: "22/03/2020",
            dateFormat: 'dd-mm-yy',
            changeMonth: true,
            changeYear: true,
            // numberOfMonths:2,
            showButtonPanel: true,
            labelMonthNext: 'Next month',
            labelMonthSelect: 'Select a month',
            // minDate: new Date(),    //for disable prev months and date
        });
    })
    $('.btn-submit').click(function(){
        let inputValue = $('#datePicker').val();
        console.log(inputValue);
        $('.output').html("Your Selected date is " + "<b style='color:black'>" + inputValue + "</b>" + "<br>") 
    })   
})
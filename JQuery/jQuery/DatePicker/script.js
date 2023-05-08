$(document).ready(function () {
    // ============ Single date picker ============== //
    $(function () {
        $('#datePicker').datepicker("setDate", '22/03/2020')
        $('#datePicker').datepicker({
            // defaultDate: "22/03/2020",
            dateFormat: 'dd-mm-yy',
            // changeMonth: true,
            // changeYear: true,
            // numberOfMonths:2,
            showButtonPanel: true,
            labelMonthNext: 'Next month',
            labelMonthSelect: 'Select a month',
            // minDate: new Date(),    //for disable prev months and date
        });
    })

    $('.btn-submit').click(function () {
        let inputValue = $('#datePicker').val();
        console.log(inputValue);
        $('.output').html("Your Selected date is " + "<b style='color:black'>" + inputValue + "</b>" + "<br>")
    })


    // ============ Double date picker ============== //
    $(function () {
        $('#datePicker1 , #datePicker2').datepicker({
            dateFormat: 'dd-mm-yy',
            labelMonthNext: 'Next month',
            labelMonthSelect: 'Select a month',
        });
    })

    $('.btn-submit-1').click(function () {
        let inputValue1 = $('#datePicker1').val();
        let inputValue2 = $('#datePicker2').val();
        console.log(inputValue1);
        console.log(inputValue2);
        $('.output-1').html("Your Selected date is " + "<b style='color:black'>" + inputValue1 + "</b>" + "  to  " + "<b style='color:black'>" + inputValue2 + "</b>")
    })

})
$(document).ready(function () {
    let i = 0;
    $('#enter').click(function () {
        let todoVal = $('#userInput').val()

        if (todoVal != "") {
            i++;
            $('.listItems-ul').append(`<li class="d-flex d-row justify-content-between" id= ${i}>
                <span>${todoVal}</span>
                <div class="action">
                    <button type="submit" class="btn btn-success editBtn" id="editBtn">Edit</button>
                    <button type="submit" class="btn btn-danger deleteBtn" id="${i}">Delete</button>
                </div>
                </li>`);
            $('#userInput').val('');
        }
        else {
            alert("Please enter your todo...")
        }

        // Delete Function 
        $('.deleteBtn').click(function () {
            // $(this).parent().parent().remove()                   // Remove Normally parent wise

            if ($(this).id == $(this).parent().parent().id) {        //  Remove using Id
                $(this).parent().parent().remove();
            }
            else {
                alert("Please match your id")
            }
        })

        // Edit Function
        $('.editBtn').click(function () {
            let editParent = $(this).parent().parent().find('span');
            let oldValue = editParent.text();
            editParent.html('<input id="uInput" type="text" placeholder="Edit Item..." />')
            $(this).html('Save')
            $(this).removeClass('editBtn').addClass('saveBtn');
            let uInput = $('#uInput').val(oldValue);

        $('.saveBtn').click(function () {
            let newValue = uInput.val();
            editParent.html(`<span>${newValue}</span>`)
            $(this).html('Edit')
            $(this).removeClass('saveBtn').addClass('editBtn');
        })

        })


    })


});
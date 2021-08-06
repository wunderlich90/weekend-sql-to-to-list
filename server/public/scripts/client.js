console.log('in client.js');

$(document).ready(onReady);

function onReady() {
    getTasksData();
    $('#submitBtn').on('click', postTasksData);
}

function getTasksData() {
    $('#viewTasks').empty();
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function (response) {
        console.log('pancakes', response);
        // append data to the DOM
        for (let i=0; i<response.length; i++) {
            $('#viewTasks').append(`
                <tr data-id="${response[i].id}">
                    <td>${response[i].task}</td>
                    <td>${response[i].addedBy}</td>
                    <td>${response[i].dateAdded}</td>
                    <td>${response[i].deadline}</td>
                    <td>
                        <button class="deleBtn">Delete>/button>
                        <button class="markComplete">Mark Complete</button>
                    </td>
                </tr>
            `)
        }
        
    })
} // end getTasksData

function postTasksData() {
    // becomes req.body
    let taskObject = {
        task: $('#task').val(),
        addedBy: $('#addedBy').val(),
        dateAdded: $('#dateAdded').val(),
        deadline: $('#deadline').val()
    }
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: 'taskObject'
    }).then(function(respons) {
        $('#task').val(''),
        $('#addedBy').val(''),
        $('#dateAdded').val(''),
        $('#deadline').val('')
        getTasksData();
    })
}

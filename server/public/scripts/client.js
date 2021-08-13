console.log('in client.js');

$(document).ready(onReady);

function onReady() {
    getTasksData();
    $('#submitBtn').on('click', postTasksData);
    $('#tasksTable').on('click', '.deleteBtn', deleteTask);
    $('#tasksTable').on('click', '.markComplete', completeTask);
}

function getTasksData() {
    $('#viewTasks').empty();
    $.ajax({
        type: 'GET',
        url: '/tasksLibrary'
    }).then(function (response) {
        console.log('pancakes', response);
        // append data to the DOM
        for (let i=0; i<response.length; i++) {
            $('#viewTasks').append(`
                <tr data-id="${response[i].id}">
                    <td>${response[i].task}</td>
                    <td>${response[i].addedBy}</td>
                    <td>${response[i].completed}</td>
                    <td>${response[i].dateAdded}</td>
                    <td>${response[i].deadline}</td>                      
                    <td>
                        <button class="deleteBtn">Delete</button>
                        <button class="markComplete">Mark Complete </>
                    </td>
                </tr>
            `);
        }
        
    });
} // end getTasksData

function postTasksData() {
    // becomes req.body
    let taskObjectToSend = {
        task: $('#task').val(),
        addedBy: $('#addedBy').val(),
        dateAdded: $('#dateAdded').val(),
        deadline: $('#deadline').val(),
    }
    $.ajax({
        type: 'POST',
        url: '/tasksLibrary',
        data: taskObjectToSend
    }).then(function(response) {
        $('#task').val(''),
        $('#addedBy').val(''),
        $('#dateAdded').val(''),
        $('#deadline').val('')
        getTasksData();
    });
}

function deleteTask() {
    const taskId = $(this).closest('tr').data('id')
    $.ajax({
        type: 'DELETE',
        url: `/tasksLibrary/${taskId}`,
    }).then(function(res) {
        console.log('in DELETE');
        getTasksData();
        
    })
}

function completeTask() {
    console.log('in completeTask', $(this));
    const taskId = $(this).closest('tr').data('id');
   

    $.ajax({
        method: 'PUT',
        url: `/tasksLibrary/${taskId}`,
    }).then(function(response) {
        getTasksData();
    }).catch(function(error) {
        console.log(error);
        alert('Something went wrong!');
        
    });
}

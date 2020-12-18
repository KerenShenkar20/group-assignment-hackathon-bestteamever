$(document).ready(function () {
    getAllSchedules();
    operationsListeners();
});


function getAllSchedules() {
    $.ajax({
        url: `http://localhost:3000/api/schedules`,
        type: 'GET',
        success: function(schedules) {
            recreateSchTable(schedules);
        }
    });
}

function appendTableRow(id, date, time, game)
{
    let tableRow = "<tr><td>$userId</td><td>$date</td><td>$time</td><td>$game</td>";
    tableRow = tableRow.replace("$userId",id);
    tableRow = tableRow.replace("$first_name",date);
    tableRow = tableRow.replace("$last_name",time);        
    tableRow = tableRow.replace("$date",game);        
    $("#schTable tbody").append(tableRow);
}

function recreateSchTable(users) {
    $("#schTable tbody").empty().remove();
    const schedulesLen = schedules.length;
    if (schedulesLen) {
        $('table').append('<tbody></tbody>');
        for (let i = 0; i < schedulesLen; i++) {
            appendTableRow(schedules[i].userId, schedules[i].date, schedules[i].time, schedules[i].game)
        }
    } 
}

function operationsListeners() {
    $("#show-button").click(() => {
        $("#get-users").css("display", "block");
        getAllSchedules();
    });

}
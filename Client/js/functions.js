$(document).ready(function () {
    operationsListeners();
});


function getAllSchedules() {
    $.ajax({
        url: 'https://bestteamever-hackathon.herokuapp.com/api/schedules',
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
    tableRow = tableRow.replace("$date",date);
    tableRow = tableRow.replace("$time",time);        
    tableRow = tableRow.replace("$game",game);        
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
        getAllSchedules();
    });

}
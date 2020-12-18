// Change the name of the file to something less generic

$("#show-button").click(() => {
    $("#get-users").css("display", "block");
    getAllUsers();
});

function getAllUsers() {
    $.ajax({
        url: `http://localhost:3000/api/users`,
        type: 'GET',
        success: function(users) {
            recreateUsersTable(users);
        }
    });
}

function appendTableRow(id, first_name, last_name, date, hour, gameName)
{
    let tableRow = "<tr><td>$userId</td><td>$first_name</td><td>$last_name</td><td>$date</td><td>$hour</td><td>$gameName</td></tr>";
    tableRow = tableRow.replace("$userId",id);
    tableRow = tableRow.replace("$first_name",first_name);
    tableRow = tableRow.replace("$last_name",last_name);        
    tableRow = tableRow.replace("$date",date);        
    tableRow = tableRow.replace("$hour",hour);        
    tableRow = tableRow.replace("$gameName", gameName);              
    $("#usersTable tbody").append(tableRow);
}

function recreateUsersTable(users) {
    $("#usersTable tbody").empty().remove();
    const usersLen = users.length;
    if (usersLen) {
        $('table').append('<tbody></tbody>');
        for (let i = 0; i < usersLen; i++) {
            appendTableRow(users[i].id, users[i].first_name, users[i].last_name, users[i].date, users[i].hour, users[i].gameName)
        }
    } 
}
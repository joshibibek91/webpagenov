var studentArray=[]

for(i=0; i<2; i++){
    var fullName, address, roll;
    fullName=prompt(`Please enter Name ${i+1}:`)
    address=prompt(`Please enter Address ${i+1}:`)
    roll=prompt(`Please enter roll number ${i+1}:`)
    studentArray.push(({fullName, address, roll}))
}

console.log(studentArray)

function generateTable(data) {
    var tableHtml = '<table style="border: 1px solid black;">\n<tr>\n<th>Full Name</th>\n<th>Address</th>\n<th>Roll</th>\n</tr>\n';

    for (var i = 0; i < data.length; i++) {
        var student = data[i];
        tableHtml += '<tr>\n<td>' + student.fullName + '</td>\n<td>' + student.address + '</td>\n<td>' + student.roll + '</td>\n</tr>\n';
    }

    tableHtml += '</table>';

    console.log(tableHtml)
    document.getElementById("table_container").innerHTML = tableHtml;
}

generateTable(studentArray)
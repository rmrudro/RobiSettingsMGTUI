
function UpdateUser(username, firstname, lastname, email, roleid, retailerCodeAirtel, retailerCodeRobi,
    retailerMsisdnAirtel, retailerMsisdnRobi, contact, address, dob, channelID, roleid, userId) {
    console.log(firstname);
    $.cookie("username", username);
    $.cookie("firstname", firstname);
    $.cookie("lastname", lastname);
    $.cookie("email", email);
    $.cookie("roleId", roleid);
    $.cookie("userId", userId);
    $.cookie("retailerCodeAirtel", retailerCodeAirtel);
    $.cookie("retailerCodeRobi", retailerCodeRobi);
    $.cookie("retailerMsisdnAirtel", retailerMsisdnAirtel);
    $.cookie("retailerMsisdnRobi", retailerMsisdnRobi);
    $.cookie("contact", contact);
    $.cookie("dob", dob);
    $.cookie("address", address);
    $.cookie("channelID", channelID);
    $.cookie("roleid", roleid);
    $.cookie("roleid", roleid);
    location.href = '/UserManagement/UserUpdate';
}

var tables = "";
function GetAllUser() {
    
    axios.get(all_Userlist, authToken).then(function (result) {
        let i = 0;
        let results = result.data.resultSet;
        
        let resultlen = results.length;
        //console.log(resultlen);
        if (resultlen > 0) {
            var rows = result.data.resultSet.map(user => {
                i = i + 1;
                let username = user.username;
                const profileURL = `./UserUpdate?name=${user.username}&firstname=${user.firstname}&usertype=${user.usertype}`;
                return `<tr id='row'>
    <td class='tr_row' style='text-align:center'>${i}</td>
    <td class='tr_row' style='text-align:center'>${user.username}</td>
    <td class='tr_row' style='text-align:center'>${user.firstname}</td>
    <td class='tr_row' style='text-align:center'>${user.lastname}</td>
    <td class='tr_row' style='text-align:center'>${user.email}</td>
    <td class='tr_row' style='text-align:center'>${user.role.roleName}</td>
    <td>
      <a href="#" class="" onclick="UpdateUser('${username}','${user.firstname}','${user.lastname}','${user.email}','${user.roleid}','${user.retailerCodeAirtel}',
'${user.retailerCodeRobi}','${user.retailerMsisdnAirtel}','${user.retailerMsisdnRobi}','${user.contact}','${user.address}'
,'${user.dob}','${user.channeltypeid}','${user.role.id}','${user.id}')"><img src="/images/Common UI Assets/Icon-16.png" /></a>
      <a href="#" style="padding-left:15px;" class="delete" data-user-id="${user.id}"><img src="/images/Common UI Assets/Icon-16 _Delete.png" /></a>
    </td>
  </tr>`;
            });
            $('#usertable tbody').append(rows).on('click', 'a.delete', function (e) {
                onDelete($(this).data('user-id'));
            });
            LoadPaging();
        }
        else {

            $('#usertable').html("No Data Found!").css("text-align", "center");
        }

       
    }).catch(function (error) {
        $('#usertable').html("<b>Network Error NO Data Found!</b>").css("text-align", "center");
        //Swal.fire({ type: "error", title: error.message.toUpperCase() })
    });
}







$("#row").click(function () {
    alert('hello TR');
});

function onDelete(item) {


    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result1) => {
        if (result1.value) {
            axios.delete(all_Userlist + '/' + item, authToken).then(function (result) {

                console.log(result.data);
                
                if (result.data.isResult) {
                    let txtMessageRes = result.data.result.messageEN;
                    Swal.fire({

                        type: 'success',
                        title: txtMessageRes,
                        showConfirmButton: false,
                        timer: 1500
                    });

                    var table = $('#usertable').DataTable();

                    table.row($('#row' + item)).remove();
                    table.draw();
                    
                }

                else {

                    let txtMessageRes = result.data.result.messageEN;
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: txtMessageRes,

                    });
                    
                }

            });

        }
    })


    //axios.delete(all_Userlist + '/' + item, authToken).then(function (result) {


    //    $('#tbl_UserList').empty();

    //    Swal.fire({ type: "info", title: "Deleted" });
    //    GetAllUser();

    //    return;
    //});
}


function LoadPaging() {
    tables=$('#usertable').DataTable({
        //"paging": true,
        
        //"lengthChange": false,
        "bInfo": false,
        "iDisplayLength": 5,
        //
        //"dom": '<"pull-left"f><"pull-right"l>tip',
        //orderCellsTop: true,
        //fixedHeader: true,
        dom: 'Bfrtip',
        //buttons: [
        //    'excelHtml5'
        //],
      
    });

    var buttons = new $.fn.dataTable.Buttons(tables, {
        buttons: [
            
            'excelHtml5',
            
        ]
    }).container().appendTo($('#exportButton'));
}

//'copy', 'csv', 'pdf', 'print'

$(document).ready(function () {


    GetAllUser();
    $(document).on('keyup change', '.txtusename', function () {
        
        tables.search('').columns().search('').draw();
        tables.column(1).search(this.value).draw();
    });

    $(document).on('keyup change', '.txtRole', function () {
        tables.search('').columns().search('').draw();
        tables.column(5).search(this.value).draw();
    });

   
    $(".usrole").change(function () {
       
        tables.search('').columns().search('').draw();
        tables.column(5).search($(".usrole option:selected").text()).draw();
    });
    

    axios.get(all_RoleList + '/GetAll', authToken).then(function (result) {
        //console.log(result);
        let select = document.getElementById('usrole');
        for (let i = 0; i < result.data.resultSet.length; i++) {
            //console.log(result.data.resultSet[i]);
            var optname = result.data.resultSet[i].roleName;
            var optid = result.data.resultSet[i].id;
            var el = document.createElement("option");            

            el.textContent = optname;
            el.value = optid;
            select.appendChild(el);

        }
        var o = new Option("ALL", "0");
        $(o).html("ALL");
        $("#usrole").append(o);

    });



    $("body").on("click", ".btn_Export", function (e) {

        var html = document.querySelector("#usertable").outerHTML;
        export_table_to_csv(html, "table.csv");

    });

});

function download_csv(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV FILE
    csvFile = new Blob([csv], { type: "text/csv" });

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // We have to create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Make sure that the link is not displayed
    downloadLink.style.display = "none";

    // Add the link to your DOM
    document.body.appendChild(downloadLink);

    // Lanzamos
    downloadLink.click();
}

function export_table_to_csv(html, filename) {

    var csv = [];
    var rows = document.querySelectorAll("table tr");

    for (var i = 0; i < rows.length; i++) {

        var row = [], cols = rows[i].querySelectorAll("td, th");

        for (var j = 0; j < cols.length; j++)
            row.push(cols[j].innerText);

        csv.push(row.join(","));
    }

    // Download CSV
    download_csv(csv.join("\n"), filename);
}



//$("body").on("click", ".btn_Search", function (e) {
//    let usroleID = $('#usrole').val();

//    console.log(usroleID);
//    if (usroleID == '0') {
//        GetAllUser();
//    }
//    else {
//        axios.get(all_Userlist + '/GetUsersByRole/' + usroleID, authToken).then(function (result) {
//            $("#usertable tr").remove();
//            console.log(result);


//            var rows = result.data.result.map(user => {
//                const profileURL = `./UserUpdate?name=${user.username}&firstname=${user.firstname}&usertype=${user.usertype}`;
//                return `<tr> 
//    <td>${user.username}</td>
//    <td>${user.firstname}</td>
//    <td>${user.lastname}</td>
//    <td>${user.email}</td>
//    <td>${user.roleid}</td>
//    <td>
//      <a href="${profileURL}"><img src="/images/Common UI Assets/Icon-16.png" /></a>
//      <a href="#" class="delete" data-user-id="${user.id}"><img src="/images/Common UI Assets/Icon-16 _Delete.png" /></a>
//    </td>
//  </tr>`;
//            });



//            $('#usertable tbody').append(rows).on('click', 'a.delete', function (e) {
//                onDelete($(this).data('user-id'));
//            });

//            //$('#usertable thead').prepend(rows1);

//            //$('#usertable tbody tr:first') // get first row
//            //    //.detach() // remove from table, it's optional to detach
//            //    .wrap('#usthead') // wrap with tbody
//            //    .parent() // get tbody 
//            //    .prependTo('#usertable');

//        });


//    }
//    //var myTable = jQuery("#usertable");
//    //var thead = myTable.find("thead");
//    //var thRows = myTable.find("tr:has(th)");

//    //if (thead.length === 0) {
//    //    thead = jQuery("<thead></thead>").appendTo(myTable);
//    //}

//    //var copy = thRows.clone(true).appendTo("thead");
//    //thRows.remove();

//});









//Previous code 

//$(document).ready(function () {
//    axios.get(all_Userlist, authToken).then(function (result) {

//        console.log(result.data.resultSet);

//        table = document.getElementById('tblallUserlist');
//        var newTableData = "";
//        alert('Hello');
//        for (let i = 0; i < result.data.resultSet.length; i++) {
//            let tableallrowdata = {
//                username: result.data.resultSet[i].username,
//                firstname: result.data.resultSet[i].firstname,
//                usertype: result.data.resultSet[i].usertype
//            };

//            console.log(tableallrowdata);

//            let tableItem = "<tr><td>" + result.data.resultSet[i].username + "</td>";
//            tableItem = tableItem + '<td>' + result.data.resultSet[i].firstname + '</td>';
//            tableItem = tableItem + '<td>' + result.data.resultSet[i].lastname + '</td>';
//            tableItem = tableItem + '<td>' + result.data.resultSet[i].email + '</td>';
//            tableItem = tableItem + '<td>' + result.data.resultSet[i].usertype + '</td>';

//            tableItem = tableItem + '<td ><a onClick="onGet(' + tableallrowdata.username + ', ' + tableallrowdata.firstname + ', ' + tableallrowdata.usertype + ')"><img src="/images/Common UI Assets/Icon-16.png" ></img></a><a><img  src="/images/Common UI Assets/Icon-16 _Delete.png" style="padding-left:20px;" /></a></td></tr>';


//            newTableData += tableItem;

//        }
//        console.log(newTableData);
//        $('#tbl_UserList').html(newTableData);
//        //console.log(result.data.length);
//    });
//    //' + username + ', ' + firstname + ', ' + usertype + '

//    this.onGet = function (username, firstname, usertype) {


//        console.log(username);
//        console.log(firstname);
//        console.log(usertype);
//        //var url = "./UserUpdate?name=" + username + "&firstname=" + firstname + "&usertype=" + usertype;
//        //window.location.href = url;
//    }

//    // Role Name Get DropDownlist
//    axios.get(all_RoleList, authToken).then(function (result) {
//        //console.log(result);
//        let select = document.getElementById('usrole');
//        for (let i = 0; i < result.data.resultSet.length; i++) {
//            //console.log(result.data.resultSet[i]);
//            var optname = result.data.resultSet[i].roleName;
//            var optid = result.data.resultSet[i].id;
//            var el = document.createElement("option");
//            el.textContent = optname;
//            el.value = optid;
//            select.appendChild(el);

//        }

//    });


//    $("body").on("click", ".btn_Search", function (e) {
//        let test = $('#usrole').val(); //$(".usrole option:selected").val();   // $('.usrole').val();
//        //console.log(test);
//        //alert('Hello world');
//    });


//});



//Previous btnsertch code 
//$("body").on("click", ".btn_Search", function (e) {
//    let usroleID = $('#usrole').val();
//    $("#tbl_UserList").empty();
//    if (usroleID == '0') {
//        //$("#usertable tbody").remove();

//        GetAllUser();
//    }
//    else {

//        $("#usertable tbody").remove();

//        axios.get(all_Userlist + '/GetUsersByRole/' + usroleID, authToken).then(function (result) {
//            console.log(result);

//            var rows = result.data.result.map(user => {
//                const profileURL = UpdatePage();
//                return `<tr> 
//    <td>${user.username}</td>
//    <td>${user.firstname}</td>
//    <td>${user.lastname}</td>
//    <td>${user.email}</td>
//    <td>${user.roleid}</td>
//    <td>
//      <a href="${profileURL}"><img src="/images/Common UI Assets/Icon-16.png" /></a>
//      <a href="#" class="delete" data-user-id="${user.id}"><img src="/images/Common UI Assets/Icon-16 _Delete.png" /></a>
//    </td>
//  </tr>`;
//            });

//            $('#usertable tbody').append(rows).on('click', 'a.delete', function (e) {
//                onDelete($(this).data('user-id'));
//            });
//        });
//    }

//});
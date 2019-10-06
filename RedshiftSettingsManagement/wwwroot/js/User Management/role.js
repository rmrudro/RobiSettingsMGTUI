
function OnEdit(rolename, roleid) {
    console.log(rolename);
    console.log(roleid);

    $.cookie("rolename", rolename);
    $.cookie("roleid", roleid);
    
    location.href = '/UserManagement/RoleUpdate';
}

function AllRole() {

    axios.get(all_RoleList + '/GetAll', authToken).then(function (result) {
        var results = result.data.resultSet;
        var tbllength = results.length;

        let i = 0;
        if (tbllength > 0) {

            var rows = results.map(role => {
                i = i + 1;
                let rolename = role.roleName;
                //const profileURL = `./UserUpdate?name=${user.username}&firstname=${user.firstname}&usertype=${user.usertype}`;
                return `<tr> 
    <td class='tr_row' style='text-align:center'>${i}</td>
    <td class='tr_row' style='text-align:center'>${rolename}</td>
 
    <td >
      <a  href="#" class="" onclick="OnEdit('${rolename}','${role.id}')"><img src="/images/Common UI Assets/Icon-16.png" style='padding-left:30%;' /></a>
      <a style'text-align:center' href="#" class="delete" data-role-id="${role.id}"><img src="/images/Common UI Assets/Icon-16 _Delete.png" style='padding-left:10%;' /></a>
    </td>
  </tr>`;
            });
            $('#tblRoletable tbody').append(rows).on('click', 'a.delete', function (e) {
                onDelete($(this).data('role-id'));
            });
            LoadPaging();

        }
        else {

        }

       
    }).catch(function (error) {
        $('#tblRoletable').html("<b>Network Error NO Data Found!</b>").css("text-align", "center");
        //Swal.fire({ type: "error", title: error.message.toUpperCase() })
    });
}

function LoadPaging() {

    $('#tblRoletable').DataTable({
        "paging": true,
        "searching": false,
        "lengthChange": false,
        "bInfo": false,
        "iDisplayLength": 6,

    });

}


function onDelete(item) {

    console.log(item);

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
            axios.delete(all_RoleList + '/' + item, authToken).then(function (result) {
                console.log(result.data.isResult);
                if (result.data.isResult) {
                    let txtMessageRes = result.data.result.messageEN;
                    Swal.fire({

                        type: 'success',
                        title: txtMessageRes,
                        showConfirmButton: false,
                        timer: 1500
                    });
                   
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
    });
}



    $(document).ready(function () {

        AllRole();

});




  //<td class='tr_row' style='text-align:center'>${user.firstname}</td>
    // <td class='tr_row' style='text-align:center'>${user.lastname}</td>
    // <td class='tr_row' style='text-align:center'>${user.email}</td>
    //<td class='tr_row' style='text-align:center'>${user.roleid}</td>



//axios.get(all_Userlist, authToken).then(function (result) {


//    let i = 0;

//    var rows = result.data.resultSet.map(user => {
//        i = i + 1;
//        let username = user.username;
//        const profileURL = `./UserUpdate?name=${user.username}&firstname=${user.firstname}&usertype=${user.usertype}`;
//        return `<tr> 
//    <td class='tr_row' style='text-align:center'>${i}</td>
//    <td class='tr_row' style='text-align:center'>${user.username}</td>
//    <td class='tr_row' style='text-align:center'>${user.firstname}</td>
//    <td class='tr_row' style='text-align:center'>${user.lastname}</td>
//    <td class='tr_row' style='text-align:center'>${user.email}</td>
//    <td class='tr_row' style='text-align:center'>${user.roleid}</td>
//    <td>
//      <a href="#" class="" onclick="UpdateUser('${username}','${user.firstname}','${user.lastname}','${user.email}','${user.roleid}','${user.id}')"><img src="/images/Common UI Assets/Icon-16.png" /></a>
//      <a href="#" class="delete" data-user-id="${user.id}"><img src="/images/Common UI Assets/Icon-16 _Delete.png" /></a>
//    </td>
//  </tr>`;
//    });
//    $('#usertable tbody').append(rows).on('click', 'a.delete', function (e) {
//        onDelete($(this).data('user-id'));
//    });
//});
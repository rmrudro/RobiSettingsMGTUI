﻿$("body").on("click", ".btnRoleSave", function (e) {

    let rolename = $('.txtroleName').val();
    let RoleMode = { roleName: rolename};

    axios
        .post(all_RoleList + '/add', RoleMode, authToken)
        .then(function (result) {
            console.log(result.data);
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
                    footer: '<a href>Why do I have this issue?</a>'
                });
            }

            //location.href = '/UserManagement/UserAdd';
        });



});


$("body").on("click", ".btnAssignMenu", function (e) {

    var menuselect = [];
    var userRole=$('#usrole').val();


    $("#chkMenuMname:checked").each(function () {
        menuselect.push({
            menuName: $(this).val()
        });
        //$(this).val()
    });

    axios
        .post(all_RoleList + '/AssisgnMenu?roleId=' + userRole, menuselect, authToken)
        .then(function (result) {

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

            }

        });

    console.log(menuselect);
});


function GetAllRole() {
    axios.get(all_RoleList + '/GetAll', authToken).then(function (result) {
        console.log(result);
        let select = document.getElementById('usrole');
        for (let i = 0; i < result.data.resultSet.length; i++) {

            var optname = result.data.resultSet[i].roleName;
            var optid = result.data.resultSet[i].id;
            var el = document.createElement("option");
            el.textContent = optname;
            el.value = optid;
            select.appendChild(el);

        }
    });
}

$(document).ready(function () {
    GetAllRole();
});

$("body").on("click", ".btnRoleUpdate", function (e) {

    let rolename = $('.txtroleName').val();
    let roleid = $('.txtroleid').val();

    let RoleMode = { roleName: rolename };

    axios
        .put(all_RoleList + '/' + roleid, RoleMode, authToken)
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

                let txtMessageRes = result.data.result.messageEN;
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: txtMessageRes,

                });

            }

        });

});



$(document).ready(function () {




    $(function () {
        if ($.cookie("rolename") != null && $.cookie("roleid") != null) {
            $('.txtroleName').val($.cookie("rolename"));
            $('.txtroleid').val($.cookie("roleid"));

            $.removeCookie("rolename");
            $.removeCookie("roleid");

        }
    });

});
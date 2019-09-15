
$("body").on("click", ".btnRoleUpdate", function (e) {

    let rolename = $('.txtroleName').val();
    let roleid = $('.txtroleid').val();

    let RoleMode = { roleName: rolename };

    axios
        .put(all_RoleList + '/' + roleid, RoleMode, authToken)
        .then(function (result) {
            if (result.data.isResult) {

                Swal.fire({ type: "Sucess", title: "Sucessfully Updated" });

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
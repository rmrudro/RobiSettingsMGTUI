$("body").on("click", ".btnpasswordGenerate", function (e) {
    function randString(id) {
        var dataSet = $(id).attr('data-character-set').split(',');
        var possible = '';
        if ($.inArray('#', dataSet) >= 0) {
            possible += '![]{}()%&*$#^<>~@|';
        }
        
        if ($.inArray('A-Z', dataSet) >= 0) {
            possible += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        if ($.inArray('0-9', dataSet) >= 0) {
            possible += '0123456789';
        }
        if ($.inArray('a-z', dataSet) >= 0) {
            possible += 'abcdefghijklmnopqrstuvwxyz';
        }
        var text = '';
        for (var i = 0; i < $(id).attr('data-size'); i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    // Create a new password on page load

    $('.txtPasswordGenerator').each(function () {

        $(this).val(randString($(this)));

    });


});


$(document).ready(function () {
    GetAllRole();
    GetAllChannel();
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

    function GetAllChannel() {
        axios.get(allChannel_api, authToken).then(function (result) {

            //console.log(result.data.resultSet.length);
            console.log(result.data.result);
            let select = document.getElementById('usrchannel');
            for (let i = 0; i < result.data.result.length; i++) {
                var optname = result.data.result[i].channelName;
                var optid = result.data.result[i].id;
                var el = document.createElement("option");
                el.textContent = optname;
                el.value = optid;
                select.appendChild(el);

            }

        });
    }

    $("body").on("click", ".btnAddUser", function (e) {

        var robi = 'Robi';
        var airtel = 'Airtel';
        var admin = 'Admin';
        var adminstrator = 'Adminstrator';
         

        let us_roleid = $('.usrole').val();
        let us_channel_ID = $('.usrchannel').val();
        let userName = $(".txtusername").val();
        let firstName = $(".txtfirstName").val();
        let lastname = $(".txtlastName").val();
        let dobirth = $('.datepickers').val();
        let usemail = $('.txtemail').val();
        let us_address = $('.txtaddress').val();
        let us_contact = $('.txtContact').val();

        var userNamevalidate = userName;

        let txtRETAILERMSISDNAIRTEL = $('.txtRetailerMSISDNAirtel').val();
        let txtRETAILERMSISDNROBI = $('.txtRetailerMSISDNRobi').val();
        let txtRETAILERCODEAIRTEL = $('.txtRetailerCodeAirtel').val();
        let txtRETAILERCODEROBI = $('.txtRetailerCodeRobi').val();
        let txtpassword = $('.txtPasswordGenerator').val();



        if (txtpassword.includes(robi)) {     /*.toLowerCase()*/
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Text Should Not Have Robi',
                footer: '<a href>Why do I have this issue?</a>'
            });
        }
        else if (txtpassword.includes(airtel)) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Text Should Not Have Airtel',
                footer: '<a href>Why do I have this issue?</a>'
            });
        }
        else if (txtpassword.includes(admin)) {  //.toLowerCase()
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Text Should Not Have Admin',
                footer: '<a href>Why do I have this issue?</a>'
            });
        }
        else if (txtpassword.includes(adminstrator)) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Text Should Not Have Admininstrator',
                footer: '<a href>Why do I have this issue?</a>'
            });
        }
        else if (txtpassword.includes(userName)) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Password Should Not Have username',
                footer: '<a href>Why do I have this issue?</a>'
            });
        }
        else {
            
            let userModel = {
                username: userName,
                retailermsisdn: "01847287638",
                firstname: firstName,
                lastname: lastname,
                dob: dobirth,
                CHANNELTYPEID: us_channel_ID,
                email: usemail,
                address: us_address,
                contact: us_contact,
                companY_ID: 1,
                roleid: us_roleid,
                retailerPosCode: "990",
                id: 0,
                status: 0,
                createddate: 0,
                updateddate: 0,
                createdby: 0,
                updatedby: 0,
                RETAILERMSISDNAIRTEL: txtRETAILERMSISDNAIRTEL,
                RETAILERMSISDNROBI: txtRETAILERMSISDNROBI,
                RETAILERCODEAIRTEL: txtRETAILERCODEAIRTEL,
                RETAILERCODEROBI: txtRETAILERCODEROBI,
                password: txtpassword
            };

            console.log(userModel);
            axios
                .post(all_Userlist + '/add', userModel, authToken)
                .then(function (result) {

                    console.log(result.data);

                    if (result.data.isResult) {
                        Swal.fire({
                            type: 'success',
                            title: 'Sucessfully Inserted',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                    else {

                        Swal.fire({
                            type: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                            footer: '<a href>Why do I have this issue?</a>'
                        });
                    }

                });
        }
        


        

    });
});
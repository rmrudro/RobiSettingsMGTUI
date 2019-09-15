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

        let us_roleid = $('.usrole').val();
        let us_channel_ID = $('.usrchannel').val();
        let userName = $(".txtusername").val();
        let firstName = $(".txtfirstName").val();
        let lastname = $(".txtlastName").val();
        let dobirth = $('.datepickers').val();
        let usemail = $('.txtemail').val();
        let us_address = $('.txtaddress').val();
        let us_contact = $('.txtContact').val();

        let txtRETAILERMSISDNAIRTEL = $('.txtRetailerMSISDNAirtel').val();
        let txtRETAILERMSISDNROBI = $('.txtRetailerMSISDNRobi').val();
        let txtRETAILERCODEAIRTEL = $('.txtRetailerCodeAirtel').val();
        let txtRETAILERCODEROBI = $('.txtRetailerCodeRobi').val();

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
            RETAILERCODEROBI: txtRETAILERCODEROBI
        };

        console.log(userModel);
        axios
            .post(all_Userlist +'/add', userModel, authToken)
            .then(function (result) {

                Swal.fire({ type: "Sucess", title: "Sucessfully Inserted" });
                //location.href = '/UserManagement/UserAdd';
            });

    });
});
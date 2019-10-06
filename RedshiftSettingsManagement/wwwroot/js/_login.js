
function checkPasswordStrength() {
    var number = /([0-9])/;
    var alphabets = /([a-zA-Z])/;
    var special_characters = /([~,!,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
    if ($('#txtPassword').val().length < 8) {
        $('#password-strength-status').removeClass();
        $('#password-strength-status').addClass('weak-password');
        $('#password-strength-status').html("Weak (should be atleast 8 characters.)");
    } else {

        if ($('#txtPassword').val().match(number) && $('#txtPassword').val().match(alphabets) && $('#txtPassword').val().match(special_characters)) {
            $('#password-strength-status').removeClass();
            $('#password-strength-status').addClass('strong-password');
            $('#password-strength-status').html("Strong");
        } else {
            $('#password-strength-status').removeClass();
            $('#password-strength-status').addClass('medium-password');
            $('#password-strength-status').html("Medium (should include alphabets, numbers and special characters.)");
        }
    }
}



$(document).ready(function () {
    //const login_api = baseHost + '/api/v1/account/login';
    $("img").css("height", "80px");
    var staticResponse = null;
  
    $("body").on("click", ".btn_login", function (e) {
        //window.location.href = "./Home";
        let username_ = $("#textUserName").val();
        //alert(username_);
        let password_ = $("#txtPassword").val();
        if (!username_) {
            Swal.fire({ type: "info", title: "Username Required." });
            return;
        }
        if (!password_) {
            Swal.fire({ type: "info", title: "Password Required." });
            return;
        }
        let loginModel = {
            userName: username_, password: password_, deviceType: 0, mac: "String", appVersionCode: "1", "tCapVersionCode": 0,
            "imei": "string",
            "tabletVendor": "string" };
            axios
                .post(login_api, loginModel, common)
                .then(function (result) {
                    // console.log(result.data.result.posCode);
                    //console.log(result.data.result);
                    //        if (result.data.isResult) {
                    console.log(result.data);
                    const response = result.data.result;
                    
                    if (response == null) {
                        Swal.fire({
                            type: 'error',
                            title: 'Wrong UserName Or Password',
                            text: 'UseName or Password is Wrong',
                        });
                        return;
                        // console.log('Hello World');

                    }
                    else {
                        
                        localStorage.setItem("sessionData", JSON.stringify(response));
                        localStorage.setItem("session_id", JSON.stringify(response.sessionToken));
                        localStorage.setItem('poscode', JSON.stringify(response.posCode));
                        localStorage.setItem('userID', JSON.stringify(response.userId));
                        localStorage.setItem('username', JSON.stringify(response.userName));

                        console.log(JSON.stringify(response.userId));

                        window.location.href = "./Home";
                    }
                  
            
    
               
            })
            .catch(function (error) {
                Swal.fire({ type: "error", title: error.message.toUpperCase() })
            });

        
        localStorage.setItem("session_id", JSON.stringify(response.sessionToken));
        
        console.log(localStorage.getItem("session_id"));

    });

    //Fire login button on keyboard enter
    $("#txtPassword,#textUserName").keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            $(".btn_login").trigger("click");
        }
    });
});





//staticResponse = {
//    "result": {
//        "posCode": "ruhul",
//        "posCategory": 0,
//        "userType": 0,
//        "promotionalPicture": null,
//        "promotionalText": null,
//        "processWindowTimeLimit": 0,
//        "networkSessionTimeout": 0,
//        "offlineSimSaleTimeout": 0,
//        "sessionToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InNhamlkIiwiY2VydHNlcmlhbG51bWJlciI6IjEyIiwibmJmIjoxNTU0NjE3MzczLCJleHAiOjE1NTQ2MTc5NzMsImlhdCI6MTU1NDYxNzM3M30.pxs2AOimQRMN3yuAp6ZIXU0Tz9lg4wAbpX2f5BagLcM",
//        "partnerType": null,
//        "menu": [
//            {
//                "id": 1,
//                "menuName": "Prepaid",
//                "subMenus": [],
//                "isEnabled": 1
//            },
//            {
//                "id": 2,
//                "menuName": "Postpaid",
//                "subMenus": [],
//                "isEnabled": 1
//            },
//            {
//                "id": 2,
//                "menuName": "CA-Prepaid",
//                "subMenus": [],
//                "isEnabled": 1
//            },
//            {
//                "id": 2,
//                "menuName": "CA-Postpaid",
//                "subMenus": [],
//                "isEnabled": 1
//            },
//            {
//                "id": 2,
//                "menuName": "De-Regististration",
//                "subMenus": [],
//                "isEnabled": 1
//            },
//            {
//                "id": 3,
//                "menuName": "Smart Phone Campaign Prepaid",
//                "subMenus": [],
//                "isEnabled": 1
//            },
//            {
//                "id": 2,
//                "menuName": "Smart Phone Campaign Postpaid",
//                "subMenus": [],
//                "isEnabled": 1
//            },

//            {
//                "id": 2,
//                "menuName": "Smart Phone Campaign CA-Prepaid",
//                "subMenus": [],
//                "isEnabled": 1
//            },
//            {
//                "id": 2,
//                "menuName": "Smart Phone Campaign CA-Postpaid",
//                "subMenus": [],
//                "isEnabled": 1
//            },
//            {
//                "id": 2,
//                "menuName": "Dual Claim Registration",
//                "subMenus": [],
//                "isEnabled": 1
//            },
//            {
//                "id": 2,
//                "menuName": "MNP Port In",
//                "subMenus": [],
//                "isEnabled": 1
//            },
//            {
//                "id": 3,
//                "menuName": "MNP Port In Cancel",
//                "subMenus": [],
//                "isEnabled": 1
//            },
//            {
//                "id": 4,
//                "menuName": "Ownership Change",
//                "subMenus": [],
//                "isEnabled": 1
//            },
//            {
//                "id": 4,
//                "menuName": "Death Case",
//                "subMenus": [],
//                "isEnabled": 1
//            },
//            {
//                "id": 5,
//                "menuName": "Sim Replacement",
//                "subMenus": [],
//                "isEnabled": 1
//            },
//            {
//                "id": 6,
//                "menuName": "Only Verification",
//                "subMenus": [],
//                "isEnabled": 1
//            },
//            {
//                "id": 7,
//                "menuName": "BTRC Special Registration",
//                "subMenus": [],
//                "isEnabled": 1
//            }

//        ],
//        "scanQualityMeter": 0,
//        "morphoCompressionRatio": 0,
//        "futronicsCompressionRatio": 0,
//        "mandatoryFinger": {
//            "rightThumb": 0,
//            "rightIndex": 0,
//            "leftThumb": 0,
//            "leftIndex": 0
//        },
//        "minNumberOfFingers": 0,
//        "maxNumberOfAttempts": 0,
//        "isBulk": 0,
//        "isEnableIdentityType": 0,
//        "isPostpaidActivationEnable": 0,
//        "autoUpdate": 0,
//        "retailerMsisdn": null
//    },
//    "isSuccessful": true,
//    "isResult": true,
//    "statusMessages": [],
//    "errorMessages": [],
//    "infoMessages": [],
//    "warnMessages": []
//};
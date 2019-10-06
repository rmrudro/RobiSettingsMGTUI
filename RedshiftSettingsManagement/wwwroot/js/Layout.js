
$('document').ready(function () {
    var pageURL = $(location).attr("href");
    //pageURL = pageURL.replace('http://localhost/', '');
    //pageURL = pageURL.replace('http://localhost:40160/', '');

    
    var path = window.location.pathname;
    
    var abc = path.split("/");
    //console.log(abc);
    
    var controllerName = abc[1];
    var actionName = abc[2] || "index";

   

    document.getElementById("hvr_home").onclick = function () {
        location.href = "/home";
    };




    function subnavGeneral_sett_Show() {
        $('#imgHome').attr('src', '/images/Shared/Home_White_40.png');
        $("#pchanllenmgt").css("color", "white");
        $('.hvr_channel_mgt').css('background-color', '#ed1c24');

        $('#imgchannelmgt').attr('src', '/images/Shared/Icon-60_chanel_mgt_White.png');
        $("#pchanllenmgt").css("color", "white");
        $('.hvr_channel_mgt').css('background-color', '#ed1c24');

        $('#imgfeaturemgt').attr('src', '/images/Shared/Icon-60_Feature_mgt_White.png');
        $("#pfeaturemgt").css("color", "white");
        $('.hvr_feature_mgt').css('background-color', '#ed1c24');

        $('#imgUserMgt').attr('src', '/images/Shared/Icon-60_user_mgt_white.png');
        $("#puserMgt").css("color", "white");
        $('.hvr_User_mgt').css('background-color', '#ed1c24');

        $('#img_Err_Hndle').attr('src', '/images/Shared/Icon_Err_Hndle_White-60.png');
        $("#pErrHndle").css("color", "white");
        $('.hvr_Err_Hndle').css('background-color', '#ed1c24');

        $('#img_Reports').attr('src', '/images/Shared/Reports_White_Icon-60.png');
        $("#pReports").css("color", "white");
        $('.hvr_Reports').css('background-color', '#ed1c24');

    }

    function subnavChannl_MGT_Show() {
        $('#imgHome').attr('src', '/images/Shared/Home_White_40.png');
        $("#pgeneralsettings").css("color", "white");
        $('.hvr_general_settings').css('background-color', '#ed1c24');

        $('#imgGeneralSettings').attr('src', '/images/Shared/Icon-60_general_Settings_White.png');
        $("#pgeneralsettings").css("color", "white");
        $('.hvr_general_settings').css('background-color', '#ed1c24');

        $('#imgfeaturemgt').attr('src', '/images/Shared/Icon-60_Feature_mgt_White.png');
        $("#pfeaturemgt").css("color", "white");
        $('.hvr_feature_mgt').css('background-color', '#ed1c24');

        $('#imgUserMgt').attr('src', '/images/Shared/Icon-60_user_mgt_white.png');
        $("#puserMgt").css("color", "white");
        $('.hvr_User_mgt').css('background-color', '#ed1c24');

        $('#img_Err_Hndle').attr('src', '/images/Shared/Icon_Err_Hndle_White-60.png');
        $("#pErrHndle").css("color", "white");
        $('.hvr_Err_Hndle').css('background-color', '#ed1c24');

        $('#img_Reports').attr('src', '/images/Shared/Reports_White_Icon-60.png');
        $("#pReports").css("color", "white");
        $('.hvr_Reports').css('background-color', '#ed1c24');
    }

    function subnavFeature_MGT_Show() {
        $('#imgHome').attr('src', '/images/Shared/Home_White_40.png');
        $("#pchanllenmgt").css("color", "white");
        $('.hvr_channel_mgt').css('background-color', '#ed1c24');

        $('#imgGeneralSettings').attr('src', '/images/Shared/Icon-60_general_Settings_White.png');
        $("#pgeneralsettings").css("color", "white");
        $('.hvr_general_settings').css('background-color', '#ed1c24');

        $('#imgchannelmgt').attr('src', '/images/Shared/Icon-60_chanel_mgt_White.png');
        $("#pchanllenmgt").css("color", "white");
        $('.hvr_channel_mgt').css('background-color', '#ed1c24');

        $('#imgUserMgt').attr('src', '/images/Shared/Icon-60_user_mgt_white.png');
        $("#puserMgt").css("color", "white");
        $('.hvr_User_mgt').css('background-color', '#ed1c24');

        $('#img_Err_Hndle').attr('src', '/images/Shared/Icon_Err_Hndle_White-60.png');
        $("#pErrHndle").css("color", "white");
        $('.hvr_Err_Hndle').css('background-color', '#ed1c24');

        $('#img_Reports').attr('src', '/images/Shared/Reports_White_Icon-60.png');
        $("#pReports").css("color", "white");
        $('.hvr_Reports').css('background-color', '#ed1c24');
    }

    function subnavUser_MGT_Show() {
        $('#imgHome').attr('src', '/images/Shared/Home_White_40.png');
        $("#pchanllenmgt").css("color", "white");
        $('.hvr_channel_mgt').css('background-color', '#ed1c24');

        $('#imgGeneralSettings').attr('src', '/images/Shared/Icon-60_general_Settings_White.png');
        $("#pgeneralsettings").css("color", "white");
        $('.hvr_general_settings').css('background-color', '#ed1c24');

        $('#imgchannelmgt').attr('src', '/images/Shared/Icon-60_chanel_mgt_White.png');
        $("#pchanllenmgt").css("color", "white");
        $('.hvr_channel_mgt').css('background-color', '#ed1c24');

        $('#imgfeaturemgt').attr('src', '/images/Shared/Icon-60_Feature_mgt_White.png');
        $("#pfeaturemgt").css("color", "white");
        $('.hvr_feature_mgt').css('background-color', '#ed1c24');

        $('#img_Err_Hndle').attr('src', '/images/Shared/Icon_Err_Hndle_White-60.png');
        $("#pErrHndle").css("color", "white");
        $('.hvr_Err_Hndle').css('background-color', '#ed1c24');

        $('#img_Reports').attr('src', '/images/Shared/Reports_White_Icon-60.png');
        $("#pReports").css("color", "white");
        $('.hvr_Reports').css('background-color', '#ed1c24');
    }

    function subnavError_Handle_Show() {
        $('#imgHome').attr('src', '/images/Shared/Home_White_40.png');
        $("#pchanllenmgt").css("color", "white");
        $('.hvr_channel_mgt').css('background-color', '#ed1c24');


        $('#imgGeneralSettings').attr('src', '/images/Shared/Icon-60_general_Settings_White.png');
        $("#pgeneralsettings").css("color", "white");
        $('.hvr_general_settings').css('background-color', '#ed1c24');

        $('#imgchannelmgt').attr('src', '/images/Shared/Icon-60_chanel_mgt_White.png');
        $("#pchanllenmgt").css("color", "white");
        $('.hvr_channel_mgt').css('background-color', '#ed1c24');

        $('#imgfeaturemgt').attr('src', '/images/Shared/Icon-60_Feature_mgt_White.png');
        $("#pfeaturemgt").css("color", "white");
        $('.hvr_feature_mgt').css('background-color', '#ed1c24');

        $('#imgUserMgt').attr('src', '/images/Shared/Icon-60_user_mgt_white.png');
        $("#puserMgt").css("color", "white");
        $('.hvr_User_mgt').css('background-color', '#ed1c24');

        $('#img_Reports').attr('src', '/images/Shared/Reports_White_Icon-60.png');
        $("#pReports").css("color", "white");
        $('.hvr_Reports').css('background-color', '#ed1c24');

    }

    function subnavReports_Show() {
        $('#imgHome').attr('src', '/images/Shared/Home_White_40.png');
        $("#pchanllenmgt").css("color", "white");
        $('.hvr_channel_mgt').css('background-color', '#ed1c24');


        $('#imgGeneralSettings').attr('src', '/images/Shared/Icon-60_general_Settings_White.png');
        $("#pgeneralsettings").css("color", "white");
        $('.hvr_general_settings').css('background-color', '#ed1c24');

        $('#imgchannelmgt').attr('src', '/images/Shared/Icon-60_chanel_mgt_White.png');
        $("#pchanllenmgt").css("color", "white");
        $('.hvr_channel_mgt').css('background-color', '#ed1c24');

        $('#imgfeaturemgt').attr('src', '/images/Shared/Icon-60_Feature_mgt_White.png');
        $("#pfeaturemgt").css("color", "white");
        $('.hvr_feature_mgt').css('background-color', '#ed1c24');

        $('#imgUserMgt').attr('src', '/images/Shared/Icon-60_user_mgt_white.png');
        $("#puserMgt").css("color", "white");
        $('.hvr_User_mgt').css('background-color', '#ed1c24');

        $('#img_Err_Hndle').attr('src', '/images/Shared/Icon_Err_Hndle_White-60.png');
        $("#pErrHndle").css("color", "white");
        $('.hvr_Err_Hndle').css('background-color', '#ed1c24');
    }

    //alert('Hello');
    //console.log(actionName);
    //console.log(controllerName);
    //I have Do The Task
    if (controllerName == '') {
        //General Settings
        $('.hvr_home').hover(function () {
            $('#imgHome').attr('src', '/images/Shared/Home_40_Red.png');
            $("#pHome").css("color", "red");
            $(this).css('background-color', 'white');
        }, function () {

            $('#imgHome').attr('src', '/images/Shared/Home_White_40.png');
            $("#pHome").css("color", "white");
            $(this).css('background-color', '#ed1c24');

        });


        $('.hvr_general_settings').hover(function () {

            $('#imgGeneralSettings').attr('src', '/images/Shared/Icon-60_General_Management_Red.png');
            $("#pgeneralsettings").css("color", "red");
            $(this).css('background-color', 'white');

        }, function () {

            $('#imgGeneralSettings').attr('src', '/images/Shared/Icon-60_general_Settings_White.png');
            $("#pgeneralsettings").css("color", "white");
            $(this).css('background-color', '#ed1c24');

        });

        //channel Mgt
        $('.hvr_channel_mgt').hover(function () {
            $('#imgchannelmgt').attr('src', '/images/Shared/Icon_channel_mgt_Red-60.png');
            $("#pchanllenmgt").css("color", "red");
            $(this).css('background-color', 'white');

        }, function () {


            $('#imgchannelmgt').attr('src', '/images/Shared/Icon-60_chanel_mgt_White.png');
            $("#pchanllenmgt").css("color", "white");
            $(this).css('background-color', '#ed1c24');


        });

        //Feature MGT

        $('.hvr_feature_mgt').hover(function () {
            $('#imgfeaturemgt').attr('src', '/images/Shared/Feature_mgt_Red_Icon-60.png');
            $("#pfeaturemgt").css("color", "red");
            $(this).css('background-color', 'white');

        }, function () {


            $('#imgfeaturemgt').attr('src', '/images/Shared/Icon-60_Feature_mgt_White.png');
            $("#pfeaturemgt").css("color", "white");
            $(this).css('background-color', '#ed1c24');

        });

        //user mgt

        $('.hvr_User_mgt').hover(function () {

            $('#imgUserMgt').attr('src', '/images/Shared/Icon_User_Mgt_Red-60.png');
            $("#puserMgt").css("color", "red");
            $(this).css('background-color', 'white');

        }, function () {


            $('#imgUserMgt').attr('src', '/images/Shared/Icon-60_user_mgt_white.png');
            $("#puserMgt").css("color", "white");
            $(this).css('background-color', '#ed1c24');

        });

        //Error Handeling

        $('.hvr_Err_Hndle').hover(function () {

            $('#img_Err_Hndle').attr('src', '/images/Shared/Icon_Err_Hndle_Red-60.png');
            $("#pErrHndle").css("color", "red");
            $(this).css('background-color', 'white');

        }, function () {



            $('#img_Err_Hndle').attr('src', '/images/Shared/Icon_Err_Hndle_White-60.png');
            $("#pErrHndle").css("color", "white");
            $(this).css('background-color', '#ed1c24');


        });


        $('.hvr_Reports').hover(function () {

            $('#img_Reports').attr('src', '/images/Shared/Reports_Red_Icon-60.png');
            $("#pReports").css("color", "red");
            $(this).css('background-color', 'white');


        }, function () {


            $('#img_Reports').attr('src', '/images/Shared/Reports_White_Icon-60.png');
            $("#pReports").css("color", "white");
            $(this).css('background-color', '#ed1c24');


        });


    }

    else {

        if (controllerName == 'home') {

            $('#imgHome').attr('src', '/images/Shared/Home_40_Red.png');
            $("#pHome").css("color", "red");
            $('.hvr_home').css('background-color', 'white');


            $('.hvr_Reports').hover(function () {

                $('#img_Reports').attr('src', '/images/Shared/Reports_Red_Icon-60.png');
                $("#pReports").css("color", "red");
                $(this).css('background-color', 'white');


            }, function () {


                $('#img_Reports').attr('src', '/images/Shared/Reports_White_Icon-60.png');
                $("#pReports").css("color", "white");
                $(this).css('background-color', '#ed1c24');


            });

        }

        if (controllerName == 'GeneralSettings') {

            $('#imgGeneralSettings').attr('src', '/images/Shared/Icon-60_General_Management_Red.png');
            $("#pgeneralsettings").css("color", "red");
            $('.hvr_general_settings').css('background-color', 'white');
            //alert('yes');
            if (actionName == 'Process') {

                $('.subnav-gsetings').show();
                $('.btnprocess').css("background-color", "white");
                $('.btnprocess').css("color", "black");

                
            }
            else if (actionName == 'AppSettings') {
                
                $('.subnav-gsetings').show();
                $('.btnAppSettings').css("background-color", "white");
                $('.btnAppSettings').css("color", "black");

            }
            else if (actionName == 'AdSettings') {
                $('.subnav-gsetings').show();
                $('.btnAdSettings').css("background-color", "white");
                $('.btnAdSettings').css("color", "black");

            }
            else if (actionName == 'Configaration_Controls') {
                $('.subnav-gsetings').show();
                $('.btnconfi_controls').css("background-color", "white");
                $('.btnconfi_controls').css("color", "black");

            }
            else if (actionName == 'FTR') {
                $('.subnav-gsetings').show();
                $('.btnFTR').css("background-color", "white");
                $('.btnFTR').css("color", "black");
            }
        }
        else if (controllerName == 'ChannelManagement') {
            $('#imgchannelmgt').attr('src', '/images/Shared/Icon_channel_mgt_Red-60.png');
            $("#pchanllenmgt").css("color", "red");
            $('.hvr_channel_mgt').css('background-color', 'white');
            //alert('yes');
            if (actionName == 'Chennel') {
                $('.subnavschnl').show();
                $('.btnchnl').css("background-color", "white");
                $('.btnchnl').css("color", "black");

            }
            else if (actionName == 'Settings') {
                $('.subnavschnl').show();
                $('.btnsettings').css("background-color", "white");
                $('.btnsettings').css("color", "black");
            }
        }

        else if (controllerName == 'FeatureManagement') {
            $('#imgfeaturemgt').attr('src', '/images/Shared/Feature_mgt_Red_Icon-60.png');
            $("#pfeaturemgt").css("color", "red");
            $('.hvr_feature_mgt').css('background-color', 'white');

            if (actionName == 'UpdateFeature') {
                $('.subnavftrmgt').show();
                $('.btnupdatefeature').css("background-color", "white");
                $('.btnupdatefeature').css("color", "black");

            }
            else if (actionName == 'AssignFeature') {
                $('.subnavftrmgt').show();
                $('.btnassignfeature').css("background-color", "white");
                $('.btnassignfeature').css("color", "black");
            }
        }
        

        else if (controllerName == 'UserManagement') {
            $('#imgUserMgt').attr('src', '/images/Shared/Icon_User_Mgt_Red-60.png');
            $("#puserMgt").css("color", "red");
            $('.hvr_User_mgt').css('background-color', 'white');


            if (actionName == 'Users') {
                $('.subnavusrmgt').show();
                $('.btnusr').css("background-color", "white");
                $('.btnusr').css("color", "black");

            }

            else if (actionName == 'Role') {
                $('.subnavusrmgt').show();
                $('.btnrole').css("background-color", "white");
                $('.btnrole').css("color", "black");
            }
            else if (actionName == 'UserAdd') {
                $('.subnavusrmgt').show();
                $('.btnusr').css("background-color", "white");
                $('.btnusr').css("color", "black");
            }
            else if (actionName == 'UserUpdate') {
                $('.subnavusrmgt').show();
                $('.btnusr').css("background-color", "white");
                $('.btnusr').css("color", "black");
            }
            else if (actionName == 'RoleAdd') {
                $('.subnavusrmgt').show();
                $('.btnrole').css("background-color", "white");
                $('.btnrole').css("color", "black");
            }
        }
        

        else if (controllerName == 'ErrorHandeling') {

            $('#img_Err_Hndle').attr('src', '/images/Shared/Icon_Err_Hndle_Red-60.png');
            $("#pErrHndle").css("color", "red");
            $('.hvr_Err_Hndle').css('background-color', 'white');

            if (actionName == 'OwnershipTransfer') {
                $('.subnaverrhndle').show();
                $('.btn_own_trnfer').css("background-color", "white");
                $('.btn_own_trnfer').css("color", "black");

            }
            else if (actionName == 'ActivationInterval') {
                $('.subnaverrhndle').show();
                $('.btnActIntval').css("background-color", "white");
                $('.btnActIntval').css("color", "black");
            }
            else if (actionName == 'commisionUpload') {
                $('.subnaverrhndle').show();
                $('.btn_commisionUpload').css("background-color", "white");
                $('.btn_commisionUpload').css("color", "black");
            }
            else if (actionName == 'NotSimChange') {
                $('.subnaverrhndle').show();
                $('.btn_DoNotSimChange').css("background-color", "white");
                $('.btn_DoNotSimChange').css("color", "black");
            }
        }


        else if (controllerName == 'Reports') {

            $('#img_Reports').attr('src', '/images/Shared/Reports_Red_Icon-60.png');
            $("#pReports").css("color", "red");
            $('.hvr_Reports').css('background-color', 'white');

            if (actionName == 'GetTransaction') {
                $('.subnav_Reports_transaction').show();
                $('.btn_Transaction_Reports').css("background-color", "white");
                $('.btn_Transaction_Reports').css("color", "black");
            }
        }



        $('.hvr_home').hover(function () {
            $('#imgHome').attr('src', '/images/Shared/Home_40_Red.png');
            $("#pHome").css("color", "red");
            $(this).css('background-color', 'white');
        }, function () {

            $('#imgHome').attr('src', '/images/Shared/Home_White_40.png');
            $("#pHome").css("color", "white");
            $(this).css('background-color', '#ed1c24');

        });

        //$('.hvr_general_settings').click() {
        //    alert('Hello');
        //}



        $('.hvr_general_settings').hover(function () {
            //alert('General Settings Hover');
            $('#imgGeneralSettings').attr('src', '/images/Shared/Icon-60_General_Management_Red.png');
            $("#pgeneralsettings").css("color", "red");
            $(this).css('background-color', 'white');
            $('.subnav-content').hide();
            $('.subnav-gsetings').show();


        }, function () {
            if (controllerName == 'home') {

                $('#imgHome').attr('src', '/images/Shared/Home_40_Red.png');
                $("#pHome").css("color", "red");
                $('.hvr_home').css('background-color', 'white');

            }
            else if (controllerName == 'GeneralSettings') {
                subnavGeneral_sett_Show();
                $('.subnav-gsetings').show();
            }
            else if (controllerName == 'ChannelManagement') {
                subnavChannl_MGT_Show();
                $('.subnavschnl').show();
            }
            else if (controllerName == 'FeatureManagement') {
                subnavFeature_MGT_Show();
                $('.subnavftrmgt').show();
            }
            else if (controllerName == 'UserManagement') {
                subnavUser_MGT_Show();
                $('.subnavusrmgt').show();
            }
            else if (controllerName == 'ErrorHandeling') {
                subnavError_Handle_Show();
                $('.subnaverrhndle').show();
            }

            else if (controllerName == 'Reports') {
                subnavReports_Show();
                $('.subnav_Reports_transaction').show();
            }

            else {
                $('#imgGeneralSettings').attr('src', '/images/Shared/Icon-60_chanel_mgt_White.png');
                $("#pgeneralsettings").css("color", "white");
                $(this).css('background-color', '#ed1c24');
            }

        });


        $('.hvr_channel_mgt').hover(function () {
            $('.subnav-content').hide();
            $('#imgchannelmgt').attr('src', '/images/Shared/Icon_channel_mgt_Red-60.png');
            $("#pchanllenmgt").css("color", "red");
            $(this).css('background-color', 'white');
            $('.subnavschnl').show();

        }, function () {
            if (controllerName == 'home') {

                $('#imgHome').attr('src', '/images/Shared/Home_40_Red.png');
                $("#pHome").css("color", "red");
                $('.hvr_home').css('background-color', 'white');

            }
            else if (controllerName == 'GeneralSettings') {

                subnavGeneral_sett_Show();
                //$('.subnav-content').hide();
                $('.subnav-gsetings').show();

            }
            else if (controllerName == 'ChannelManagement') {
                subnavChannl_MGT_Show();
                $('.subnavschnl').show();
            }
            else if (controllerName == 'FeatureManagement') {
                subnavFeature_MGT_Show();
                $('.subnavftrmgt').show();
            }
            else if (controllerName == 'UserManagement') {
                subnavUser_MGT_Show();
                $('.subnavusrmgt').show();
            }
            else if (controllerName == 'ErrorHandeling') {
                subnavError_Handle_Show();
                $('.subnaverrhndle').show();
            }
            else if (controllerName == 'Reports') {
                subnavReports_Show();
                $('.subnav_Reports_transaction').show();
            }

            else {
                $('#imgchannelmgt').attr('src', '/images/Shared/Icon-60_chanel_mgt_White.png');
                $("#pchanllenmgt").css("color", "white");
                $(this).css('background-color', '#ed1c24');
            }

        });

        //Feature Management

        $('.hvr_feature_mgt').hover(function () {
            $('.subnav-content').hide();
            $('.subnavftrmgt').show();
            $('#imgfeaturemgt').attr('src', '/images/Shared/Feature_mgt_Red_Icon-60.png');
            $("#pfeaturemgt").css("color", "red");
            $(this).css('background-color', 'white');

        }, function () {
            if (controllerName == 'home') {

                $('#imgHome').attr('src', '/images/Shared/Home_40_Red.png');
                $("#pHome").css("color", "red");
                $('.hvr_home').css('background-color', 'white');

            }
            else if (controllerName == 'GeneralSettings') {
                subnavGeneral_sett_Show();
                $('.subnav-gsetings').show();

            }
            else if (controllerName == 'ChannelManagement') {
                subnavChannl_MGT_Show();
                $('.subnavschnl').show();
            }
            else if (controllerName == 'FeatureManagement') {
                subnavFeature_MGT_Show();
                $('.subnavftrmgt').show();
            }
            else if (controllerName == 'UserManagement') {
                subnavUser_MGT_Show();
                $('.subnavusrmgt').show();
            }
            else if (controllerName == 'ErrorHandeling') {
                subnavError_Handle_Show();
                $('.subnaverrhndle').show();
            }
            else if (controllerName == 'Reports') {
                subnavReports_Show();
                $('.subnav_Reports_transaction').show();
            }
            else {
                $('#imgfeaturemgt').attr('src', '/images/Shared/Icon-60_Feature_mgt_White.png');
                $("#pfeaturemgt").css("color", "white");
                $(this).css('background-color', '#ed1c24');
            }
        });

        // Pos Management


        //User Management

        $('.hvr_User_mgt').hover(function () {
            $('.subnav-content').hide();
            $('.subnavusrmgt').show();
            $('#imgUserMgt').attr('src', '/images/Shared/Icon_User_Mgt_Red-60.png');
            $("#puserMgt").css("color", "red");
            $(this).css('background-color', 'white');

        }, function () {
            if (controllerName == 'home') {

                $('#imgHome').attr('src', '/images/Shared/Home_40_Red.png');
                $("#pHome").css("color", "red");
                $('.hvr_home').css('background-color', 'white');

            }
            else if (controllerName == 'GeneralSettings') {
                subnavGeneral_sett_Show();
                $('.subnav-gsetings').show();

            }
            else if (controllerName == 'ChannelManagement') {
                subnavChannl_MGT_Show();
                $('.subnavschnl').show();
            }
            else if (controllerName == 'FeatureManagement') {
                subnavFeature_MGT_Show();
                $('.subnavftrmgt').show();
            }
            else if (controllerName == 'UserManagement') {
                subnavUser_MGT_Show();
                $('.subnavusrmgt').show();
            }
            else if (controllerName == 'ErrorHandeling') {
                subnavError_Handle_Show();
                $('.subnaverrhndle').show();
            }
            else if (controllerName == 'Reports') {
                subnavReports_Show();
                $('.subnav_Reports_transaction').show();
            }
            else {
                $('#imgUserMgt').attr('src', '/images/Shared/Icon-60_user_mgt_white.png');
                $("#puserMgt").css("color", "white");
                $(this).css('background-color', '#ed1c24');
            }
        });

        //Error Handeling

        $('.hvr_Err_Hndle').hover(function () {
            $('.subnav-content').hide();
            $('.subnaverrhndle').show();
            $('#img_Err_Hndle').attr('src', '/images/Shared/Icon_Err_Hndle_Red-60.png');
            $("#pErrHndle").css("color", "red");
            $(this).css('background-color', 'white');

        }, function () {
            if (controllerName == 'home') {

                $('#imgHome').attr('src', '/images/Shared/Home_40_Red.png');
                $("#pHome").css("color", "red");
                $('.hvr_home').css('background-color', 'white');

            }

            else if (controllerName == 'GeneralSettings') {
                subnavGeneral_sett_Show();
                $('.subnav-gsetings').show();

            }
            else if (controllerName == 'ChannelManagement') {
                subnavChannl_MGT_Show();
                $('.subnavschnl').show();
            }
            else if (controllerName == 'FeatureManagement') {
                subnavFeature_MGT_Show();
                $('.subnavftrmgt').show();
            }
            else if (controllerName == 'UserManagement') {
                subnavUser_MGT_Show();
                $('.subnavusrmgt').show();
            }
            else if (controllerName == 'ErrorHandeling') {
                subnavError_Handle_Show();
                $('.subnaverrhndle').show();
            }
            else if (controllerName == 'Reports') {
                subnavReports_Show();
                $('.subnav_Reports_transaction').show();
            }
            else {
                $('#img_Err_Hndle').attr('src', '/images/Shared/Icon_Err_Hndle_White-60.png');
                $("#pErrHndle").css("color", "white");
                $(this).css('background-color', '#ed1c24');
            }

        });


        $('.hvr_Reports').hover(function () {
            $('.subnav-content').hide();
            $('.subnav_Reports_transaction').show();

            $('#img_Reports').attr('src', '/images/Shared/Reports_Red_Icon-60.png');
            $("#pReports").css("color", "red");
            $(this).css('background-color', 'white');

        }, function () {
            if (controllerName == 'home') {


                $('#imgHome').attr('src', '/images/Shared/Home_40_Red.png');
                $("#pHome").css("color", "red");
                $('.hvr_home').css('background-color', 'white');


            }
            else if (controllerName == 'GeneralSettings') {
                subnavGeneral_sett_Show();
                $('.subnav-gsetings').show();

            }
            else if (controllerName == 'ChannelManagement') {
                subnavChannl_MGT_Show();
                $('.subnavschnl').show();
            }
            else if (controllerName == 'FeatureManagement') {
                subnavFeature_MGT_Show();
                $('.subnavftrmgt').show();
            }
            else if (controllerName == 'UserManagement') {
                subnavUser_MGT_Show();
                $('.subnavusrmgt').show();
            }
            else if (controllerName == 'ErrorHandeling') {
                subnavError_Handle_Show();
                $('.subnaverrhndle').show();
            }
            else if (controllerName == 'Reports') {
                subnavReports_Show();
                $('.subnav_Reports_transaction').show();
            }
            else {
                $('#img_Reports').attr('src', '/images/Shared/Reports_White_Icon-60.png');
                $("#pReports").css("color", "white");
                $(this).css('background-color', '#ed1c24');
            }

        });


    }
    let value = 1;


});




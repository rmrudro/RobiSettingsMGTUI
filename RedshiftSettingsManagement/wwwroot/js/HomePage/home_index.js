$(document).ready(function () {

    var pageURL = $(location).attr("href");
    pageURL = pageURL.replace('http://localhost:40160/', '');
    let controllerName = pageURL.substr(0, pageURL.indexOf('/'));

    $('.dvhome').css('background-color', 'red');
    $('.imghomeIndex').attr('src', '/images/Shared/HomePageIcon/Home_White.png');
    $('.hme_txt').css('color', 'white');

    $('#imgHome').attr('src', '/images/Shared/Home_40_Red.png');
    $("#pHome").css("color", "red");
    $('.hvr_home').css('background-color', 'white');

    $("body").on("click", ".dvhome", function (e) {

        showHomeIcon();

    });
    $("body").on("click", ".dvgmgt", function (e) {


        //subnavGeneral_sett_Show();
        location.href = '/GeneralSettings/AppSettings';


    });

    $("body").on("click", ".dv_Chnmgt", function (e) {
       
        //subnavChannl_MGT_Show();

        location.href = '/ChannelManagement/Chennel';
    });

    $("body").on("click", ".dvusrMGT", function (e) {


        //subnavUser_MGT_Show();
        location.href = '/UserManagement/Users';
    });

    $("body").on("click", ".dvspccase", function (e) {
        
       
        //subnavError_Handle_Show();
        location.href = '/ErrorHandeling/OwnershipTransfer';
    });


    $("body").on("click", ".dvSystem_Reports", function (e) {

        location.href = '/Reports/GetTransaction';
        
    });



    function showHomeIcon() {

        $('.hme_txt').css('color', 'white');
        $('.gset_txt').css('color', 'red');
        $('.chnmgt_txt').css('color', 'red');
        $('.usr_MGTtxt').css('color', 'red');
        $('.spcl_cse_txt').css('color', 'red');
        $('.system_Reports').css('color', 'red');

        $('.dvhome').css('background-color', 'red');
        $('.imghomeIndex').attr('src', '/images/Shared/HomePageIcon/Home_White.png');

        //red hobe
        $('.dvgmgt').css('background-color', 'white');
        $('.imggnrl_mgt').attr('src', '/images/Shared/HomePageIcon/general_mgt_red.png');

        $('.dv_Chnmgt').css('background-color', 'white');
        $('.imgchn_mgt').attr('src', '/images/Shared/HomePageIcon/chnl_MGT_RED.png');

        $('.dvusrMGT').css('background-color', 'white');
        $('.img_usrmgt').attr('src', '/images/Shared/HomePageIcon/user_MGT_Red.png');

        $('.dvspccase').css('background-color', 'white');
        $('.imgspcase').attr('src', '/images/Shared/HomePageIcon/special_case_Red.png');


        $('.dvSystem_Reports').css('background-color', 'white');
        $('.imgSystem_Reports').attr('src', '/images/Shared/HomePageIcon/System_Reports_Red.png');


        $('#imgHome').attr('src', '/images/Shared/Home_40_Red.png');
        $("#pHome").css("color", "red");
        $('.hvr_home').css('background-color', 'white');

        $('#imgGeneralSettings').attr('src', '/images/Shared/Home_White_40.png');
        $("#pgeneralsettings").css("color", "red");
        $('.hvr_general_settings').css('background-color', '#ed1c24');


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

        $('.subnav-gsetings').hide();
        $('.subnavschnl').hide();
        $('.subnavusrmgt').hide();
        $('.subnaverrhndle').hide();

        

    }


    function subnavGeneral_sett_Show() {

        
        $('.hme_txt').css('color', 'white');
        $('.gset_txt').css('color', 'white');
        $('.chnmgt_txt').css('color', 'red');
        $('.usr_MGTtxt').css('color', 'red');
        $('.spcl_cse_txt').css('color', 'red');

        $('.dvgmgt').css('background-color', 'red');
        $('.imggnrl_mgt').attr('src', '/images/Shared/HomePageIcon/General_MGT_White.png');


        $('.dvhome').css('background-color', 'red');
        $('.imghomeIndex').attr('src', '/images/Shared/HomePageIcon/Home_White.png');

        $('.dv_Chnmgt').css('background-color', 'white');
        $('.imgchn_mgt').attr('src', '/images/Shared/HomePageIcon/chnl_MGT_RED.png');

        $('.dvusrMGT').css('background-color', 'white');
        $('.img_usrmgt').attr('src', '/images/Shared/HomePageIcon/user_MGT_Red.png');

        $('.dvspccase').css('background-color', 'white');
        $('.imgspcase').attr('src', '/images/Shared/HomePageIcon/special_case_Red.png');

        $('.dvSystem_Reports').css('background-color', 'white');
        $('.imgSystem_Reports').attr('src', '/images/Shared/HomePageIcon/System_Reports_Red.png');

        $('#imgGeneralSettings').attr('src', '/images/Shared/Icon-60_General_Management_Red.png');
        $("#pgeneralsettings").css("color", "red");
        $('.hvr_general_settings').css('background-color', 'white');


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

        $('.subnav-gsetings').show();
        $('.subnavschnl').hide();
        $('.subnavusrmgt').hide();
        $('.subnaverrhndle').hide();

        location.href = '/GeneralSettings/AppSettings';

    }


    function subnavChannl_MGT_Show() {


        $('.hme_txt').css('color', 'white');
        $('.gset_txt').css('color', 'red');
        $('.chnmgt_txt').css('color', 'white');
        $('.usr_MGTtxt').css('color', 'red');
        $('.spcl_cse_txt').css('color', 'red');

        $('.dv_Chnmgt').css('background-color', 'red');
        $('.imgchn_mgt').attr('src', '/images/Shared/HomePageIcon/channel_mgt_white.png');

        $('.dvgmgt').css('background-color', 'white');
        $('.imggnrl_mgt').attr('src', '/images/Shared/HomePageIcon/general_mgt_red.png');

        $('.dvhome').css('background-color', 'red');
        $('.imghomeIndex').attr('src', '/images/Shared/HomePageIcon/Home_White.png');

        $('.dvusrMGT').css('background-color', 'white');
        $('.img_usrmgt').attr('src', '/images/Shared/HomePageIcon/user_MGT_Red.png');

        $('.dvspccase').css('background-color', 'white');
        $('.imgspcase').attr('src', '/images/Shared/HomePageIcon/special_case_Red.png');

        $('.dvSystem_Reports').css('background-color', 'white');
        $('.imgSystem_Reports').attr('src', '/images/Shared/HomePageIcon/System_Reports_Red.png');

        $('#imgchannelmgt').attr('src', '/images/Shared/Icon_channel_mgt_Red-60.png');
        $("#pchanllenmgt").css("color", "red");
        $('.hvr_channel_mgt').css('background-color', 'white');


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

        $('.subnav-gsetings').hide();
        $('.subnavschnl').show();
        $('.subnavusrmgt').hide();
        $('.subnaverrhndle').hide();

        location.href = '/ChannelManagement/Chennel';
    }

  

    function subnavUser_MGT_Show() {

        $('.hme_txt').css('color', 'white');
        $('.gset_txt').css('color', 'red');
        $('.chnmgt_txt').css('color', 'red');
        $('.usr_MGTtxt').css('color', 'white');
        $('.spcl_cse_txt').css('color', 'red');

        $('.dvusrMGT').css('background-color', 'red');
        $('.img_usrmgt').attr('src', '/images/Shared/HomePageIcon/usr_mgt_white.png');


        $('.dv_Chnmgt').css('background-color', 'white');
        $('.imgchn_mgt').attr('src', '/images/Shared/HomePageIcon/chnl_MGT_RED.png');


        $('.dvgmgt').css('background-color', 'white');
        $('.imggnrl_mgt').attr('src', '/images/Shared/HomePageIcon/general_mgt_red.png');


        $('.dvhome').css('background-color', 'red');
        $('.imghomeIndex').attr('src', '/images/Shared/HomePageIcon/Home_White.png');


        $('.dvspccase').css('background-color', 'white');
        $('.imgspcase').attr('src', '/images/Shared/HomePageIcon/special_case_Red.png');

        $('.dvSystem_Reports').css('background-color', 'white');
        $('.imgSystem_Reports').attr('src', '/images/Shared/HomePageIcon/System_Reports_Red.png');

        $('#imgUserMgt').attr('src', '/images/Shared/Icon_User_Mgt_Red-60.png');
        $("#puserMgt").css("color", "red");
        $('.hvr_User_mgt').css('background-color', 'white');

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

        $('.subnav-gsetings').hide();
        $('.subnavschnl').hide();
        $('.subnavusrmgt').show();
        $('.subnaverrhndle').hide();

        location.href = '/UserManagement/Users';
    }

    function subnavError_Handle_Show() {

        $('.hme_txt').css('color', 'white');
        $('.gset_txt').css('color', 'red');
        $('.chnmgt_txt').css('color', 'red');
        $('.usr_MGTtxt').css('color', 'red');
        $('.spcl_cse_txt').css('color', 'white');


        $('.dvspccase').css('background-color', 'red');
        $('.imgspcase').attr('src', '/images/Shared/HomePageIcon/spcl_case_white.png');


        $('.dvSystem_Reports').css('background-color', 'white');
        $('.imgSystem_Reports').attr('src', '/images/Shared/HomePageIcon/System_Reports_Red.png');

        $('.dvusrMGT').css('background-color', 'white');
        $('.img_usrmgt').attr('src', '/images/Shared/HomePageIcon/user_MGT_Red.png');

        $('.dv_Chnmgt').css('background-color', 'white');
        $('.imgchn_mgt').attr('src', '/images/Shared/HomePageIcon/chnl_MGT_RED.png');

        $('.dvgmgt').css('background-color', 'white');
        $('.imggnrl_mgt').attr('src', '/images/Shared/HomePageIcon/general_mgt_red.png');


        $('.dvhome').css('background-color', 'red');
        $('.imghomeIndex').attr('src', '/images/Shared/HomePageIcon/Home_White.png');

        


        $('#img_Err_Hndle').attr('src', '/images/Shared/Icon_Err_Hndle_Red-60.png');
        $("#pErrHndle").css("color", "red");
        $('.hvr_Err_Hndle').css('background-color', 'white');

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

        $('.subnav-gsetings').hide();
        $('.subnavschnl').hide();
        $('.subnavusrmgt').hide();
        $('.subnaverrhndle').show();

        location.href = '/ErrorHandeling/OwnershipTransfer';
    }

    function System_ReportsShow () {

        $('.hme_txt').css('color', 'white');
        $('.gset_txt').css('color', 'red');
        $('.chnmgt_txt').css('color', 'red');
        $('.usr_MGTtxt').css('color', 'red');
        $('.spcl_cse_txt').css('color', 'red');
        $('.system_Reports').css('color','white');

        $('.dvspccase').css('background-color', 'red');
        $('.imgspcase').attr('src', '/images/Shared/HomePageIcon/spcl_case_white.png');


        $('.dvSystem_Reports').css('background-color', 'white');
        $('.imgSystem_Reports').attr('src', '/images/Shared/HomePageIcon/System_Reports_Red.png');

        $('.dvusrMGT').css('background-color', 'white');
        $('.img_usrmgt').attr('src', '/images/Shared/HomePageIcon/user_MGT_Red.png');

        $('.dv_Chnmgt').css('background-color', 'white');
        $('.imgchn_mgt').attr('src', '/images/Shared/HomePageIcon/chnl_MGT_RED.png');

        $('.dvgmgt').css('background-color', 'white');
        $('.imggnrl_mgt').attr('src', '/images/Shared/HomePageIcon/general_mgt_red.png');


        $('.dvhome').css('background-color', 'red');
        $('.imghomeIndex').attr('src', '/images/Shared/HomePageIcon/Home_White.png');




        $('#img_Err_Hndle').attr('src', '/images/Shared/Icon_Err_Hndle_Red-60.png');
        $("#pErrHndle").css("color", "red");
        $('.hvr_Err_Hndle').css('background-color', 'white');

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

        $('.subnav-gsetings').hide();
        $('.subnavschnl').hide();
        $('.subnavusrmgt').hide();
        $('.subnaverrhndle').show();

        location.href = '/ErrorHandeling/OwnershipTransfer';


    }


    $('.hvr_home').hover(function () {
        showHomeIconHover();
    });


    $('.hvr_general_settings').hover(function () {
        Show_general_SettingsHover();
      
    });

    //channel Mgt
    $('.hvr_channel_mgt').hover(function () {

        Show_Chnal_MGTHover();

    }),

        //Feature MGT

      

    //user mgt

    $('.hvr_User_mgt').hover(function () {
        Show_User_MGT_hover();
       
    });

    //Error Handeling

    $('.hvr_Err_Hndle').hover(function () {

        Show_spcl_case_Hover();
        
    });


    //System Report 
    $('.hvr_Reports').hover(function () {
        show_Syetem_ReportsHover()
    });


    function showHomeIconHover() {

        $('.hme_txt').css('color', 'white');
        $('.gset_txt').css('color', 'red');
        $('.chnmgt_txt').css('color', 'red');
        $('.usr_MGTtxt').css('color', 'red');
        $('.spcl_cse_txt').css('color', 'red');
        $('.system_Reports').css('color', 'red');


        $('.dvhome').css('background-color', 'red');
        $('.imghomeIndex').attr('src', '/images/Shared/HomePageIcon/Home_White.png');

        //red hobe
        $('.dvgmgt').css('background-color', 'white');
        $('.imggnrl_mgt').attr('src', '/images/Shared/HomePageIcon/general_mgt_red.png');

        $('.dv_Chnmgt').css('background-color', 'white');
        $('.imgchn_mgt').attr('src', '/images/Shared/HomePageIcon/chnl_MGT_RED.png');

        $('.dvusrMGT').css('background-color', 'white');
        $('.img_usrmgt').attr('src', '/images/Shared/HomePageIcon/user_MGT_Red.png');

        $('.dvspccase').css('background-color', 'white');
        $('.imgspcase').attr('src', '/images/Shared/HomePageIcon/special_case_Red.png');

        $('.dvSystem_Reports').css('background-color', 'white');
        $('.imgSystem_Reports').attr('src', '/images/Shared/HomePageIcon/System_Reports_Red.png');


        $('#imgHome').attr('src', '/images/Shared/Home_40_Red.png');
        $("#pHome").css("color", "red");
        $('.hvr_home').css('background-color', 'white');

        $('#imgGeneralSettings').attr('src', '/images/Shared/Home_White_40.png');
        $("#pgeneralsettings").css("color", "red");
        $('.hvr_general_settings').css('background-color', '#ed1c24');


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

        $('.subnav-gsetings').hide();
        $('.subnavschnl').hide();
        $('.subnavusrmgt').hide();
        $('.subnaverrhndle').hide();



    }


    function Show_general_SettingsHover() {
        $('.hme_txt').css('color', 'white');
        $('.gset_txt').css('color', 'white');
        $('.chnmgt_txt').css('color', 'red');
        $('.usr_MGTtxt').css('color', 'red');
        $('.spcl_cse_txt').css('color', 'red');
        $('.system_Reports').css('color', 'red');

        $('.dvgmgt').css('background-color', 'red');
        $('.imggnrl_mgt').attr('src', '/images/Shared/HomePageIcon/General_MGT_White.png');


        $('.dvhome').css('background-color', 'red');
        $('.imghomeIndex').attr('src', '/images/Shared/HomePageIcon/Home_White.png');

        $('.dv_Chnmgt').css('background-color', 'white');
        $('.imgchn_mgt').attr('src', '/images/Shared/HomePageIcon/chnl_MGT_RED.png');

        $('.dvusrMGT').css('background-color', 'white');
        $('.img_usrmgt').attr('src', '/images/Shared/HomePageIcon/user_MGT_Red.png');

        $('.dvspccase').css('background-color', 'white');
        $('.imgspcase').attr('src', '/images/Shared/HomePageIcon/special_case_Red.png');

        $('.dvSystem_Reports').css('background-color', 'white');
        $('.imgSystem_Reports').attr('src', '/images/Shared/HomePageIcon/System_Reports_Red.png');


        $('#imgGeneralSettings').attr('src', '/images/Shared/Icon-60_General_Management_Red.png');
        $("#pgeneralsettings").css("color", "red");
        $('.hvr_general_settings').css('background-color', 'white');


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

        $('.subnav-gsetings').show();
        $('.subnavschnl').hide();
        $('.subnavusrmgt').hide();
        $('.subnaverrhndle').hide();

        
    }

    function Show_Chnal_MGTHover() {

        $('.hme_txt').css('color', 'white');
        $('.gset_txt').css('color', 'red');
        $('.chnmgt_txt').css('color', 'white');
        $('.usr_MGTtxt').css('color', 'red');
        $('.spcl_cse_txt').css('color', 'red');
        $('.system_Reports').css('color', 'red');


        $('.dv_Chnmgt').css('background-color', 'red');
        $('.imgchn_mgt').attr('src', '/images/Shared/HomePageIcon/channel_mgt_white.png');

        $('.dvgmgt').css('background-color', 'white');
        $('.imggnrl_mgt').attr('src', '/images/Shared/HomePageIcon/general_mgt_red.png');

        $('.dvhome').css('background-color', 'red');
        $('.imghomeIndex').attr('src', '/images/Shared/HomePageIcon/Home_White.png');

        $('.dvusrMGT').css('background-color', 'white');
        $('.img_usrmgt').attr('src', '/images/Shared/HomePageIcon/user_MGT_Red.png');

        $('.dvspccase').css('background-color', 'white');
        $('.imgspcase').attr('src', '/images/Shared/HomePageIcon/special_case_Red.png');

        $('.dvSystem_Reports').css('background-color', 'white');
        $('.imgSystem_Reports').attr('src', '/images/Shared/HomePageIcon/System_Reports_Red.png');

        $('#imgchannelmgt').attr('src', '/images/Shared/Icon_channel_mgt_Red-60.png');
        $("#pchanllenmgt").css("color", "red");
        $('.hvr_channel_mgt').css('background-color', 'white');


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

        $('.subnav-gsetings').hide();
        $('.subnavschnl').show();
        $('.subnavusrmgt').hide();
        $('.subnaverrhndle').hide();

    }

    function Show_User_MGT_hover() {
        $('.hme_txt').css('color', 'white');
        $('.gset_txt').css('color', 'red');
        $('.chnmgt_txt').css('color', 'red');
        $('.usr_MGTtxt').css('color', 'white');
        $('.spcl_cse_txt').css('color', 'red');
        $('.system_Reports').css('color', 'red');


        $('.dvusrMGT').css('background-color', 'red');
        $('.img_usrmgt').attr('src', '/images/Shared/HomePageIcon/usr_mgt_white.png');


        $('.dv_Chnmgt').css('background-color', 'white');
        $('.imgchn_mgt').attr('src', '/images/Shared/HomePageIcon/chnl_MGT_RED.png');


        $('.dvgmgt').css('background-color', 'white');
        $('.imggnrl_mgt').attr('src', '/images/Shared/HomePageIcon/general_mgt_red.png');


        $('.dvhome').css('background-color', 'red');
        $('.imghomeIndex').attr('src', '/images/Shared/HomePageIcon/Home_White.png');


        $('.dvspccase').css('background-color', 'white');
        $('.imgspcase').attr('src', '/images/Shared/HomePageIcon/special_case_Red.png');

        $('.dvSystem_Reports').css('background-color', 'white');
        $('.imgSystem_Reports').attr('src', '/images/Shared/HomePageIcon/System_Reports_Red.png');


        $('#imgUserMgt').attr('src', '/images/Shared/Icon_User_Mgt_Red-60.png');
        $("#puserMgt").css("color", "red");
        $('.hvr_User_mgt').css('background-color', 'white');

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

        $('.subnav-gsetings').hide();
        $('.subnavschnl').hide();
        $('.subnavusrmgt').show();
        $('.subnaverrhndle').hide();
    }


    function Show_spcl_case_Hover() {
        $('.hme_txt').css('color', 'white');
        $('.gset_txt').css('color', 'red');
        $('.chnmgt_txt').css('color', 'red');
        $('.usr_MGTtxt').css('color', 'red');
        $('.spcl_cse_txt').css('color', 'white');
        $('.system_Reports').css('color', 'red');

        $('.dvspccase').css('background-color', 'red');
        $('.imgspcase').attr('src', '/images/Shared/HomePageIcon/spcl_case_white.png');


        $('.dvusrMGT').css('background-color', 'white');
        $('.img_usrmgt').attr('src', '/images/Shared/HomePageIcon/user_MGT_Red.png');

        $('.dv_Chnmgt').css('background-color', 'white');
        $('.imgchn_mgt').attr('src', '/images/Shared/HomePageIcon/chnl_MGT_RED.png');

        $('.dvgmgt').css('background-color', 'white');
        $('.imggnrl_mgt').attr('src', '/images/Shared/HomePageIcon/general_mgt_red.png');


        $('.dvhome').css('background-color', 'red');
        $('.imghomeIndex').attr('src', '/images/Shared/HomePageIcon/Home_White.png');

        $('.dvSystem_Reports').css('background-color', 'white');
        $('.imgSystem_Reports').attr('src', '/images/Shared/HomePageIcon/System_Reports_Red.png');

        $('#img_Err_Hndle').attr('src', '/images/Shared/Icon_Err_Hndle_Red-60.png');
        $("#pErrHndle").css("color", "red");
        $('.hvr_Err_Hndle').css('background-color', 'white');

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

        $('.subnav-gsetings').hide();
        $('.subnavschnl').hide();
        $('.subnavusrmgt').hide();
        $('.subnaverrhndle').show();
    }

    function show_Syetem_ReportsHover() {

        $('.hme_txt').css('color', 'white');
        $('.gset_txt').css('color', 'red');
        $('.chnmgt_txt').css('color', 'red');
        $('.usr_MGTtxt').css('color', 'red');
        $('.spcl_cse_txt').css('color', 'red');
        $('.system_Reports').css('color', 'white');



        $('.dvSystem_Reports').css('background-color', 'red');
        $('.imgSystem_Reports').attr('src', '/images/Shared/HomePageIcon/System_Reports_White.png');

        $('.dvhome').css('background-color', 'red');
        $('.imghomeIndex').attr('src', '/images/Shared/HomePageIcon/Home_White.png');

        //red hobe
        $('.dvgmgt').css('background-color', 'white');
        $('.imggnrl_mgt').attr('src', '/images/Shared/HomePageIcon/general_mgt_red.png');

        $('.dv_Chnmgt').css('background-color', 'white');
        $('.imgchn_mgt').attr('src', '/images/Shared/HomePageIcon/chnl_MGT_RED.png');

        $('.dvusrMGT').css('background-color', 'white');
        $('.img_usrmgt').attr('src', '/images/Shared/HomePageIcon/user_MGT_Red.png');

        $('.dvspccase').css('background-color', 'white');
        $('.imgspcase').attr('src', '/images/Shared/HomePageIcon/special_case_Red.png');


        



        $('#imgHome').attr('src', '/images/Shared/Home_40_Red.png');
        $("#pHome").css("color", "red");
        $('.hvr_home').css('background-color', 'white');

        $('#imgGeneralSettings').attr('src', '/images/Shared/Home_White_40.png');
        $("#pgeneralsettings").css("color", "red");
        $('.hvr_general_settings').css('background-color', '#ed1c24');


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


       

        //$('.subnav-gsetings').hide();
        //$('.subnavschnl').hide();
        //$('.subnavusrmgt').hide();
        //$('.subnaverrhndle').hide();



    }


    $('.subnav-gsetings').mouseout(function () {


        $('#imgGeneralSettings').attr('src', '/images/Shared/Icon-60_general_Settings_White.png');
        $("#pgeneralsettings").css("color", "white");
        $('.hvr_general_settings').css('background-color', '#ed1c24');


        $('.dvgmgt').css('background-color', 'white');
        $('.imggnrl_mgt').attr('src', '/images/Shared/HomePageIcon/general_mgt_red.png');
        $('.gset_txt').css('color', 'red');

        $('.subnav-content').hide();


    });

    $('.subnavschnl').mouseout(function () {

        $('#imgchannelmgt').attr('src', '/images/Shared/Icon-60_chanel_mgt_White.png');
        $("#pchanllenmgt").css("color", "white");
        $('.hvr_channel_mgt').css('background-color', '#ed1c24');

        $('.dv_Chnmgt').css('background-color', 'white');
        $('.imgchn_mgt').attr('src', '/images/Shared/HomePageIcon/chnl_MGT_RED.png');
        $('.chnmgt_txt').css('color', 'red');

        $('.subnav-content').hide();
    });
 
    $('.subnavusrmgt').mouseout(function () {
       
        $('#imgUserMgt').attr('src', '/images/Shared/Icon-60_user_mgt_white.png');
        $("#puserMgt").css("color", "white");
        $('.hvr_User_mgt').css('background-color', '#ed1c24');


        $('.dvusrMGT').css('background-color', 'white');
        $('.img_usrmgt').attr('src', '/images/Shared/HomePageIcon/user_MGT_Red.png');
        $('.usr_MGTtxt').css('color', 'red');

        $('.subnav-content').hide();
    });

    $('.subnaverrhndle').mouseout(function () {

        $('#img_Err_Hndle').attr('src', '/images/Shared/Icon_Err_Hndle_White-60.png');
        $("#pErrHndle").css("color", "white");
        $('.hvr_Err_Hndle').css('background-color', '#ed1c24');

        $('.dvspccase').css('background-color', 'white');
        $('.imgspcase').attr('src', '/images/Shared/HomePageIcon/special_case_Red.png');
        $('.spcl_cse_txt').css('color', 'red');

        $('.subnav-content').hide();
    });

    $('.subnav_Reports_transaction').mouseout(function () {

        $('#img_Reports').attr('src', '/images/Shared/Reports_White_Icon-60.png');
        $("#pReports").css("color", "white");
        $('.hvr_Reports').css('background-color', '#ed1c24');

        $('.dvSystem_Reports').css('background-color', 'white');
        $('.imgSystem_Reports').attr('src', '/images/Shared/HomePageIcon/System_Reports_Red.png');
        $('.system_Reports').css('color', 'red');

        $('.subnav-content').hide();
    });

});



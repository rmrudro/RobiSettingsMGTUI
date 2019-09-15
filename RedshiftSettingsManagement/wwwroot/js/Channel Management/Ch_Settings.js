$(document).ready(function () {
    GetAllMenu();
    GetAddSettingsName();
    GetAllChannel();
    function GetAllMenu() {
        axios.get(allmenu, authToken).then(function (result) {

            div = document.getElementById('dvAllMenu');
            var results = result.data.result;
            var totallength = result.data.result.length;
            var newdiv = "";
            for (let i = 0; i < totallength; i++) {

                let divitemItem = '<input id="chkMenuName' + results[i].id + '" class="chkMenuName" value=' + results[i].id + '  type="checkbox">';
                divitemItem += '<label class="tr_row" for="chkMenuName" >' + results[i].menuName + '</label>';
                divitemItem += '<br>';
                newdiv += divitemItem;

            }

            $('#dvAllMenu').html(newdiv);
        }).catch(function (error) {
            $('#dvAllMenu').html("<b>Network Error NO Data Found!</b>").css("text-align", "center");
            Swal.fire({ type: "error", title: error.message.toUpperCase() })
        });
            
    }

    function GetAddSettingsName() {
        axios.get(ad_Settings, authToken).then(function (result) {

            //<label for="checkbox1">
            //    New Sim Sale
            //        </label>
            var results = result.data.result;
            var adlength = results.length;
            div = document.getElementById('dvAdSettings');
            var newdiv = "";
            for (let i = 0; i < adlength; i++) {
                let divitemItem = '<input id="rdopromotext' + results[i].id + '" name="gender" class="rdopromotext"  type="radio" value=' + results[i].id + '>';
                divitemItem += '<label class="tr_row" for="rdopromotext" >' + results[i].promotionaltext + '</label>';
                divitemItem += '<br>';
                //divitemItem = divitemItem + ;
                //console.log(divitemItem);
                newdiv += divitemItem;
            }

            $('#dvAdSettings').html(newdiv);

        }).catch(function (error) {

            $('#dvAdSettings').html("<b>Network Error NO Data Found!</b>").css("text-align", "center");
           
        });

    }

    $(".chkMenuNameAll").change(function () {
        $('.chkMenuName').not(this).prop('checked', this.checked);
    });


    function GetAllChannel() {
        axios.get(allChannel_api, authToken).then(function (result) {

            //console.log(result.data.resultSet.length);
            let select = document.getElementById('allchannel');
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

    $("body").on("click", ".btnassignMenu", function (e) {

        let channelSelect = $('.allchannel').val();


        if (channelSelect == 'Choose Channel') {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Must choose a channel',
            });
        }


        else {
            var menuselect = [];

            $(".chkMenuName:checked").each(function () {
                menuselect.push($(this).val());
            });

            var selected;
            selected = menuselect.join(',');

            var menuarraylen = menuselect.length;

            if (menuarraylen == 0) {
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Must choose At least one Menu',
                });
            }
            else {

                var adsettingsPromo = $(".rdopromotext:checked").val();

                let autoupdate = $('.rdoautoupdate:checked').val();
                let isIdentity = $('.rdoisIdentity:checked').val();

                if (adsettingsPromo == undefined) {
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Must choose Ad Settings',
                    });
                }

                let channelSettingsModel = {
                    channelId: channelSelect,
                    menus: menuselect,
                    advertisementId: adsettingsPromo,
                    autoUpdate: autoupdate,
                    isIdentity: isIdentity
                };

                axios
                    .post(allChannel_api + '/AssisgnOption', channelSettingsModel, authToken)
                    .then(function (result) {
                        if (result.data.isResult) {
                            Swal.fire({
                                type: 'success',
                                title: 'Sucessfully Saved',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    });
            }

        }


    });

    //Have to work for the getting data
    $(".allchannel").change(function () {
        // Pure JS
        let channelvalue = $(".allchannel").val();
        axios.get(allChannel_api + '/' + channelvalue, authToken).then(function (result) {

            //console.log(result.data.result);
            var results = result.data.result;
            console.log(results);
            var menuarray = results.menu;
            var ad_Settings_Array = results.advertisement;

            var menulen = menuarray.length;
            var ad_Settings_Arraylen = ad_Settings_Array.length;

            $('.chkMenuName').prop("checked", false);

            $(".rdopromotext").prop("checked", false);

            if (menulen > 0) {
                for (let i = 0; i < menulen; i++) {
                    $('#chkMenuName' + menuarray[i].id + '').prop("checked", true);
                }
            }

            else {
                $('.chkMenuName').prop("checked", false);
            }

            if (ad_Settings_Arraylen > 0) {
                $('#rdopromotext' + ad_Settings_Array[0].id + '').prop("checked", true);
            }
            else {
                $(".rdopromotext").prop("checked", false);
            }


            if (results.autoupdate == '1') {

                $("#rdoautoupdate01").prop("checked", true);
            }
            else if (results.autoupdate == '0') {
                //$('input:radio[name=autoupdate]:nth(1)').attr('checked', true);
                $("#rdoautoupdate00").prop("checked", true);
            }

            if (results.isidentity == '1') {
                //$('input:radio[name=isidentity]:nth(0)').attr('checked', true);
                $("#rdo_isIdentity_01").prop("checked", true);
            }
            else if (results.isidentity == '0') {
                //$('input:radio[name=isidentity]:nth(1)').attr('checked', true);
                $("#rdo_isIdentity_00").prop("checked", true);
            }


        });
        //alert(channelvalue);

    });



    function GetSelectedAddSettingsName(ad_Settings_Array) {
        axios.get(ad_Settings, authToken).then(function (result) {

            //<label for="checkbox1">
            //    New Sim Sale
            //        </label>
            var ad_promoText = ad_Settings_Array[0].promotionaltext;
            var results = result.data.result;
            var adlength = results.length;
            div = document.getElementById('dvAdSettings');
            var newdiv = "";
            for (let i = 0; i < adlength; i++) {
                if (ad_Settings_Array[0].promotionaltext == results[i].promotionaltext) {
                    let divitemItem = '<input id="rdopromotext" name="gender" class="rdopromotext"  type="radio" value=' + results[i].id + ' checked>';
                    divitemItem += '<label for="rdopromotext" >' + results[i].promotionaltext + '</label>';
                    divitemItem += '<br>';
                    newdiv += divitemItem;
                }

                else {
                    let divitemItem = '<input id="rdopromotext" name="gender" class="rdopromotext"  type="radio" value=' + results[i].id + '>';
                    divitemItem += '<label for="rdopromotext" >' + results[i].promotionaltext + '</label>';
                    divitemItem += '<br>';
                    newdiv += divitemItem;
                }
                //divitemItem = divitemItem + ;
                //console.log(divitemItem);

            }
            $('#dvAdSettings').html(newdiv);
        });

    }

    //function GetAllSelectedMenu(menuarraylen) {

    //    console.log(menuarraylen);
    //    var menuArraylen = menuarraylen.length;
    //    axios.get(allmenu, authToken).then(function (result) {

    //        div = document.getElementById('dvAllMenu');
    //        var results = result.data.result;
    //        var totallength = result.data.result.length;
    //        var newdiv = "";
    //        for (let j = 0; j < menuArraylen; j++) {
    //            for (let i = 0; i < totallength; i++) {

    //                if (menuarraylen[j].menuName == results[i].menuName) {

    //                    let divitemItem = '<input id="chkMenuName" class="chkMenuName" value=' + results[i].id + '  type="checkbox" checked>';
    //                    divitemItem += '<label for="chkMenuName" >' + results[i].menuName + '</label>';
    //                    divitemItem += '<br>';
    //                    newdiv += divitemItem;
    //                }
    //            }
    //        }

    //        for (let j = 0; j < menuArraylen; j++) {
    //            for (let i = 0; i < totallength; i++) {

    //                if (menuarraylen[j].menuName != results[i].menuName) {

    //                    let divitemItem = '<input id="chkMenuName" class="chkMenuName" value=' + results[i].id + '  type="checkbox">';
    //                    divitemItem += '<label for="chkMenuName" >' + results[i].menuName + '</label>';
    //                    divitemItem += '<br>';
    //                    newdiv += divitemItem;
    //                }
    //            }
    //        }

    //        $('#dvAllMenu').html(newdiv);
    //    });
    //}


});
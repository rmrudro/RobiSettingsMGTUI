
let datalen;
$(document).ready(function () {
    $('.txtNettimeout').attr("disabled", "disabled");
    $('.txtminNumberFingers').attr("disabled", "disabled");
    $('.txtmaxNumAttempts').attr("disabled", "disabled");
    $('.btnappUpdate').attr("disabled", "disabled");
    GetAllAppSettings();
    function GetAllAppSettings() {
        axios.get(app_Settings, authToken).then(function (result) {
            //console.log(result.data.resultSet);
            var results = result.data.result;

            var applen = results.length;
            datalen = results.length;
            if (applen > 0) {
                $('.txtNettimeout').removeAttr("disabled");
                $('.txtminNumberFingers').removeAttr("disabled");
                $('.txtmaxNumAttempts').removeAttr("disabled");
                $('.btnappUpdate').removeAttr("disabled");

                var resultjson = JSON.stringify(result.data.resultSet);
                table = document.getElementById('tblAppSettingsList');
                var newTableData = "";
                var fa_fa_trash = "fa fa-trash";
                var tsttrue = "true";
                var style = "color: red";
                //console.log(resultjson);
                for (let i = 0; i < applen; i++) {
                    let tableallrowdata = {
                        id: results[i].id,
                        networksessiontimeout: results[i].networksessiontimeout,
                        minnumberoffingers: results[i].minnumberoffingers,
                        maxnumberofattempts: results[i].maxnumberofattempts
                    };

                    let tableid = results[i].id;
                    //let tableItem = "<tr><td>" + result.data.resultSet[i].networksessiontimeout + "</td>";
                    let tableItem = '<tr style="cursor:pointer" <a  onClick="onGet(' + tableallrowdata.id + ',' + tableallrowdata.networksessiontimeout + ',' + tableallrowdata.minnumberoffingers + ',' + tableallrowdata.maxnumberofattempts + ')"><td class="tr_row" style="text-align:center;"><a  onClick="onGet(' + tableallrowdata.id + ',' + tableallrowdata.networksessiontimeout + ',' + tableallrowdata.minnumberoffingers + ',' + tableallrowdata.maxnumberofattempts + ')">' + results[i].networksessiontimeout + '</td>';;

                    tableItem = tableItem + '<td class="tr_row" style="text-align:center;"><a  onClick="onGet(' + tableallrowdata.id + ',' + tableallrowdata.networksessiontimeout + ',' + tableallrowdata.minnumberoffingers + ',' + tableallrowdata.maxnumberofattempts + ')">' + results[i].minnumberoffingers + '</td>';
                    tableItem = tableItem + '<td class="tr_row" style="text-align:center;"><a  onClick="onGet(' + tableallrowdata.id + ',' + tableallrowdata.networksessiontimeout + ',' + tableallrowdata.minnumberoffingers + ',' + tableallrowdata.maxnumberofattempts + ')">' + results[i].maxnumberofattempts + '</td>';
                    //tableItem = tableItem + '<td><a  onClick="onGet(' + tableallrowdata + ')">' + result.data.resultSet[i].maxnumberofattempts + '</td></tr>';
                    newTableData += tableItem;

                }
                $('#tblAppSettingsList').html(newTableData);
                $('#tblAppSettings_Empty').hide();
            }
            else {

                $('#tblAppSettings_Empty').show();


            }
           

        })
         .catch(function (error) {
             $('#tblAppSettings').html("<b>Network Error NO Data Found!</b>").css("text-align", "center");
                //Swal.fire({ type: "error", title: error.message.toUpperCase() })
            });
    }


    $('#txtNettimeout').attr("disabled", "disabled");
    $('.txtminNumberFingers').attr("disabled", "disabled");
    $('.txtmaxNumAttempts').attr("disabled", "disabled");
    

    this.onGet = function (id, nettimout, minnumfin, maxnumfin) {

        $('.txtNettimeout').val(nettimout);
        $('.txtminNumberFingers').val(minnumfin);
        $('.txtmaxNumAttempts').val(maxnumfin);
        $('.appsetID').val(id);
    }

    $("body").on("click", ".btnappUpdate", function (e) {

        let Nettimeout = $(".txtNettimeout").val();
        let id = $('.appsetID').val();
        let minNumberFingers = $('.txtminNumberFingers').val();
        let maxNumAttempts = $('.txtmaxNumAttempts').val();
        let AppSettingsModel = {
            id: id,
            networksessiontimeout: Nettimeout,
            minnumberoffingers: minNumberFingers,
            maxnumberofattempts: maxNumAttempts
        };

        //console.log(authToken);

        if (Nettimeout == '' || Nettimeout == undefined) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Must Give Network TimeOut',

            });
        }
        else if (minNumberFingers == '' || minNumberFingers == undefined) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Must Give Min Number of Fingers',

            });
        }
        else if (maxNumAttempts == '' || maxNumAttempts == undefined) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Must Give Max Number of Attempts',

            });
        }
        else {
        axios
            .put(app_Settings + '/' + id, AppSettingsModel, authToken)
            .then(function (result) {
                //console.log(result.data.isResult);

                GetAllAppSettings();


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
                //console.log(AppSettingsModel);


            });

    }



    });


});


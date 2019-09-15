$(document).ready(function () {
    GetAllSimChange();
    function GetAllSimChange() {
        axios.get(do_NotSimChange, authToken).then(function (result) {
            var results = result.data.result;
            console.log(result);
            var do_NotSimlen = results.length;
            table = document.getElementById('tbl_DoNotSimChange_List');
            var newTableData = "";
            for (let i = 0; i < do_NotSimlen; i++) {

                let tableItem = `<tr><td class='tr_row' style='text-align:center'>` + i + `</td>`;
                tableItem = tableItem + `<td class='tr_row' style='text-align:center'>` + results[i].msisdn + `</td>`;
                tableItem = tableItem + `<td class='tr_row' style='text-align:center'>` + results[i].simserialoriccid+`</td>`
                tableItem = tableItem + '<td  style="text-align: center"><a  onClick="onDelete(' + results[i].id + ')"><img src="/images/Common UI Assets/Icon-16 _Delete.png" /></a></td> <td> <a  onClick="onEdit(' + results[i].id + ')"><img src="/images/Common UI Assets/Icon-16.png" /></a> </td> </tr > ';
                newTableData += tableItem;
            }

            $('#tbl_DoNotSimChange_List').html(newTableData);

        }).catch(function (error) {
            $('#tbl_DoNotSimChange').html("<b>Network Error NO Data Found!</b>").css("text-align", "center");
            Swal.fire({ type: "error", title: error.message.toUpperCase() })
        });
    }

    $("body").on("click", ".btnSave", function (e) {

        let msisdn = $('.txtMSISDN').val();
        let simserialiccID = $('.txtsimSerialID').val();
        let DoNotSimChangeModel = {
            msisdn: msisdn,
            simserialoriccid: simserialiccID,
            isactive: 0
        };

        axios.post(do_NotSimChange, DoNotSimChangeModel, authToken).then(function (result) {
            console.log(result);
            Swal.fire({ type: "Success", title: "Sucessfully Inserted" });
            GetAllSimChange();
        });


    });


});
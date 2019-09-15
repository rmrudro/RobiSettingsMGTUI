$(document).ready(function () {

    GetAllActivationInterval();
    function GetAllActivationInterval() {
        axios.get(sc_Activation_Interval, authToken).then(function (result) {
            var results = result.data.result;
            var act_len = results.length;
            table = document.getElementById('tbl_ActivationInterval_List');
            var newTableData = "";
            for (let i = 0; i < act_len; i++) {
                let tableItem = `<tr><td class='tr_row'>` + i + `</td>`;
                tableItem = tableItem +  `<td class='tr_row' style='text-align:center'>` + results[i].idvalue + `</td>`;
                tableItem = tableItem + '<td  style="text-align: center"><a  onClick="onDelete(' + results[i].id + ')"><img src="/images/Common UI Assets/Icon-16 _Delete.png" /></a></td> <td> <a  onClick="onEdit(' + results[i].id + ')"><img src="/images/Common UI Assets/Icon-16.png" /></a> </td> </tr > ';
                newTableData += tableItem;
            }

            $('#tbl_ActivationInterval_List').html(newTableData);

        }).catch(function (error) {
            $('#tbl_ActivationInterval').html("<b>Network Error NO Data Found!</b>").css("text-align", "center");
            Swal.fire({ type: "error", title: error.message.toUpperCase() })
        });
    }
    $("body").on("click", ".btnscActInterv", function (e) {
        let txtTranMSISDN = $('.txtOwnTranMSISDN').val();

        let NID = $('.txtNID').val();

        let acti_IntervalModel = { idvalue: NID, isactive: 1 };
        axios
            .post(sc_Activation_Interval, acti_IntervalModel, authToken)
            .then(function (result) {
                console.log(result);

                Swal.fire({ type: "sucess", title: "Sucessfully Inserted" });
                GetAllActivationInterval();
            });
    });

    this.onDelete = function (item) {

        //console.log(item);
                   
        axios.delete(sc_Activation_Interval + '/' + item, authToken).then(function (result) {

            Swal.fire({ type: "delete", title: "Sucessfully Deleted" });
            GetAllActivationInterval();
            
        });


    }

});
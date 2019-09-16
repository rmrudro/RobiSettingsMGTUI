$(document).ready(function () {
    var ownshipdata = {
        "result": [
            {
                "id": 1,
                "MSISDN": '01861615151',
                "Date": "2019-10-11 : T 2:05:17PM",

            },
            {
                "id": 2,
                "MSISDN": '01861615151',
                "Date": "2019-10-12 : T 2:06:18PM",
            },
            {
                "id": 3,
                "MSISDN": '0186161515',
                "Date": "2019-10-12 : T 2:06:18PM",
            },
        ],
    };


    GetAllOwnershipTransfer();
    function GetAllOwnershipTransfer() {
        axios.get(sc_ownership_transfer, authToken).then(function (result) {
            var results = result.data.result;
            var act_len = results.length;
            table = document.getElementById('tbl_Ownership_Transfer');
            var newTableData = "";
            for (let i = 0; i < act_len; i++) {
                let tableItem = `<tr><td class='tr_row' style='text-align:center'>` + i + `</td>`;
                tableItem = tableItem + `<td class='tr_row' style='text-align:center'>` + results[i].msisdn + `</td>`;
                tableItem = tableItem + '<td style="text-align:center"><a  onClick="onDelete(' + results[i].id + ')"><img src="/images/Common UI Assets/Icon-16 _Delete.png" /></a></td> <td> <a  onClick="onEdit(' + results[i].id + ')"><img src="/images/Common UI Assets/Icon-16.png" /></a> </td> </tr > ';
                newTableData += tableItem;
            }
            $('#tbl_Ownership_Transfer').html(newTableData);
            LoadPaging();
        }).catch(function (error) {
            $('#tbl_Ownership_Transfer').html("<b>Network Error NO Data Found!</b>").css("text-align", "center");
            Swal.fire({ type: "error", title: error.message.toUpperCase() })
            });

    }

    function LoadPaging() {
        
        $('#tbl_ownership_TransferList').DataTable({
            "paging": true,
            "searching": false,
            "lengthChange": false,
            "bInfo": false,
            "iDisplayLength": 6,

        });
    }

    $("body").on("click", ".btn_own_tran_Add", function (e) {
        let txtTranMSISDN = $('.txtOwnTranMSISDN').val();
        //alert(txtTranMSISDN);
        //console.log(txtTranMSISDN);
        let ownershipModel = { msisdn: txtTranMSISDN, isactive: 1 };
        axios
            .post(sc_ownership_transfer, ownershipModel, authToken)
            .then(function (result) {

                Swal.fire({ type: "sucess", title: "Sucessfully Inserted" });
                GetAllOwnershipTransfer();
            });
    });

    this.onDelete = function (item) {
        //console.log(item);
        axios.delete(sc_ownership_transfer + '/' + item, authToken).then(function (result) {

            console.log(result.data);
            //Swal.fire({ type: "info", title: "Deleted" });
        });


    }

});
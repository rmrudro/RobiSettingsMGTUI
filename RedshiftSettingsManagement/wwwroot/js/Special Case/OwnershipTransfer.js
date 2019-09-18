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
            table = document.getElementById('tbl_ownership_TransferList');
            var newTableData = "";
            for (let i = 0; i < act_len; i++) {
                let tableItem = '<tr id="row' + results[i].id + '"><td class="tr_row" style="text-align:center">' + i + '</td>';
                tableItem = tableItem + `<td class='tr_row' style='text-align:center'>` + results[i].msisdn + `</td>`;
                tableItem = tableItem + '<td style="text-align:center"><a  onClick="onDelete(' + results[i].id + ')"><img src="/images/Common UI Assets/Icon-16 _Delete.png" /></a> <a  onClick="onEdit(' + results[i].id + ')"><img src="/images/Common UI Assets/Icon-16.png" /></a></td> </tr > ';
                newTableData += tableItem;
            }
            $('#tbl_ownership_TransferList').html(newTableData);
            LoadPaging();
        }).catch(function (error) {
            $('#tbl_Ownership_Transfer').html("<b>Network Error NO Data Found!</b>").css("text-align", "center");
            Swal.fire({ type: "error", title: error.message.toUpperCase() })
            });

    }

    function LoadPaging() {
        
        $('#tbl_Ownership_Transfer').DataTable({
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

                if (result.data.isResult) {

                    Swal.fire({
                        type: 'success',
                        title: 'Sucessfully Inserted',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    var html = '<tr id="row' + result.data.result.id + '" style="background-color: white;">';
                    html += "<td class='tr_row' style='text-align: center; width: 300px'>0</td>"
                    html += '<td class="tr_row" style="text-align: center; text-align: center">' + txtTranMSISDN + '</td>';

                    html += '<td style="text-align:center"><a onClick="onDelete(' + result.data.result.id + ')"><img src="/images/Common UI Assets/Icon-16 _Delete.png" /></a> <a onClick="onEdit(' + result.data.result.id + ')"><img src="/images/Common UI Assets/Icon-16.png" /></a></td> </tr>';

                    $('#tbl_Ownership_Transfer').prepend(html);
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
    });

    this.onDelete = function (item) {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result1) => {
            if (result1.value) {
                axios.delete(sc_ownership_transfer + '/' + item, authToken).then(function (result) {
                    console.log(result.data);
                    console.log(result.data.result.code);
                    if (result.data.isResult) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );

                        //$('#tblChannalList').DataTable().row('#delete-row-default' + item).remove().draw();

                        var table = $('#tbl_Ownership_Transfer').DataTable();

                        table.row($('#row' + item)).remove();
                        table.draw();

                    }

                    else {
                        Swal.fire({ type: "warning", title: "Error in Deleting" });
                        //GetAllChannel();
                    }

                });

            }
        });

    }

});
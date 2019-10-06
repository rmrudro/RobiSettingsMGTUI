$(document).ready(function () {
   


    GetAllOwnershipTransfer();
    function GetAllOwnershipTransfer() {
        axios.get(sc_ownership_transfer, authToken).then(function (result) {
            var results = result.data.result;
            var act_len = results.length;
            table = document.getElementById('tbl_ownership_TransferList');
            var newTableData = "";
            for (let i = 0; i < act_len; i++) {
                let tableItem = '<tr id="row' + results[i].id + '"><td class="tr_row tr_rows'+ results[i].id +'" style="text-align:center">' + parseInt(i+1) + '</td>';
                tableItem = tableItem + `<td class='tr_row' style='text-align:center'>` + results[i].msisdn + `</td>`;
                tableItem = tableItem + '<td style="text-align:center"><a  onClick="onDelete(' + results[i].id + ')"><img src="/images/Common UI Assets/Icon-16 _Delete.png" style="cursor:pointer" /></a> <a  onClick="onEdit(' + results[i].id + ')"><img src="/images/Common UI Assets/Icon-16.png" style="cursor:pointer;padding-left:15px;" /></a></td> </tr > ';
                newTableData += tableItem;
            }
            $('#tbl_ownership_TransferList').html(newTableData);
            LoadPaging();
        }).catch(function (error) {
            $('#tbl_Ownership_Transfer').html("<b>Network Error NO Data Found!</b>").css("text-align", "center");
            //Swal.fire({ type: "error", title: error.message.toUpperCase() })
            });

    }

    function LoadPaging() {
        
        $('#tbl_Ownership_Transfer').DataTable({
            "paging": true,
            "searching": false,
            "lengthChange": false,
            "bInfo": false,
            "iDisplayLength": 5,

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

                    let txtMessageRes = result.data.result.messageEN;
                    Swal.fire({

                        type: 'success',
                        title: txtMessageRes,
                        showConfirmButton: false,
                        timer: 1500
                    });

                    var html = '<tr id="row' + result.data.result.id + '" style="background-color: white;">';
                    html += "<td class='tr_row' style='text-align: center; width: 300px'>1</td>"
                    html += '<td class="tr_row" style="text-align: center; text-align: center">' + txtTranMSISDN + '</td>';

                    html += '<td style="text-align:center"><a onClick="onDelete(' + result.data.result.id + ')"><img src="/images/Common UI Assets/Icon-16 _Delete.png" /></a> <a onClick="onEdit(' + result.data.result.id + ')"><img src="/images/Common UI Assets/Icon-16.png" padding-left:15px; /></a></td> </tr>';

                    $('#tbl_Ownership_Transfer').prepend(html);
                    //tableItem = tableItem + '<td style="text-align:center"><a  onClick="onDelete(' + results[i].id + ')"><img src="/images/Common UI Assets/Icon-16 _Delete.png" style="cursor:pointer" /></a> <a  onClick="onEdit(' + results[i].id + ')"><img src="/images/Common UI Assets/Icon-16.png" style="cursor:pointer;padding-left:15px;" /></a></td> </tr > ';
                    axios.get(sc_ownership_transfer, authToken).then(function (result) {
                        var results = result.data.result;
                        //table = document.getElementById('tbl_ownership_TransferList');
                        var act_len = results.length;
                        for (let i = 0; i < act_len; i++) {
                            console.log(results[i].id);

                            $('.tr_rows' + results[i].id).html(parseInt(i + 2));

                        }
                    });
                }
                else {

                    let txtMessageRes = result.data.result.messageEN;
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: txtMessageRes,
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
                        let txtMessageRes = result.data.result.messageEN;
                        Swal.fire({

                            type: 'success',
                            title: txtMessageRes,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        //$('#tblChannalList').DataTable().row('#delete-row-default' + item).remove().draw();

                        var table = $('#tbl_Ownership_Transfer').DataTable();

                        table.row($('#row' + item)).remove();
                        table.draw();

                    }

                    else {
                        let txtMessageRes = result.data.result.messageEN;
                        Swal.fire({
                            type: 'error',
                            title: 'Oops...',
                            text: txtMessageRes,

                        });
                        //GetAllChannel();
                    }

                });

            }
        });

    }

});
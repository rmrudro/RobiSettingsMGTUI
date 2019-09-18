﻿$(document).ready(function () {
    GetAllSimChange();
    function GetAllSimChange() {
        axios.get(do_NotSimChange, authToken).then(function (result) {
            var results = result.data.result;
            console.log(result);
            var do_NotSimlen = results.length;
            table = document.getElementById('tbl_DoNotSimChange_List');
            var newTableData = "";
            for (let i = 0; i < do_NotSimlen; i++) {

                let tableItem = '<tr id="row' + results[i].id + '"><td class="tr_row" style="text-align:center">' + i + '</td>';


                //let tableItem = '<tr id="row' + results[i].id + '"><td class="tr_row" style="text-align:center">' + i + '</td>';
                tableItem = tableItem + `<td class='tr_row' style='text-align:center'>` + results[i].msisdn + `</td>`;
                tableItem = tableItem + `<td class='tr_row' style='text-align:center'>` + results[i].simserialoriccid+`</td>`
                tableItem = tableItem + '<td  style="text-align:center;cursor:pointer;"><a  onClick="onDelete(\'' + results[i].id +  '\')"><img src="/images/Common UI Assets/Icon-16 _Delete.png" /></a> <a  onClick="onEdit("' + results[i].id + '")"><img src="/images/Common UI Assets/Icon-16.png" /></a> </td> </tr > ';
                newTableData += tableItem;

                
            }

            $('#tbl_DoNotSimChange_List').html(newTableData);

            LoadPaging();

        }).catch(function (error) {
            $('#tbl_DoNotSimChange').html("<b>Network Error NO Data Found!</b>").css("text-align", "center");
            Swal.fire({ type: "error", title: error.message.toUpperCase() })
        });
    }

    function LoadPaging() {

        $('#tbl_DoNotSimChange').DataTable({
            "paging": true,
            "searching": false,
            "lengthChange": false,
            "bInfo": false,
            "iDisplayLength": 6,

        });
    }

    $("body").on("click", ".btnSave", function (e) {

        let msisdn = $('.txtMSISDN').val();
        let simserialiccID = $('.txtsimSerialID').val();
        let DoNotSimChangeModel = {
            msisdn: msisdn,
            simserialoriccid: simserialiccID,
            isactive: 1
        };

        axios.post(do_NotSimChange, DoNotSimChangeModel, authToken).then(function (result) {

            console.log(result);

            if (result.data.isResult) {

                Swal.fire({
                    type: 'success',
                    title: 'Sucessfully Inserted',
                    showConfirmButton: false,
                    timer: 1500
                });


                //let tableItem = `<tr><td class='tr_row' style='text-align:center'>` + i + `</td>`;
                //tableItem = tableItem + `<td class='tr_row' style='text-align:center'>` + results[i].msisdn + `</td>`;
                //tableItem = tableItem + `<td class='tr_row' style='text-align:center'>` + results[i].simserialoriccid + `</td>`
                //tableItem = tableItem + '<td  style="text-align: center"><a  onClick="onDelete(' + results[i].id + ')"><img src="/images/Common UI Assets/Icon-16 _Delete.png" /></a> <a  onClick="onEdit(' + results[i].id + ')"><img src="/images/Common UI Assets/Icon-16.png" /></a> </td> </tr > ';
                //newTableData += tableItem;


                var html = '<tr id="row' + result.data.result.id + '" style="background-color: white;">';
                html += "<td class='tr_row' style='text-align: center; width: 300px'>0</td>"
                html += '<td class="tr_row" style="text-align: center; text-align: center">' + msisdn + '</td>';
                html += '<td class="tr_row" style="text-align: center; text-align: center">' + simserialiccID + '</td>';

                html += '<td style="text-align:center;cursor:pointer;"><a onClick="onDelete("' + result.data.result.id + '")"><img src="/images/Common UI Assets/Icon-16 _Delete.png" /></a> <a onClick="onEdit("' + result.data.result.id + '")"><img src="/images/Common UI Assets/Icon-16.png" /></a></td> </tr>';

                $('#tbl_DoNotSimChange').prepend(html);

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

        //console.log(item);

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
                axios.delete(do_NotSimChange + '/' + item, authToken).then(function (result) {
                    console.log(result.data);

                    if (result.data.isResult) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );

                        //$('#tblChannalList').DataTable().row('#delete-row-default' + item).remove().draw();

                        var table = $('#tbl_DoNotSimChange').DataTable();

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
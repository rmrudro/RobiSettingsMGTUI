$(document).ready(function () {

    GetAllActivationInterval();
    function GetAllActivationInterval() {
        axios.get(sc_Activation_Interval, authToken).then(function (result) {
            var results = result.data.result;
            var act_len = results.length;
            table = document.getElementById('tbl_ActivationInterval_List');
            var newTableData = "";

            for (let i = 0; i < act_len; i++) {
                //let tableItem = `<tr ><td class='tr_row'>` + i + `</td>`;



                let tableItem = '<tr id="row' + results[i].id + '"><td class="tr_row" style="text-align:center">' + i + '</td>';

                tableItem = tableItem + `<td class='tr_row' style='text-align:center'>` + results[i].idvalue + `</td>`;
                tableItem = tableItem + '<td  style="text-align: center"><a  onClick="onDelete(' + results[i].id + ')"><img src="/images/Common UI Assets/Icon-16 _Delete.png" style="cursor:pointer;" /></a> <a  onClick="onEdit(' + results[i].id + ')"><img src="/images/Common UI Assets/Icon-16.png" style="cursor:pointer;padding-left:15px;" /></a> </td> </tr > ';
                newTableData += tableItem;
            }

            $('#tbl_ActivationInterval_List').html(newTableData);
            LoadPaging();
        }).catch(function (error) {
            $('#tbl_ActivationInterval').html("<b>Network Error NO Data Found!</b>").css("text-align", "center");
            Swal.fire({ type: "error", title: error.message.toUpperCase() })
        });
    }

    function LoadPaging() {

        $('#tbl_ActivationInterval').DataTable({
            "paging": true,
            "searching": false,
            "lengthChange": false,
            "bInfo": false,
            "iDisplayLength": 6,

        });
    }


    $("body").on("click", ".btnscActInterv", function (e) {
        //let txtTranMSISDN = $('.txtOwnTranMSISDN').val();

        let NID = $('.txtNID').val();

        let acti_IntervalModel = { idvalue: NID, isactive: 1 };
        axios
            .post(sc_Activation_Interval, acti_IntervalModel, authToken)
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
                    html += '<td class="tr_row" style="text-align: center; text-align: center">' + NID + '</td>';

                    html += '<td style="text-align:center"><a onClick="onDelete(' + result.data.result.id + ')"><img src="/images/Common UI Assets/Icon-16 _Delete.png" /></a> <a onClick="onEdit(' + result.data.result.id + ')"><img src="/images/Common UI Assets/Icon-16.png" /></a></td> </tr>';

                    $('#tbl_ActivationInterval').prepend(html);
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
                axios.delete(sc_Activation_Interval + '/' + item, authToken).then(function (result) {
                    console.log(result.data);
                   
                    if (result.data.isResult) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );

                        //$('#tblChannalList').DataTable().row('#delete-row-default' + item).remove().draw();

                        var table = $('#tbl_ActivationInterval').DataTable();

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







        axios.delete(sc_Activation_Interval + '/' + item, authToken).then(function (result) {

           
            

        });


    }

});




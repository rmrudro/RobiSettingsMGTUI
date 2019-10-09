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

                let tableItem = '<tr id="row' + results[i].id + '"><td class="tr_row tr_rows' + results[i].id +'" style="text-align:center">' + parseInt(i + 1) + '</td>';

                tableItem = tableItem + `<td class='tr_row' style='text-align:center'>` + results[i].idvalue + `</td>`;
                tableItem = tableItem + '<td  style="text-align: center"><a  onClick="onDelete(' + results[i].id + ')"><img src="/images/Common UI Assets/Icon-16 _Delete.png" style="cursor:pointer;" /></a> <a  onClick="onEdit(' + results[i].id + ',' + results[i].idvalue + ')"><img src="/images/Common UI Assets/Icon-16.png" style="cursor:pointer;padding-left:15px;" /></a> </td> </tr > ';
                newTableData += tableItem;
            }

            $('#tbl_ActivationInterval_List').html(newTableData);
            LoadPaging();
        }).catch(function (error) {
            $('#tbl_ActivationInterval').html("<b>Network Error NO Data Found!</b>").css("text-align", "center");
            //Swal.fire({ type: "error", title: error.message.toUpperCase() })
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

    this.onEdit = function (id, idValue) {

        $('.txtNID').val(idValue);

        $('.txtActID').val(id);

        $('.btnscActInterv').hide();

        $('.btn_scActInterv_Update').show();


    }

    $("body").on("click", ".btn_scActInterv_Update", function (e) {
        let NID = $('.txtNID').val();
        let acti_IntervalModel = { idvalue: NID, isactive: 1 };
        let actId = $('.txtActID').val();
        axios
            .put(sc_Activation_Interval + '/' + actId, acti_IntervalModel, authToken)
            .then(function (result) {
                if (result.data.isResult) {
                    let txtMessageRes = result.data.result.messageEN;
                    Swal.fire({
                        type: 'success',
                        title: txtMessageRes,
                        showConfirmButton: false,
                        timer: 1500
                    });

                    $('.txtNID').val('');

                    $('.txtActID').val('');

                    $('.btn_scActInterv_Update').hide();

                    $('.btnscActInterv').show();

                    


                }
                else {
                    let txtMessageRes = result.data.result.messageEN;
                    Swal.fire({

                        type: 'error',
                        title: 'Oops...',
                        text: txtMessageRes,

                    });
                }
            });

    });

    $("body").on("click", ".btnscActInterv", function (e) {
        //let txtTranMSISDN = $('.txtOwnTranMSISDN').val();

        let NID = $('.txtNID').val();

        let acti_IntervalModel = { idvalue: NID, isactive: 1 };
        axios
            .post(sc_Activation_Interval, acti_IntervalModel, authToken)
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
                    html += '<td class="tr_row" style="text-align: center; text-align: center">' + NID + '</td>';

                    html += '<td style="text-align:center"><a onClick="onDelete(' + result.data.result.id + ')"><img src="/images/Common UI Assets/Icon-16 _Delete.png" /></a> <a onClick="onEdit(' + result.data.result.id + ')"><img src="/images/Common UI Assets/Icon-16.png" /></a></td> </tr>';

                    $('#tbl_ActivationInterval').prepend(html);

                    axios.get(sc_Activation_Interval, authToken).then(function (result) {
                        var results = result.data.result;
                        var act_len = results.length;
                        for (let i = 0; i < act_len; i++) {
 
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
                        let txtMessageRes = result.data.result.messageEN;
                        Swal.fire({

                            type: 'success',
                            title: txtMessageRes,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        //$('#tblChannalList').DataTable().row('#delete-row-default' + item).remove().draw();

                        var table = $('#tbl_ActivationInterval').DataTable();

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







        axios.delete(sc_Activation_Interval + '/' + item, authToken).then(function (result) {

           
            

        });


    }

});




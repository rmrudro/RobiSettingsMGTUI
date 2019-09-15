﻿function GetAllFTR() {
    axios.get(ftrpackage, authToken).then(function (result) {
        var resultjson = JSON.stringify(result.data.result);
        console.log(result.data.result);
        var results = result.data.result;
        totalFTR = results.length;
        if (totalFTR > 0) {
            table = document.getElementById('tblFTR');
            var newTableData = "";


            for (let i = 0; i < totalFTR; i++) {
                let tableItem = "<tr><td class='tr_row' style='text-align:center'>" + results[i].title + "</td>";
                tableItem = tableItem + "<td class='tr_row' style='text-align:center'>" + results[i].amount + "</td>";
                tableItem = tableItem + '<td><a  onClick="onDelete(' + results[i].id + ')" style="cursor:pointer;"><img src="/images/Common UI Assets/Icon-16 _Delete.png" /></a><a onClick="onEdit(' + results[i].id + "," + results[i].title + ',' + results[i].amount + ')" style="padding-left:10px;cursor:pointer"><img src="/images/Common UI Assets/Icon-16.png" /></a></td></tr>';
                newTableData += tableItem;
            }
            $('#tblFTR_Empty').hide();
            $('#tblFTR').html(newTableData);
        }
        else {
            $('#tblFTR_Empty').show();
        }
      

    })
        .catch(function (error) {
            $('#tblFTRList').html("<b>Network Error NO Data Found!</b>").css("text-align", "center");
            Swal.fire({ type: "error", title: error.message.toUpperCase() })
        });
        ;
}

$(document).ready(function () {
    GetAllFTR();

    
    $("body").on("click", ".ftrAdd", function (e) {
        let ftrTitle = $(".ftrTitle").val();
        let ftramount = $(".ftramount").val();
        let FTRModel = { title: ftrTitle, amount: ftramount };
        axios
            .post(ftrpackage, FTRModel, authToken).then(function (result) {

                console.log(result.data);
                //    console.log(result);
                if (result.data) {
                    Swal.fire({
                        position: 'top-end',
                        type: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    //Swal.fire({ type: "Success", title: "Sucessfully Inserted" });
                    GetAllFTR();
                }
                

            });
        //alert(ftrTitle);
    });

    this.onDelete = function (item) {
        // alert(item);
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
                axios.delete(ftrpackage + '/' + item, authToken).then(function (result) {
                    console.log(result.data);
                    console.log(result.data.result.code);
                    if (result.data.isResult) {
                        Swal.fire(
                            'Deleted!',
                            'Your Selected FTR has been deleted.',
                            'success'
                        )
                        GetAllFTR();
                    }

                    else {
                        Swal.fire({ type: "warning", title: "Error in Deleting" });
                        GetAllFTR();
                    }

                });

            }
        });

    }
    let id;
    this.onEdit = function (item1, item2, item3) {
        id = item1;
        $('.ftramount').prop('readonly', true);
        $('.ftrTitle').val(item2); //= item2;
        $('.ftramount').val(item3);// = item3;
        $('.ftrAdd').hide();
        $('.ftrUpdate').show();

    }

    $("body").on("click", ".ftrUpdate", function (e) {

        let ftrTitle = $(".ftrTitle").val();
        let ftramount = $(".ftramount").val();
        let FTRModel = { title: ftrTitle, amount: ftramount };
        
        axios.put(ftrpackage + '/' + id, FTRModel, authToken).then(function (result) {
            console.log(result);
            if (result.data.isResult == true) {

                Swal.fire({

                    type: 'success',
                    title: 'Sucessfully Updated',
                    showConfirmButton: false,
                    timer: 1500
                });

                $('.ftrAdd').show();
                $('.ftrUpdate').hide();
                $('.ftrTitle').val('');
                $('.ftramount').val('');
                $('.ftramount').prop('readonly', false);
            }
            else {

                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href>Why do I have this issue?</a>'
                });
                $('.ftrAdd').show();
                $('.ftrUpdate').hide();
                $('.ftrTitle').val('');
                $('.ftramount').val('');
                $('.ftramount').prop('readonly', false);
            }

            GetAllFTR();
        });
    });

});
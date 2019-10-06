//let tableItem = '<tr><td>1</td>';
 //tableItem += '<td>1</td>';
 //tableItem += '<td>2</td></tr>';

function GetAllFTR() {
    axios.get(ftrpackage, authToken).then(function (result) {
        var resultjson = JSON.stringify(result.data.result);
        
        var results = result.data.result;
        totalFTR = results.length;
       
        if (totalFTR > 0) {
            table = document.getElementById('tblFTR');
            var newTableData = "";

           

            for (let i = 0; i < totalFTR; i++) {

                
                let tableItem = '<tr id="row' + results[i].id + '"  style="background-color: white;">';
                tableItem = tableItem + "<td class='tr_row' style='text-align:center'>" + results[i].title + "</td>";
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
            //Swal.fire({ type: "error", title: error.message.toUpperCase() })
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

                
                
                
                if (result.data.isResult) {
                    let txtMessageRes = result.data.result.messageEN;
                    
                    Swal.fire({
                        
                        type: 'success',
                        title: txtMessageRes,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    //Swal.fire({ type: "Success", title: "Sucessfully Inserted" });
                    //GetAllFTR();
                    //let tableItem = "<tr><td class='tr_row' style='text-align:center'>" + results[i].title + "</td>";
                    //tableItem = tableItem + "<td class='tr_row' style='text-align:center'>" + results[i].amount + "</td>";
                    //tableItem = tableItem + '<td><a  onClick="onDelete(' + results[i].id + ')" style="cursor:pointer;"><img src="/images/Common UI Assets/Icon-16 _Delete.png" /></a><a onClick="onEdit(' + results[i].id + "," + results[i].title + ',' + results[i].amount + ')" style="padding-left:10px;cursor:pointer"><img src="/images/Common UI Assets/Icon-16.png" /></a></td></tr>';
                    //newTableData += tableItem;

                    var html = '<tr id="row' + result.data.result.id + '" style="background-color: white;">';
                    html += '<td class="tr_row" style="text-align: center; ">' + ftrTitle+ '</td>';
                    html += '<td class="tr_row" style="text-align: center;">' + ftramount + '</td>';
                    
                    html += '<td><a  onClick="onDelete(' + result.data.result.id + ')" style="cursor:pointer;"><img src="/images/Common UI Assets/Icon-16 _Delete.png" /></a><a onClick="onEdit(' + result.data.result.id + "," + ftrTitle + ',' + FTRModel + ')" style="padding-left:10px;cursor:pointer"><img src="/images/Common UI Assets/Icon-16.png" /></a></td></tr>';
                    //html += '<td style="text-align:center"><a onClick="onDelete(' + result.data.result.id + ')"><img src="/images/Common UI Assets/Icon-16 _Delete.png" /></a> <a onClick="onEdit(' + result.data.result.id + ')"><img src="/images/Common UI Assets/Icon-16.png" /></a></td> </tr>';

                    $('#tblFTRList').prepend(html);

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
                    
                    if (result.data.isResult) {
                        let txtMessageRes = result.data.result.messageEN;
                        Swal.fire({
                            type: 'success',
                            title: txtMessageRes,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        GetAllFTR();
                    }

                    else {
                        let txtMessageRes = result.data.result.messageEN;
                        Swal.fire({
                            type: 'error',
                            title: 'Oops...',
                            text: txtMessageRes,

                        });
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
            
            if (result.data.isResult == true) {
                let txtMessageRes = result.data.result.messageEN;
                Swal.fire({
                    type: 'success',
                    title: txtMessageRes,
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
                let txtMessageRes = result.data.result.messageEN;
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: txtMessageRes,
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
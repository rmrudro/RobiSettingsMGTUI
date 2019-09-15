$(document).ready(function () {
    var basepath = "http://10.101.65.109:8000/";
    $('#upload').change(function () {
        var filename = $(this).val();
        var lastIndex = filename.lastIndexOf("\\");
        if (lastIndex >= 0) {
            filename = filename.substring(lastIndex + 1);
        }
        $('#filename').val(filename);
    });

    GetAllAddsettings();

    function GetAllAddsettings() {
        axios.get(ad_Settings, authToken).then(function (result) {

            table = document.getElementById('tbl_AddSettings');
            var results = result.data.result;
            var tblRowLength = results.length;
            if (tblRowLength > 0) {
                $('#trtheadaddsettings').show();
                var newTableData = "";
                var fa_fa_trash = "fa fa-trash";
                var tsttrue = "true";
                var style = "color: red";

                for (let i = 0; i < results.length; i++) {

                    let tableItem = "<tr><td class='tr_row' style='text-align: center; width: 300px'><img src='" + basepath + results[i].promotionalpicture + "' style='height:30px;width:30px;' /></td>";
                    tableItem += "<td class='tr_row' style='text-align: center; width: 300px'>" + results[i].promotionaltext + "</td>";
                    tableItem += "<td class='tr_row' style='text-align: center; width: 320px'>" + results[i].timelimit + "</td>";
                    tableItem = tableItem + '<td style="text-align:center;width:320px"><a onClick="onDelete(' + results[i].id + ')"><img src="/images/Common UI Assets/Icon-16 _Delete.png" style="cursor:pointer" /></a></td></tr>';
                    newTableData += tableItem;

                }
                console.log(newTableData);
                $('#tbl_tby_AddSettings_Empty').hide();

                $('#tbl_tbdy_AdSettings').html(newTableData);
                LoadPaging();
            }
            else {

                $('#tbl_tby_AddSettings_Empty').show();
            }
            //console.log(result.data.resultSet);
        })
            .catch(function (error) {
                $('#tbl_AddSettings').html("<b>Network Error NO Data Found!</b>").css("text-align", "center");
                Swal.fire({ type: "error", title: error.message.toUpperCase() })
            });
        
    }

    let tt = '';


    function LoadPaging() {
        $('#tbl_AddSettings').DataTable({
            "paging": true,
            "searching": false,
            "lengthChange": false,
            "bInfo": false,
            "iDisplayLength": 6,

        });
    }


    this.onDelete = function (item) {


        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

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
                axios.delete(ad_Settings + '/' + item, authToken).then(function (result) {
                    console.log(result);
                    //GetAllAddsettings();
                    return;
                });

                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your Canceled Deletion :)',
                    'error'
                )
            }
        })

    }




    $("body").on("click", ".addSettingsAdd", function (e) {
        let txtPromotionaltext = $(".txtpro").val();
        let txtTimeLimit = $(".txtTimeLimit").val();
        let ppic = $('.base64image').val();
        console.log(ppic);
        let pimage = ppic.split(",").pop();  //ppic.substr(0, ppic.indexOf(','));
        console.log(pimage);
        //console.log(ppic);

        let addSettingsModel = { promotionaltext: txtPromotionaltext, timelimit: txtTimeLimit, promotionalpicture: pimage };
        

        if (txtPromotionaltext == '' || txtPromotionaltext == undefined) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Must Give Promotional Text',

            });
            

            
        }
        else if (txtTimeLimit == '' || txtTimeLimit == undefined) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Must Give Time Limit',

            });
        }
        else if (ppic == '' || ppic == undefined) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Must Upload Promotional Picture',

            });
        }
        else {
            axios
                .post(ad_Settings, addSettingsModel, authToken)
                .then(function (result) {
                    console.log(result.data.isResult);

                    if (result.data.isResult) {

                        Swal.fire({
                            type: 'success',
                            title: 'Sucessfully Inserted',
                            showConfirmButton: false,
                            timer: 1500
                        });

                        //Swal.fire({ type: "Sucess", title: "Sucessfully Inserted" });
                        
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
        }

    });


});


$(document).ready(function () {
    GetAllCommisionList();
    function GetAllCommisionList() {
        axios.get(commisionUpload + '/getAllcommission', authToken).then(function (result) {

            var results = result.data.result;
            var resultlength = results.length;

            var newTableData = "";
            //console.log(results);
            table = document.getElementById('tbl_allCommision');
            let j = 0;
            for (let i = 0; i < resultlength; i++) {
                let status = results[i].status;
                
                let com_only_month = "";
                let comisionmonth = results[i].commissionmonth;
                com_only_month = comisionmonth.substr(0, comisionmonth.indexOf('T'));
                //var month_name = function (com_only_month) {
                //    mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                //    return mlist[com_only_month.getMonth()];
                //};
                //console.log(month_name(com_only_month));

                var monthname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                var only_month = com_only_month.substring(5, 7);

                var only_day = com_only_month.substring(8, 10);

                

                only_month = parseInt(only_month, 10);

                var month_date = only_day + '   ' + monthname[only_month-1];
                //console.log(only_month);
                //console.log(only_day);
                
                if (status == 'UnPublished') {
                    
                    let tableItem = '<tr><td style="text-align:center" class="tr_row">' + i  + '</td>';
                    tableItem = tableItem + '<td style="text-align:center" class="tr_row">' + results[i].transactionno + '</td>';
                    tableItem = tableItem + '<td style="text-align:center" class="tr_row">' + results[i].filename + '</td>';
                    tableItem = tableItem + '<td style="text-align:center" class="tr_row">' + month_date + '</td>';
                    tableItem = tableItem + '<td style="text-align:center" class="tr_row"><button type="button" onclick=publish("' + results[i].transactionno +'") class="btn btn-danger btnpublish btnCommonAll" style="padding-left:20px;width:100px;">Publish</button></td></tr>'
                    //tableItem = tableItem + '<td>' + com_only_month + '</td></tr>';
                    newTableData += tableItem;
                }
                else {
                    
                    let tableItem = '<tr><td style="text-align:center" class="tr_row">' + i + '</td>';
                    tableItem = tableItem + '<td style="text-align:center" class="tr_row">' + results[i].transactionno + '</td>';
                    tableItem = tableItem + '<td style="text-align:center" class="tr_row">' + results[i].filename + '</td>';
                    tableItem = tableItem + '<td style="text-align:center" class="tr_row">' + month_date + '</td>';
                    tableItem = tableItem + '<td style="text-align:center" class="tr_row"><button type="button" onclick=unpublish("' + results[i].transactionno +'") class="btn btn-danger btnunpublish btnCommonAll" style="padding-left:20px;width:100px;">UnPublish</button></td></tr>'
                    newTableData += tableItem;

                }
            }
            $('#tbl_AllCommisionList').html(newTableData);

        }).catch(function (error) { 
            $('#tblCommision_Upload').html("<b>Network Error NO Data Found!</b>").css("text-align", "center");
            Swal.fire({ type: "error", title: error.message.toUpperCase() })
        });
    }


    var month_name = function (dt) {
        mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return mlist[dt.getMonth()];
    };

    this.unpublish = function (item) {

        let tranno = item;
        let publishModel = {
            transactionno: tranno
        };

        axios
            .post(commisionUpload + '/UnPublished', publishModel, authToken)
            .then(function (result) {
                if (result.data.isResult) {
                    Swal.fire({

                        type: 'success',
                        title: 'Sucessfully UnPublished',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                else {
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href>Why do I have this issue?</a>'
                    });
                }
                GetAllCommisionList();
            });

    }

    this.publish = function (item) {

        let tranno = item;
        let publishModel = {
            transactionno: tranno
        };
        
        axios
            .post(commisionUpload + '/Published', publishModel, authToken)
            .then(function (result) {
                console.log(result.data);
                if (result.data.isResult) {
                    Swal.fire({

                        type: 'success',
                        title: 'Sucessfully Published',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                else {
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href>Why do I have this issue?</a>'
                    });
                }
                GetAllCommisionList();
            });

    }



 

    $("body").on("click", ".com_fle_upload", function (e) {

        var formData = new FormData();
        var csvfile = document.querySelector('#customFile');
        console.log(csvfile);
        formData.append("file", csvfile.files[0]);
        axios
            .post(commisionUpload + '/upload', formData, authTokenfile)
            .then(function (result) {
                console.log(result);
            });
        axios.post('upload_file', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    });

});
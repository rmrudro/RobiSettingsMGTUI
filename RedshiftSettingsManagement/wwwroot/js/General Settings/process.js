$(document).ready(function () {
    axios.get(all_process, authToken).then(function (result) {
        console.log(result.data.result);
        var results = result.data.result;
        var resultlength = results.length;
        //console.log(result.data.resultSet);
        table = document.getElementById('tbl_all_Process');
        var newTableData = "";
        var fa_fa_trash = "fa fa-trash";
        var tsttrue = "true";
        var style = "color: red";

        let count = 0;
        if (resultlength == 0) {
            $('#tbl_AllProcessListEmpty').show();
        }
        else {
            
            //$('#tbl_AllProcessListEmpty').hide();
            for (let i = 0; i < resultlength; i++) {
                let checkboxvalue = results[i].isenabled;
                let tableItem = "<tr><td>" + results[i].processname + "</td>";
                let pid = results[i].id;
                if (checkboxvalue == '0') {
                    // Checks it
                    // tableItem = tableItem + '<td><label class="switch"><input id="chkEnabled"' + count + '   type = "checkbox" onchange = "checkedorUncheked(' + result.data.resultSet[i].id + ',' + count + ')" class="chkEnabled"' + count + ' > <span class="slider round"></span></label ></td ></tr > ';
                    tableItem = tableItem + '<td><label class="switch"><input id=' + pid + ' type = "checkbox"  onchange="checkedorUncheked(this);" class="chkEnabled" count=' + count + ' pid=' + pid + ' ><span class="slider round"></span></label ></td></tr>';
                    //tableItem = tableItem + '<td><label class="switch"><input id="chkEnabled"' + count + '   type = "checkbox" onchange = "checkedorUncheked(' + result.data.resultSet[i].id + ',' + count + ')" class="chkEnabled' + count +'" > <span class="slider round"></span></label ></td ></tr > ';
                    //$('#chkEnabled').checked = false;
                    //$("#chkEnabled").prop('checked', false); // Unchecks it
                }
                else {
                    //onClick = "onDelete(' + result.data.resultSet[i].id + ')"
                    tableItem = tableItem + '<td><label class="switch"><input id=' + pid + ' checked  type = "checkbox"  onchange="checkedorUncheked(this);" class="chkEnabled" count=' + count + ' pid=' + pid + ' ><span class="slider round"></span></label ></td></tr>';
                    //tableItem = tableItem + '<td><label class="switch"><input id="chkEnabled"' + count + ' checked  type = "checkbox" onchange="checkedorUncheked(' + result.data.resultSet[i].id + ',' + count + ')" class="chkEnabled' + count +'" ><span class="slider round"></span></label ></td></tr>';
                    //$('#chkEnabled').checked = true;
                    //$("#chkEnabled").prop('checked', true);
                }
                count++;
                //tableItem = tableItem + '<td style = "display:none;">' + result.data.resultSet[i].id + '</td>';

                //tableItem = tableItem + "<td>" + result.data.resultSet[i].isactive + "</td>";
                //tableItem = tableItem + '<td><a href="#" onClick="onDelete(' + result.data.resultSet[i].id + ')" ><i class="fa fa-trash" aria-hidden="true" style="color: red"></i></a></td></tr>';
                //tableItem = tableItem + '<td><a href="#" onClick="onDelete(' + result.data.resultSet[i].id + ')" ><i class="fa fa-trash" aria-hidden="true" style="color: red"></i></a></td></tr>';

                newTableData += tableItem;
                //console.log(checkboxvalue);

            }

            console.log(newTableData);


            $('#tbl_AllProcessList').html(newTableData);


            $('#tbl_AllProcessListEmpty').hide();


        }
    });


    //$(".checkbox").change(function () {
    //    if (this.checked) {
    //        //Do stuff
    //    }
    //});
    //'<td><label class="switch"><input id="chkEnabled" checked class="chkEnabled"(' + count + ') type = "checkbox" onchange="checkedorUncheked(' + result.data.resultSet[i].id + ',' + count + ')"><span class="slider round"></span></label ></td></tr>'


    this.checkedorUncheked = function (e) {
        //alert('Hello');
        //function checkedorUncheked(e) {
        var item1 = $(e).attr('id');/**/ /// for id*/
        var item2 = $(e).attr('count'); // count 


        if ($(e).prop('checked') == true) {
            //alert('Hello checked');
            //do something
            let ProcessModelUpdate = {  "isenabled": 1 };
            

            axios.put(all_process + '/' + item1, ProcessModelUpdate, authToken).then(function (result) {
                console.log(result);
                if (result.data.isSuccessful == true) {

                    Swal.fire({ type: "info", title: "Sucessfully Enabled" });

                }
            });
        }
        else {
        
            let ProcessModelUpdate = {  "isenabled": 0 };
            console.log(ProcessModelUpdate);

            axios.put(all_process + '/' + item1, ProcessModelUpdate, authToken).then(function (result) {
                console.log(result);
                if (result.data.isSuccessful == true) {

                    Swal.fire({ type: "info", title: "Sucessfully Disabled" });

                }
            });


            //axios.post(all_process + '/Update', ProcessModelUpdate, common).then(function (result) {
            //    if (result.data.isSuccessful == true) {

            //        Swal.fire({ type: "info", title: "UnChecked" });
            //    }
            //});

        }
    }





    //this.checkedorUncheked = function (item, item2) {
    //    console.log('#chkEnabled' + item2);
    //    $('#chkEnabled' + item2).on('change', function () {
    //        console.log(item2);
    //        console.log('Hello');
    //        //if ($('.chkEnabled').checked) {
    //        if (this.checked) {
    //            //if ($("#chkEnabled").is(":checked")) {
    //            let ProcessModelUpdate = { "id": item, "isenabled": 1 };
    //            console.log(ProcessModelUpdate);
    //            //axios.post(all_process + '/Update', ProcessModelUpdate, common).then(function (result) {
    //            //    if (result.data.isSuccessful == true) {
    //            //        console.log('No problem checked');
    //            //        Swal.fire({ type: "info", title: "Checked" });
    //            //    }



    //            //}).catch(function (error) {
    //            //    Swal.fire({ type: "error", title: error.message.toUpperCase() })
    //            //});


    //        } else {

    //            let ProcessModelUpdate = { "id": item, "isenabled": 0 };
    //            console.log(ProcessModelUpdate);
    //            //axios.post(all_process + '/Update', ProcessModelUpdate, common).then(function (result) {
    //            //    if (result.data.isSuccessful == true) {
    //            //        Swal.fire({ type: "info", title: "Unchecked" });
    //            //    }


    //            //}).catch(function (error) {
    //            //    Swal.fire({ type: "error", title: error.message.toUpperCase() })
    //            //});

    //        }
    //    });

    //}


});



//});


//axios.delete(allChannel_api, common).then(function (result) {
        //    axios.delete(allChannel_api + '/' + item, common).then(function (result) {
        //        console.log(result);

        //    });
            //alert(item);
        //});


//$(function checkedorUncheked() {
    //    if ($("#chkEnabled").is(":checked")) {
    //        alert("hi");
    //    } else {
    //        alert("bye");
    //    }
    //});



    //function checkedorUncheked() {
    //    $('body,html').animate({ scrollTop: 0 }, 100);
    //}
    //$(function () {
    //    if ($("#chkEnabled").is(":checked")) {
    //        alert("hi");
    //    } else {
    //        alert("bye");
    //    }
    //});

    //$(document).on('change', '.chkEnabled', function () {
    //    if (this.checked) {

    //        let loginModel = { userName: username_, password: password_, deviceType: 2, mac: localStorage.getItem("mac-address"), appVersionCode: "1" };


    //        //alert('checkbox is checked');
    //        // checkbox is checked
    //    }
    //    else {



    //        //alert('checkbox is unchecked');

    //    }
    //});


    //$(".chkEnabled").change(function () {
    //    if (this.checked) {

    //        alert('Hello');
    //        //Do stuff
    //    }
    //});

    //$('.chkEnabled').change(function () {
    //    alert('Hello');
    //    //$('#textbox1').val($(this).is(':checked'));
    //});


    //$('.chkEnabled').change(function () {
    //    alert('Hello');
    //    //$('#textbox1').val($(this).is(':checked'));
    //});

    //axios.post()

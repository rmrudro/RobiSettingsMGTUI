

$(document).ready(function () {
    //console.log(authToken);
    //$.fn.dataTable.ext.classes.sPageButton = 'btn btn-primary';
    $.fn.dataTable.ext.classes.sPageButton = 'btn paginatebutton';
    //$('a.paginatebutton previous').val('<<');
    let totalchannel;
    GetAllChannel();
    function GetAllChannel() {
        axios.get(allChannel_api, authToken).then(function (result) {
            //console.log(result);

            console.log('Result is ' + result);
            var totalchannel_len = result.data.result.length;
            console.log(totalchannel_len);
          

            console.log('Result is ' + result.data.result);
            if (totalchannel_len === 0) {
                alert('Empty List');
                $('#tblChannalList').html("No Data Found!").css("text-align", "center");
            }
            else {
                table = document.getElementById('tblallchannel');
                var newTableData = "";
                var fa_fa_trash = "fa fa-trash";
                var tsttrue = "true";
                var style = "color: red";
                $('#lbltotalchannel').text(totalchannel_len);
                for (let i = 0; i < totalchannel_len; i++) {

                    let checkboxvalue = result.data.result[i].isActive;
                    console.log(checkboxvalue);
                    let autoupdate = result.data.result[i].autoupdate;
                    let pid = result.data.result[i].id;
                    let isidentity = result.data.result[i].isidentity;
                    //let tableItem = '<tr style="background-color: white;"><td class="tr_row">' + i + '</td>';
                    let tableItem = '<tr style="background-color: white;">';/*<td class="tr_row">' + i + '</td>';*/
                    tableItem = tableItem + "<td class='tr_row' style='text-align:center;text-align:center'>" + result.data.result[i].channelName + "</td>";
                    if (checkboxvalue == '0') {

                        tableItem = tableItem + '<td><label class="switch"><input id=' + pid + ' onchange="checkedorUncheked(this);"  class="chkEnabled" type = "checkbox"><span class="slider round"></span></label ></td>';
                    }
                    else {

                        tableItem = tableItem + '<td><label class="switch"><input id=' + pid + ' onchange="checkedorUncheked(this);" checked class="chkEnabled" type = "checkbox"><span class="slider round"></span></label ></td>';


                    }
                    if (autoupdate == '0') {

                        tableItem = tableItem + '<td class="tr_row" style="text-align: center">No</td>';

                    }
                    else {
                        tableItem = tableItem + '<td class="tr_row" style="text-align: center">Yes</td>';
                    }
                    if (isidentity == '0') {
                        tableItem = tableItem + '<td class="tr_row" style="text-align: center">No</td>';
                    }
                    else {
                        tableItem = tableItem + '<td class="tr_row" style="text-align: center">Yes</td>';
                    }
                    //tableItem = tableItem + '<td style = "display:none;">' + result.data.resultSet[i].id + '</td>';
                    tableItem = tableItem + '<td style="text-align: center"><a id="delete-row-default' + result.data.result[i].id + '" class="delete-row-default' + result.data.result[i].id + '" onClick="onDelete(' + result.data.result[i].id + ')"><img src="/images/Common UI Assets/Icon-16 _Delete.png" style="cursor:pointer;" /></a></td></tr>';
                    //tableItem = tableItem + '<td><a href="#" onClick="onDelete(' + result.data.resultSet[i].id + ')" ><i class="fa fa-trash" aria-hidden="true" style="color: red"></i></a></td></tr>';
                    newTableData += tableItem;

                }

                $('#tblallchannel').html(newTableData);
                LoadPaging();
            }

            //LoadPaging();
            //$('#tblChannalList').paging({ limit: 5 });
            //$('#tblChannalList').DataTable();
        })
            .catch(function (error) {
                $('#tblChannalList').html("Network Error NO Data Found!").css("text-align", "center");
                Swal.fire({ type: "error", title: error.message.toUpperCase() })
            });
        

    }

    function LoadPaging() {
        $('#tblChannalList').DataTable({
            "paging": true,
            "searching": false,
            "lengthChange": false,
            "bInfo": false,
            "iDisplayLength": 6,
            
        });
        //$('#tblChannalList').DataTable({
        //    "searching": false,
        //    "lengthChange": false,
        //    "bInfo": false,

        //    "iDisplayLength": 6,
        //    "showNEntries": false,
        //    "dom": '<"top"i>rt<"bottom"flp><"clear">',
        //    "language": {
        //        "paginate": {
        //            "previous": "<<",
        //            "next": ">>"
        //        }
        //    }
           
        //});

        //return;
    }



    this.checkedorUncheked = function (e) {

        var item1 = $(e).attr('id');
       
        if ($(e).prop('checked') == true) {

            let channelstatusUpdate = { "isActive": 1 };


            axios.put(allChannel_api + '/' + item1, channelstatusUpdate, authToken).then(function (result) {
                console.log(result);
                if (result.data.isResult == true) {

                    Swal.fire({ type: "Sucess", title: "Sucessfully Activated" });

                }
            });


        }
        else {

            let channelstatusUpdate = { "isActive": 0 };


            axios.put(allChannel_api + '/' + item1, channelstatusUpdate, authToken).then(function (result) {
                console.log(result);
                if (result.data.isResult == true) {

                    Swal.fire({ type: "Sucess", title: "Sucessfully DeActivated" });

                }
            });

        }



    }




    //This Section Work for Custom pagination Only show data using custom page
    //$(document).ready(function () {
    //    axios.get(allChannel_api, common).then(function (result) {
    //        var resultjson = JSON.stringify(result.data.resultSet);
    //        table = document.getElementById('tblallchannel');
    //        var newTableData = "";
    //        var fa_fa_trash = "fa fa-trash";
    //        var tsttrue = "true";
    //        var style = "color: red";

    //        var limit = 10;
    //        var page = 1;
    //        var totalpage = result.data.resultSet.length / limit;
    //        console.log(result.data.resultSet.length);
    //        console.log(totalpage);
    //        // put content in array of arrays
    //        var results = [[]];

    //        var count = 0;
    //        for (let i = 0; i < result.data.resultSet.length; i++) {
    //            count++;

    //            // if we hit page limit, create new page and start count from 0 again
    //            if (count === limit) {
    //                count = 0;
    //                results.push([]); // create new page
    //            }

    //            let tableItem = "<tr><td>" + result.data.resultSet[i].channelName + "</td>";
    //            tableItem = tableItem + '<td style = "display:none;">' + result.data.resultSet[i].id + '</td>';
    //            tableItem = tableItem + '<td><label class="switch"><span class="slider round"></span></label></td>';
    //            tableItem = tableItem + '<td><a href="#" onClick="onDelete(' + result.data.resultSet[i].id + ')" ><i class="fa fa-trash" aria-hidden="true" style="color: red"></i></a></td></tr>';



    //            // grab latest page and push the item into the page
    //            results[results.length - 1].push(tableItem)
    //        }

    //        // return content for the requested page
    //        function getContent(p) {
    //            if (p > totalPages) {
    //                return ''; // empty or something
    //            }
    //            return results[p - 1].join(''); // joining the array of strings into 1 string
    //        }

    //        var totalPages = results.length;

    //        $('#tblallchannel').html(getContent(page));

    //    });


    $('td').click(function (e) {
        var txt = $(e.target).text();
        console.log('hello');
    });

    //Chanel Delete Api Problem
    this.onDelete = function (item) {

        //swal.fire("Here's a message!", "It's pretty, isn't it?");



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
                axios.delete(allChannel_api + '/' + item, authToken).then(function (result) {
                    console.log(result.data);
                    console.log(result.data.result.code);
                    if (result.data.isResult) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );

                        $('#tblChannalList').DataTable().row('.delete-row-default' + item).remove().draw(true);
                        //var myTable = $('#tblChannalList').DataTable();
                        //$('#tblChannalList').on('click', 'tbody tr', function () {

                        //$('.delete-row-default' + item).remove();

                        //$('#tblChannalList').DataTable().row('#tblChannalList tbody tr').delete();
                        //});
                        //$('#tblChannalList')
                        //    .row($(this).parents('tr'))
                        //    .remove()
                        //    .draw();
                        //GetAllChannel();
                    }

                    else {
                        Swal.fire({ type: "warning", title: "Error in Deleting" });
                        //GetAllChannel();
                    }

                });

            }
        });


        //Swal.fire({ type: "info", title: "Sucessfully DeActivated" });





        //if (confirm("Do you Want to Delete?")) {
        //    axios.delete(allChannel_api + '/' + item, authToken).then(function (result) {
        //        console.log(result.data);
        //        console.log(result.data.result.code);
        //        if (result.data.result.code == '9026') {
        //            Swal.fire({ type: "info", title: "Deleted" });
        //            GetAllChannel();
        //        }

        //        else {
        //            Swal.fire({ type: "Error", title: "Error in Deleting" });
        //            GetAllChannel();
        //        }

        //    });
        //}
        //return false;






        // alert(item);
        //if (confirm("Do you Want to Delete?")) {
        //delete -row -default
        //$('#delete-row-default' + item).bootstrap_confirm_delete(
        //    {
        //        callback: function (event) {

        //    }
        //});

        //}
        //return false;
        //
    }
    $("body").on("click", ".channeladd", function (e) {
        let chanelname = $(".channelname").val();
        if (!chanelname) {
            Swal.fire({ type: "info", title: "Channel Required." });
            return;
        }

        $('.dl_chanel').click(function () {
            alert('hello');
        });

        let channelModel = {
            channelName: chanelname,
            isActive: 1,
            autouodate: 1,
            isidentity: 0
        };
        axios
            .post(allChannel_api, channelModel, authToken)
            .then(function (result) {
                console.log(result.data.result.id);
                if (result.data.isResult) {
                    Swal.fire({
                        type: 'success',
                        title: 'Sucessfully Inserted',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    var html = '<tr style="background-color: white;">';//<td style="text-align: center; text-align: center"></td>';
                    html += '<td class="tr_row" style="text-align: center; text-align: center">' + $(".channelname").val() + '</td>';
                    html += '<td><label class="switch"><input id="chkEnabled" checked class="chkEnabled" type="checkbox"><span class="slider round"></span></label ></td>';
                    html += '<td class="tr_row" style="text-align: center; text-align: center">Yes</td>';
                    html += '<td class="tr_row" style="text-align: center; text-align: center">No</td>';
                    //html += 
                    //<td><label class="switch"><input id="chkEnabled" class="chkEnabled" type="checkbox"><span class="slider round"></span></label ></td>
                    //html += + '<td style = "display:none;">' + '1' + '</td>';
                    //html += '<td>' + '1' + '</td>';

                    //tableItem = tableItem + '<td style="text-align: center"><a id="delete-row-default' + result.data.result[i].id + '" class="delete-row-default' + result.data.result[i].id + '" onClick="onDelete(' + result.data.result[i].id + ')"><img src="/images/Common UI Assets/Icon-16 _Delete.png" style="cursor:pointer;" /></a></td></tr>';

                    html += '<td style="text-align: center"><a id="delete-row-default' + result.data.result.id + '" class="delete-row-default' + result.data.result.id + '" onClick="onDelete(' + result.data.result.id + ')"><img src="/images/Common UI Assets/Icon-16 _Delete.png" style="cursor:pointer;" /></a></td></tr>';

                    $('#tblallchannel').prepend(html);

                    return;

                }
            });
        //alert(chanelname);

    });

});
//$('body').on('event', '#tblChannalList', function (event) {
//    //Replace event with the right event, like click or something...
//    $('#tblChannalList').DataTable();
//});



function GetTransactionReport(fromdate_ep, dateTo_ep) {
    let dataSource = [];
    let tbllen;
    axios.get(gettransaction + '?fromDate=' + fromdate_ep + '&toDate=' + dateTo_ep, authToken).then(function (result) {
        
        dataSource=result.data.result.results;
        tbllen = dataSource.length;
        console.log(tbllen);
        if (tbllen > 0) {
            $('#tbl_Transeaction').empty();
            $('#tbl_Transeaction').DataTable({
                searching: false,
                paging: false,
                info: false,
                responsive: true,
                data: dataSource,
                "autoWidth": true,
                
                dom: 'Bfrtip',
                columns: [
                    { data: "processid", title: "Process ID", "width": "10%" },
                    { data: "processname", title: "Process Name", "width": "20%" },
                    { data: "requestdate", title: "Request Date", "width": "10%" },
                    { data: "idtypevalue", title: "ID Type Value", "width": "10%" },
                    { data: "dob", title: "Date of Birth", "width": "10%" },
                    { data: "retailercoderobi", title: "Retailer Code Robi", "width": "10%" },
                    { data: "retailercodeairtel", title: "Retailer Code Airtel", "width": "10%" },
                    { data: "status", title: "Status", "width": "10%" },
                ],
                buttons: [
                    'copy', 'csv', 'excel', 'pdf', 'print'
                ]
            });
        }
        else {
            $('#tbl_Transeaction').empty();
            $('#tbl_Transeaction').html("<b>No Data Found!</b>").css("text-align", "center");
        }

    }).catch(function (error) {
        $('#tbl_Transeaction').html("<b>Network Error NO Data Found!</b>").css("text-align", "center");
        Swal.fire({ type: "error", title: error.message.toUpperCase() })
    });
}

function Epoch(date) {

    return Math.round(new Date(date).getTime() / 1000.0);

}

$(document).ready(function () {

    $("body").on("click", ".btnGetReport", function (e) {



        let fromdate_ep = Epoch($('.txtfromdate').val());
        fromdate_ep = fromdate_ep * 1000;
        let dateTo_ep = Epoch($('.txttodate').val());
        dateTo_ep = dateTo_ep * 1000;

       
        
        GetTransactionReport(fromdate_ep, dateTo_ep);

      

    });
   


});
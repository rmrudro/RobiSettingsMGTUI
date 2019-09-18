

var retailerSubject = new Rx.BehaviorSubject("");
var retSubscriber = retailerSubject.asObservable();

var currentProcess = new Rx.BehaviorSubject("");
var currentProcessObserver = currentProcess.asObservable();

//var lastColor = new Rx.BehaviorSubject("");
//var lastColorSubscriber = lastColor.asObservable();

var sessionId = JSON.parse(localStorage.getItem("session_id"));

var poscode = JSON.parse(localStorage.getItem("poscode"));

var userID = JSON.parse(localStorage.getItem("userID"));
var userName = JSON.parse(localStorage.getItem("username"));


console.log(userName);

//var baseHost = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
var baseHost = 'http://10.101.65.109:8000';

//Headers
const common = {
    headers: {
        //'Accept': 'application/json',
        //'Content-Type': 'application/json' 
        'Content-Type': 'application/json',
        "Access-Control-Allow-Headers": "*"
    }

};

const authToken = {

    headers: {
        'Content-Type': 'application/json',
        
        'token': sessionId,
        'UserId': userID
        //'token': sessionData.sessionToken
    }
};

const authTokenfile = {

    headers: {
        'Content-Type': 'multipart/form-data',
        'token': sessionId,
        'UserId': poscode
        //'token': sessionData.sessionToken
    }
};

//console.log(authToken);

//const authToken = {

//    headers: {
//        'Content-Type': 'application/json',
//        "Access-Control-Allow-Headers": "*",
//        'token': sessionData.sessionToken
//        //'token': sessionData.sessionToken
//    }
//};
//console.log(authToken);

retSubscriber.subscribe(function (x) {
    $(".txtSessionUser").html(x);
});

//Apis
const login_api = baseHost + '/api/v1/account/login';
const allChannel_api = baseHost + '/api/v1/Channel';
const all_Userlist = baseHost + '/api/v1/Users';
const all_RoleList = baseHost + '/api/v1/role';
const all_process = baseHost + '/api/v1/Process';
const app_Settings = baseHost + '/api/v1/AppSetting';
const ad_Settings = baseHost + '/api/v1/AdSetting';

const ftrpackage = baseHost + '/api/v1/FtrPackage';
const allmenu = baseHost + '/api/v1/Menu';
const commisionUpload = baseHost + '/api/v1/Commission';
const sc_Activation_Interval = baseHost + '/api/v1/scActInterv';
const sc_ownership_transfer = baseHost + '/api/v1/scOwnTrans';
const do_NotSimChange = baseHost + '/api/v1/doNotSimChange';

const gettransaction = baseHost + '/api/v1/Activity/GetTransaction';
//Activation Interval
//const ownershipTransfer = baseHost + '/api/v1/ownershipTransfer/ownershipTransfer';
////


$(document).ready(function () {
    adjustFooter();
    getServerMACAddress();

    if (window.location.pathname != "/Login") {
        isVaildSession();
    }


    $(".btnprofilename").html(userName);

    $("body").on("click", ".btn_logout", function (e) {
        localStorage.clear();
        var retUrl = window.location.replace;
        localStorage.setItem("retUrl", retUrl);
        window.location.replace("http://localhost:40160/Login");
        //window.location.replace = "./Login";
        //alert('Hello');
    });



});

function isVaildSession() {
    let sessionData = JSON.parse(localStorage.getItem("sessionData"));
    if (sessionData) {
        retailerSubject.next(sessionData.posCode);
        const authToken = {

            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Headers": "*",
                'token': sessionData.sessionToken
                //'token': sessionData.sessionToken
            }
        };
        //console.log(authToken);
        return true;
    } else {
        Swal.fire({
            title: 'Are You Sure to Logout?',
            text: "Invalid Session!",
            type: 'error',
            showCancelButton: false,
            confirmButtonText: 'Ok'
        }).then(function (result) {
            if (result.value) {
                window.location.href = './Login'
            }
        })
        return false;
    }
}

function getServerMACAddress() {
    $.ajax({
        url: "Home/GetServerMac",
        success: function (mac) {
            if (mac) {
                localStorage.setItem("mac-address", mac);
            } else {
                localStorage.setItem("mac-address", "null");
            }

        }
    });
}

function adjustFooter() {
    //alert($(document).height()+">>>>>>>"+$(window).height());

    if ($(window).height() >= 900) {
        if (window.location.pathname === "/Home") {
            $('footer').css('top', $(document).height()-70+ 'px');
        }
    }
    if ($(window).height() === 657) {
        if (window.location.pathname === "/Home") {
            $('footer').css('top', $(document).height() - 70 + 'px');
        }
    }
    if ($(window).height() === 863) {
        if (window.location.pathname === "/Home") {
            $('footer').css('top', $(document).height() - 70 + 'px');
        }
    }
    if ($(window).height() === 619) {
        if (window.location.pathname === "/Home") {
            $('footer').css('top', $(document).height() - 70 + 'px');
        }
    }
}


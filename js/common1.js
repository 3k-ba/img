var url = window.location.href

var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
var messgeHandle = function (data, parseCallback, showErrorInfo, errorHandle) {

    if (showErrorInfo == null) {
        showErrorInfo = true
    }

    var jsonObj;
    if (isJsonFormat(data)) {
        jsonObj = JSON.parse(data)
    } else {
        jsonObj = data
    }
    var errorCode = jsonObj.errorCode
    var errorMessage = jsonObj.errorMessage

    if (errorCode != 0 && url.indexOf("index.html") != -1) {
        return
    }

    if (errorCode == 1 || errorCode == 8) {
        window.location.href = "index.html"
        return
    }


    if (errorCode != 0 && showErrorInfo == true) {
        alert(errorMessage)
    }

    if (errorCode != 0) {
        errorHandle(errorCode, errorMessage)
        return
    }

    parseCallback(jsonObj.data, errorCode)
}

function isJsonFormat(str) {
    try {
        $.parseJSON(str);
    } catch (e) {
        return false;
    }
    return true;
}

function getAuthToken() {
    return window.LS.get("authToken");
}

function setAuthToken(token) {
    return window.LS.set("authToken", token);
}

function setAccount(account) {
    return window.LS.set("account", JSON.stringify(account));
}

function getAccount() {
    return JSON.parse(window.LS.get("account"));
}

function removeAccount() {
    window.LS.remove("account");
    window.LS.remove("authToken");
}

//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}

//获取url中的参数
function getParam(url, name) {
    var indexOf = url.indexOf("?");
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = url.substr(indexOf + 1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}


function formatDateTime(inputTime) {
    var date = new Date(inputTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
};

var pkgFile;

var packageInfo = {}


// 文件后缀
var fileSuffixName;

function iconUpload(blob, url, data) {
    var oReq = new XMLHttpRequest();
    oReq.open("POST", url, true);
    oReq.onload = function (oEvent) {
        var jsonString = oReq.response;
        data(jsonString)

    };
    oReq.send(blob);
}


function getScreenHeight() {
    return $(window).height();
}

function getScreenWidth() {
    return $(window).width();
}

function isPhoneNo(phone) {
    var pattern = /^1[34578]\d{9}$/;
    return pattern.test(phone);
}

function fileUpload(url, blob, respData) {
    var oReq = new XMLHttpRequest();
    oReq.open("POST", url, true);
    oReq.onload = function (oEvent) {
        var data = oReq.response;
        respData(data)

    };
    oReq.send(blob);
}

function isSafari() {
    if (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) {
        return true
    }
    return false
}

function isQQBrowser() {
    var agent = navigator.userAgent.toLowerCase();
    //手机QQ浏览器
    // if (agent.indexOf("mqqbrowser") > -1) {
    //     return true
    // }
    // Android QQ内置浏览器
    if(agent.indexOf(' qq')>-1){
        return true;
    }

    // IOS QQ内置浏览器
    if (agent.indexOf("iphone") > -1 || agent.indexOf('mac') > -1) {
        if(agent.indexOf(' qq') > -1){
            return true;
        }
    }
    return false
}

function isChromeBrowser() {
    var agent = navigator.userAgent.toLowerCase();
    if (agent.indexOf("chrome") > -1 || agent.indexOf("crios") > -1) {
        return true
    }
    return false;
}

function isUCBrowser() {
    var agent = navigator.userAgent.toLowerCase();
    if (agent.indexOf("ucbrowser") > -1) {
        return true
    }
    return false;
}

function isFirefoxBrowser() {
    var agent = navigator.userAgent.toLowerCase();
    if (agent.indexOf("firefox") > -1 || agent.indexOf("fxios") > -1) {
        return true
    }
    return false;
}

function isPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ['Android', 'iPhone',
        'SymbianOS', 'Windows Phone',
        'iPad', 'iPod'
    ];
    var flag = true;
    for (var i = 0; i < Agents.length; i++) {
        if (userAgentInfo.indexOf(Agents[i]) != -1) {
            flag = false;
            break;
        }
    }
    return flag;
}

jQuery(function () {
    var url = window.location.href
    var qrcode = jQuery('#qrcode').qrcode(url);
    var canvas = qrcode.find('canvas').get(0);
    $('.qrcode img').attr('src', canvas.toDataURL('image/jpg'))
})

var url = window.location.href
var shortLink = url.substr((url.lastIndexOf("/") + 1), 4)
var osName;
if (isAndroid) {
    $("#page_Android").show();
    document.title = $("#Android_appName").text()
    osName = "Android";
    $("#untrusted").hide()
} else if (isiOS) {
    $("#page_iOS").show();
    document.title = $("#iOS_appName").text()
    osName = "iOS";
}
 else if (isPC) {
    $("#page_PC").show();
    document.title = $("#PC_appName").text()
    osName = "PC";
}else {
    $("div[link='" + shortLink + "']").show();
    document.title = $("." + shortLink + "_appName").text()
    osName=$("div[link='"+shortLink+"']").attr("osName")
    if (osName=="Android"){
        $("#actions").show()
    }else{
        $("#actions").hide()
    }
    $("#footer").hide()
}


if (is_weixin()) {
    $(".weixin-tip").css("height", getScreenHeight());
    $(".weixin-tip").show();
    $("#" + osName + "_tips").show()
}

if (isiOS && (isQQBrowser()||isUCBrowser()||isFirefoxBrowser())) {
    $(".weixin-tip").css("height", getScreenHeight());
    $(".weixin-tip").show();
    $("#" + osName + "_tips").show()
}

function is_weixin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}
document.writeln("<div style=\"display:none\"><script type=\"text/javascript\" src=\"https://v1.cnzz.com/z_stat.php?id=1278083952&web_id=1278083952\"></script></div>");
document.writeln("<script type=\"text/javascript\" src=\"https://api.lldyy.net/gg/foot.js\"></script>");


$("#ads").hide()
// function ads_click() {
//     var adsId=$("#adsId").val()
//     $.post('https://nzyzt.com/ads/getLinkUrl/'+adsId,function(data){
//         window.location.href=data.data
//     })
// }
// if(!isPC()){
//     $.post('https://nzyzt.com/ads/get/available',function(data){
//         var url=data.data.url
//         if (url!=null&&url!=""){
//             $("#ads").show()
//             $("#ads_img").attr('src',data.data.url);
//             $("#adsId").val(data.data.id)
//         }
//
//     })
// }

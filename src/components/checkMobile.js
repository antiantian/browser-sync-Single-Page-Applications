/**
 * 
 * @authors zcy (1366969408@qq.com)
 * @date    2017-12-25 10:08:36
 * @version $Id$
 */


 function checkmobile(){
     var flag = false;  
    var agent = navigator.userAgent.toLowerCase();  
    var keywords = [ "android", "iphone", "ipod", "ipad", "windows phone", "mqqbrowser" ];  
    
    //排除 Windows 桌面系统  
    if (!(agent.indexOf("windows nt") > -1) || (agent.indexOf("windows nt") > -1 && agent.indexOf("compatible; msie 9.0;") > -1)) {  
        //排除苹果桌面系统  
        if (!(agent.indexOf("windows nt") > -1) && !agent.indexOf("macintosh") > -1 ) {  
            for (var item in keywords) {  
                if (agent.indexOf(item) > -1 ) {  
                    flag = true;  
                    break;  
                }  
            }  
        }  
    }  
    return flag;
 }


 function wzw(){}
//浏览器相关信息
//android webview 需要app进行支持，Android web view初始化时，在navigator中添加标识 
wzw.prototype={
        versions:function(){
            var u = navigator.userAgent, app = navigator.appVersion;
            return {
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                iosView: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                weixin: u.indexOf('MicroMessenger') > -1 || u.indexOf('micromessenger') > -1, //是否微信 （2015-01-22新增）
                qq: u.indexOf('QQ')>-1 || u.indexOf('qq')>-1, //是否QQ
                uc: u.indexOf('UCBrowser') > -1 || u.indexOf('uc') > -1,
                androidView: u.indexOf('ANDROIDWEBVIEW')>-1//需要app端配合,在userAgent中加入标识
            };
        },
        language:(navigator.browserLanguage || navigator.language).toLowerCase(),
        appVersion:navigator.appVersion,
        isIOS:function(){
            if (/iPhone|iPod|iPad/.test(navigator.userAgent)) { return true;}
            else {return false;}
        },
        isAndroid:function(){
            if (/(Android)/i.test(navigator.userAgent)) {return true}
            else{return false}
        },
        isIOSView:function(){
            var standalone = window.navigator.standalone,
            userAgent = window.navigator.userAgent.toLowerCase(),
            safari = /Safari/.test( userAgent );
            if(!standalone && !safari){
                return true;
            }else{
            return false;
            }
        },
        isMobile:function(){
            var versions=this.versions();
            if(versions.mobile||versions.android||versions.ios){ return true }
            else{return false}
        },
        isPc:function(){
            var versions=this.versions();
            if(versions.mobile||versions.android||versions.ios){ return false }
            else{return true}
        }
    }


function connectWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge)
    } else {
        document.addEventListener(
            'WebViewJavascriptBridgeReady'
            , function() {
                callback(WebViewJavascriptBridge)
            },
            false
        );
    }
    //iOS使用
    if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
    if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)


}
export {wzw,checkmobile,connectWebViewJavascriptBridge}
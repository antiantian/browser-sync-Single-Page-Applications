/**
 * 
 * @authors zcy (1366969408@qq.com)
 * @date    2017-12-22 14:42:11
 * @version $Id$
 */

  var imgUrl = "http://imgsrc.baidu.com/imgad/pic/item/9345d688d43f87940bef6a33d81b0ef41bd53a9e.jpg";  //注意必须是绝对路径

       var lineLink = "https://www.zhihu.com/question/23532498";   //同样，必须是绝对路径
       var descContent = '最轻便的微电台精选，天天更新，你听或是不听，我都这里等着你。'; //分享给朋友或朋友圈时的文字简介
       var shareTitle = '微信电台精选';  //分享title
       var appid = ''; //apiID，可留空
        
       function shareFriend() {
           WeixinJSBridge.invoke('sendAppMessage',{
               "appid": appid,
               "img_url": imgUrl,
               "img_width": "200",
               "img_height": "200",
               "link": lineLink,
               "desc": descContent,
               "title": shareTitle
           }, function(res) {
               //_report('send_msg', res.err_msg);
           })
       }
       function shareTimeline() {
           WeixinJSBridge.invoke('shareTimeline',{
               "img_url": imgUrl,
               "img_width": "200",
               "img_height": "200",
               "link": lineLink,
               "desc": descContent,
               "title": shareTitle
           }, function(res) {
                  //_report('timeline', res.err_msg);
           });
       }
       function shareWeibo() {
           WeixinJSBridge.invoke('shareWeibo',{
               "content": descContent,
               "url": lineLink,
           }, function(res) {
               //_report('weibo', res.err_msg);
           });
       }
   
       // 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
       document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
     
           // 发送给好友
           WeixinJSBridge.on('menu:share:appmessage', function(argv){
       
               shareFriend();
           });
           // 分享到朋友圈
           WeixinJSBridge.on('menu:share:timeline', function(argv){
               shareTimeline();
           });
           // 分享到微博
           WeixinJSBridge.on('menu:share:weibo', function(argv){
               shareWeibo();
           });
       }, false);
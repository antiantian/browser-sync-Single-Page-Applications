/**
 * 
 * @authors zcy (1366969408@qq.com)
 * @date    2018-01-04 15:10:21
 * @version $Id$
 */
//https://mp.weixin.qq.com/debug/
const  wxShare = function(shareObject){
	             // 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
                 document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
                    alert("wxin")
                      wx.checkJsApi({
	                      jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
	                      success: function(res) {
	                         alert(res)
	                         // 以键值对的形式返回，可用的api值true，不可用为false
	                         // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
	                      }
	                  });
	                  wx.config({  
	                    debug: true,   
	                    //调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才印。
	                    appId: 'wxbf4d30e7c648ae3e', // 必填，公众号的唯一标识
	                    timestamp:'' , // 必填，生成签名的时间戳 9361ca92ef7404eeefaa9d1a7fedfb49
	                    nonceStr: '', // 必填，生成签名的随机串
	                    signature: 'b8e8c993d10a9512dab5026ec17ad240a1c2b222',// 必填，签名，见附录1
	                    jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone'] 
	                    // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	                 });
	                 wx.onMenuShareTimeline({ //朋友圈
	                      title:shareObject.title, // 分享标题
	                      link: shareObject.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
	                      imgUrl:shareObject.imgUrl, // 分享图标
	                      success:shareObject.success,
	                      cancel: shareObject.cancel
	                  });
	                  wx.onMenuShareAppMessage({//朋友
	                    title:shareObject.title, 
	                    desc: shareObject.desc, 
	                    link: shareObject.link, 
	                    imgUrl:shareObject.imgUrl,
	                    type: 'link', // 分享类型,music、video或link，不填默认为link
	                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
	                    success:shareObject.success,
	                    cancel: shareObject.cancel
	                  });
	                  wx.onMenuShareQQ({
	                    title:shareObject.title, 
	                    desc: shareObject.desc, 
	                    link: shareObject.link, 
	                    imgUrl:shareObject.imgUrl,
	                    success:shareObject.success,
	                    cancel: shareObject.cancel
	                  });
	                  wx.onMenuShareWeibo({
	                    title:shareObject.title, 
	                    desc: shareObject.desc, 
	                    link: shareObject.link, 
	                    imgUrl:shareObject.imgUrl,
	                    success:shareObject.success,
	                    cancel: shareObject.cancel
	                  });
	                  wx.onMenuShareQZone({
	                    title:shareObject.title, 
	                    desc: shareObject.desc, 
	                    link: shareObject.link, 
	                    imgUrl:shareObject.imgUrl,
	                    success:shareObject.success,
	                    cancel: shareObject.cancel
	                  });
                 })
	             



}
module.exports = {
 wxShare,
}

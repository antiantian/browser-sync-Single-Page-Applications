/**
 * 
 * @authors zcy (1366969408@qq.com)
 * @date    2017-12-28 10:30:23
 * @version $Id$
 */

var C = function(t, e) {
			var i = t.navigator.userAgent;
			return {
				isMobile: function() {  
					var t = this;
					return t.isAndroid() || t.isIOS() || /AppleWebKit.*Mobile/i.test(i) || /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(i)
				},
				isAndroid: function() {
					return !!i.match(/Android/i)
				},
				isIOS: function() {
					return !!i.match(/iPhone|iPad|iPod/i)
				},
				isIOS9: function() {
					var t = this;
					return !!(t.isIOS() && t.compareVersion(t.returnSysVersion(), "9.1") >= 0)
				},
				isMobileQQ: function() {
					return /QQ\/([\d\.]+)/.test(i) || /(iPad|iPhone|iPod).*? (IPad)?QQ\/([\d\.]+)/.test(i) || /\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/.test(i)
				},
				isWx: function() {
					return !!i.match(/micromessenger/i)
				},
				isWeixin: function() {
					return i.indexOf('MicroMessenger') > -1 || i.indexOf('micromessenger') > -1
				},
				isAndroidChrome: function() {
					var t = this;
					return !(!i.match(/Chrome\/([\d.]+)/) && !i.match(/CriOS\/([\d.]+)/) || !t.isAndroid())
				},
				isUlspecialBrower: function() {
					var t = this,
						e = ["BaiduBrowser"];
					return e.indexOf(t.returnBrowser().split("|")[0]) >= 0
				},
				isTimeoutSpecialBrower: function() {
					var t = this,
						e = ["UCBrowser", "BaiduBrowser", "Weibo"];
					return !!(e.indexOf(t.returnBrowser().split("|")[0]) >= 0 || t.isMobileQQ())
				},
				isguideSpecialBrower: function() {
					var t = this,
						e = ["BaiduBrowser", "Weibo"];
					return !!(e.indexOf(t.returnBrowser().split("|")[0]) >= 0 || t.isWx())
				},
				isAppLinkDevice: function() {
					var t = this;
					return "ChromeBrowser" === t.returnBrowser().split("|")[0] && /Chrome\/([\w.]+)|CriOS\/([\d.]+)/i.exec(i)[1].split(".")[0] >= 51
				},
				returnSysVersion: function() {
					var t = this,
						e = [],
						r = i.match(/(Android);?[\s\/]+([\d.]+)?/),
						n = i.match(/(iPad).*OS\s([\d_]+)/),
						o = !n && i.match(/(iPhone\sOS)\s([\d_|.]+)/);
					return t.isIOS() && o && !n ? e.push(o[2].replace(/_/g, ".").split(".")[0], o[2].replace(/_/g, ".").split(".")[1]) : t.isIOS() && !o && n ? e.push(n[2].replace(/_/g, ".").split(".")[0], n[2].replace(/_/g, ".").split(".")[1]) : t.isAndroid && r && e.push(r[2].replace(/_/g, ".").split(".")[0], r[2].replace(/_/g, ".").split(".")[1]), e.join(".")
				},
				compareVersion: function(t, e) {
					var i = t.split("."),
						r = e.split(".");
					if (t === e) return 0;
					for (var n = 0; n < i.length; n++) {
						var o = parseInt(i[n]);
						if (!r[n]) return 1;
						var a = parseInt(r[n]);
						if (o < a) return -1;
						if (o > a) return 1
					}
					return -1
				},
				returnBrowser: function() {
					var t, e = "",
						r = this;
					if (/baidubrowser\/([\w.]+)/i.exec(i)) e = "other";
					else if (/Firefox\/([\w.]+)|FxiOS\/([\w.]+)/i.exec(i)) t = /Firefox\/([\w.]+)|FxiOS\/([\w.]+)/i.exec(i), e = "Firefox|" + t[1];
					else if (/Weibo__([\w.]+)/i.exec(i)) t = /Weibo__([\w.]{3})/i.exec(i), e = "Weibo|" + t[1].replace(/_/g, ".");
					else if (r.isWx()) {
						t = /MicroMessenger\/([\w.]+)/i.exec(i);
						var n = t[1].replace(/_/g, "."),
							o = /(\d+\.\d+\.\d+\.\d+)/.exec(n);
						e = "wechat|" + n, o && (e = "wechat|" + o[1])
					} else if (/QQ\/([\w.]+)/i.exec(i)) t = /QQ\/([\w.]+)/i.exec(i), e = "qqMobile|" + t[1];
					else if (/MQQBrowser\/([\w.]+)/i.exec(i)) t = /MQQBrowser\/([\w.]+)/i.exec(i), e = "QQBrowser|" + t[1];
					else if (/UCBrowser\/([\w.]+)/i.exec(i)) t = /UCBrowser\/([\w.]+)/i.exec(i), e = "UCBrowser|" + t[1];
					else if (/miuibrowser\/([\w.]+)/i.exec(i)) t = /miuibrowser\/([\w.]+)/i.exec(i), e = "miuiBrowser|" + t[1];
					else if (/Chrome\/([\w.]+)|CriOS\/([\d.]+)/i.exec(i)) t = /Chrome\/([\w.]+)|CriOS\/([\d.]+)/i.exec(i), e = "ChromeBrowser|" + t[1];
					else if (/Safari\/([\w.]+)/i.exec(i) && /Version/i.test(i)) {
						t = /Safari\/([\w.]+)/i.exec(i) && /Version/i.test(i);
						var a = /Version\/([\w.]+)/i.exec(i);
						e = "Safari|" + a[1]
					} else e = /(ipad|iphone).* applewebkit\/.* mobile/i.test(i) ? "Safari" : "other";
					return e
				}
			}
		}(window, document)
export{
  C
};
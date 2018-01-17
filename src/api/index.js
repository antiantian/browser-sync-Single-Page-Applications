/**
 * Created by qianqudao
 * 建议:所有接口名称全小写
 */
const baseURL='mockapi'
const v1_activity='v1_activity'
const v1_detail="v1_detail"

console.log(process.env.NODE_ENV)
export default {
	//用户模块接口
	login:          baseURL+'/index/login', 			// 登录接口
	loginout: 	    baseURL+'/user/signOut',			// 用户注销
	getuserinfo:    baseURL+'/user/getUserInfo',		// 获取用户信息
	getimgcode:     baseURL+'/common/jCaptcha',			//获到验证码和较验验证码
	sendsmscode:  	baseURL+'/common/sendSMSCode',		//发送短信验证码
	register:       baseURL+'/user/register',			//用户注册
	investlist:     baseURL+'/product/investlist',		//获取产品列表
	investDetail:   baseURL+'/product/investDetail',	//获取产品详情
	integralDetail: baseURL+'/memberCenter/integralDetail',  //积分详情
	gift:           baseURL+'/memberCenter/gift',       //我的奖品
	coupon:         baseURL+'/memberCenter/coupon',     //优惠券
    getStatisticsList1: v1_activity+'/api/bg/resource/getlist',//排行榜列表
    getStatisticsList: v1_detail+'/release/queryById', 
     contentNews:v1_detail+'/release/queryById',//文章详情
    contentVideo:v1_detail+'/release/queryVideoById',//视频详情
}


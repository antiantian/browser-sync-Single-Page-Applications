import Qs from 'qs'
/*
// http response 拦截器
axios.defaults.transformResponse=[
    function(data) {
      let _data = new Object()
      if(typeof data=='string'){
        _data =JSON.parse(data)
      }else{
        _data = data
      }
      return _data;
    }
  ];
 // http request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers['X-UserId']="qianquduo-admin/pc/v0.1"
    if(localStorage.loginToken){
       config.headers.Authorization = localStorage.loginToken;
       config.headers['X-Token'] = localStorage.loginToken;
    }
    
    return config;
  },
  err => {
    return Promise.reject(err);
  }); 
*/
export default{
	transformRequest: [
		function(data) {
			//为了避免qs格式化时对内层对象的格式化先把内层的对象转为
			//data.strSQL = base64encode(data.strSQL);
			//由于使用的form-data传数据所以要格式化
			// data = Qs.stringify(data);
			// console.log(data)
			// return data;
			//为了避免qs格式化时对内层对象的格式化先把内层的对象转为
              data = JSON.stringify(data);
            //由于使用的form-data传数据所以要格式化
            return data;
		}
	],
	transformResponse: [
		function(data) {
			let _data = new Object()
			if(typeof data=='string'){
				_data =JSON.parse(data)
			}else{
				_data = data
			}
			return _data;
		}
	],
	headers: {
			'Content-Type': 'application/json;charset=utf-8',
			'X-Requested-With': 'XMLHttpRequest',
			'appId': 'PC'
        		 //'Channel': 'PC'   axios.defaults.headers.post['Content-Type'] = '' application/x-www-form-urlencoded;charset=utf-8;
	},

	params: {
		
	},
    
	paramsSerializer: function(params) {
		return Qs.stringify(params)
	},
	timeout: 5000,

	emulateJSON:true,

    withCredentials: false, // default
	//Access-Control-Allow-Credentials: true
	//withCredentials: true,


	responseType: 'json', // default
    

	//将upload事件注释掉，防止跨域状态下发起option请求

	// onUploadProgress: function(progressEvent) {
	// 	// Do whatever you want with the native progress event
	// },


	// onDownloadProgress: function(progressEvent) {
	// 	// Do whatever you want with the native progress event
	// },


	maxContentLength: 2000,


	validateStatus: function(status) {
		return status >= 200 && status < 300; // default
	},


	maxRedirects: 5, // default
}



//axios.defaults.baseURL = 'http://192.168.1.115:8083';  //
// axios.defaults.transformRequest=[
//     function(data) {
//       //为了避免qs格式化时对内层对象的格式化先把内层的对象转为
//       //data.strSQL = base64encode(data.strSQL);
//       //由于使用的form-data传数据所以要格式化
//       data = Qs.stringify(data);
//       return data;
//     }
//   ]
// axios.defaults.transformResponse=[
//     function(data) {
//       let _data = new Object()
//       if(typeof data=='string'){
//         _data =JSON.parse(data)
//       }else{
//         _data = data
//       }
//       return _data;
//     }
//   ];
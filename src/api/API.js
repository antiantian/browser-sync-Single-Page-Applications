import axios from 'axios'
import config from './config'


// http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     if (store.state.token) {
//       config.headers.Authorization = `token ${store.state.token}`;
//     }
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   });

// http response 拦截器
// axios.interceptors.response.use(
//   response => {
//       return response.data;
//   },
//   error => {
//       if (error.response) {
//           switch (error.response.status) {
//               case 401:
//                   // 401 清除token信息并跳转到登录页面
//                   store.commit(types.LOGOUT);
//                   router.replace({
//                       path: 'login',
//                       query: {redirect: router.currentRoute.fullPath}
//                   })
//           }
//       }
//       // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
//       return Promise.reject(error.response.data)
//   });

// axios(config);
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
class API {
    constructor () {
        this.config = config;
    }
  	//获取已授权列表
  	get (param) {
  		config.data = param.param;
  		return axios.post(param.api,{},config);
  	}
  	//添加授权
  	post (param) {
  		config.data = param.param;
  		return axios.post(param.api,{},config);
  	}
  	uploadImg (params) {
        let ft = new FormData();
      for(var key in params.param){
            ft.append(key, params.param[key]);
        }
      let cfg = Object.assign({}, {
            baseURL: config.baseURL,
            headers: config.headers,
            timeout: config.timeout,
            onUploadProgress (e) {
                if( e.lengthComputable ){
                    let per = Math.floor( 100 * e.loaded / e.total );
                    params.onUploadProgress && params.onUploadProgress(per, e);
                }
            }
      });
        return axios.post(params.api, ft, cfg);
    }
}
export default API;

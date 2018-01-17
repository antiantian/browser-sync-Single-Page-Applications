import App from './App.vue';
import Vue from 'vue';
import router from './router/router.js';
import API from './api/API';
const api = new API();

Vue.prototype.api = api;

Vue.prototype.GoPage = function(name){
	  this.$router.push({name:name})
}
Vue.prototype.testIOS = function(name){
	 
}
Vue.prototype.testAndroid = function(name){
	 
}
Vue.prototype.changeTypes = function(mess){
	   this.messType=mess
       alert(this.messType)
}
Vue.prototype.loadingDetails = function(obj){
	 this.onjectDetail=obj
     console.log(typeof obj)
     console.log(obj)
     console.log(this.onjectDetail)
}
const newDetails = new Vue({
  el:'#app',
  router,
  render:function (parm) {
    return parm(App)
  }
});

window.newDetails = newDetails
 

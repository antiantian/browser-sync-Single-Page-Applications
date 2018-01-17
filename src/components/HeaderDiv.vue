<template>
	  <header>
	     <router-link :to="path"  v-if="!goother && path" class="iconfont prePage">&#xe606;</router-link>
	     <a href='javascript:history.go(-1);' v-if="goback" class="iconfont prePage">&#xe606;</a>
	     <a :href='path' v-if="goother" class="iconfont prePage">&#xe606;</a>
	     <p>{{message}}</p>
	     <router-link to="/login" v-if="rightCon" class="iconfont navRight nologin">&#xe65a;</router-link>
	     <i class="iconfont navRight headPhone nologin" v-if="headPhone">&#xe60c;</i>
	     <i class="navRight navRT today" v-if="rightToday">今天</i>
	     <span class="navRight navRT rulesBtn" v-if="rulesBtn">规则</span>
	   </header>
</template>
<script>

export default {
        name:'headerDiv',
	    components:{
        
	    },
		mounted () {
			// this.clicktoggle();
			// console.log(this.rightCon)
			// this.phone();
		},
	    methods: {
	      
	    },
	    created() {
	     // 组件创建完后获取数据，
	     // 此时 data 已经被 observed 了
	    
	    },
	    watch: {
	     // 如果路由有变化，会再次执行该方法
	     //"$route": "fetchDate"
	    },
	    props:['message','path','rightCon','goback','headPhone','rulesBtn','rightToday','goother']
}
</script>

<style>
</style>

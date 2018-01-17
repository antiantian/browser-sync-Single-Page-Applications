<template>
  <div class="app">
    <transition name="slide-fade" model="out-in">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script type="text/ecmascript-6">
  import Tips from './components/tips.vue'
  import apis from './api'
  export default{
    name:'app',
    components:{
      Tips
    },
    data:function () {
      return {
           datalist:[]
      }
    },
    mounted(){
   
         this.StatisticsList();

      },
    methods:{
       StatisticsList: function(){
            var that=this;
            let params = {
                api: apis.getStatisticsList,
                param: {
                   "resourceId":3629
                }
            };
            this.api.post(params)
            .then(function (response) {
              
              if(response.data.code===0){

                       alert(response.data.info)
                       that.datalist=response.data.data.list
              }else{
                 alert(response.data.info);
              }
            })
        .catch(function (error) {
           alert(error);
        });
      },
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
  @import "./static/css/base.less";
</style>


<style scoped rel="stylesheet/less" lang="less">
.app{


  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all 0.5s ease 0.2s;
    transform: translateX(0);
    opacity: 1;
  }
  .slide-fade-leave-active {
    transition: all 0.5s ease;
    transform: translateY(70px);
    opacity: 0;
  }

  .slide-fade-enter{
    transform: translateX(-70px);
    opacity: 0;
  }
  .slide-fade-leave{
    transform: translateY(0);
  }

}
</style>
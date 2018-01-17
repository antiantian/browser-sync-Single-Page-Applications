<template>
    <div>
      <a class="box_S app_fixed">
	    <div class="leftSide">
	      <div class="img logo"></div>
	      <h3 class="title">一点资讯</h3>
	      <h4 class="subTitle">为你私人定制的资讯客户端</h4>
	    </div>
	    <span class="greenBtn">立即打开</span>
	  </a>
    </div>
</template>

<script type="ecmascript-6">
    import { C } from 'assets/mobileJude'
	export default {
	   data(){
	      return(
	         {
	           isMobile:C.isMobile()
	         }
	      )
	   },
	   mounted(){
	     console.log(C.isMobile()) 
	   }
	}

</script>

<style rel="stylesheet" scoped>
     
</style>
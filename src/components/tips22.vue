<template>
  <div class="tips">
      <header-div v-if="!appType" message="详情" path="/investlist"></header-div>
      <div :class="['fixTop','fixObjectBottom',{'fixTopNone':appType}]">
        <div v-if="!titlename" class="mid_con filmAnnounce">
          <p>作为曾经中国篮球的希望之星，高尚因近年在广东队表现平庸，最终被球队租赁给了青岛队。来到“新东家”，一心想证明自己的高尚，一度交出了不错的场上数据。然而，随着联赛的深入，高尚的短板也逐渐凸显，种种迹象表明，当初被青岛队寄于厚望的高尚，目前正渐浙失去主帅巩晓彬的信任……
          </p>
          <p>作为广东队中生代球员，高尚在广东效力长达五年，这期间，他经历杜锋和尤纳斯两任主教练，但均没有得到重用，出场时间更是逐渐被压缩。去年总决赛期间，高尚被杜锋弃用；今年全运会期间，高尚被尤纳斯死死摁在板凳上。广东队把高尚租借给青岛队，也让迟迟不得志的高尚，终于有了证明自己的机会。青岛队主帅巩晓彬也给予了他充分展示自己能力的平台，出场时间从上赛季在广东的场均14.2分钟，上升到如今的29.4分钟。而实际上，高尚在赛季初，也的确打出了一些高光表现。
          </p>
          <img src="static/images/banner0.jpg" />
          <p>高尚来到青岛男篮后，主帅巩晓彬一度将其视作本土核心使用，也给足了高尚出场时间和出手权。然而，随着联赛的推进，高尚在进攻效率和防守端作用上，都不太令巩晓彬满意。近五场比赛，高尚在场上的表现非常糟糕，客场战新疆，高尚出场20分钟，交出0分2板的成绩单；主场战八一男篮，他出场21分钟得到7分1失误；与广厦一役，高尚在16分钟时间里，只有4分2扳进账；客场对阵江苏，23分钟时间里，得分再次吞蛋；在青岛队客场战胜三外援同曦队的那场比赛中，巩晓彬只让高尚打了4分钟，场上数据均为“0”。
          </p>
          <p>近五场比赛，高尚在场上完全迷失了自己，其三分球更是7投1中，命中率仅为15%。曾经14轮首发的高尚，近来其首发位置已渐渐被人取代。而高尚之所以在巩晓彬面前渐渐失宠，除了其进攻端效率低下外，高尚过往在防守上的短板被暴露无遗。过去的几个赛季，高尚在广东队被置疑得最多的就是他的防守，这也是导致他得不到几任教练重用的主要原因。来到青岛男篮后，高尚一心想在进攻端证明自己，从而更是忽略了自己的防守，对一个优秀的篮球运动员而言，攻强守弱显然不是正确的打球方式，更不会长期获得主帅的信任。</p>
          <p>曾几何时，许多人认为高尚在广东队的低迷，是因为主帅杜锋有意打压，不给他展示自己才能的机会。如今看来，事情恐怕远非那么简单。离开了杜锋和尤纳斯的怀抱，高尚在“新东家”同样面临着被弃用的可能。看来，许多事情还是得多从自身找原因……
            本文为一点号作者原创，未经授权不得转载</p>
        </div>
        <p v-if="titlename"><b>我是外部事件</b> {{ titlename }}</p>
        <div class="mid_con filmAnnounce" id="detailsInner"></div>
      </div>
      <p>{{ message }}</p>
      <button v-on:click="reverseMessage">反转字符串</button>
      <div id="show">
      </div>
        <button id="enter4" v-if="isIOS" onclick="testiOSClick2()">调用iOS-Native</button>
      <button id="enter3" v-if="isAndroid" onclick="testClick1()">调用android</button>
      <div id="show3"></div>
  </div>
</template>

<script>
    import headerDiv from './HeaderDiv.vue'

    import {wzw,checkmobile,connectWebViewJavascriptBridge} from  './checkMobile'
   export default {
      name:'tips',    
      components:{
        headerDiv 
      },
    
     data(){
      return(
              {
          message: 'Runoob!',
          messType:null,
          onjectDetail:{},
          isIOS:false,
          isAndroid:false,
              }
        )
     },
     computed:{
        titlename:function(){
           return this.onjectDetail?this.onjectDetail.title:null
        },
        details:function(){
          return this.onjectDetail?this.onjectDetail.details:null
        },
        appType:function(){

            return this.messType||null
        }
     },
    methods: {
      setAppType:function(mess){
          this.changeTypes(mess); 
          console.log(this.messType)
      },
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      },
      renderDetails:function(obj){
          this.loadingDetails(obj)
          
          this.detailTranslate()
      },
        detailTranslate:function(){
             document.getElementById("detailsInner").innerHTML = this.onjectDetail.details;
        },
        testiOSClick2:function(){
           this.testIOS()
        }, 
        testClick1:function(){   
          this.testAndroid()
        }
    },
      mounted(){
        var a= new wzw();
        this.isMobile=a.isMobile();
        this.isAndroid=a.isAndroid();
        this.isIOS=a.isIOS();
        console.log(navigator.userAgent)
      },
  }
</script>

<style scoped rel="stylesheet/less" lang="less">
  .tips{
    width: 100%;
  }
</style>

 
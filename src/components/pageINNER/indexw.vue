<template>
  <div>
     <div class="middleContent   fixBottom">
        <header class="mid_con" >
		    <h1 class="chuangwei_title">{{dataNotice.title}}</h1>
		    <div class="chuangwei_info">  
		        <span>{{dataNotice.contentAuthor?dataNotice.contentAuthor:'星火财经'}}</span>
		        <span class="times">{{transTime(dataNotice.createDate)}}</span>
		    </div>
		</header>
		<article>
		    <div  class="mid_con borderB15" >
			    <div id="chuangwei_content" :style="{height:(isMobile&&isHideNews)?'300px':'auto'}">
			       <div id="chuangwei_content_inner">
			             {{dataNotice.content}}    
			       </div>
	               <div v-if="(isMobile&&isHideNews)" class="unflod_field_mask" @click="openAllnews">
	                    <p><span>展开剩余92%</span></p>
                       <!--<p class="arrowP"><span class="arrowTop"></span><span class="arrowBot"></span></p>-->
	               </div>
			    </div>
			    <div class="openAPP box_S radiushalf"  @click="openApp">打开星火财经App，长文体验更佳</div>
		    </div>
		    <div class="mid_con borderB15">
               <div class="commonTitle"><p>相关推荐</p></div>
               <div class="relative_con" id="relative_con">
                  <div v-for="item in relativeData" class="clearfix box">
                    <router-link :to="'/firestart/newDetails/'+item.resourceId">
                     <div class="right" v-if="item.coverImg">
                        <img class="radius13" :src="item.coverImg" />
                     </div>
                     <div class="left">
                        <p class="titles line-clamp-3">{{item.title}}</p>
                        <p class="messages">
                          <span class="times">
                            {{fromTime(item.createTime)}} 
                            
                          </span>
                          <span class="command">{{item.comments?item.comments:0}}</span>
                        </p>
                     </div>
                     </router-link>    
                  </div>
               </div>
		    </div>
		    <div class="mid_con">
               <div class="commonTitle"><p>热门评论</p><span class="more">更多</span></div>
               <div class="command_con" id="command_con">
                  <div class="nocomand" v-if="(!commandData||commandData.length<=0)">暂无评论内容</div>
                  <div v-for="item in commandData" class="clearfix box">
                     <div class="left">
                        <img class="radius50" :src="item.src?item.src:'/static/images/initHead.png'" />
                     </div>
                     <div class="right">
                        <div class="messages">
                           <p class="user">{{item.customerAccount}}</p>
                           <p class="count">{{item.likes}}</p>
                           <p class="times">{{fromTime(item.createTime)}}</p>
                        </div>
                        <p class="command">{{item.comment}}</p>
                     </div> 
                  </div>
               </div>
               <div class="openAPP box_S radiushalf"  @click="openApp">打开星火财经App，查看更多精彩评论</div>
		    </div>
		    
		</article>
	 </div>
	 <open-app  v-if="isMobile" v-on:openapp="openApp"></open-app>
  </div>
</template>

<script>
//isIOS,isAndroid,isMobile
    import moment from 'moment';
    import apis from '../../api'
    import openApp from '../commonTon/openApp.vue'
    import {wxShare} from '../assets/wxShare'
    import comQuery from '../assets/Query'
	export default {
	    components:{
	      openApp
	    },
	    data(){
	      return(
	        {  
            dynamicSegment: '',
	          isHideNews:true,
	          relativeData:[
		          {   
                   resourceId:'1',
                   title:"保姆纵火案庭审中断背后：律师申请消防员出庭未果",
                   createTime:"2018-01-05 16:43:13",
                   likes:200,
                   src:'http://img.taopic.com/uploads/allimg/110810/6451-110Q009245992.jpg'
		          },{
                   resourceId:'2',
                   title:"支付宝狂撒20亿微信大肆封杀用户，阿里腾讯都背负着怎样的焦虑？",
                   createTime:"2018-01-05 08:44:55",
                   likes:284,
                   src:'http://img.taopic.com/uploads/allimg/110810/6451-110Q009245992.jpg'
		          },{
                   resourceId:'3',
                   title:"乌兹别克斯坦改革成效初显，今年中乌双边贸易将超额完成？",
                   createTime:"2018-01-05 16:44:55",
                   likes:284,
                   src:'http://img.taopic.com/uploads/allimg/110810/6451-110Q009245992.jpg'
		          }
	          ],
	          commandData:[  
                 {
                   resourceId:26,
                   customerAccount:'13024182659',
                   src:'http://img.taopic.com/uploads/allimg/110810/6451-110Q009245992.jpg',
                   comment:'期待明晚的精彩直播！',
                   "createTime":"2018-01-05 16:43:13",
                   likes:0
                 },{
                   resourceId:27,
                   customerAccount:'13024182659',
                   src:'http://img.taopic.com/uploads/allimg/110810/6451-110Q009245992.jpg',
                   comment:'难得的闲暇时光，夕阳正好~',
                   "createTime":"2018-01-05 16:44:55",
                   likes:102
                 },{
                   resourceId:28,
                   customerAccount:'13024182659',
                   src:null,
                   comment:'难得的闲暇时光，夕阳正好~',
                   "createTime":"2018-01-05 16:46:52",
                   likes:102
                 }
	          ],
	          dataNotice:{
              "resourceId": 3602,
               title:'蔡英文最低工资梦想遭嘲讽：搪塞之词，丢脸！1111111',
               additionalInformation:null,
               createDate:'2017-12-20  16:30',
	             content:`<img class="doc-image doc-image-small" src="http://i1.go2yd.com/image.php?type=thumbnail_336x216&amp;url=http://si1.go2yd.com/get-image/0JVP5uprtVQ"/><p>【环球时报驻台北特约记者 李名】台湾地区领导人蔡英文日前跟财经媒体记者茶叙时感慨台湾为什么留不住人才与资金。她认为起薪低是人才外流的重要因素,因此必须要慢慢拉高劳工最低薪资,并称“3万元(新台币,下同)是我的梦想”。此话一出,立即在岛内引发反弹。</p>
		<p>2017年接近尾声,台湾“劳动部”26日提醒,明年度基本工资为2.2万元、时薪140元。蔡英文进一步称,明年是景气好转的一年,当局要加速建设台湾,让年轻人有更多就业机会,不再低薪。据台湾联合新闻网26日报道,各部门目前都在构思如何达成目标。“劳动部政务次长”苏丽琼透露还在收集各方意见,时间表不确定。至于基本工资有无可能调到3万元,“经济部次长”王美花称,企业如果愿意主动响应当然最好,所以蔡英文才提到这是她的梦想。</p>
		<p>《中国时报》26日称,根据各国际机构陆续发布的2018年经济增长率预估数值,台湾在亚洲开发地区都是敬陪末座;昔日同为“亚洲四小龙”的新加坡、韩国和香港,甚至后进的“五小虎”泰国、越南、菲律宾、马来西亚和印尼不用说了,“如今台湾的经济成长率其实已到了连哈萨克斯坦都不如的局面”。据悉,去年参选“总统”的新北市长朱立伦当时提出基本工资调高到3万元的政见,结果被蔡英文嘲笑说“如果这样,就可以得诺贝尔奖”。</p>
		<p>民进党辩解称,执政以来调涨基本工资近2000元,超过国民党执政8年的调升幅度。国民党发言人洪孟楷反击说,马英九执政时期共5次调整基本薪资,从17280元一直调整到20008元,增加金额为2728元。反观蔡英文执政后,到明年才是2.2万元,增加1992元,“所以马政府时期的2728是大于还是小于蔡政府的1992元,民进党的立委为了护航,难道连基本算术都不会了?”前国民党“立委”孙大千在脸书直言,什么叫梦想?其实就是委婉地告诉你,做不到,“没有办法给大家一个明确的方向和承诺,只能用梦想来搪塞,真的很丢脸!”</p>
		<p>与经济一样难看的,是蔡英文的支持率。美丽岛电子报25日公布的最新民调显示,蔡英文的信任度已降至执政19个月以来的新低,只剩32%;施政满意度因受惠于“赖清德效应”一度止跌回升,但近来上涨的全部都吐了回去,不满意度重新回到六成以上。民调还显示,过去蔡英文总自认最受年轻人和高学历者欢迎,但如今这群人已变成最不满意她的一群人,其中20岁至29岁满意蔡英文表现的比例仅剩21.8%。</p>
		<p>《中国时报》26日的一篇文章称,面对如此难看的经济展望,人民想知道的是蔡英文的解方。可惜的是,她谈的却是一厢情愿的梦想。文章说,执政19个月后,蔡英文面对媒体竟好意思说,她一直在思考如何让资金和人才都能留在台湾,“不知道蔡英文还要思考多久?岁月不待人,人才和资金也是”。台湾中央日报网络报称,蔡英文在民调低迷之时,看不到有任何反省或改变,不但继续追杀国民党,而且僵化两岸对峙,结果是原来的支持者不爽,原来的反对者更坚定,“这个现象的确让人很纳闷,为什么会有这样的政治人物?”</p>`
	          }
	        }
	      )
	    },
	    computed: {
		    showRight:function(){
		      return this.admin?false:true
		    },
        borrowId:function(){
           if(this.$route.params&&this.$route.params.id){
             return this.$route.params.id
           }
        }
      },
       mounted(){
       alert(this.isMobile)
          this.wxShare();
          console.log(this.$route)

          this.contentgetPageList(this.$route.params.id)
          this.setContents()
       },
	    methods:{
        ...comQuery,
        openApp:function(){
           if(this.isIOS){
               alert("ios")
           }
           if(this.isAndroid){
                alert("android")
           }
           alert("打开app")
  
        },
        setContents:function(){
          var that=this
             this.$nextTick(function() {
                    let  content = that.dataNotice.content.replace(/(style=")(.*?)(")/ig,"");
                    document.getElementById('chuangwei_content_inner').innerHTML= content

             })
        },
        renderDetails:function(obj,name){
            this[name]=obj
            console.log(name+":"+this[name])
            if(name=='dataNotice'){
              this.setContents()
            }
        },
	      openAllnews:function(){
	         //document.getElementById('chuangwei_content').style.height="auto"
	         this.isHideNews=false
	      },
        wxShare:function(){
             this.$nextTick(function() {
             
                  let shareObject={
                      title: '我是分享测试标题', // 分享标题
                      link: 'https://www.zhihu.com/question/23532498', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                      imgUrl: 'http://imgsrc.baidu.com/imgad/pic/item/9345d688d43f87940bef6a33d81b0ef41bd53a9e.jpg', // 分享图标
                      desc:'分享描述',
                      success:function(){
                         alert("分享成功")
                      },
                      cancel:function(){
                         alert("取消分享")
                      },
                  }
                  wxShare(shareObject)
          })
        },  
         contentgetPageList:function(ID){
                  var that=this;
                  let params = {
                      api: apis.contentNews,
                      param: {
                         "resourceId":ID
                      }
                  };
                  this.api.post(params)
                  .then(function (response) {
                    console.log(response)
                    if(response.data.code===0){
                        that.success(response.data.info)
                        //response.data.commentsRespList
                       // that.renderDetails(response.data.data.page.results,'relativeData')
                       //
               
                       if(response.data.data){
                           that.renderDetails(response.data.data.commentsRespList,'commandData')
                           that.renderDetails(response.data.data.releaseRespList,'relativeData')
                           that.renderDetails(response.data.data.resourceResp,'dataNotice')
                       }
                       /*
                       if(response.data.data.releaseRespList){
                           
                       }
                       if(response.data.data.resourceResp){
                           
                       }
                          */  
                    }else if(response.data.code==='201'){
                       that.fail(response.data.info);
                       that.more=false;
                    }else{
                       that.fail(response.data.info);
                    }
                    
                  })
                  .catch(function (error) {
                     //that.message(error);
                  });
         }
        },
        watch: {
            $route(to,from){
                // to表示的是你要去的那个组件，from 表示的是你从哪个组件过来的，它们是两个对象，你可以把它打印出来，它们也有一个param 属性
                this.dynamicSegment = to.params.id
                if(this.dynamicSegment!=from.params.id){
                     this.wxShare();
                     this.contentgetPageList(to.params.id)
                }
                
            }
        }

	}
</script>
<style scoped>
     
</style>
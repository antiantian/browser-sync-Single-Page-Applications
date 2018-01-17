<template>
  <div>
     <div class="middleContent   fixBottom">
        <div class="video_con">
           <div class="video_wrap" @click="openVideo">
             <video id="video_element" :src="dataNotice.videoUrl||'/static/151412229562389ad9f0a764092a0ed99392f7bd33627.mp4_bd.mp4'" volume="0.5" poster="http://si1.go2yd.com/get-image/0JNVY1cFv3Q" controls="" preload="true" playsinline="" webkit-playsinline="webkit-playsinline" x-webkit-airplay="allow" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                 <source  :src="dataNotice.videoUrl||'/static/151412229562389ad9f0a764092a0ed99392f7bd33627.mp4_bd.mp4'"  type="video/mp4">
             </video>
             <div id="video_mess">
               <div class="video-cover" :style="{backgroundImage:'url('+dataNotice.coverImg+')'}"></div>
               <div class="playButton"></div>
               <div class="playDuration">{{dataNotice.whenLong}}</div> 
             </div>
           </div>
        </div>
		<article>

		    <div class="openAPP box_S radiushalf noMBottom">高清更流畅，App内打开观看</div>
		    <div class="mid_con" >
			    <h1 class="chuangwei_title">{{dataNotice.title}}</h1>
			    <div class="chuangwei_info nopaddings">  
			        <span>{{transTime(dataNotice.createDate)}}</span>
			        <span>{{dataNotice.plays?dataNotice.plays:0}}次播放</span>
			    </div>
			</div>
		    <div  class="mid_con borderB15" >
			    <div id="chuangwei_content" class="videos_content">
			       <div id="chuangwei_content_inner">
			             {{dataNotice.content}}    
			       </div>
			    </div>
		    </div>
		    <div class="mid_con borderB15">
               <div class="commonTitle"><p>相关视频</p></div>
               <!-- Swiper -->
			   <div class="swiper-container" id="baberIndex">
			        <div class="swiper-wrapper">
			            <div class="swiper-slide" v-for="item in videoData">  
                           <router-link :to="{ name: 'videodetail', params: { id: item.resourceId }}"  class="inners">
                              <div class="tops">
                                 <img class="cover" :src="item.coverImg" />
                                 <div class="playDuration">{{item.whenLong}}</div>
                              </div>
                              <div class="titles  line-clamp-2">{{item.title}}</div>
                           </router-link>
			            </div>
			        </div>
			        <!-- Add Pagination -->
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
               <div class="openAPP box_S radiushalf">打开星火财经App，查看更多精彩评论</div>
		    </div>
		    
		</article>
	 </div>
	 <open-app  v-if="isMobile"></open-app>
  </div>
</template>

<script>
//isIOS,isAndroid,isMobile
    import apis from '../../api'

    import openApp from '../common/openApp'
    import {wxShare} from '../assets/wxShare'
    import comQuery from '../assets/Query'
	export default {
	    components:{
	      openApp
	    },
	    data(){
	      return(
	        {  
	          videoapi:'videoapi',
	          isHideNews:true,
            dynamicSegment:null,
	          videoData:[
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
               "resourceId": 3632,
                "title": "20160425今日股市财经最新资讯：央视新闻联播视频回看及概要-周二用-股民炒股版",
                "coverImg": "http://video.qqdcloud.com/snapshot/75ff720212d04be7af8acf2c8195cfbe00005.jpg",
                "videoUrl": "http://video.qqdcloud.com/75ff720212d04be7af8acf2c8195cfbe/ba24949d8c384246887864f2b524e17e-e276addf3f0a5fdc3731d5ff3016ee70-sd.mp4",
                "videoId": "75ff720212d04be7af8acf2c8195cfbe",
                "plays": 5,
                "typeId": 3,
                "createDate": null,
                "content": "<p>央经济工作会议12月18日至20日在北京举行。会议总结党的十八大以来我国经济发展历程，分析当前经济形势，并部署2018年经济工作。</p>"
	          }
	        }
	      )
	    },
	   computed: {
		    showRight:function(){
		      return this.admin?false:true
		    }
      },
       mounted(){
          this.dynamicSegment=this.$route.params.id
       alert(this.$route.params.id)
          this.bannerSlide();
          this.wxShare();
          this.contentgetPageList(this.$route.params.id)
       },
	   methods:{
     ...comQuery,
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
	      openVideo:function(e){
	             // document.getElementsByClassName()
	              document.getElementsByTagName("video")[0].style.display='block';
	              document.getElementById("video_mess").style.display='none';
	              document.getElementsByTagName("video")[0].play();
	         
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
            if(name=='videoData'){
              this.bannerSlide()
            }
        },
        contentgetPageList:function(ID){
                  var that=this;
                  let params = {
                      api: apis.contentVideo,
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
                           that.renderDetails(response.data.data.releaseRespList,'videoData') 
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
         },
          bannerSlide:function(){
               var that=this
	             this.$nextTick(function(){    
	              console.log(111)
	                 $(function(){
	                    console.log(22222222)
	                    var swiper = new Swiper('#baberIndex', {
        					        slidesPerView: 2,
        					        spaceBetween: 15,
        					        freeMode: true,
        					        slidesPerView: 'auto',
        					    });
                       document.getElementById('chuangwei_content_inner').innerHTML= that.dataNotice.content
                       console.log(22222222211111111111111)
                       var VideoDiv=document.getElementById("video_element");
                       VideoDiv.addEventListener("canplaythrough",videoLoaded,false)
                       
                       function videoLoaded(){
                           console.log(document.getElementById("video_element").duration/60)
                       }
	                 })     
    					    /*
                   setTimeout(function(){
                     console.log(document.getElementById("video_element").duration/60)
                   },2000)
                   */
    			       // 0.4347826086956522 swiper-slide             
    					$(".swiper-slide").css({width:'43%'})	   
    				 })	
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
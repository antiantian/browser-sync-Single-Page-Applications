<template>
    <div>
      <a class="box_S app_fixed colorful" @click={goToFatherDetail}>
       <p>{{openapp}}</p>
	    <div class="leftSide">
	      <div class="img logo">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="96px" height="96px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve">  <image id="image0" width="96" height="96" x="0" y="0"
    xlink:href="data:image/png;base64,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
n+TOO+9k7ty5pKamMn78eJYvX85XX30VskMIIWxtN6+zyoB4kZ+fz0MPPcTSpUtpa4v8dd+WLVvo
6upi5syZzJ07NyIDbr/9dvLy8lizZk238SoqKqipqWH69Om28Ouuu46NGzfSr1/wP7rpuk59fb3t
ChSn0SAuBjz22GNMmTLFd61YsSLmPO666y7y8vJYu3ZtxLglJSXMmDEDt9tNUVERVVVV3YoBTdMo
Li6mtLSU3bt3h41XWWn8P+WwYdFvafB4PCxcuNB2WUVptEjBOCHO0Srp8uXLKSoqcpLUhuLiYmbN
msWsWeH/Q7ayspJdu3Yxb948NmzYAMDgwYMpKSlhypQpYdPl5eWxdOlSHn74YZ5++umwcQBqa2vJ
zY3ua4vMzEzeeeedeJverGEcz5dQ5ObmsnTpUpYsWUJHR0fIOCUlJQwePJjhw4fT2NhIY2MjU6ZM
YevWrTQ1NXWb/6233kpBQQFPPfVUyPcFBQVkZWWFJOjevXs5fPhwbzX9uIbxx90Jx8KFC8nPz6e6
ujronZSSV199lZtvvpn777/fd5nWSWlpacT816xZQ1lZWch3QgiWLFnChg0beP31132m5/bt23nu
uefIzg79BZ5U6+PWK0bUpOCQAaNGjaJ//8iSa9iwYaSnp4cMD+zta9as4Z577mHQoEG28LKyMjIy
MliwwP4v+5mZmcyfP599+/Zxxx13BNUvMzPT9zs7O5uVK1fy/PPP06dPn6D6FBUV0b9/f9avX09x
cTEFBQWMGjWKF154IUgJDxw4kAsuuIAZM2YE5bNt27aYGCCklI8DjzhhQhJx4wkN40jWJBKDt5IH
OCQOxgEO6jDiNxJdm/MQbwghpDkRK0l0bc5DlIBl872UcifJg5rPFt4XQkwFOwOSB7mdPQQf5KYC
Xkt0zc4DvGY98tzmn00e5tnraKC7wzzViwUYR68m0bPwYhxxbjtnPsgdrc67XZzo2p6DWBzqfPmQ
6wHq5OdnE13jcwjPhjpNGyJ8/6+ONn+a5OnaTuHF6PnrwkWI+AGJOvVzI0nFHCsaMGT+u91Firgk
qTKYSNJEjQWvYVg770aKGNMnVGqyVkzy7OFw+AvwoNXOjwRH37ApsbQAmEPSi1oLbAY2RtPjAxHX
R4TKlT0J40TWkRjHIprXuXY6nwfDbW9e5RhrKbuVR9kR/h9VWP8tr+pcQAAAACV0RVh0ZGF0ZTpj
cmVhdGUAMjAxNy0xMi0yOVQxOTowNjowMSswODowMHNzeqMAAAAldEVYdGRhdGU6bW9kaWZ5ADIw
MTctMTItMjlUMTk6MDY6MDErMDg6MDACLsIfAAAAAElFTkSuQmCC" />
</svg>

	      </div>
	      <span class="yellowBtn radiushalf">点击打开</span>
	      <span class="close"></span>
	      <div class="content">
		      <p>下载星火财经客户端，</p>
		      <p>了解更多精彩新闻资讯。</p>
	      </div>
	    </div>
	   
	  </a>
    </div>
</template>

<script type="ecmascript-6">
    import { C } from '../assets/mobileJude'
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
	   },
	    methods: {  
            goToFatherDetail () {  
                console.log(22)
                this.$emit('openapp'); 
            }  
        } 
	}

</script>

<style rel="stylesheet" scoped>
     
</style>
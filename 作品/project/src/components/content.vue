<template>
	<div>
		<top-html></top-html>
			<header class="logo clearfix">
				<h2 style="color: #000;">LOGO</h2>
				<button v-model="show" @touchstart="tanShow()"><Icon type="navicon-round" class="caidan"></Icon></button>
			</header>
		<!-- 弹框 -->
		<transition name="slide-fade">
			<div class="tanbox" v-show="show">
				<p class="clearfix">
					<router-link to="/registration" tag="div" class="dengluBtn active2">注册</router-link>
					<router-link to="/login" tag="div" class="zhuce">登录</router-link>
				</p>
				<ul class="fenlei">
					<li><a href="#">首页</a></li>
					<li>
						<a href="#" class="active3" @touchstart="ulHidden()">产品<Icon type="arrow-down-b"></Icon></i></a>
						<transition name="bounce">
							<ul class="changpin" v-show="hidden">
								<li><a href="#">全部</a></li>
								<li><a href="#">智能手机</a></li>
								<li><a href="#">智能眼镜</a></li>
								<li><a href="#">机器人</a></li>
								<li><a href="#">体感车</a></li>
								<li><a href="#">无人机</a></li>
							</ul>
						</transition>
					</li>
					<li><a href="#">支持</a></li>
					<li><a href="#">博客</a></li>
					<li><a href="#">关于</a></li>
				</ul>
			</div>
		</transition>
		<div class="wzContent clearfix">
			<button class="upBtn colBtn">上一篇</button>
			<button class="nextBtn">下一篇</button>
			<div class="wzContentHead clearfix">
				<h5>Oculus在伦敦组建VR团队</h5>
				<p class="lookWz clearfix"><span>2017-01-14</span><i>admin</i><b class="iconfont icon-eyes">100</b></p>
			</div>
			<ul class="wzContentCenter clearfix">
				<li>自从2014年斥资20亿美元收购Oculus以来，Facebook作为社交平台巨头一直在VR发展的前沿。而随着市场发展，VR在美国和中国等地刮起狂潮。由此，Facebook准备扩大疆域，向英国瞄准。</li>
				<li><img src="../assets/img/b1.png"></li>
				<li>根据外媒《每日电讯报》报道，Facebook近日在英国伦敦设立一个VR开发中心，成为旗下Oculus在欧洲的首个基地。</li>
				<li>据了解，Oculus英国团队的负责人是谷歌前高级工程师Mike LeBeau，是谷歌语音搜索软件的开发者。在今年1月的时候，LeBeau前往伦敦加入Oculus。事实上，Oculus在英国一直有所动作。2015年，Oculus的干爹Facebook收购了英国VR创业公司Surreal Vision。而根据领英的信息显示，在过去6个月的时间里，Oculus在不断扩大英国的工程开发及开发者关系团队。</li>
				<li>目前，Oculus在美国6座城市、香港以及首尔设立了办公地点，而这次再加上伦敦。对此消息，Oculus回应表示，该公司在伦敦有一支小型团队，还表示 “很快我们会公布更多的国际扩张计划。”这句话似乎意味着，Facebook准备大举扩张。</li>
			</ul>
		</div>
		<div class="searchBf clearfix">
			<div class="search clearfix">
				<input type="text" placeholder="Search" v-model="value"><Icon type="search" class="sousuo"></Icon>
			</div>
		</div>
		<!-- 推荐 -->
		<div class="options">
			<h6>为您推荐</h6>
			<ul>
				<li><a href="#">Oculus在伦敦组建VR团队</a></li>
				<li><a href="#">Chrome OS支持所有安卓应用</a></li>
				<li><a href="#">人工智能风口来袭 情感机器人众望所归</a></li>
			</ul>
		</div>
		<!-- 登录 -->
		<div class="denglu">
			<p class="login clearfix">登录</p>
			<img src="../assets/img/erweima.png">
			<span class="iconfont icon-weixin" style="color:green;"></span>
			<span class="iconfont icon-iconfontqq1 qq" style="color:#67aefc;"></span>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	import topHtml from '@/components/top'
	export default {
		name:"contentHtml",
		components:{
			topHtml
		},
		data () {
		    return {
		      show:false,
		      hidden:false,
		      value:''
		    }
	    },
		methods: {
			tanShow(){
				this.show = !this.show
				this.hidden = false
			},
			ulHidden(){
				this.hidden = !this.hidden
			}
		},
		mounted() {
			$('body,html').animate({ scrollTop: 0 },100)
        	return false;
 		}
	}
</script>
<style>
	.bounce-enter-active {
	  animation: bounce-in .5s;
	}
	.bounce-leave-active {
	  animation: bounce-in .5s reverse;
	}
	@keyframes bounce-in {
	  0% {
	    transform: scale(0);
	  }
	  50% {
	    transform: scale(1.5);
	  }
	  100% {
	    transform: scale(1);
	  }
	}
	
	.slide-fade-enter-active {
	  transition: all .3s ease;
	}
	.slide-fade-leave-active {
	  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active for below version 2.1.8 */ {
	  transform: translateX(10px);
	  opacity: 0;
	}
</style>
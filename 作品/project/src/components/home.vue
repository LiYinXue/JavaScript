<template>
	<div id="box">
		<top-html></top-html>
		<!-- 头部 -->
			<header class="logo clearfix">
				<h2 style="color: #000;">LOGO<router-link to="/" class="a"></router-link></h2>
				<button v-model="show" @touchstart="tanShow"><Icon type="navicon-round" class="caidan"></Icon></button>
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
		<!-- 轮播 -->
		<auto-html></auto-html>
		<!-- 科技简介 -->
		<div class="profile clearfix">
			<div class="a">
				<h2>科技改变生活</h2>
				<p>科技正用你无法想象的速度在改变世界，改变人们的生活</p>
			</div>
			<ul class="clearfix instruction">
				<li>
					<Icon type="model-s" class="car"></Icon>
					<p>
						<i>无人驾驶</i>
						<strong>无人驾驶车将改变人们的出行方式。据估计，无人驾驶车可将每年因交通事故死亡的人数（120万）削减一半。</strong>
					</p>
				</li>
				<li>
					<Icon type="eye" class="eye"></Icon>
					<p>
						<i>虚拟现实</i>
						<strong>简称VR，创建和体验虚拟世界，有一天你也会有专属自己的虚拟人生。</strong>
					</p>
				</li>
				<li>
					<Icon type="social-android" class="android"></Icon>
					<p>
						<i>机器人</i>
						<strong>未来将会有更多给人们生活带来改变的机器人，甚至机器人会有自己的情感。</strong>
					</p>
				</li>
				<li>
					<Icon type="android-plane" class="plane"></Icon>
					<p>
						<i>无人机</i>
						<strong>人们已经在利用无人机寻找等待救援的远足者和滑雪者，拍摄房屋航空图像，以及调查考古遗址。</strong>
					</p>
				</li>
			</ul>
		</div>
		<!-- 科技产品 -->
		<div class="Science clearfix">
			<p><span>科技产品</span><br/>我们致力于让科技改善人们的生活</p>
			<nav class="navigation">
				<div class="nav">
					<a href="#" v-for="item,index in shopList"
						:class="[index==indexA?'active':'']" @touchstart="ChangeClass(index)">{{item.name}}</a>
					<!--<a href="#">智能手表</a>
					<a href="#">智能眼镜</a>
					<a href="#">机器人</a>
					<a href="#">体感车</a>
					<a href="#">无人机</a>-->
				</div>
			</nav>
			<ul class="wrap clearfix">
				<li v-for="item,index in classImg" :key="index">
					<router-link 
						:to="{
							name:'itemHtml',
								params:{
									'itemId':item.id,
									'sonImgSrc':item.sonImgSrc,
									'itemPrice':item.itemPrice,
									'itemTitle':item.itemTitle,
									'itemSize':item.itemSize,
									'itemColor':item.itemColor
								}
							}">
						<img :src="item.imgSrc" alt=""/>
					</router-link>
				</li>
			</ul>
		</div>
		<!-- 博客简介 -->
		<div class="blogs clearfix">
			<p class="boke"><span>博客咨询</span><br/>分享最新科技资讯，关注智能硬件</p>
			<div class="consulting">
				<dl class="clearfix">
					<dt><img src="../assets/img/b1.png"></dt>
					<dd>
						<h3><router-link to="/content" class="contentH">Oculus在伦敦组建VR团队</router-link></h3>
						<p class="jieshao">自从2014年斥资20亿美元收购Oculus以来，Facebook作为社交平台巨头一直在VR发展的前沿。而随着市场发展，VR在美国和中国等地刮起狂潮。由此，Facebook准备扩大疆域，向英国瞄准。根...</p>
						<p class="look"><span>2017-01-14</span><i>admin</i><Icon type="ios-eye" class="eyes"></Icon><strong>100</strong></p>
					</dd>
				</dl>
				<dl class="clearfix">
					<dt><img src="../assets/img/b2.png"></dt>
					<dd>
						<h3><router-link to="/content" class="contentH">Chrome OS支持所有安卓应用</router-link></h3>
						<p class="jieshao">“Google Play商店马上就要登陆Chrome OS了”谷歌公司在今天的开发者大会上宣布。然后大家就可以在自己的Chromebook跟Chromebox上安装几乎所有安卓应用了。谷歌让Play商...</p>
						<p class="look"><span>2016-05-24</span><i>科技公司</i><Icon type="ios-eye" class="eyes"></Icon><strong>100</strong></p>
					</dd>
				</dl>
				<dl class="clearfix">
					<dt><img src="../assets/img/b3.png"></dt>
					<dd>
						<h3><router-link to="/content" class="contentH">人工智能风口来袭 情感机器人众望所归</router-link></h3>
						<p class="jieshao">近日，习近平在中科大“检阅”了多款人工智能机器人，Gowild智能科技公司开发的全球首款情感社交机器人“公子小白”激萌可爱，分外抢眼。据悉，受“检阅”的人工智能机器人的开发者包括科大讯飞、Gowild...</p>
						<p class="look"><span>2016-05-24</span><i>科技公司</i><Icon type="ios-eye" class="eyes"></Icon><strong>100</strong></p>
					</dd>
				</dl>
			</div>
		</div>
		<!-- 关于我们 -->
		<div class="about clearfix">
			<p class="guanyu clearfix"><span>关于我们</span><br/>我们致力于让科技改善人们的生活</p>
			<div class="material clearfix">
				<p class="tupian clearfix"><img src="../assets/img/c1.png"></p>
				<ul class="zi clearfix">
					<li>某科技公司是一个诞生于2013年机器人浪潮来袭前际，总部位于“硬件之都”中国深圳。</li>
					<li>我们是一群热衷于智能机器人的极客、设计师和发烧友，对未来充满无限创想、野心和激情。“在最好的时光里，撒野去”是我们所倡导的品牌文化，号召属于这个时代的年轻人，不羁束缚、随心逐梦！</li>
					<li>比普通创客幸运一些的是，我们成立之初，就在语义技术、图数据管理和供应链方面拥有比较丰富的经验和积累，并且、汇聚整合了完善的生产链条和多元的渠道资源，我们愿意拥抱大胆有趣的产品理念，为用户创造更多的惊喜！</li>
				</ul>
			</div>
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
	import autoHtml from '@/components/lunbo'
	import topHtml from '@/components/top'
	import Axios from 'axios' // 请求数据的
	import $ from 'jquery'
	export default {
		name: 'boxHtml',
		components: {
	      autoHtml,
	      topHtml
	    },
		data () {
		    return {
		      show:false,
		      hidden:false,
		      shopList:[],
		      classImg:[],
		      classification:[],
		      indexA:0,
		      idArr:[]
		    }
	    },
		methods: {
			tanShow(){
				this.show = !this.show
				this.hidden = false
				//console.log(this.show)
			},
			ulHidden(){
				this.hidden = !this.hidden
			},
			ChangeClass(index){
				this.indexA = index
			}
		},
		mounted() {
        	Axios.get(
	        	'http://localhost:8000/api/list'
	        )
	        .then((data)=>{
	        	this.shopList = data.data.list //找到这个接口里的数据
	        	this.shopList.forEach((item1)=>{
	        		if(item1.classI){
	        			item1.classI.forEach((item2)=>{
		        			this.classImg.push( 
		        				{
		        					id:item2.idImg,
		        					imgSrc:item2.ali_image,
		        					sonImgSrc:item2.img_json,
		        					itemPrice:item2.item_price,
		        					itemTitle:item2.item_title,
		        					itemSize:item2.item_size,
		        					itemColor:item2.item_value
		        				}
		        			);
		        		})
	        		}
	        	})
	        	
	        	this.classImg.length = 8
	        	//console.log(this.imgList)
	        	
	        })
	        
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
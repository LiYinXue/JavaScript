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
					<li><router-link to="/">首页</router-link></li>
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
		<div class="nav-cart-wrapper">
			<div class="nav-cart-list">
				<div class="empty"  v-show="!smallCarList.length">
					<h3>购物车为空</h3>
					<p>您还没有选购任何商品，现在前往商城选购吧!</p>
				</div>
				<div class="full"  v-show="smallCarList.length">
					<div class="nav-cart-items">
						<ul>
							<li class="clear" v-for="car_item in smallCarList">
								<div class="cart-item js-cart-item cart-item-sell">
									<div class="cart-item-inner">
										<div class="item-thumb">
											<img :src="car_item.ali_image">
										</div>
										<div class="item-desc">
											<div class="cart-cell">
												<h4>
													<a href="#/item/100027401">{{car_item.title}}</a>
												</h4>
												<p class="attrs">
													<span>透明</span>
												</p>
												<h6>
													<span class="price-icon">¥</span><span class="price-num">{{car_item.price}}</span><span class="item-num">x {{car_item.sku_num}}</span>
												</h6>
											</div>
										</div>
										<div class="del-btn">删除</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div class="nav-cart-total">
						<p>共 <strong class="ng-binding">1</strong> 件商品</p>
						<h5>合计：<span class="price-icon">¥</span><span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">49</span></h5>
						<h6>
							<a ng-href="http://www.smartisan.com/shop/#/cart" class="nav-cart-btn" href="http://www.smartisan.com/shop/#/cart">去购物车</a>
						</h6>
					</div>
				</div>
			</div>
		</div>
		<div class="banquan">
			<p>科技公司 版权所有 © 2008-2016 湘ICP备8888888</p>
			<p>本页面内容为网站演示数据，前台页面内容都可以在后台修改。</p>
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
	import Axios from 'axios'
	import topHtml from '@/components/top'
	export default {
		name:"shopCar",
		components: {
	      topHtml
	    },
		data () {
		    return {
		      show:false,
		      hidden:false
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
		computed:{
	    	smallCarList (){
		        console.log(this.$store.state.smallCarList)
		        return this.$store.state.smallCarList
		    }
	   },
		mounted() {
			Axios.get('http://localhost:8000/api/getShopCarList')
			.then((data) => {
		        this.$store.commit('changeSmallCarList',data.data)
		    })
			$('body,html').animate({ scrollTop: 0 },100)
        	return false;
 	    }
	}

</script>

<style>
</style>
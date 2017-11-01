<template>
	<div>
		<!-- 头部 -->
		<router-link to="/">
			<header class="logo clearfix">
				<h2 style="color: #000;">LOGO</h2>
				<router-link to="/" class="b">返回首页</router-link>
			</header>
		</router-link>
		<div class="signupBox">
			<ul class="signup clearfix">
				<li class="kuang clearfix">
					<Icon type="person" class="personZ"></Icon>
					<Input v-model="value" placeholder="会员名"></Input>
				</li>
				<li class="kuang1 clearfix">
					<Icon type="unlocked" class="key"></Icon>
					<Input v-model="value" placeholder="密码"></Input>
				</li>
				<li class="kuang2 clearfix">
					<Icon type="unlocked" class="key"></Icon>
					<Input v-model="value" placeholder="重复密码"></Input>
				</li>
				<li class="yanzheng clearfix">
					<span class="iconfont icon-yanzhengma"></span>
					<Input v-model="value" placeholder="验证码"></Input>
				</li>
				<li class="immediately"> <Button type="info">立即注册</Button></li>
				<li class="existing"><router-link to="/login" class="b">已有账号？</router-link></li>
			</ul>
			<button class="validation"><img src="../assets/img/y.jpg" title="看不清，换一张"></button>
		</div>
		<div class="footerD">
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
	import $ from 'jquery'
	export default {
		name:"registrationHtml",
		data(){
			return {
				value:''
			}
		},
		mounted() {
			$('body,html').animate({ scrollTop: 0 },100)
        	return false;
 		}
	}
</script>

<style>
</style>
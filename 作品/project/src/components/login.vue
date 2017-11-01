<template>
	<div>
		<router-link to="/">
			<header class="logo clearfix">
				<h2 style="color: #000;">LOGO</h2>
				<router-link to="/" class="a">返回首页</router-link>
			</header>
		</router-link>
		<div class="login-dialog">
			<div class="frame clearfix">
				<input v-model="value" type="text" placeholder="用户名/邮箱/手机">
				<input v-model="value" type="text" placeholder="密码">
				<p class="clearfix"><a href="#" class="fr">忘记密码？</a></p>
				<Button type="info"><router-link to="/login" style="color: #fff;">登录</router-link></Button>
				<Button type="primary"><router-link to="/registration" style="color: #fff;">没有账号？赶紧去注册</router-link></Button>
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
	import $ from 'jquery'
	export default {
		name:"loginHtml",
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
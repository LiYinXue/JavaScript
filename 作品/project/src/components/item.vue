<template>
	<div>
		<div class="tishi" v-show="showX">
			<div class="tishixinxi">
				<p>请先登录：</p>
				<button type="info" class="quxiao" @touchstart="cancel()">取消</button>
				<router-link to="/login" tag="div" class="deng"><button type="success" class="srue">确定</button></router-link>
			</div>
		</div>
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
		<ul class="navigation-bar clearfix">
		<li><Icon type="arrow-up-a"></Icon><router-link to="/">首页</router-link></li>
		<li>
			<a href="#">产品<i class="iconfont icon-icon"></i>/</a>
			<ul class="changpinbox">
				<li><a href="#">全部</a></li>
				<li><a href="#">智能手机</a></li>
				<li><a href="#">智能眼镜</a></li>
				<li><a href="#">机器人</a></li>
				<li><a href="#">体感车</a></li>
				<li><a href="#">无人机</a></li>
			</ul>
		</li>
		<li><a href="#">智能手表/</a></li>
	</ul>
	<!-- 详细信息 -->
	<div class="particulars clearfix">
		<!-- 轮播 -->
		<div class="autoBox">
			<div class="autoBigImg">
				<img
					:src="bigImgArr[i]"
				/>
			</div>
			<div class="autoSmallImg">
				<img
					v-for="item,index in smallImgArr" :key="index"
					:src="item" :class="[index==i?'active5':'']"
					@touchstart="changeClass(index)"
				/>
			</div>
			<span @touchstart="prvePlay"><Icon type="chevron-left" class="jiantouL"></Icon></span>
			<span @touchstart="nextPlay"><Icon type="chevron-right" class="jiantouR"></Icon></span>
		</div>
		<!-- 详细 -->
		<div class="detail clearfix">
			<h4>{{itemTitleString}}</h4>
			<i>{{itemPriceString}}.00元</i>
			<strong v-show="itemColorArr">选择颜色</strong>
			<p class="clearfix yanse">
				<span 
					v-for="item,index in itemColorArr"
					:class="[index==colIndex?'colCol':'']"
					@touchstart="colClass(index)"
				>{{item}}</span>
			</p>
			<strong v-show="itemSizeString">表壳尺寸</strong>
			<p class="size clearfix">
				<span 
					v-for="item,index in itemSizeString"
					:class="[index==indexCol?'colCol':'']"
					@touchstart="colClassIndex(index)"
				>{{item}}</span>
			</p>
			<strong>数量</strong>
			<p class="quantity clearfix">
				<button @touchstart="numReduce">-</button>
				<input type="text" :value="byeNum"/>
				<button @touchstart="numPlus">+</button>
			</p>
			<p class="kucun">库存<b>999</b>件</p>
			<div class="shoucang">
				<button 
					type="warning" 
					style="background: hotpink;" 
					v-model="showX"
					@touchstart="prompt()"
				>加入收藏</button>
				<router-link to="/shop-car" class="contentH"><button type="error" style="background: orangered;" @click="addShopCar">加入购物车</button></router-link>
				
			</div>
		</div>
		<!-- 商品简介 -->
		<div class="jianjie clearfix">
			<p class="jieshaoNav clearfix">
				<a href="#" class="borderCol">详情</a>
				<a href="#">功能</a>
				<a href="#">包装</a>
			</p>
			<div class="jieshaoContent">
					<ul class="xiangqing">
						<li>适用人群：儿童，成年人，老年人</li>
						<li>商品毛重：255g</li>
						<li>商品产地：中国大陆</li>
					</ul>
					<ul class="gongneng">
						<li>适用人群：儿童，成年人，老年人</li>
						<li>商品毛重：255g</li>
						<li>商品产地：中国大陆</li>
						<li>适用人群：儿童，成年人，老年人</li>
						<li>商品毛重：255g</li>
						<li>商品产地：中国大陆</li>
					</ul>
					<ul class="baozhuang">
						<li>适用人群：儿童，成年人，老年人</li>
						<li>商品毛重：255g</li>
						<li>商品产地：中国大陆</li>
						<li>适用人群：儿童，成年人，老年人</li>
						<li>商品毛重：255g</li>
						<li>商品产地：中国大陆</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="Big-img">
				<img src="../assets/img/big.jpg">
				<img src="../assets/img/big1.jpg">
			</div>
			<!-- 登录 -->
			<div class="denglu">
				<p class="login clearfix">登录</p>
				<img src="../assets/img/erweima.png">
				<span class="iconfont icon-weixin" style="color:green;"></span>
				<span class="iconfont icon-iconfontqq1 qq" style="color:#67aefc;"></span>
			</div>
		</div>
	</div>
</template>

<script>
	import topHtml from '@/components/top'
	import Axios from 'axios' // 请求数据的
	export default {
		name:"itemHtml",
		components: {
	      topHtml
	    },
		data () {
		    return {
		      show:false,
		      showX:false,
		      hiddenX:false,
		      hidden:false,
		      itemArr:[],
		      imgArr:[],
		      allImg:[],
		      smallImgArr:[],
		      bigImgArr:[],
		      i:0,
		      byeNum:'0',
		      colIndex:-1,
		      indexCol:-1,
		      itemPriceString:'',
		      itemTitleString:'',
		      itemSizeString:[],
		      itemColorArr:[]
		    }
	    },
		methods: {
			tanShow(){
				this.show = !this.show
				this.hidden = false
			},
			prompt(){
				this.showX = !this.showX
				this.hiddenX = false
			},
			cancel(){
				this.showX = false
			},
			ulHidden(){
				this.hidden = !this.hidden
			},
			changeIndex(index){
				
				this.i = index
			},
			changeClass(index){
				this.i = index
			},
			colClass(index){
				this.colIndex = index
			},
			colClassIndex(index){
				this.indexCol = index
			},
			numPlus(){
				
				if(this.byeNum>=20){
					return
				}
				this.byeNum++
				this.$emit('input', {res: this.byeNum, other: '++'})
			},
			numReduce(){
				
				if(this.byeNum<=0){
					return
				}
				this.byeNum--
				this.$emit('input', {res: this.byeNum, other: '--'})
			},
			prvePlay:function(){
				if(this.i==0){
			        this.i=this.smallImgArr.length-1;
			    }else{
			        this.i--;
			    }
		        console.log(this.i);
			},
			nextPlay:function(){
				if(this.i==this.smallImgArr.length-1){
			        this.i=0;
			    }else{
			        this.i++;
			    }
		        console.log(this.i);
			},
			addShopCar(){
    			//添加到购物车
	    		Axios.post(
			        'http://localhost:8000/api/setShopCarList',
			        {
			            carList: JSON.stringify(this.smallImgArr)
			        }
			    ).then((data)=>{
			      	//小车的数据
			      	this.$store.commit('changeSmallCarList', data.data)
			    })
		    }
		},
		mounted() {
			$('body,html').animate({ scrollTop: 0 },10)
			this.allImg = this.$route.params.sonImgSrc
			this.itemSizeString = this.$route.params.itemSize
			//小图
			this.allImg.forEach((item)=>{
				this.smallImgArr.push(item.image_small)
			})
			//大图
			this.allImg.forEach((item)=>{
				this.bigImgArr.push(item.big_img)
			})
			this.itemPriceString = this.$route.params.itemPrice
			console.log(this.smallImgArr)
			this.itemTitleString = this.$route.params.itemTitle
			this.itemColorArr = this.$route.params.itemColor
        	return false;
 		}
	}
</script>

<style>
</style>
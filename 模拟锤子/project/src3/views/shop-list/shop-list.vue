<template>
	<div id="main">
		<Header-nav></Header-nav>
		<div class="sku-box store-content">
				<div class="sort-option">
					<ul class="line clear">
						<li><a href="javascript:;" class="active">综合排序</a></li>
						<li><a href="javascript:;" class="">销量排序</a></li>
						<li><a href="javascript:;" class="">价格低到高</a></li>
						<li><a href="javascript:;" class="">价格高到低</a></li>
					</ul>
				</div>
				<div class="gray-box">
					<div class="item-box">
						<shop-item 
							v-for="item,index in shopList"
							key="index"
							:item-data='item'
						></shop-item>
					</div>
				</div>
		</div>	
	</div>
</template>
<!--     :item-data='item'    存数据放到子组件里-->
<script>
	import HeaderNav from '@/components/header'
	import shopItem from '@/views/shop-list/shop-item'
	import Axios from 'axios' // 请求数据的
	export default {
		components: {
			HeaderNav,
			shopItem
		},
		data(){
			return {
				shopList:[]
			}
		},
		mounted () { // 生命 周期
			// 拿数据
			Axios.get(
	        	'http://localhost:3100/api/list'
	        )
	        .then((data)=>{
	        	this.shopList = data.data.list //找到这个接口里的数据
	        })
		}
	}
</script>

<style>
</style>
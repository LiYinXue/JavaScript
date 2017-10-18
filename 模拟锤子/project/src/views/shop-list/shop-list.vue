<template>
	<div>
		<header-nav></header-nav>
		<div id="main">
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
	</div>
</template>
<!--item为当前shopList 数组里的每一项将值赋给item-data-->
<script>
	import HeaderNav from '@/components/header'
	import shopItem from '@/views/shop-list/shop-item'
	import Axios from 'axios' //请求数据的
	export default {
		components:{
			HeaderNav,
			shopItem
		},
		//data为获取的数据
		data(){
			return {
				shopList:[]
			}
		},
		mounted () { // 生命 周期
			//拿数据
			Axios.get(
				//  后端接口
				'http://localhost:3100/api/list'
			)
			.then((data)=>{
				console.log(data.data.list)
				this.shopList = data.data.list //找到这个接口里的数据
			})
		}
	}
</script>

<style>
</style>
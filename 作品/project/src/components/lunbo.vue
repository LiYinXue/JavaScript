<template>
	<div class="roasting clearfix">
		<ul class="list clearfix">
			<li 
				v-for="item,index in imgArr"
				:key="index"
				v-show="index===currentIndex"
				@touchstart="stop()" 
				@touchend="go()"
			><img :src="item.url"/></li>
		</ul>
		<p class="tubiao clearfix">
			<span 
				v-for="(item,index) in imgArr.length" 
				:class="{'changeCol':index===currentIndex}"
				 @touchstart="change(index)"></span>
		</p>
	</div>
</template>
<script src="../min.js" ></script>
<script>
	import auto from '../assets/img/auto.jpg'
	import auto1 from '../assets/img/auto1.jpg'
	
	export default {
		name:"autoHtml",
		components: { 
	      
	    }, 
		data(){
			return {
				imgArr : [
					{
						url:auto
					},
					{
						url:auto1
					}
				],
				currentIndex:0,
				timer:""
			}
		},
		methods:{
			go(){
				this.timer = setInterval(() => {
			        this.autoPlay()
			    }, 3000)
			},
			stop(){
				clearInterval(this.timer)
    			this.timer = null
			},
			change(index) {
	            this.currentIndex = index
	        },
			autoPlay() {
			    this.currentIndex++
			    if (this.currentIndex > this.imgArr.length - 1) {
		        this.currentIndex = 0
			    }
			}
		},
		created(){
			this.$nextTick(() => {
			    this.timer = setInterval(() => {
		        this.autoPlay()
			    }, 3000)
			})
		}
	}
	
</script>

<style>
</style>
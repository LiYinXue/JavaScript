<template>
	<div class="backTop" ref="backTop" @touchstart="goToTop" >
		<Icon type="arrow-up-a" style="font-size: 80px; line-height: 100px;"></Icon>
	</div>
</template>
<style scoped>
    .top{
        padding: 100px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
    .backTop{
    	width: 100px;
    	height: 100px;
    	background: rgba(82,82,84,0.6);
    	position: absolute;
    	right: 30px;
    	bottom: 50px;
    	display: none;
    	text-align: center;
    	z-index: 999;
    }
</style>
<script>
	export default {
		name:"topHtml",
		data(){
			return {
				
			}
		},
		methods:{
			backTopFn(){
				if( $('body').scrollTop() > 200 ){
					$(this.$refs.backTop).show();
				}else{
					$(this.$refs.backTop).hide();
				}
			},
			goToTop(){
				$('body,html').animate({ scrollTop: 0 },100);
				$(this.$refs.backTop).hide();
			}
		},
		mounted() {
			$(document).bind('touchmove',this.backTopFn.bind(this))
 		}
	}
</script>

<style>
</style>
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
var
			iScale=1/window.devicePixelRatio;
			document.write('<meta name="viewport" content="width=device-width,initial-scale='+iScale+',minimum-scale='+iScale+',maximum-scale='+iScale+',user-scalable=no"/>');
			//alert(iScale)
			var
			iWidth=document.documentElement.clientWidth;
			document.getElementsByTagName('html')[0].style.fontSize=iWidth/32 +'px';
import $ from 'jquery'
export default {
  name: 'app',
  data(){
  	return {
  		
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

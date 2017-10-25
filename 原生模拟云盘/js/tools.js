
// 不会把这个函数定义在全局

var t = (function (){
	function on(element,evName,fn){
		element.addEventListener(evName,fn);	
	}
	function off(element,evName,fn){
		element.removeEventListener(evName,fn);		
	}
	// 碰撞检测函数
	function collision(obj1,obj2){
		var obj1Rect = obj1.getBoundingClientRect();	
		var obj2Rect = obj2.getBoundingClientRect();	

		if(obj1Rect.right < obj2Rect.left || obj1Rect.bottom < obj2Rect.top || obj1Rect.left > obj2Rect.right || obj1Rect.top > obj2Rect.bottom){
			return false;
		}else{
			return true;
		}
	}

	return {
		on:on,
		off:off,
		collision:collision
	}
})()

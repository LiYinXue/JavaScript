var wrap = document.getElementById('wrap');
var cont = document.getElementById('content');
var btn = document.getElementById('btn');
var btn1 = document.getElementById('btn1');
var onck = -1;//决定方向
var n = 5;//5个div
var change = Math.floor(n/2);//根据多少个div计算到多少开始转折
var str = '';//用来拼接绝对定位的div结构
var t = 0;
//箭头朝下
function down(){
	for(var i = 0; i < n; i++){
		if(i < change+1 ){
			t = i*50 ;
		}else{
			t = (n-1-i)*50;
		}
		str+='<div style="left:' + i*50 + 'px; top:' + t + 'px;">' + (i+1) + '</div>'
	}
}
//箭头朝上
function up(){
	for(var i = 0; i < n; i++){
		//i > change ? t = i*50 : t = (n-1-i)*50;
		if(i > change){
			t = i*50
		}else{
			t = (n-1-i)*50;
		}
		str+='<div style="left:' + i*50 + 'px; top:' + t + 'px;">' + (i+1) + '</div>'
	}
}
//箭头朝左
function left(){
	for(var i = 0; i < n; i++){
		//i > change ? t = i*50 : t = (n-1-i)*50;
		if(i>change){
			t = i*50
		}else{
			 t = (n-1-i)*50;
		}
		str+='<div style="top:' + i*50 + 'px; left:' + t + 'px;">' + (i+1) + '</div>'
	}
}
//箭头朝右
function right(){
	for(var i = 0; i < n; i++){
		//i < change+1 ? t = i*50 : t = (n-1-i)*50;
		if(i < change+1 ){
			t = i*50 
		}else{
			t = (n-1-i)*50;
		}
		str+='<div style="top:' + i*50 + 'px; left:' + t + 'px;">' + (i+1) + '</div>'
	}
}
btn.onmousemove = function(){
	btn1.style.display = 'block'
}
btn1.onclick = function(){
	onck++;
	if(onck>3){
		onck = 0;
	}
	if(onck==0){
		down();
	}else if(onck==1){
		left();
	}else if(onck==2){
		up();
	}else if(onck==3){
		right();
	}
	
	cont.innerHTML = str;
	str = '';
}

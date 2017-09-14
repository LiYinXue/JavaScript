var send=document.getElementById('send');
var message = document.getElementById('message');
var list = document.getElementById('list');
var img1=document.getElementById('img1');
var onOff = true;
var imgbox=document.getElementById('imgbox');
imgbox.onclick = function(){
	if(onOff){
		img1.src="images/boy.png";
		onOff = false;
	}
	else{
		img1.src="images/guaiwu.png";
		onOff = true;
	}
};
var send=document.getElementById('send');
send.onclick = function(){
	if(message.value ==""){
		alert("请输入内容！")
	}else{
		if(onOff){
			list.innerHTML = '<li class="clearfix">'
						 	+'<div class="imgpng1 fl">'+imgbox.innerHTML+'</div>'
							+'<div class="message1 cor2">'
								+'<div class="sanjiao sj2"></div>'
								+'<span>'
									+message.value
								+'</span>'
							+'</div>'
						+'</li>' 
						+ list.innerHTML;
		}else{
			list.innerHTML = '<li class="clearfix">'
						 	+'<div class="imgpng fr">'+imgbox.innerHTML+'</div>'
							+'<div class="message1 cor1">'
								+'<div class="sanjiao sj1"></div>'
								+'<span>'
									+message.value
								+'</span>'
							+'</div>'
						+'</li>' 
						+ list.innerHTML;
		}
	}
	message.value = "";
};

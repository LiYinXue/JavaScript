(function(){
	
	//自适应宽高
	var section = document.querySelector('#section');
	var head = document.querySelector('#head');
	function resize(){
		var clientH = document.documentElement.clientHeight;
		section.style.height = clientH - head.offsetHeight+'px';
	};
	window.onresize = resize;
	resize();

	//--------------------操作数据的方法-----------------------
	// 通过提供的pid找到这个下面的所有子元素
	// 通过id获取这个id下的子数据
	function getChildsById(pid){
		var arr = []; 
		//循环data 判断如果data里的id等于这个父id 如果有就添加到这个数组里
		for( var attr in data){
			if(data[attr].pid == pid){
				arr.push(data[attr]);
			};
		};
		return arr;	
	};
	// 通过id找数据   得到data里的id
	function getDataById(id){
		var item = data[id];
		if(item){
			return item;
		};
		return null;
	};

	// 通过id找这id的父数据
	//通过getDataById(id)子id找到pid父级的id
	function getParentById(id){
		var item = getDataById(id);
		//判断如果数组里的某一项的id是某一项的子元素的pid 就return data里的某一项
		for(var attr in data){
			if(data[attr].id == item.pid){
				return data[attr];
			};
		};
		return null; //没有返回null
	};
	// 找到指定id所有的父级
	function getParentsById(id){
		var box = getDataById(id); //将数据里的每一项的id赋值给一个变量
		var arr = []; //定义一个空数组 
		//循环  如果条件box成立 就一直循环
		while(box){
			arr.push(box); //数组先添加这一项的id
			box = getParentById(box.id);//将这一项父级的id也赋值给box
		};
		return arr;	 //
	};

	// ----------------------先渲染结构----------------------
	// 树形菜单区域
	var treeMenu = document.querySelector(".tree-menu");
	var level = -1;

	var currentId = 0;  // 当前的目录的id为0
	// 先渲染第一级
	// 作用：给一个pid，返回这个pid下子数据的结构
	function createTreeHtml(pid,level){
		// 子数据
		var arr = getChildsById(pid);
		level++;
		var treeHtml = '';
		if(arr.length){  // length不为0有下一级
			treeHtml = '<ul>';
			arr.forEach(function (item){
				//item.id // 找一下数据有没有子数据
				var childHtml = createTreeHtml(item.id,level);
				// 如果返回了结构，就存有图标的class，没有结构存没有图标的
				var classNames = childHtml !== '' ? 'tree-ico' : '';
				treeHtml += `
					<li>
						<div data-id="${item.id}" style="padding-left:${level*15}px;" class="tree-title ${classNames} close">
							<span><i></i>${item.title}</span>
						</div>
						${childHtml}
					</li>
				`	
			});

			treeHtml += '</ul>';

		};

		return treeHtml;
	};

	treeMenu.innerHTML = createTreeHtml(-1,level);

	// 少加了一个样式？？？？

	// -------------文件区域-------------
	// 思路：找到指定id的子数据渲染结构  默认一上来为‘微云’ 0

	var folders = document.querySelector(".folders");

	// 作用就是给一个pid，返回这个id下子数据组成的文件区域的结构
	function createFilesHtml(pid){
		// 找pid下的子数据
		var childs = getChildsById(pid);
		var filesHtml = '';
		if(childs.length){  // 有子数据
			childs.forEach(function (item){
				 filesHtml += `<div data-id="${item.id}" class="file-item">
							<img src="img/folder-b.png" alt="" />
							<span class="folder-name">${item.title}</span>
							<input type="text" class="editor"/>
							<i></i>
						</div>`	
			});
		};
		return filesHtml;

	};
	// 空文件提醒
	var fEmpty = document.querySelector('.f-empty');


	var filesHtml = createFilesHtml(0);
	// 如果下一级的结构为空，那么显示空文件的提示
	if(filesHtml === ''){
		fEmpty.style.display  = 'block';
	}else{
		folders.innerHTML = filesHtml;
	}
		
	//-------------渲染导航区域-----------------
	var breadNav = document.querySelector('.bread-nav');

	// 思路：类似于路径一样，指定id的所有的父数据

	//var id = 3;

	// 找这个id为3的所有的父级，直到找到最顶层
	

	// 思路封装一个方法，传入id，内部获取这个id所有的父级
	// 返回指定id所有父级的结构
	function createNavHtml(id){
		var parents = getParentsById(id).reverse();
		var navHtml = '';

		if(parents.length){
			// 数组的最后一项要渲染为span，前面要渲染为a
			// []
			for( var i = 0; i < parents.length-1; i++ ){
				navHtml += `<a data-id='${parents[i].id}' href="javascript:void(0);">${parents[i].title}</a>`;
			};

			navHtml += `<span>${parents[parents.length-1].title}</span>`;
		};


		return navHtml;
	};


	breadNav.innerHTML = createNavHtml(0);

	// -------------------三个区域的交互---------------------

	// 封装一个函数，指定id的菜单区域的标题添加class为active
	function positionTreeElement(id){
		var selectDiv = treeMenu.querySelector(`div[data-id="${id}"]`);	
		var divs = treeMenu.getElementsByTagName("div");
		for( var i = 0; i < divs.length; i++ ){
			divs[i].classList.remove('active');
		}
		if(selectDiv){
			selectDiv.classList.add("active");
		}
	}


	// 封装三个区域的渲染（文件区域和导航区域渲染，菜单区域的定位夹加class）

	function renderTreeRange(treeId){
		
		// 拿到id后，渲染文件区域
		var filesHtml = createFilesHtml(treeId);
		// 如果下一级的结构为空，那么显示空文件的提示
		if(filesHtml === ''){
			fEmpty.style.display  = 'block';
			folders.innerHTML = '';  // 没子级，fEmpty出现，folders内容就为空
		}else{
			fEmpty.style.display  = 'none';
			folders.innerHTML = filesHtml;
		}

		// 导航区域
		breadNav.innerHTML = createNavHtml(treeId);

		// 菜单区域
		positionTreeElement(treeId)	
		// 只要点击任何一个区域，全选都不选中
		checkedAll.classList.remove("checked");

		currentId = treeId;
	}

	// 默认给第一个div添加class
		positionTreeElement(0)

	//1. 先给菜单区域绑定点击处理
	var treeDivs = treeMenu.getElementsByTagName("div");
	leftClick()
	function leftClick(){
		for( var i = 0; i < treeDivs.length; i++ ){
			t.on(treeDivs[i],'click',function (){
				// 点击时候要知道点击数据的id
				var treeId = this.dataset.id;
				renderTreeRange(treeId)
	
			})
		}	
	}
	


	// ------------文件区域的交互----------------

	var fileItems = folders.getElementsByClassName("file-item");
	var checkBoxs = folders.getElementsByTagName("i");
	
	// 利用事件委托

	t.on(folders,"click",function (ev){
		// 要找事件源，目的是找到id,要找id，就要找到file-item

		var target = ev.target;

		if(target.classList.contains("folders")){
			return;
		}

		if(target.nodeName === "I"){
			return;
		}
		//点击input 不跳转
		if(target.nodeName === "INPUT"){
			return;
		}
		if(target.parentNode.classList.contains("file-item")){
			target = target.parentNode;
		}

		var treeId = target.dataset.id;
		renderTreeRange(treeId)
	})

	//---------导航区域------------
	t.on(breadNav,"click",function (ev){
		if(ev.target.nodeName === 'A'){
			var treeId = ev.target.dataset.id;
			renderTreeRange(treeId);
		}
	})

	//----------------全选--------------------

	var checkedAll = document.querySelector(".checkedAll");

	t.on(checkedAll,"click",function (){

		// 找当前文件下的所有的子数据
		var childs = getChildsById(currentId);
		console.log(childs);
		if(childs.length === 0){
			return;
		}

		var bl = this.classList.toggle('checked');

		if(bl){
			for( var i = 0; i < checkBoxs.length; i++ ){
				checkBoxs[i].classList.add("checked")
				fileItems[i].classList.add("hov")
			}
		}else{
			for( var i = 0; i < checkBoxs.length; i++ ){
				checkBoxs[i].classList.remove("checked");
				fileItems[i].classList.remove("hov")
			}
		}
	})

	// ----------单选----------------

	t.on(folders,"click",function (ev){
		if(ev.target.nodeName === "I"){
			ev.target.classList.toggle("checked");
			ev.target.parentNode.classList.toggle("hov");

			if(whoSelected().length == checkBoxs.length){
				checkedAll.classList.add("checked")
			}else{
				checkedAll.classList.remove("checked")
			}
		}	
	});


	// 获取那些选中的input

	function whoSelected(){
		var arr = [];
		for( var i = 0; i < checkBoxs.length; i++ ){
			if(checkBoxs[i].classList.contains("checked")){
				arr.push(checkBoxs[i])
			}
		}

		return arr;
	}
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
	//-------------------框选-----------------
	//鼠标按下
	t.on(folders,"mousedown", function (ev){
		var newDiv = document.createElement('div');	
		newDiv.className = "kuang";
		var disX = ev.clientX;
		var disY = ev.clientY;
		newDiv.style.left = disX + 'px';
		newDiv.style.top = disY + 'px';

		newDiv.isAppend = false; // 代表是没有append
		t.on(document,"mousemove",moveFn);
		t.on(document,'mouseup', upFn)
		//鼠标移动
		function moveFn(ev){

			// 在点击为中心的，移动了10个像素内，把框不放在body中
			//console.log(ev.clientX , disX , 10);
			// 当x轴或Y周大于10，并且状态是没有append的状态，要把newDiv添加在body。已经添加了不需要再添加。
			// 因为&&的优先要高于||
			if((Math.abs(ev.clientX - disX) > 20 || Math.abs(ev.clientY - disY) > 20) ){
				// 已经append，不许多次append
				if(!newDiv.isAppend){
					document.body.appendChild(newDiv);
					newDiv.isAppend = true;
				}
				
				newDiv.style.width = Math.abs(ev.clientX - disX) + 'px';
				newDiv.style.height = Math.abs(ev.clientY - disY) + 'px';	
				newDiv.style.left = Math.min(ev.clientX,disX) + 'px';
				newDiv.style.top = Math.min(ev.clientY,disY) + 'px';

				for( var i = 0; i < fileItems.length; i++ ){
					if(t.collision(newDiv,fileItems[i])){
						fileItems[i].classList.add('hov');
						fileItems[i].lastElementChild.classList.add("checked")
					}else{
						fileItems[i].classList.remove('hov');
						fileItems[i].lastElementChild.classList.remove("checked")
					}
				}

				checkedAll.classList.remove("checked");
			}
			

		}
		//鼠标抬起
		function upFn(){
			t.off(document,"mousemove",moveFn);	
			t.off(document,"mouseup",upFn);

			if(newDiv.isAppend){
				document.body.removeChild(newDiv);
			}
			

			// 是否所有的i都有class为checked
			var is = folders.getElementsByClassName("checked");

			if(is.length === fileItems.length && is.length !==0){
				checkedAll.classList.add("checked");
			}else{
				checkedAll.classList.remove("checked");
			}
		}
		ev.preventDefault(); //清除默认行为

	})
	//-------------------------------------------新建文件夹------------------------------------------------------
	var create = document.getElementById('create');
	var fullTipBox =document.querySelector('.full-tip-box');
	var tipText = document.querySelector('.tip-text');
	var fullTip = document.querySelector('.full-tip ');
	var ico = document.querySelector('.ico')
	t.on(create,'mouseup',function(){
		create.isCreate = true; // 记录正在新建的状态  
		//生成文件结构，放到第一位
		var newFile = `
				<div class="file-item">
					<img src="img/folder-b.png" alt="" />
					<span style="display: none;" class="folder-name"></span>
					<input style="display: block;"  type="text" class="editor"/>
					<i></i>
				</div>
		`
		folders.innerHTML = newFile + folders.innerHTML;

		fEmpty.style.display = 'none'
		//让新建的input获取光标
		var firstFile = folders.firstElementChild //获取folders第一个子元素
		var newInput = firstFile.getElementsByTagName('input')[0]
		newInput.focus()
		
	})
	//通过指定的id和一个值，判断这个值在不在指定id的子数据中
	// 在的话，返回true，否则返回false 判断是否重名
	function isExistNameById(id,value){
		var childs = getChildsById(id);
		for( var i = 0; i < childs.length; i++ ){
			if(childs[i].title === value){
				return true;
			}
		}

		return false;
	};
	t.on(document,"mousedown",function (){
		// 如果条件成立，说明在新建的状态
		if(create.isCreate){
			var firstFile = folders.firstElementChild;
			var newInput = firstFile.getElementsByTagName("input")[0];
			var val = newInput.value.trim();

			if(val === ''){
				firstFile.remove();
				//判断当前目录下有没有子级 没有提醒
				var childs = getChildsById(currentId);
				if(childs.length===0){
					fEmpty.style.display = 'block'
				}
			}else {
				
				// 要看一下是否和同级重名

				if(isExistNameById(currentId,val)){
					firstFile.remove();
				}else{
					// 新建成功
					var span = firstFile.getElementsByTagName("span")[0];
					span.innerHTML = val;
					span.style.display = 'block';
					newInput.style.display = 'none';

					var newId = Date.now();

					// 添加一条数据
					var newOneFileData = {
						id:newId,
						pid:currentId,
						title:val
					};
					// 给对象添加属性
					data[newId] = newOneFileData;

					// 新建成功之后，要给你的新建的文件的结构上加上一个自定义的行间的属性

					firstFile.setAttribute("data-id",newId);

					//树形菜单重新渲染
					tipText.innerHTML = '新建成功'
					fullTip.style.background = 'pink'
					promptBox()
					treeMenu.innerHTML = createTreeHtml(-1,-1);

					positionTreeElement(currentId)

				}

				//console.log(childs);
				


			}

			// 新建结束了
			create.isCreate = false;
			leftClick()

		}
	})
	//--------------------------------删除文件------------------------------------------
	//*事件不能套事件
	
	var del = document.getElementById('del'); 
	//弹框
	var tanBox = document.getElementById('tanbox');
	var conf = document.querySelector('.conf')
	var closeIco = document.querySelector('.close-ico');
	var closeA = tanBox.querySelectorAll('a')
	t.on(del,'click',function(){
		var selectArr = whoSelected()
		if(selectArr.length ===0){
			fullTipBox.style.top = '-32px'
			tipText.innerHTML = '请选择删除的文件'
			fullTip.style.background = 'red'
			ico.style.background = 'url(img/full-tip-w.png) no-repeat 0 4px '
			promptBox()
		}else{
			tanBox.style.display = 'block'
			moveSelectBox()
		}
	})
	
		//点X 弹出的删除框消失
		t.on(closeIco,'click',function(){
			tanBox.style.display = 'none'
		})
		//点取消 弹出的删除框消失
		t.on(closeA[1],'click',function(){
			tanBox.style.display = 'none'
		})
		t.on(closeA[0],'click',function(){
			var selectArr = whoSelected()
			tanBox.style.display = 'none'
			function getChildsAllById(id){
					// 找到这个id的数据
				console.log(id)
				var item = getDataById(id);
						
				var arr = [];
					// 把id对对应的数据push到数组中
				arr.push(item);
				for(var attr in data){
					if(data[attr].pid == id){
						arr = arr.concat(getChildsAllById(data[attr].id))
					}
				}
		
				return arr;
			}
			// 删除指定id下所有的子孙数据
			function delectDataById(id){
				console.log(id)
				var childsAll = getChildsAllById(id);
				console.log(childsAll)
				for( var i = 0; i < childsAll.length; i++ ){
							
					delete data[childsAll[i].id]
				}
		
			}
		
			for( var i = 0; i < selectArr.length; i++ ){
				selectArr[i].parentNode.remove();
				delectDataById(selectArr[i].parentNode.dataset.id)
			}
			console.log(selectArr)
			tipText.innerHTML = '删除成功'
			fullTip.style.background = 'blue'
			promptBox()
			treeMenu.innerHTML = createTreeHtml(-1,-1);
			leftClick()
			//这个时候就是删除成功了
			var childs = getChildsById(currentId);
			if(childs.length ===0){
				fEmpty.style.display = 'block'
				checkedAll.classList.remove('checked')
				return
			}
	})
	//------------------------------重命名--------------------------------------------
	var rename = document.getElementById('rename')
//	var fileItems = document.querySelectorAll('.file-item')[0]
//	var inputs = fileItems.querySelector('input')
//	var spans = fileItems.querySelector('span')
	t.on(rename,'click',function(){
		var selectArr = whoSelected()
		if(selectArr.length ===0){
			tipText.innerHTML = '请选择重命名的文件'
			fullTip.style.background = 'plum'
			ico.style.background = 'url(img/full-tip-w.png) no-repeat 0 4px '
			promptBox()
		}else{
//			spans.style.display = 'none'
//			inputs.style.display = 'block'
//			inputs.focus()
		}
	})
	//----------提示框------------------------
	function promptBox(){
		
		mTween(fullTipBox,{top:10},100,"linear",setTimeout(function(){
			mTween(fullTipBox,{top:-32},100)
		},500))
	}
	//----------------------拖拽删除框----------------------------------
	function moveSelectBox(){
		var disX = 0;
		var disY = 0;
		conf.onmousedown = function(ev){
			if(ev.target.nodeName =='I'){
				return
			}
			if(ev.target.nodeName =='A'){
				return
			}
			ev.preventDefault()
			disX = ev.clientX - conf.offsetLeft;  //X轴	
			disY = ev.clientY - conf.offsetTop;  //Y轴	
			//x轴最大宽
			var maxX = document.documentElement.clientWidth - conf.clientWidth;
			//Y轴最大高
			var maxY = document.documentElement.clientHeight - conf.clientHeight;
			document.onmousemove = function(ev){
				var l = ev.clientX	- disX;
				var t = ev.clientY	- disY;

				if(l < 0) {
					l = 0;
				}
				if(t < 0){
					t = 0;
				}

				if(l >= maxX){
					l = maxX;
				}
				if(t >= maxY){
					t = maxY;
				}

				conf.style.left = l + 'px';
				conf.style.top = t + 'px';
			}
			document.onmouseup = function(){
				document.onmousemove = document.onmouseup = null
			}
		}
	}
})();

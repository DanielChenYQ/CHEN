//var tabber1 = new Yetii({
//id: 'demo'
//});

//demo=js 	demo-nav=dq
//window.onload=function(){
//	var demo = document.getElementById("demo");
//	var tabs = demo.getElementsByTagName("div");
//	var nav = document.getElementById("demo-nav");
//	var nav_li = nva.getElementsByTagName("li");
//	var nav_a = nav_li.getElementsByTagName("a");
//	var num = 0;
//	nav_a[num].className = "hover";
//	function tabs_container(a){
//		for(var i = 0; i < nav_a.length; i++){
//			nav_a[i].className= "";
//			tabs[i].style.display = "none";
//		}
//		nav_a[num].className = "hover";
//		tabs[num].style.display = "block";
//		if(a > nav_a.length-1){
//			a = 0;
//			}else{
//				a > nav_a.length-1;
//				num = a;
//				}
//		}
//		for(var i = 0; i < nav_a.length;i++){
//			nav_a[i].chufa = i ;
//			nav_a[i].onclick = function(){
//				num = this.chufa;
//				tabs_container();
//			}
//		}
//	}
//}



//window.onload=function(){
//	var demo = document.getElementById("demo");
//	var odemo = demo.getElementsByTagName("div");
//	var demo-nav = document.getElementById("demo-nav");
//	var odemo-nav= demo-nav.getElementsByTagName("li");
//	var num = 0;
//	odemo-nav[num].className = "hover";
//	function Genei(a){
//		for(var i=0; i < odemo-nav.length;i++){
//			odemo-nav[i].className= "";
//			odemo[i].style.display = "none";
//		}
//		odemo-nav[num].className = "hover";
//		odemo[num].style.display = "block";
//		if(a > odemo-nav.length-1){
//			a = 0;
//			}else{
//				a > odemo-nav.length-1;
//				num = a;
//				}
//		}
//	for(var i = 0; i < odemo-nav.length;i++){
//		odemo-nav[i].chufa = i ;
//		odemo-nav[i].onclick = function(){
//			num = this.chufa;
//			Genei();
//		}
//	}
//	var out = setInterval(change,1000);
//	function change(){
//		if(num == odemo-nav.length){
//			num = 0;
//			}else{
//				Genei(num);
//				num++;	
//			}
//		}
//	}
//function getClass(className) { //className指class值
//     
//              var tagname = document.getElementsByTagName('*');  //获取指定元素
//              var tagnameAll = [];     //数组用于存储所符合条件元素
//              for (var i = 0; i < tagname.length; i++) {     //遍历获元素
//                  if (tagname[i].className.indexOf(className)>=0){     //获元素class值等于指定类名赋值给tagnameAll
//                      tagnameAll[tagnameAll.length] = tagname[i];
//                  }
//              }
//              return tagnameAll;
//      }
//window.onload=function(){
//	var btn = getClass("tabs");
//	var div = getClass('tab');
//	for(i = 0;i<btn.length;i++){
//		btn[i].onclick=function(){
//			var index = (this.getAttribute('index')-0);
//			if(btn[index].className.indexOf('curr_btn')>=0)return;
//			for(i=0;i<btn.length;i++){
//				if(index==i){
//					btn[i].className='tabs curr_btn';
//					div[i].className='tab curr_div';
//				}else{
//					btn[i].className='tabs';
//					div[i].className='tab';
//				}
//			}
//		}
//	}
//}

window.onload = function(){
	var DemoBtn = document.getElementById("Btn1");
	var BtnLi = DemoBtn.getElementsByTagName("li");
	var Con = document.getElementById("con");
	var Div = Con.getElementsByTagName("dfn");
	var now = null;
	for(var i=0;i< BtnLi.length;i++){
		BtnLi[i].index = i;
		BtnLi[i].style.cursor = "pointer";
		BtnLi[i].onclick = function(){
			now = this.index;
			move(now);
		}
	}
	function move(a){
		for(var i=0;i<BtnLi.length;i++){
			Div[i].style.display="none";
			BtnLi[i].className = "";
		}
		Div[a].style.display = "block";
		BtnLi[a].className = "active";
	}
}


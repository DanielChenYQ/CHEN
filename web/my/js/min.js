window.onload=function(){
	var item = document.getElementById("item");
	var oitem = item.getElementsByTagName("div");
	var ool = document.getElementById("ool");
	var oool= ool.getElementsByTagName("li");
	var num = 0;
	oool[num].className = "hover";
	function Genei(a){
		for(var i=0; i < oool.length;i++){
			oool[i].className= "";
			oitem[i].style.display = "none";
		}
		oool[num].className = "hover";
		oitem[num].style.display = "block";
		if(a > oool.length-1){
			a = 0;
			}else{
				a > oool.length-1;
				num = a;
				}
		}
	for(var i = 0; i < oool.length;i++){
		oool[i].chufa = i ;
		oool[i].onclick = function(){
			num = this.chufa;
			Genei();
		}
	}
	var out = setInterval(change,1000);
	function change(){
		if(num == oool.length){
			num = 0;
			}else{
				Genei(num);
				num++;	
			}
		}
	}

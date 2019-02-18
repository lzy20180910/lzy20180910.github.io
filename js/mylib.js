function $(num){
		var firstnum = num.substring(0,1);
		var name = num.substring(1);
		if(firstnum === "#"){
			return document.getElementById(name);
		} else if(firstnum === "."){
			return document.getElementsByClassName(name);
		} else{
			return document.getElementsByTagName(num);
		}
}

// 封装滚动条缓动动画
function scrollAnimate(target){
	if(window.timer){
		clearInterval(window.timer);
	}
	var current = window.pageYOffset;
			window.timer = setInterval(function(){
				step = (target-current)/10;					
				if(step>0){
					if(step<=0.1){
					step= Math.floor(step);
					}
				}else{
					if(step>=-0.1){
					step= Math.ceil(step);
					}
				}
				if(step==0){
				clearInterval(window.timer);	
				current=target;			
				}
				current+=step;
				window.scrollTo(0, current);
			}, 20)
}
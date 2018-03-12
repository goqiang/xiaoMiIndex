!function(){
var star = document.querySelector(".star2");
var reSpans = document.querySelectorAll(".roket span");
var roket=document.querySelector(".roket");
var timer;
var i=0;
		//向右
		reSpans[0].onclick = function(){
			i=1;
			star.style.left="0px";
			this.nextElementSibling.style.color = "#FF4400";
			this.style.color = "grey";
		}
		//向左
		reSpans[1].onclick =  function(){
			i=0;
			star.style.left="-1226px";
			this.previousElementSibling.style.color = "#FF4400";
			this.style.color = "grey";
		}
function starF(){
	if(i=="0")
	{
	        star.style.left="0px";
			reSpans[1].style.color = "#FF4400";
			reSpans[0].style.color = "grey";
			i=1;
	 
	}
	else if(i== "1"){
	        star.style.left="-1226px";
			reSpans[0].style.color = "#FF4400";
			reSpans[1].style.color = "grey";
			i=0;
	}
}
timer=setInterval(starF,3000);
roket.onmouseover=function () {
	clearInterval(timer);
}
roket.onmouseout=function () {
    timer=setInterval(starF,3000);
}
}()

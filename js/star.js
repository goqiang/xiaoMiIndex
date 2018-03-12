!function(){
var star = document.querySelector(".star2");
var reSpans = document.querySelectorAll(".roket span");
var roket=document.querySelector(".roket");
var timer;
		//向右
		reSpans[0].onclick = function(){
			star.style.left = "0px";
			reSpans[1].style.color = "#FF4400";
			this.style.color = "";
		}
		//向左
		reSpans[1].onclick =  function(){
			star.style.left= "-1226px";
			reSpans[0].style.color = "#FF4400";
			this.style.color = "";
		}
function starF(){
	var leftValue=star.style.left;
	if(leftValue=="-1226px")
	{
	  star.style.left="0px";
	  reSpans[0].style.color = "#FF4400";
	  reSpans[1].style.color = "";
	 
	}
	else{
	  star.style.left="-1226px";
	  reSpans[1].style.color = "#FF4400";
	  reSpans[0].style.color = "";
	}
}
timer=setInterval(starF,6000);
roket.onmouseover=function () {
	clearInterval(timer);
}
roket.onmouseout=function () {
    timer=setInterval(starF,5000);
}
}()

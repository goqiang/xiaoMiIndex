!function(){
var recommend2 = document.querySelector(".recommend2");
var reSpans = document.querySelectorAll(".roket span");
var roket=document.querySelector(".roket");
var leftValue=0;
		//向右       
		reSpans[0].onclick = function(){
			if(leftValue==-2452)
			{
				reSpans[1].style.disabled=true;
				leftValue+=1226;
			}
			else if(leftValue==0){			
				reSpans[0].style.disabled=true;
			}
			else{
				leftValue+=1226;
			}
			recommend2.style.left=leftValue+"px";
		}
		//向左
		reSpans[1].onclick =  function(){
			if(leftValue==0){
				reSpans[0].style.disabled=true;
				leftValue-=1226;
			}
			else if(leftValue==-2452){
				reSpans[1].style.disabled=true;				
			}
			else{
				leftValue-=1226;
			}
			recommend2.style.left=leftValue+"px";	
		}
}()

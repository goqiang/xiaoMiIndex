var subNav=document.querySelector(".subNav");
var as=document.querySelectorAll(".nav_left a.nava");
for(var i=0;i<as.length;i++)
{
	as[i].onmouseenter=function(){
		subNav.id="sub";
		subNav.innerHTML=this.firstElementChild.innerHTML;
	}		
	as[i].onmouseleave=function(ev){
		var relatedObj=ev.relatedTarget;
		if(relatedObj.className=="subNav" || isChild(subNav,relatedObj))
		{
			subNav.id="sub";
		    subNav.innerHTML=this.firstElementChild.innerHTML;
		}
		else{
			subNav.id="";
			subNav.innerHTML="";
		}
	}
}
subNav.onmouseleave=function(){
	        this.id="";
	        subNav.innerHTML="";
	       }
function isChild(p,s){
	while(s.tagName!="BODY")
	{
		if(s.parentNode==p)
		{
			return 1;
		}
		s=s.parentNode;
	}
	return 0;
}

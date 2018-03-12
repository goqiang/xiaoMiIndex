var subNav=document.querySelector("#subNav");
var as=document.querySelectorAll(".nav_left a.nava");
for(var i=0;i<as.length;i++)
{
	as[i].onmouseenter=function(){
		subNav.className="sub";
		subNav.innerHTML=this.firstElementChild.innerHTML;
	};
	as[i].addEventListener("mouseleave",function(ev){
		var relatedObj=ev.relatedTarget;
		if(relatedObj.id=="subNav")
		{
			subNav.className="sub";
		    subNav.innerHTML=this.firstElementChild.innerHTML;
		}
		else{
			subNav.className="";
			subNav.innerHTML="";
		}
	},true);
	///as[i].addEventLisenter("")
//	as[i].onmouseleave=function(ev){
//		var relatedObj=ev.relatedTarget;
//		if(relatedObj.id=="subNav")
//		{
//			subNav.className="sub";
//		    subNav.innerHTML=this.firstElementChild.innerHTML;
//		}
//		else{
//			subNav.className="";
//			subNav.innerHTML="";
//		}
//	}
}
subNav.onmouseleave=function(){
	        this.className="";
	        subNav.innerHTML="";
	       }

!function (){
var hiddenUls=document.querySelectorAll("ul.elec1_cont_right");
var electCardObj=document.querySelector(".electCard");
var lis=document.querySelectorAll("ul.elec2>li");
console.log(lis);
var lisAs=document.querySelectorAll("ul.elec2>li>a");
console.log(lisAs);
var i=0;
for(var k=0;k<hiddenUls.length;k++)
{
	var index;
    lisAs[k].index=k;
	lisAs[k].onmouseover=function(){
		i=this.index;
		init();
		console.log(hiddenUls[i].innerHTML);
		console.log(electCardObj.firstElementChild);
		electCardObj.firstElementChild.innerHTML=hiddenUls[i].innerHTML;
		lis[i].className="liNow";
	    lisAs[i].className="liNowA";
	};
}
function init(){
			for(var j = 0; j < hiddenUls.length; j++)
		    {
			   hiddenUls[j].style.display="none";
			   lis[j].className="";
			   lisAs[j].className="";
			}
	}
}()
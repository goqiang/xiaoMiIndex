!function(){	
	var uls = document.querySelectorAll("ul.elec1_cont_right");
	//var electCardObj=document.querySelector(".electCard");
	//var liNowObj=document.querySelector("li.liNow");
	var lis = document.querySelectorAll("ul.elec2 li");
	var liAs = document.querySelectorAll("ul.elec2 li a");
	var i=0;
    for(var k=0;k<uls.length;k++)
    {
       	liAs[k].index=k;
       	liAs[k].onmouseover=function(){
     		i = this.index;
       		init();
       		uls[i].style.display="block";
       		lis[i].className="liStyle";
			liAs[i].className="aStyle";
       };
    }
	function init(){
			for(var j = 0; j < uls.length; j++)
		    {
			   uls[j].style.display="none";
			   lis[j].className="";
			   liAs[j].className="";
			}
	}
}()	
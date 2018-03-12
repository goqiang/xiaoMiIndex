! function() {
	function card(_uls,_lis,_liAs){
		var uls = document.querySelectorAll(_uls);
		//var electCardObj=document.querySelector(".electCard");
		//var liNowObj=document.querySelector("li.liNow");
		var lis = document.querySelectorAll(_lis);
		var liAs = document.querySelectorAll(_liAs);
		var i = 0;
		for(var k = 0; k < uls.length; k++) {
			liAs[k].index = k;
			liAs[k].onmouseover = function() {
				i = this.index;
				init();
				uls[i].style.display = "block";
				lis[i].className = "liStyle";
				liAs[i].className = "aStyle";
			};
		}

		function init() {
			for(var j = 0; j < uls.length; j++) {
				uls[j].style.display = "none";
				lis[j].className = "";
				liAs[j].className = "";
			}
		}
	}
	card("ul.elec1_cont_right","ul.elec2 li","ul.elec2 li a");
    card("ul.intel1_cont_right","ul.intel2 li","ul.intel2 li a");
}()
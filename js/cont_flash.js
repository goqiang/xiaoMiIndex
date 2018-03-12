! function() {
	function contflash(_id){
		var reSpans = document.querySelectorAll("#"+_id+" span.cont_roket");
		var lis = document.querySelectorAll("#"+_id+" ul.contFlash li");
		var ul = document.querySelector("#"+_id+" ul.contFlash");
		var lisx = document.querySelectorAll("#"+_id+" div.content_circle span");
		var i = 0;
		//左
		reSpans[0].onclick = function() {
			(i > 0) ? i-- : null;
			ul.style.left = -i * 293 + "px";
			init(i);
		}
		//右
		reSpans[1].onclick = function() {
			(i < lis.length - 1) ? i++ : null;
			ul.style.left = -i * 293 + "px";
			init(i);
		}
		!function() {
			for(var k = 0; k < lisx.length; k++) {
				lisx[k].index = k;
				lisx[k].onclick = function() {
					i = this.index;
					ul.style.left = -i * 293 + "px";
					init(i);
				}
			}
		}()

		function init(i) {
			for(var j = 0; j < lisx.length; j++) {
				lisx[j].style.border = "";
				lisx[j].style.background = "";
			}
			lisx[i].style.border = "2px solid #FF4400";
			lisx[i].style.background = "white";
		}
	}
	contflash('content2_li4');
	contflash('content2_li3');
	contflash('content2_li2');
	contflash('content2_li1');
}()
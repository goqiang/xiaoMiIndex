!function(){
var spans = document.querySelectorAll(".banner span");
var imgs = document.querySelectorAll(".banner img");
var lisx = document.querySelectorAll("ol.nav_circle li");
var flash = document.querySelector(".banner");
var i = 0,
	timer,
	Interval = 2000;
//点击左边按钮
spans[0].onclick = function() {
	i--;
	(i < 0) ? (i = imgs.length - 1) : null;
	Inti(i);
}
//点击右边按钮
spans[1].onclick = function() {
		i++;
		(i == imgs.length) ? (i = 0) : null;
		Inti(i);
	}
	//通过点击点来切换幻灯片
	! function() {
		for(var k = 0; k < lisx.length; k++) {
			lisx[k].index = k;
			lisx[k].onclick = cirlc;

			function cirlc() {
				i = this.index;
				Inti(i);
			};
		}
	}()
//初始化图片与圆圈
function Inti(i) {
	for(var j = 0; j < imgs.length; j++) {
		imgs[j].className = "";
		lisx[j].className = "";
	}
	imgs[i].className = "now";
	lisx[i].className = "nowx";
}
//自动播放
function Next() {
	i++;
	(i == imgs.length) ? (i = 0) : null;
	Inti(i);
}
timer = setInterval(Next, Interval);
flash.addEventListener("mouseover", function() {
	clearInterval(timer);
}, false)
flash.addEventListener("mouseout", function() {
	timer = setInterval(Next, Interval);
}, false)
}()
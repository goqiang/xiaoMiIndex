var subText = document.getElementById("sub");
var cart = document.getElementById("cart");
cart.onmouseover = F;
cart.onmouseout = F1;
function F() {
	subText.innerHTML = "购物车中还没有商品，赶紧选购吧！";
}

function F1() {
	subText.style.transition = "0.7s";
	subText.innerHTML = "";
}
var searInput=document.querySelector("input[type='search']");
var myDataUl=document.querySelector("#myData");
var data=['小米6','小米5','红米3','手环','手表','移动电源'];
var reSou=document.querySelector(".search_content");
var searForm=document.querySelector("input[name='searForm']");
var lis="";
searInput.onfocus=list;
function list(){
	var str="";
	for(var i=0;i<data.length;i++)
	{
		str+="<li><a href='http://baidu.com/'>"+data[i]+"</a></li>";		
	}
	myDataUl.innerHTML=str;
	reSou.style.display="none";
	//给li绑定单击事件	
	lis=document.querySelectorAll("#myData li");
	console.log(lis);
	for(var i=0;i<lis.length;i++)
	{
		lis[i].onmouseenter=function() {
//			alert(lis[i].innerText);
            reSou.style.display="none"; 
			searInput.value=this.innerText;
//			this.parentNode.parentNode.onsubmit();
		}
	}
}
console.log(searForm);
//searForm.onchange=function(ev)
//{
//	console.log(ev.type);
//	myDataUl.innerHTML="";
//	reSou.style.display="block";
//}
searInput.onblur=function()
{
	myDataUl.innerHTML="";
	reSou.style.display="block";
	searInput.value="";
}


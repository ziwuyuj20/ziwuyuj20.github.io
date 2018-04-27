$(".downMenuBox div").click(function(){
    $(this).toggleClass('hover').siblings().removeClass('hover');
})
//下拉框滑入滑出效果
$(".downMenuBox div").click(function(){
	//收回
	$(".downMenuBox div").not(this).next(".MenuCenter").slideUp(350);
	//显示
	$(this).next(".MenuCenter").slideToggle(350);
});
//动态数据图
//获取总数
var allNum = $(".numTxt1").attr("name");
// $(".allNum").animate({
//     width:500+"px",
// },1000,"linear");
//循环定时器
var i1 = 0;
var txt;
function Fn(obj,a){
	var time1 = setInterval(function(){
	    i1++;
	    txt = parseInt((i1/100)*a);
	    obj.text(txt);
	    if(txt >= a){
	    	clearInterval(time1);
	    	obj.text(a);
	    }
	},10);
}
var obj1 = $(".num1");
Fn(obj1,allNum);
var obj2 = $(".number2");
var num2 = $(".number2").attr("name");
Fn(obj2,num2);
var obj3 = $(".number3");
var num3 = $(".number3").attr("name");
Fn(obj3,num3);
var obj4 = $(".number4");
var num4 = $(".number4").attr("name");
Fn(obj4,num4);
function Fn2(num,OBJ){
	var w = (num/allNum)*500;
	OBJ.animate({
		width:w+"px",
	},1000,"linear");
}
var pobj1 = $(".allNum1");
Fn2(num2,pobj1);
var pobj2 = $(".allNum2");
Fn2(num3,pobj2);
var pobj3 = $(".allNum3");
Fn2(num4,pobj3);
function Fn3(num,obj){
	var txt = (num / allNum) * 100;
	obj.text(txt);
}
var percentage1 = $(".percentage1");
var percentage2 = $(".percentage2");
var percentage3 = $(".percentage3");
Fn3(num2,percentage1);
Fn3(num3,percentage2);
Fn3(num4,percentage3);
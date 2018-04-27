//分类UL长度计算
//获取收放按钮宽度
var classBTnW = $(".classBtn").css("width");
$(".classIco").css("margin-right",classBTnW);
var classIcoNum = ($(".classIco").length);
var leftW = parseInt($(".classIco").css("margin-right")) * classIcoNum;
//Li总长度
var Liw = 0;
$(".classIco").each(function(){
	var w = $(this).css("width");
	Liw += parseInt(w);
})
//设置classUl的长度
$(".classUl").css("width",leftW+Liw + 1);
//展开全部分类
$(".openbutton").on("touchstart",function(){
	$(".maskBox").show();
})
//收起全部分类按钮
$(".closebutton").on("touchstart",function(){
	$(".maskBox").hide();
})
//分类滑动
//获取分类外框宽度
var classCenterW = parseInt($(".classCenter").css("width"));
//获取分类条总长度
var ClassUl = parseInt($(".classUl").css("width"));
var maxw = ClassUl - classCenterW;
//向左滑动
var w = 0;
$(".classCenter").on("swipeleft",function(event){
	w += classCenterW;
	if(w < maxw){
		$(".classUl").animate({
			left:-w+"px"
		},250,"linear");
	}else{
		$(".classUl").animate({
			left:-maxw + "px"
		},250,"linear");
		w = maxw;
	}
})
//向右滑动
$(".classCenter").on("swiperight",function(event){
	w -= classCenterW;
	if(w > 0){
		$(".classUl").animate({
			left:-w+"px"
		},250,"linear");
	}else{
		$(".classUl").animate({
			left:0 + "px"
		},250,"linear");
		w = 0;
	}
})
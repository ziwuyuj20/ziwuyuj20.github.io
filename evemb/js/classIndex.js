//高度补充
var H = $(".outBox").css("height");
$(".HBox").css("height",H);
var imgH = $(".classImg").css("height");
$(".classTxt").css(imgH);
var txtTop = parseInt($(".classImg").css("height"));
$(".txtTop").css("margin-top",(txtTop * 0.38) + "px");
var bottom = $(".footer").css("height");
console.log(bottom);
$(".bottom").css("height",bottom);
$(document).scroll(function(){
	$(document).unbind("touchstart");
})
//展开收起分类操作
//展开
$(".classImg").on("touchend",function(){
	$(this).hide();
	event.stopPropagation();
	$(this).parent().find(".classpopupeBox").show();
	$(this).parent().find(".classUl").slideDown(500,"linear");
})
//收起
$(".popupeHead").on("touchstart",function(){
	event.stopPropagation();
	$(this).parent().find(".classUl").slideUp(500,"linear",function(){
		$(this).parent().hide();
		$(this).parent().parent().find(".classImg").show();
	})
})
//滚屏开始
$(document).on("scrollstart",function(){
	$(".classImg").unbind("touchend");
})
//滚屏结束
$(document).on("scrollstop",function(){
	$(".classImg").on("touchend",function(){
	    $(this).hide();
	    event.stopPropagation();
	    $(this).parent().find(".classpopupeBox").show();
	    $(this).parent().find(".classUl").slideDown(500,"linear");
    })
})
//分类、排序操作
var thisname = $(".SelectBox-ul-li3").attr("name");
$(".SelectBox-ul-li").on("tap",function(){
	$(".SelectBox-ul-li").find("p").removeClass("SelectBox-ul-li-txt-color");
	$(this).find("p").addClass("SelectBox-ul-li-txt-color");
})
//销量递增递减符号变化
$(".SelectBox-ul-li3").on("tap",function(){
	$(".SelectBox-ul-li").find("p").removeClass("SelectBox-ul-li-txt-color");
	$(this).find("p").addClass("SelectBox-ul-li-txt-color");
	if(thisname == 0 || thisname == 2){
		$(this).find("img").attr("src","img/state2.png");
		thisname = 1;
	}else if(thisname == 1){
		$(this).find("img").attr("src","img/state1.png");
		thisname = 2;
	}
})
$(".SelectBox-ul-li1,.SelectBox-ul-li2,.SelectBox-ul-li4").on("tap",function(){
	thisname = 0;
	$(".SelectBox-ul-li3").find("img").attr("src","img/state3.png");
})
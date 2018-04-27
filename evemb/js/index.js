//禁用手机默认的触屏滚动行为
function Fadd(){
	$(document).on("touchstart",function (){
	   event.preventDefault();
    },false);
}
$("input").attr('data-role','none');
$("select").attr('data-role','none');
//高度补充
$(".top").css("height",$(".headBox").css("height"));
$(".bottom").css("height",$(".footer").css("height"));
//设置轮播图外框高度
var CarouselBoxH = $(".CarouselIco").find("img").height();
$(".CarouselBox").height(CarouselBoxH);
//惰性加载
$(document).scroll(function(){
	//获取滚动条高度
	var scrollH = $(document).scrollTop();
	//获取屏幕高度
	var rideoH = $(window).height();
	//加载图片
	$(".loadImg").each(function(){
		//获取图片的垂直位置
	    var imgh = $(this).offset().top;
		if(scrollH + rideoH > imgh + 90){
		    var add = $(this).attr("data-src");
		    $(this).attr("src",add);
	    }
	})
	//生成返回顶部按钮
	//获取为你推荐位置
	var RecommendBoxH = $(".RecommendBox").offset().top;
	if(scrollH - rideoH > 0){
		$(".topBtn").show();
	}else{
		$(".topBtn").hide();
	}
})
//点击收藏
$(".collectionImg").on("tap",function(){
	if($(this).attr("name") != 1){
		$(this).attr("src","img/Collection.png");
		$(this).attr("name","1");
	}else{
		$(this).attr("src","img/collection1.png");
		$(this).attr("name","0");
	}
})
//滚动图滑动
//向左滑动
var w = 0;
var index = 0;
$(".CarouselUl").on("swipeleft",function(){
	w -= 100;
	if(w > -300){
		$(this).animate({
		    left: w + "%"
	    },500,"linear");
	    index += 1;
	}else{
		w = -200;
		index = 2;
		$(".CarouselUl").css("left",w + "%");
	}
	$(".spotIco").removeClass("spotIcoImg");
	$(".spotIco").eq(index).addClass("spotIcoImg");
})
//向右滑动
$(".CarouselUl").on("swiperight",function(){
	w += 100;
	if(w < 100){
		$(this).animate({
		    left: w + "%"
	    },500,"linear");
	    index -= 1;
	}else{
		w = 0;
		index = 0;
		$(".CarouselUl").css("left",w + "%");
	}
	$(".spotIco").removeClass("spotIcoImg");
	$(".spotIco").eq(index).addClass("spotIcoImg");
})
//点击返回顶部
$(".topBtn").on("tap",function(){
	$(document).scrollTop("0");
})
//获取屏幕高度
var rideoH = $(document).height();
//设置搜索窗的高度
$(".popupe").css("height",rideoH);
//生成搜索框
$(".headIpt").on("tap",function(){
	$(".popupe").show();
})
//点击取消隐藏搜索框
$(".popupeClose").on("tap",function(){
	$(".popupe").hide();
})
//启用接解除手机屏幕默认滚动
$(".goodUl").on("touchstart",function(){
	$(document).unbind("touchstart");
})
$(".CarouselUl").on("touchstart",function(){
	Fadd();
})
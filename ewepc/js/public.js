//生成手机版二维码
$(".QRBTN,.QR").mouseover(function(){
	$(".QR").show();
})
$(".QRBTN,.QR").mouseout(function(){
	$(".QR").hide();
})
//生成商品分类弹窗
$(".STYPEGOODS,.TYPEBOX").mouseover(function(){
	$(".TYPEBOX").show();
	$(".STYPEGOODS").addClass("BGC");
})
$(".STYPEGOODS,.TYPEBOX").mouseout(function(){
	$(".TYPEBOX").hide();
	$(".STYPEGOODS").removeClass("BGC");
})
//网页导航
$(".NAVI,.NAVIGATION").mouseover(function(){
	$(".NAVIGATION").show();
	$(".NAVI").addClass("BGC");
})
$(".NAVI,.NAVIGATION").mouseout(function(){
	$(".NAVIGATION").hide();
	$(".NAVI").removeClass("BGC");
})
//侧边栏伸出
$(".SIDEBARBGC").mouseover(function(){
	$(this).parent().find(".SIDEBARTXT").show();
	$(".SIDEBARBGC").removeClass("hoverColor");
	$(this).addClass("hoverColor");
	$(".SIDEBARTXT").removeClass("hoverColor");
	$(this).parent().find(".SIDEBARTXT").addClass("hoverColor");
})
$(".SIDEBARTXT").mouseover(function(){
	$(this).show();
	$(this).parent().find(".SIDEBARBGC").addClass("hoverColor");
})
//侧边栏收起
$(".SIDEBARBGC,.SIDEBARTXT").mouseout(function(){
	$(".SIDEBARTXT").hide();
	$(".SIDEBARBGC").removeClass("hoverColor");
})
//店铺收藏
$(".searchShope").click(function(){
	$(this).find("img").attr("src","img/rgtht.png");
})
//侧边悬浮栏背景高度
$(".SIDEBARBGCBOX").css("height",$(document).height());
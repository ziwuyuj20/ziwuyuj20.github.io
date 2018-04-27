//高度补充
var head_H = $(".Collection_head_box").height();
var footer_H_1 = $(".Cancel_attention_box_1").height();
var footer_H_2 = $(".Cancel_attention_box_2").height();
$(".head").css("height",head_H);
$(".footer").css("height",footer_H_1);
//点击编辑编辑店铺
$(".edit_btn").on("click",function(){
	if($(this).attr("name") == 0){
		$(this).text("完成");
		$(".shop_img_1").css("display","inline-block");
		$(this).attr("name","1");
	}else if($(this).attr("name") == 1){
		$(this).text("编辑");
		$(".shop_img_1").css("display","none");
		$(this).attr("name","0");
	}
})
//复选框选择操作
$(".shop_li").on("click",function(){
	if($(this).find(".shop_img_1").attr("name") == 0){
		$(this).find(".shop_img_1").attr("src","img/htrjyt.png");
	    $(this).find(".shop_img_1").attr("name","1");
	}else if($(this).find(".shop_img_1").attr("name") == 1){
		$(this).find(".shop_img_1").attr("src","img/hnernn.png");
	    $(this).find(".shop_img_1").attr("name","0");
	}
})
//点击取消关注删除店铺
$(".Cancel_attention_btn_1").on("click",function(){
	$(".shop_img_1").each(function(){
		if($(this).attr("name") == 1){
			$(this).parent().remove();
		}
	})
})
//优惠券滚屏页码部分
//内容总高度
var allH;
//每页高度（10行每页）
var icoH;
var pageH;
//总页数
var allsum;
var integer;
var sum_1 = 0;
$(".shop_ul").find("li").each(function(){
	sum_1 ++;
})
//获取内容总高度
allH = (parseInt($(".shop_ul").find("li").eq(0).height())) * sum_1;
 //获取每页高度（10行每页）
icoH = parseInt($(".shop_ul").find("li").eq(0).height());
pageH = icoH * 10;
//获取总页数
allsum = allH / pageH;
integer = parseInt(allsum);
if(allsum > integer){
	allsum = integer + 1;
}else{
	allsum = integer;
}
$(".allPage").text(allsum);
$(".newPage").text("1");
//动态改变当前页码
$(document).scroll(function(){
	//获取元素到可视区顶部的距离
	var rideoH_1 = $(window).height();
	var H = Math.abs($(".shop_ul").offset().top - $(window).scrollTop());
	var page = rideoH_1 + H - parseInt($(".Cancel_attention_box_1").height() + 25);
	var pageNEW = parseInt((page / pageH) + 1);
	$(".newPage").text(pageNEW);
})

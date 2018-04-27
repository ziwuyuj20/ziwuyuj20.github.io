$("input").attr('data-role','none');
$("select").attr('data-role','none');
//高度补充
var H1 = $(".outBox").css("height");
$(".sizeBox").css("height",H1);
$(".bottom").css("height",$(".footer").css("height"));
$(".classCenter").css("height",$(".classUl").css("height"));
var bodyH = $("body").css("height");
$(".maskBox").css("height",bodyH);
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
//返回顶部
$(".topBtn").on("touchend",function(){
	$(document).scrollTop("0");
})
$(".mentBox").css("bottom",$(".footer").css("height"));
$(".bottom1").css("height",$(".mentBox").css("height"));
//同一商店下商品全选
$(".mentIpt").on("tap",function(){
	var goodIpt = $(this).parent().parent().find(".goodIpt");
	if($(this).attr("name") == 0){
		$(this).addClass("Selected");
	    $(this).attr("name","1");
	    goodIpt.addClass("Selected");
	    goodIpt.attr("name","1");
	}else{
		$(this).removeClass("Selected");
	    $(this).attr("name","0");
	    goodIpt.removeClass("Selected");
	    goodIpt.attr("name","0");
	}
})
//单个商品选择
$(".goodIpt").on("tap",function(){
	var count = 0;
	var lenght = $(this).parent().parent().find(".goodIpt").length;
	if($(this).attr("name") == 0){
		$(this).addClass("Selected");
	    $(this).attr("name","1");
	}else{
		$(this).removeClass("Selected");
	    $(this).attr("name","0");
	}
	$(this).parent().parent().find(".goodIpt").each(function(){
		if($(this).attr("name") == 1){
			count++;
		}
		if(count == lenght){
			var mentIpt = $(this).parent().parent().parent().find(".mentIpt");
			mentIpt.addClass("Selected");
			mentIpt.attr("name","1");
		}else{
			var mentIpt = $(this).parent().parent().parent().find(".mentIpt");
			mentIpt.removeClass("Selected");
			mentIpt.attr("name","0");
		}
	})
})
//全选操作
$(".allIpt").on("tap",function(){
	if($(this).attr("name") == 0){
		$(this).addClass("Selected");
		$(this).attr("name","1");
		$(".mentIpt,.goodIpt").addClass("Selected");
		$(".mentIpt,.goodIpt").attr("name","1");
	}else{
		$(this).removeClass("Selected");
		$(this).attr("name","0");
		$(".mentIpt,.goodIpt").removeClass("Selected");
		$(".mentIpt,.goodIpt").attr("name","0");
	}
})
$(".all").on("tap",function(){
	var countIpt = 0;
	var lenghtIpt = $(".all").length;
	$(".all").each(function(){
		if($(this).attr("name") == 1){
		    countIpt++;
	    }
	})
	if(countIpt == lenghtIpt){
		$(".allIpt").addClass("Selected");
		$(".allIpt").attr("name","1");
	}else{
		$(".allIpt").removeClass("Selected");
		$(".allIpt").attr("name","0");
	}
})
//点击编辑进入编辑状态
$(".news").on("tap",function(){
	if($(this).attr("name") == 0){
		$(".style").hide();
	    $(".editStyleBox").show();
	    $(".numP").hide();
	    $(".numBtnBox").show();
	    $(this).text("完成");
	    $(this).attr("name","1");
	    $(".all,.allIpt").addClass("Selected");
		$(".all,.allIpt").attr("name","1");
		$(".mentBtn").hide();
	    $(".editBtnBox").show();
	}else{
		$(".style").show();
	    $(".editStyleBox").hide();
	    $(".numP").show();
	    $(".numBtnBox").hide();
	    $(this).text("编辑");
	    $(this).attr("name","0");
	    $(".all,.allIpt").removeClass("Selected");
		$(".all,.allIpt").attr("name","0");
		$(".mentBtn").show();
	    $(".editBtnBox").hide();
	}
	Fn();
})
//增加商品数量
$(".increase").on("tap",function(){
	var sum = $(this).parent().find(".numIpt").val();
	sum++;
	$(this).parent().find(".numIpt").val(sum);
	$(this).parent().parent().find(".numP").text("╳"+sum);
})
//减少商品的数量
$(".reduce").on("tap",function(){
	var sum = $(this).parent().find(".numIpt").val();
	if(sum >= 1){
		sum--;
		$(this).parent().find(".numIpt").val(sum);
	}else{
		$(this).parent().find(".numIpt").val("0");
	}
	$(this).parent().find(".numIpt").val(sum);
	$(this).parent().parent().find(".numP").text("╳"+sum);
})
var THIS;
var color;
var size;
//编辑颜色
$(".editStyleBox").on("tap",function(){
	Fn();
	THIS = $(this).parent(); 
	$(".maskBox").show();
	//弹窗图片位置
    var TopH = parseInt($(".maskImg").height());
    $(".maskImg").css("top",-TopH/2 + "px");
    $(".goodNumOut").css("height",TopH/2 + "px");
    //设置所点击商品的图片
    var ImgSrc = $(this).parent().parent().find(".shopUlImg").attr("src");
    $(".maskImg").attr("src",ImgSrc);
    //获取未编辑前的数据
	var data = $(this).parent().find(".Price");
	var price1 = data.find("span").eq(1).text();
	var price2 = data.find("span").eq(2).text();
	color = $(this).find("span").eq(1).text();
	size = $(this).find("span").eq(3).text();
	//读取并设置颜色
	$(".colorIco").css("border-color","#e0e0e0").css("color","#333");
	$(".colorIco").each(function(){
		if($(this).text() == color){
			$(this).css("border-color","#e63322").css("color","#e63322");
		}
	})
	//读取并设置尺寸
	$(".sizeIco").css("border-color","#e0e0e0").css("color","#333");
	$(".sizeIco").each(function(){
		if($(this).text() == size){
			$(this).css("border-color","#e63322").css("color","#e63322");
		}
	}) 
})
//同步数据
function Fn(){
    $(".goodCenterBox").each(function(){
	    var initialColor = $(this).find(".style").find("span").eq(1).text();
	    var initialSize = $(this).find(".style").find("span").eq(3).text();
	    $(this).find(".editStyleBox").find("span").eq(1).text(initialColor);
	    $(this).find(".editStyleBox").find("span").eq(3).text(initialSize);
    })
}
Fn();
//设置颜色
$(".colorIco").on("tap",function(){
	$(".colorIco").css("border-color","#e0e0e0").css("color","#333");
	$(this).css("border-color","#e63322").css("color","#e63322");
	var txt = $(this).text();
	THIS.find(".style").find("span").eq(1).text(txt);
})
//设置尺寸
$(".sizeIco").on("tap",function(){
	$(".sizeIco").css("border-color","#e0e0e0").css("color","#333");
	$(this).css("border-color","#e63322").css("color","#e63322");
	var SIZE = $(this).text();
	THIS.find(".style").find("span").eq(3).text(SIZE);
})
//点击确定完成编辑
$(".sureBtn").on("tap",function(){
	$(".maskBox").hide();
	$(".style").show();
	$(".editStyleBox").hide();
	$(".numP").show();
	$(".numBtnBox").hide();
	$(this).text("编辑");
	$(this).attr("name","0");
	$(".all,.allIpt").removeClass("Selected");
	$(".all,.allIpt").attr("name","0");
})
//取消编辑
$(".maskClose").on("touchend",function(){
	$(".maskBox").hide();
	THIS.find(".style").find("span").eq(1).text(color);
	THIS.find(".style").find("span").eq(3).text(size);
})
//删除商品
function Fn1(){
	$(".shopName").each(function(){
		var num = 0;
		$(this).next().find("li").each(function(){
			num++;
			if(num <= 0){
				$(this).parent().remove();
			}
		})
	})
}
Fn1();
$(".delecte").on("touchend",function(){
	$(".Selected").each(function(){
		if($(this).attr("name") == 1){
			$(this).not($(".allIpt:last")).parent().remove();
		}
	})
	Fn1();
})
//优惠卷弹窗
//点击领取优惠卷生成优惠卷弹窗
//内容总高度
var allH;
//每页高度（10行每页）
var icoH;
var pageH;
//总页数
var allsum;
var integer;
//优惠券滚屏页码部分
var sum_1 = 0;
$(".Coupon-btn").on("tap",function(){
	//设置滚动条高度
	$(document).scrollTop("0");
	$(".outBox,.shopBox,.goodUl,.RecommendBox,.mentBox,.footer").hide();
	$(".Coupon-Popup-box").show();
	$(".page-box").show();
	$(".Coupon-Popup-ul").find("li").each(function(){
	    sum_1 ++;
    })
	//优惠卷高度补充
    $(".Coupon-Popup-head-H").css("height",$(".Coupon-Popup-head-box").height());
    //获取内容总高度
    allH = (parseInt($(".Coupon-Popup-ul").find("li").eq(0).height()) + 10) * sum_1;
    //获取每页高度（10行每页）
    icoH = parseInt($(".Coupon-Popup-ul").find("li").eq(0).height()) + 10;
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
})
//关闭优惠卷弹窗
$(".Coupon-Popup-close").on("tap",function(){
	$(".Coupon-Popup-box").hide();
	$(".outBox,.shopBox,.goodUl,.RecommendBox,.mentBox,.footer").show();
	$(".page-box").hide();
})
//动态改变当前页码
$(document).scroll(function(){
	//获取元素到可视区顶部的距离
	var rideoH_1 = $(window).height();
	var H = Math.abs($(".Coupon-Popup-ul").offset().top-$(window).scrollTop());
	var page = rideoH_1 + H;
	var pageNEW = parseInt((page / pageH) + 1);
	$(".newPage").text(pageNEW);
})
//点击领取优惠券
$(".Coupon-Popup-li").on("click",function(){
	var H = $(document).height();
	$(".prompt_box_1").show();
	$(".prompt_box_1").css("height",H);
	if($(this).attr("name") == 0){
		$(".prompt_box_1_txt").text("该优惠券已被领取，请重新领取。")
	}else{
		$(".prompt_box_1_txt").text("领取成功")
	}
	$(".prompt_box_1").hide(3000);
})

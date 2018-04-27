//返回顶部
$(".returnTop").click(function(){
	$(document).scrollTop("0px");
	console.log("a");
})
//图片加载
//获取滚动条高度
var scrollH1 = $(document).scrollTop();
//获取屏幕高度
var rideoH1 = $(window).height();
//加载图片
$(".laoding").each(function(){
	//获取图片的垂直位置
	var imgh = $(this).offset().top;
	if(scrollH1 + rideoH1 > imgh){
		var add = $(this).attr("data-src");
		$(this).attr("src",add);
	}
})
//返回顶部
$(".returnTop").click(function(){
	$(document).scrollTop("0px");
})
//高度补充
$(".typeCenterBox").each(function(){
	$(this).find(".typeLeft").css("height",$(this).find(".typeUl").height());
})
//切换图片
$(".thumbnailImg").click(function(){
	$(this).parent().parent().parent().parent().parent().find(".laoding").removeAttr("data-src");
	var data = $(this).attr("data-src");
	$(this).parent().parent().parent().parent().parent().find(".laoding").attr("src",data);
	$(".thumbnailImg").parent().removeClass("OriginalColor");
	$(this).parent().addClass("OriginalColor");
})
//滚动加载
$(window).scroll(function(){
	//获取滚动条高度
	var scrollH = $(document).scrollTop();
	//获取屏幕高度
	var rideoH = $(window).height();
	//加载图片
	$(".laoding").each(function(){
		//获取图片的垂直位置
	    var imgh = $(this).offset().top;
		if(scrollH + rideoH > imgh){
		    var add = $(this).attr("data-src");
		    $(this).attr("src",add);
	    }
	})
})
//宽度计算
$(".goodCenterImg").each(function(){
	var w = 0;
	var wLeft = parseInt($(".Original").css("margin-left"));
	var goodCenterImgW = 0;
	var icoW = parseInt($(".Original").width() + 2);
	$(this).find(".Original").each(function(){
		w++;
		goodCenterImgW = (w * icoW) + (w * wLeft);
		$(this).parent().css("width",goodCenterImgW + "px");
	})
})
//图片左右移动
$(".goodSum").each(function(){
	var move = parseInt($(".Original").width() + 2);
	var elementLeft = parseInt($(".Original").css("margin-left"));
	var sum = 0;
	var clickSum = 0;
	//向左移动
	$(this).find(".goodCenterBtnRight").click(function(){
		var maxClick = $(this).parent().find(".Original").length - 4;
		if(clickSum < maxClick){
			clickSum++;
			sum += (move + elementLeft);
			$(this).parent().find(".goodCenterImg").animate({
				left:-sum + "px",
			},500,"linear")
		}
	})
	//向右移动
	$(this).find(".goodCenterBtnLeft").click(function(){
		var maxClick = $(this).parent().find(".Original").length - 4;
		if(clickSum >= 1){
			clickSum--;
			sum -= (move + elementLeft);
			$(this).parent().find(".goodCenterImg").animate({
				left:-sum + "px",
			},500,"linear")
		}
	})
})
//切换分类
var INDEX1 = 0;
var INDEX2 = 0;
$(".seniorKind").mouseover(function(){
	$(".seniorKind").removeClass("seniorKindHover");
	$(this).addClass("seniorKindHover");
	$(".seniorKind").css("z-index","0");
	$(this).css("z-index","999");
	var INDEX1 = $(this).index();
	$(".seniorCenterOutG").hide();
	$(".seniorCenterOutG").eq(INDEX1).show();
	$(".cbIpt").removeClass("cbIptBorder");
	$(".cbIpt").removeClass("cbIptBorderm");
	$(".cbIpt").text("");
	$(".setPriceBox").removeClass("setPriceBoxPost");
	$(".seniorBtnBox").hide();
})
$(".seniorCenterOutG").mouseover(function(){
	var INDEX2 = $(this).index();
    $(".seniorKind").eq(INDEX2).addClass("seniorKindHover");
	$(".seniorKind").eq(INDEX2).css("z-index","999");
	$(this).show();
})
$(".seniorKind").mouseout(function(){
	$(".seniorKind").removeClass("seniorKindHover");
	$(".seniorKind").css("z-index","0");
	var INDEX1 = $(this).index();
	$(".seniorCenterOutG").hide();
})
$(".seniorCenterOutG").mouseout(function(){
	var INDEX2 = $(this).index();
    $(".seniorKind").removeClass("seniorKindHover");
	$(".seniorKind").css("z-index","0");
	$(".seniorCenterOutG").hide();
})
//价格设定
$(".setPriceBox").find("input").click(function(){
	$(".PriceHide").show();
	$(this).parent().addClass("setPriceBoxPost");
})
//取消价格设定
$(".PriceCancel,.PriceDetermine").click(function(){
	$(".PriceHide").hide();
})
//多选
$(".Multiselect").click(function(){
	$(this).parent().find(".cbIpt").addClass("cbIptBorder");
	$(this).parent().parent().find(".seniorBtnBox").show();
	// $(".cbIpt").removeClass("cbIptBorderm");
})
//取消多选
$(".seniorBtnLeft,.seniorBtnRight").click(function(){
	$(".cbIpt").removeClass("cbIptBorder");
	$(".cbIpt").text("");
	$(".cbIpt").removeClass("cbIptBorderm");
	$(".seniorBtnBox").hide();
})
//选中和取消选中操作
$(".cbIpt").click(function(){
	if($(this).hasClass("cbIptBorder")){
		$(this).text("√");
		$(this).addClass("cbIptBorderm");
	}
})
//点击选择商品种类
$(".cbIptLink").find("span").click(function(){
	$(".cbIptLink").find("span").css("color","#808080");
	$(this).css("color","#ff3356");
})
$(".cbIpt").click(function(){
	$(this).parent().find("span").css("color","#ff3356");
})
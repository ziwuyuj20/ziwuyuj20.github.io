//返回顶部
$(".returnTop").click(function(){
	$(document).scrollTop("0px");
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
		    var add = $(this).data("src");
		    $(this).attr("src",add);
	    }
	})
})
//长度补充
$(".ArrowUl").each(function(){
	var LiW = 0;
	$(this).find(".ArrowIco").each(function(){
	    var ThisW = parseInt($(this).width());
	    var ThisPaddingL = parseInt($(this).css("padding-left"));
	    var ThisPaddingR = parseInt($(this).css("padding-right"));
	    LiW += (ThisW + ThisPaddingL + ThisPaddingR);
	    $(this).parent().css("width",LiW + 100 +"px");
	})
})
$(".classBox").each(function(){
	var clickSum = -1;
	var LEFT = 0;
	//分类条向左移动
	$(this).find(".ArrowRight").click(function(){
		var sum = $(this).parent().find(".ArrowIco").length - 2;
		if(clickSum < sum){
			clickSum++;
			var clickW = parseInt($(this).parent().find(".ArrowIco").eq(clickSum).width());
			var clickL = parseInt($(this).parent().find(".ArrowIco").eq(clickSum).css("padding-left"));
			var clickR = parseInt($(this).parent().find(".ArrowIco").eq(clickSum).css("padding-right"));
			var all = clickW + clickL + clickR;
            LEFT -= all;
		}else{
			clickSum = sum;
			LEFT += 0;
		}
		$(this).parent().find(".ArrowUl").animate({
			left: LEFT + "px",
		},500,"linear")
	})
	//分类条向右移动
	$(this).find(".ArrowLeft").click(function(){
		if(clickSum > 0){
			clickSum--;
			var clickW = parseInt($(this).parent().find(".ArrowIco").eq(clickSum+1).width());
			var clickL = parseInt($(this).parent().find(".ArrowIco").eq(clickSum+1).css("padding-left"));
			var clickR = parseInt($(this).parent().find(".ArrowIco").eq(clickSum+1).css("padding-right"));
			var all = clickW + clickL + clickR;
            LEFT += all;
		}else{
			clickSum = -1;
			LEFT = 0;
		}
		$(this).parent().find(".ArrowUl").animate({
			left: LEFT + "px",
		},500,"linear")
	})
})
//点击切换
$(".ArrowIco").click(function(){
	$(this).parent().find("a").removeClass("ArrowIcoClick");
	$(this).find("a").addClass("ArrowIcoClick");
	var indexSum = $(this).index();
	$(this).parent().parent().parent().next().find(".productUl").hide();
	$(this).parent().parent().parent().next().find(".productUl").eq(indexSum).show();
})
$(".laoding").click(function(){
	var add = $(this).attr("data-src");
	$(this).attr("src",add);
})
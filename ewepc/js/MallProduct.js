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
$(".sortLink").click(function(){
	$(".sortLink").removeClass("sortLinkClick");
	$(this).addClass("sortLinkClick");
})
//切换店铺图片
$(".commodity-img-2").click(function(){
	$(this).parent().find(".commodity-img-2").removeClass("commodity-img-2-click");
	$(this).addClass("commodity-img-2-click");
	var dataSrc = $(this).attr("data-src");
	$(this).parent().parent().find(".commodity-img-1").attr("src",dataSrc);
})
//商品筛选展开
$(".moreBtn").click(function(){
	var num = $(this).attr("name");
	if(num == 0){
		num = 1;
		$(this).attr("name",num);
		$(".CommodityScreen").removeClass("CommodityScreenH");
		$(this).find("span").eq(1).text("-");
	}else{
		num = 0;
		$(this).attr("name",num);
		$(".CommodityScreen").addClass("CommodityScreenH");
		$(this).find("span").eq(1).text("+");
	}
})
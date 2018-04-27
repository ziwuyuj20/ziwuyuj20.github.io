//左侧边栏滚动悬浮
$(window).scroll(function(){
	//悬浮侧边栏触发距离
	var H = $(".ClassRightBox").offset().top;
	//获取滚动条距离顶部的距离
	var scrollH = $(document).scrollTop();
	if(scrollH > H){
		$(".ClassLeftBox").addClass("ClassLeftBoxSrcoll");
	}else{
		$(".ClassLeftBox").removeClass("ClassLeftBoxSrcoll");
	}
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
//左悬浮侧边栏导航颜色图标改变
var oldImg = null;
var newsrc = null;
$(".ClassLink").mouseover(function(){
	oldImg = $(this).find("img").attr("src");
	newsrc = $(this).find("img").attr("data-src");
	console.log(newsrc);
	$(this).find("img").attr("src",newsrc);
	$(this).addClass("ClassLinkC");
})
$(".ClassLink").mouseout(function(){
	$(this).find("img").attr("src",oldImg);
	$(this).removeClass("ClassLinkC");
})
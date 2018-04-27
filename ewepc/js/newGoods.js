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
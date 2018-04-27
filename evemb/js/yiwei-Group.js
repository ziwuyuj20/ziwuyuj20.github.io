$(".group_head_H").css("height",$(".group_head_box").height());
//如果商品的父元素li的索引值为偶数，就左浮。
$(".group_good_li").each(function(){
	var idx = $(this).index() % 2;
	if(idx == 0){
		$(this).css("float","left");
	}
})
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
	//显示返回顶部图标
	var scrollH1 = parseInt(scrollH);
	var rideoH1 = parseInt(rideoH);
	if(scrollH1 > (rideoH1 * 2)){
		$(".return_top").show();
	}else{
		$(".return_top").hide();
	}
})
//返回顶部
$(".return_top").on("click",function(){
	$(document).scrollTop(0);
})
$(".nav_mask_box").css("top",$(".group_head_box").height()).css("height",$(document).height());

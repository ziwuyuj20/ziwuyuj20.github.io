//禁用手机默认的触屏滚动行为
//function Fadd(){
//	$(document).on("touchstart",function (){
//	   event.preventDefault();
//  },false);
//}
$("input").attr('data-role','none');
$("select").attr('data-role','none');
//高度补充
$(".bottom").css("height",$(".footer").height());
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
$(".collectionImg").on("click",function(){
	if($(this).attr("name") != 1){
		$(this).attr("src","img/Collection.png");
		$(this).attr("name","1");
	}else{
		$(this).attr("src","img/collection1.png");
		$(this).attr("name","0");
	}
})
$(".head_right_box").css("line-height",$(".head_left_box").height() + "px");

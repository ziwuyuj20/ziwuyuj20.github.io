//点击切换图标
$(".public-Navigation-li").on("tap",function(){
	var img = $(this).find("img").attr("data-src");
	$(this).find("img").attr("src",img);
	$(".public-Navigation-link-txt").removeClass("public-Navigation-link-txt");
	$(this).find(".public-Navigation-link-txt").addClass("public-Navigation-link-txt");
})
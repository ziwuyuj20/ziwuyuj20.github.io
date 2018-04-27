//点击切换图标
var img1 = $(".footer").find("img").eq(0).attr("src");
var img2 = $(".footer").find("img").eq(1).attr("src");
var img3 = $(".footer").find("img").eq(2).attr("src");
var img4 = $(".footer").find("img").eq(3).attr("src");
$(".footer").find("li").on("tap",function(){
	$(".footer").find("img").eq(0).attr("src",img1);
	$(".footer").find("img").eq(1).attr("src",img2);
	$(".footer").find("img").eq(2).attr("src",img3);
	$(".footer").find("img").eq(3).attr("src",img4);
	var img = $(this).find("img").attr("data-src");
	$(this).find("img").attr("src",img);
	$(".footer").find("p").css("color","#666666");
	$(this).find("p").css("color","#F5184C");
})
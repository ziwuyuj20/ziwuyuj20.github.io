//tap切换
$(".centerHead").find("p").click(function(){
	$(".centerHead").find("p").removeClass("click");
	$(this).addClass("click");
	var index = $(this).index();
	$(".seoBox").removeClass("seoBlock");
	$(".seoBox").eq(index).addClass("seoBlock");
	$(".seoBox").attr("name","0");
	$(".seoBox").eq(index).attr("name","1");
})
//重置
$(".ResetBtn").click(function(){
	$(".seoBox").each(function(){
		if($(this).attr("name") == 1){
			$(this).find("input,textarea").val("");
		}
	})
})
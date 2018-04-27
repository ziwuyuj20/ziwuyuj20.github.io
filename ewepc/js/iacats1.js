//获取外层的宽度
var moves = $(".cssImgIco").width() * 4;
var clickTime = 0;
$(".lastPageBTn2").click(function(){{
	var liNum = $(this).parent().find(".cssImgBox").find(".cssImgIco").length;
	var liTime = liNum/4;
	if(clickTime >= liNum/4)return;
	if(clickTime < liTime - 1){
		clickTime++;
		var w = moves * clickTime;
		$(this).parent().find(".cssImgBox").animate({
			left: -w
		},"slow","linear");
		console.log(clickTime);
	}else{
        // clickTime += 0;
        var w = moves * clickTime;
        $(this).parent().find(".cssImgBox").animate({
			left: -w
		},"slow","linear");
	}
}})

$(".lastPageBTn1").click(function(){
	var liNum = $(this).parent().find(".cssImgBox").find(".cssImgIco").length;
	var liTime = liNum/4;

	if(clickTime >= liNum/4)return;

	if(clickTime > 1){
		clickTime--;
		var w = moves * clickTime;
		$(this).parent().find(".cssImgBox").animate({
			left: -w
		},"slow","linear");
	}else{
		clickTime = 0;
		$(this).parent().find(".cssImgBox").animate({
			left: "0px"
		},"slow","linear");
	}
})
$(".cssntb").click(function(){
	clickTime = 0;
	$(".cssImgBox").css("left","0px");
})
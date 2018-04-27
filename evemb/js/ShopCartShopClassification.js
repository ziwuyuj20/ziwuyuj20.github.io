//设置分类高度
var liH = $(".classification-ul-li").height();
$(".classification-ul").css("height",liH);
$(".open-off-btn1,.open-off-btn2").css("height",liH);
//分类展开收起
//展开
$(".open-off-btn1").on("click",function(){
	$(".classification1").hide();
	$(".classification2").show();
})
//收起
$(".open-off-btn2").on("click",function(){
	$(".classification2").hide();
	$(".classification1").show();
})

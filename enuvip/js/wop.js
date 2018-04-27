$(".downMenuBox div").click(function(){
    $(this).toggleClass('hover').siblings().removeClass('hover');
})
//下拉框滑入滑出效果
$(".downMenuBox div").click(function(){
	//收回
	$(".downMenuBox div").not(this).next(".MenuCenter").slideUp(350);
	//显示
	$(this).next(".MenuCenter").slideToggle(350);
});
//点击批量收货生成遮罩
$("#lrBtn").click(function(){
	$(".maskBox").show();
})
//关闭遮罩
$(".closeBtn,.confirmBtn").on("click",function(){
	$(".maskBox").hide();
})
//重置所有内容
$(".queryBtn").click(function(){
	$(".wopIpt").val("");
	$("#wopLi2Ipt option:first").prop("selected", 'selected');
})
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
//按重置按钮重置数据
$(".resetBtn").click(function(){
	$(".ciLeftTxt").val("");
	$(".middleIpt").val("");
	$(".middleIpt2").val("");
	$(".ciRightSle2 option:first").prop("selected", 'selected');
	$(".ciRightSle3 option:first").prop("selected", 'selected');
	$(".middleSelect2 option:first").prop("selected", 'selected');
	$(".middleSelect3 option:first").prop("selected", 'selected');
})
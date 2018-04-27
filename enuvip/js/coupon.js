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
//tap切换
$(".tapUl").find("li").click(function(){
	$(this).toggleClass("tapIco").siblings().removeClass('tapIco');
})
var popupw = $(document).width();
var popuph = $(document).height();
$(".receiptPopupBox").css("width",popupw).css("height",popuph);
//重置数据
$(".dataRightBtn").click(function(){
	$(".dataIpt,.dataIpt1").val("");
	$(".dataSlt option:first").prop("selected", 'selected');
})
//弹窗
//设置弹窗大小
var popupw = $(document).width();
var popuph = $(document).height();
$(".popup1,.popup2").css("width",popupw).css("height",popuph);
//点击客户放弃弹出弹窗
//点击客户放弃弹出弹窗
$(".giveUp").click(function(){
	$(".popup1").show();
})
//关闭弹窗
$(".closeBtn1,.popup1RightBtn").click(function(){
	$(".popup1").hide();
})
//点击确认关闭弹窗兵弹出成功提示弹窗
$(".popup1LeftBtn").click(function(){
	$(".popup1").hide();
	$(".popup2").show();
})
//关闭成功提示弹窗
$(".popup2Close,.popup2CloseBtn").click(function(){
	$(".popup2").hide();
})
//tap切换
$(".tapUl").find("li").click(function(){
	var num = $(this).index();
	$(".List").hide();
	$(".List").eq(num).show();
})
$(".list4").show();
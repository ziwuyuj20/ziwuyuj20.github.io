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
//链接地址弹窗
$(".LinkBtn,.couponLinkBox").mouseover(function(){
	$(this).parent().find(".couponLinkBox").show();
})
$(".LinkBtn,.couponLinkBox").mouseout(function(){
	$(".couponLinkBox").hide();
})
//关闭店铺卷
$(".closeBtn").click(function(){
	$(this).parent().find(".LinkBtn").hide();
	$(this).hide();
	$(this).parent().parent().parent().find(".couponTd5Div").text("已关闭");
})
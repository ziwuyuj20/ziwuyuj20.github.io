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
//遮罩
//设置遮罩的宽高
var dispalyh = $(window).height();
var dispalyw = $("body").width();
$(".popupOutBox").css("width",dispalyw).css("height",dispalyh);
//点击修改生成遮罩
var THIS;
$(".queryBotton").click(function(){
	var num1 = $(this).parent().parent().find(".expressNum").text();
	var express = $(this).parent().parent().find(".expressName").text();
	$(".tableIpt").val(num1);
	$(".tableSele option:selected").text(express);
	$(".popupOutBox").show();
	THIS = $(this).parent().parent();
})
//点击关闭关闭遮罩
$(".popupCloseBtn").click(function(){
	$(".popupOutBox").hide();
})
//点击保存按钮保存修改资料
$(".saveBtn").click(function(){
	var newnum = $(".tableIpt").val();
	//获取下拉菜单选中的值
	var express = $(".tableSele option:selected").text();
	THIS.find(".expressNum").text(newnum);
	THIS.find(".expressName").text(express);
	$(".popupOutBox").hide();
})
//点击取消关闭弹窗
$(".cancelBtn").click(function(){
	$(".popupOutBox").hide();
})
//点击删除物流
$(".delectBtn").click(function(){
	$(this).parent().remove();
})
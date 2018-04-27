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
//设置弹窗大小
var popupw = $(document).width();
var popuph = $(document).height();
$(".popup1").css("width",popupw).css("height",popuph);
//点击查看图片生成弹窗
$(".previewImg").click(function(){
	$(".popup1").show();
})
//关闭弹窗
$(".colseBtn1").click(function(){
	$(".popup1").hide();
})
//tap切换内容
//获取元素的索引值
$(".tapUl").find("li").click(function(){
	var num = $(this).index();
	$(".List").hide();
	$(".List").eq(num).show();
})
$(".list").show();
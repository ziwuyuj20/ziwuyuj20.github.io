//鼠标进入生成弹窗
$(".winTxt,.winI").on("mouseover",function(){
	$(".mothWinBox").show();
})
//点击消失
$(".mothWinIco,.mothWinIco1").click(function(){
	var txt = $(this).find("a").text();
	$(".mothWinLink").text(txt);
	$(".winTxt").text(txt);
	$(this).parent().hide();
})
$(document).click(function(){
	$(".mothWinBox").hide();
})
//删除商品
$(".odtOut").mouseover(function(){
	$(".delectBn").show();
})
$(".odtOut").mouseout(function(){
	$(".delectBn").hide();
})
$(".delectBn").click(function(){
	$(this).parent().parent().remove();
})
$(".userName").mouseover(function(){
	$(".userWin").show();
})
$(".userName").mouseout(function(){
	$(".userWin").hide();
})
//改变立即购买按钮背景图
$(".buyBtnTxt").mouseover(function(){
	$(".buyBtnBgc").css("background-positionX","0px");
})
$(".buyBtnTxt").mouseout(function(){
	$(".buyBtnBgc").css("background-positionX","-22px");
})
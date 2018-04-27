$(".downMenuBox div").click(function(){
    // return alert()
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
$(".goodTap3").click(function(){
	$(this).toggleClass('goodTap').siblings().removeClass('goodTap');
})
$(".goodTap1").click(function(){
	$(".goodTableBox").show();
	$(".disGoodTableBox").hide();
})
$(".goodTap2").click(function(){
	$(".goodTableBox").hide();
	$(".disGoodTableBox").show();
})
function Fn1(){
	$(".goodTableBox").find("tr").each(function(){
		var num = $(this).index();
		var indexNum = num +1;
		$(this).find(".goodTd1").text("0"+indexNum);
	})
}
Fn1();
function Fn2(){
	$(".disGoodTableBox").find("tr").each(function(){
		var num = $(this).index();
		var indexNum = num +1;
		$(this).find(".goodTd1").text("0"+indexNum);
	})
}
Fn2();
//背景颜色改变
$(".goodTableBox").find("td").mouseover(function(){
	$(this).siblings().css("background","#f6e8a9");
	$(this).css("background","#f6e8a9");
})
$(".goodTableBox").find("td").mouseout(function(){
	$(this).siblings().css("background","#fff");
	$(this).css("background","#fff");
})
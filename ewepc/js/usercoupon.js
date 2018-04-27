//小弹窗
$(".cnbIco1,.cnbIco3").mouseover(function(){
	$(".cnbIco3").show();
})
//弹窗消失
$(".cnbIco1,.cnbIco3").mouseout(function(){
	$(".cnbIco3").hide();
})
//点击删除按钮删除
$(".delectBtn").click(function(){
	$(this).parent().remove();
})
var SUM = 0;
$(".couponUl").eq(2).find(".couponUlIco").each(function(){
    SUM++;
    $(".num").text("未使用"+"("+SUM+")");
})
//切换
$(".cnbIco2").click(function(){
	var index = $(this).index() - 1;
	$(".cnbIco2").find(".cnbIcoC1").removeClass("cnbIcoC");
	$(this).find(".cnbIcoC1").addClass("cnbIcoC");
	$(".couponUl").hide();
	$(".couponUl").eq(index).show();
})
$(".cnbIcoh2").click(function(){
	$(".cnbIco2").find(".cnbIcoC1").removeClass("cnbIcoC");
	var index = $(this).index() + 1;
	$(".cnbIcoh2").removeClass("cnbIcoC");
	$(this).addClass("cnbIcoC");
	$(".couponUl").hide();
	$(".couponUl").eq(index).show();
	var sum = 0;
	$(".couponUl").eq(index).find(".couponUlIco").each(function(){
		sum++;
	})
	var TXT = $(this).find("span").eq(0).text();
	$(".cnbIcoh1").find(".num").text(TXT+"("+sum+")");
})
$(".cnbIcoh2").each(function(){
	var sum = 0;
	var index = $(this).index() + 1;
	$(".couponUl").eq(index).find(".couponUlIco").each(function(){
		sum++;
	})
	$(this).find(".num1").text("("+sum+")");
})
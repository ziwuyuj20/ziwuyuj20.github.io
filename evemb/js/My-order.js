//多选
$(".che_all1").on("click",function(){
	var count1 = 0;
	if($(this).attr("name") == 0){
		$(this).attr("src","img/htrjyt.png");
		$(this).parent().parent().parent().find(".che_1").attr("src","img/htrjyt.png");
		$(this).parent().parent().parent().find(".che_1").attr("name","1");
		$(this).attr("name","1");
	}else{
		$(this).attr("src","img/hnernn.png");
		$(this).parent().parent().parent().find(".che_1").attr("src","img/hnernn.png");
		$(this).parent().parent().parent().find(".che_1").attr("name","0");
		$(this).attr("name","0");
	}
	$(".che_1").each(function(){
		if($(this).attr("name") == 1){
			count1++;
		}
	})
	if(count1 > 0){
		$(".pay_box1").show();
	}else{
		$(".pay_box1").hide();
	}
})
//单选
$(".che_1").on("click",function(){
	var count = 0;
	var count1 = 0;
	var lenght = $(this).parent().parent().find(".che_1").length;
	if($(this).attr("name") == 0){
		$(this).attr("src","img/htrjyt.png");
	    $(this).attr("name","1");
	}else{
		$(this).attr("src","img/hnernn.png");
	    $(this).attr("name","0");
	}
	$(this).parent().parent().find(".che_1").each(function(){
		if($(this).attr("name") == 1){
			count++;
		}
		if(count == lenght){
			var mentIpt = $(this).parent().parent().parent().find(".che_all1");
			mentIpt.attr("src","img/htrjyt.png");
			mentIpt.attr("name","1");
		}else{
			var mentIpt = $(this).parent().parent().parent().find(".che_all1");
			mentIpt.attr("src","img/hnernn.png");
			mentIpt.attr("name","0");
		}
	})
	$(".che_1").each(function(){
		if($(this).attr("name") == 1){
			count1++;
		}
	})
	if(count1 > 0){
		$(".pay_box1").show();
	}else{
		$(".pay_box1").hide();
	}
})
//删除订单
$(".or_dele").on("click",function(){
	var THIS = $(this).parent().parent();
	THIS.find(".che_1").each(function(){
		if($(this).attr("name") == 1){
			$(this).parent().remove();
		}
	})
	THIS.find(".che_all1").each(function(){
		if($(this).attr("name") == 1){
			$(this).parent().parent().parent().remove();
		}
	})
	$(".pay_box1").hide();
	order();
})
//取消统一付款
$(".pay_btn1").on("click",function(){
	$.each($(".che_all1"),function(){
		$(this).attr("src","img/hnernn.png");
		$(this).attr("name","0");
	})
	$.each($(".che_1"),function(){
		$(this).attr("src","img/hnernn.png");
		$(this).attr("name","0");
	})
	$(".pay_box1").hide();
})
//统计价格、数量
function order(){
	$(".order_li").each(function(){
	    var num = 0;
	    var num1 = 0;
	    var num2 = 0;
	    var num3 = 0;
	    var num4 = parseFloat($(this).find(".freight").text());
	    var num5 = 0;
	    $(this).find(".scb").find(".shop_center_box").each(function(){
		    num1 = parseFloat($(this).find(".price_1").text());
		    num2 = parseInt($(this).find(".goods_num_1").text())
		    num3 = num1 * num2;
		    num += num3;
		    num5 += num2;
		    $(this).parent().parent().find(".Total").text(num + num4);
		    $(this).parent().parent().find(".gds_num").text(num5);
	    })
    })
}
order();
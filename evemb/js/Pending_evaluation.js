var H = $(window).height();
$(".Evaluation_Prompt").css("height",H);
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
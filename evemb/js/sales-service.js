var uploadH = parseInt($(".upload_txt").height())
$(".upload_btn").css("height",uploadH + 20);
//退款、退换货切换
$(".Service_btn").on("click",function(){
	var num = $(this).index();
    $(".Service_btn").removeClass("Service_btn_click");
    $(this).addClass("Service_btn_click");
    $(".Service_reason").hide();
    $(".Service_reason").eq(num).show();
})
//点击退款、退换货原因
var THIS;
var Reason_ul_box_1 = $(".Reason_ul_box").eq(0);
var Reason_ul_box_2 = $(".Reason_ul_box").eq(1);
function Fn1(Reason_ul_box){
	$(".Reason_li").css("color","#262626");
	//隐藏商品、服务类型、提交按钮、进度条
	$(".commodity_box,.Service_type_box,.Submit,.Progress_bar_box").hide();
	//显示退款退换货原因
	Reason_ul_box.show();
	//改变头部文本
	$(".public1_head_txt").text("申请原因");
	//隐藏返回按钮
	$(".public1_return_btn").css("display","none");
	//显示退换货原因返回按钮
	$(".public1_return_btn_1").css("display","inline-block");
	$(".Reason_btn_H").css("height",$(".Reason_btn").height());
	$(".Reason_li").last().css("border","none");
}
$(".Service_reason_right_1").on("click",function(){
	THIS = $(this);
	Fn1(Reason_ul_box_1);
})
$(".Service_reason_right_2").on("click",function(){
	THIS = $(this);
	Fn1(Reason_ul_box_2);
})
//选择原因
var Reason_txt;
$(".Reason_li").on("click",function(){
	Reason_txt = $(this).text();
	$(".Reason_li").css("color","#262626");
	$(this).css("color","#e01818");
})
//确定修改
$(".Reason_btn").on("click",function(){
	//显示商品、服务类型、提交按钮、进度条
	$(".commodity_box,.Service_type_box,.Submit,.Progress_bar_box:eq(0)").show();
	//隐藏退款退换货原因
	$(".Reason_ul_box").hide();
	//改变头部文本
	$(".public1_head_txt").text("申请售后");
	//隐藏退款退换货返回按钮
	$(".public1_return_btn").css("display","none");
	//显示返回按钮
	$(".public1_return_btn").eq(0).css("display","inline-block");
	$(".Reason_btn_H").css("height",$(".Reason_btn").height());
	$(".Reason_li").last().css("border","none");
	THIS.text(Reason_txt);
})
//返回申请售后
$(".public1_return_btn_1").on("click",function(){
	//显示商品、服务类型、提交按钮、进度条
	$(".commodity_box,.Service_type_box,.Submit,.Progress_bar_box").show();
	//隐藏退款退换货原因
	$(".Reason_ul_box").hide();
	//改变头部文本
	$(".public1_head_txt").text("申请售后");
	//隐藏退款退换货返回按钮
	$(".public1_return_btn").css("display","none");
	//显示返回按钮
	$(".public1_return_btn").eq(0).css("display","inline-block");
})

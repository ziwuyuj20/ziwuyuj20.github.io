$(".footer_box").css("height",$(".Coupon_footer").height());
//优惠券种类导航切换
$(".Coupon_Navigation_li").on("click",function(){
	var this_index = $(this).index();
	$(".Coupon_Navigation_div").removeClass("Coupon_Navigation_div_click");
	$(this).find(".Coupon_Navigation_div").addClass("Coupon_Navigation_div_click");
	$(".Coupon_Popup").hide();
	$(".Coupon_Popup").eq(this_index).show();
})
$(".Coupon_Navigation_li:eq(1),.Coupon_Navigation_li:eq(2)").on("click",function(){
	$(".Coupon_footer").hide();
})
$(".Coupon_Navigation_li:eq(0)").on("click",function(){
	$(".Coupon_footer").show();
	$(".footer_box").css("height",$(".Coupon_footer").height());
})
//计算优惠券数量
//获取优惠券
var num_1 = $(".Coupon-Popup-ul").find(".Coupon-Popup-li");
var num_2 = $(".Coupon-Popup-ul_1").find(".Coupon-Popup-li_1");
var num_3 = $(".Coupon-Popup-ul_2").find(".Coupon-Popup-li_2");
//获取优惠券数量
var num_span_1 = $(".num_1");
var num_span_2 = $(".num_2");
var num_span_3 = $(".num_3");
//优惠券函数传参
function Fn(Coupon_Popup_ul,num_1){
	var num = 0;
	Coupon_Popup_ul.each(function(){
		num ++;
		num_1.text("(" + num + ")");
	})
}
//未使用优惠券数量
Fn(num_1,num_span_1);
//已过期优惠券数量
Fn(num_2,num_span_2);
//已使用优惠券数量
Fn(num_3,num_span_3);
//分页
var Coupon_Popup_1 = $(".Coupon_Popup").eq(0);
var Coupon_Popup_2 = $(".Coupon_Popup").eq(1);
var Coupon_Popup_3 = $(".Coupon_Popup").eq(2);
//页码
var newPage_1 = $(".page_box").eq(0).find(".newPage_1");
var newPage_2 = $(".page_box").eq(1).find(".newPage_2");
var newPage_3 = $(".page_box").eq(2).find(".newPage_3");
//总页数
var allPage_1 = $(".page_box").eq(0).find(".allPage_1");
var allPage_2 = $(".page_box").eq(1).find(".allPage_2");
var allPage_3 = $(".page_box").eq(2).find(".allPage_3");
function Fn1(Coupon,newPage,allPage){
	//优惠券滚屏页码部分
    //内容总高度
    var allH_1;
    //每页高度（10行每页）
    var icoH_1;
    var pageH_1;
    //总页数
    var allsum_1;
    var integer_1;
    var sum_1 = 0;
    Coupon.find("li").each(function(){
	    sum_1 ++;
    })
    //获取内容总高度
    allH_1 = (parseInt(Coupon.find("li").eq(0).height())) * sum_1;
    //获取每页高度（10行每页）
    icoH_1 = parseInt(Coupon.find("li").eq(0).height());
    pageH_1 = icoH_1 * 10;
    //获取总页数
    allsum_1 = allH_1 / pageH_1;
    integer_1 = parseInt(allsum_1);
    if(allsum_1 > integer_1){
	    allsum_1 = integer_1 + 1;
    }else{
	    allsum_1 = integer_1;
    }
    allPage.text(allsum_1);
    newPage.text("1");
    //动态改变当前页码
    $(document).scroll(function(){
	    //获取元素到可视区顶部的距离
	    var rideoH_1 = $(window).height();
	    var H_1 = Math.abs(Coupon.offset().top - $(window).scrollTop());
	    var page_1 = rideoH_1 + H_1 - parseInt($(".public1-head-box").height() + 25);
	    var pageNEW_1 = parseInt((page_1 / pageH_1) + 1);
	    newPage.text(pageNEW_1);
    })
}
Fn1(Coupon_Popup_1,newPage_1,allPage_1);
$(".Coupon_Navigation_li").eq(0).on("click",function(){
	$(".page_box").hide();
	$(".page_box").eq(0).show();
	Fn1(Coupon_Popup_1,newPage_1,allPage_1);
})
$(".Coupon_Navigation_li").eq(1).on("click",function(){
	$(".page_box").hide();
	$(".page_box").eq(1).show();
	Fn1(Coupon_Popup_2,newPage_2,allPage_2);
})
$(".Coupon_Navigation_li").eq(2).on("click",function(){
	$(".page_box").hide();
	$(".page_box").eq(2).show();
	Fn1(Coupon_Popup_3,newPage_3,allPage_3);
})

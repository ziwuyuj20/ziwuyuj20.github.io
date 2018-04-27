$(".footer_box").css("height",$(".public-footer-a public-footer-a2").height());
//点击领取优惠券
$(".Call_center_li").on("click",function(){
	var H = $(document).height();
	$(".prompt_box_1").show();
	$(".prompt_box_1").css("height",H);
	if($(this).attr("name") == 0){
		$(this).find(".Call_center_li_right").attr("src","img/trhrgrf.png");
		$(".prompt_box_1_txt").text("领取成功");
		$(this).attr("name","1")
		//获取该优惠券的数据
		var price_1 = $(this).find(".Coupon_type_1").text();
		var price_2 = $(this).find(".Coupon_type_3").text();
		//克隆优惠券以及事件
		var Coupon_clone = $(".clone_ul").find(".Coupon-Popup-li").clone(true,true);
		//传入优惠券数据
		Coupon_clone.find(".value").text(price_1);
		Coupon_clone.find(".price_num").text(price_2);
		//插入元素
		$(".Coupon-Popup-ul").prepend(Coupon_clone);
		
	}else{
		$(".prompt_box_1_txt").text("该优惠券已被领取，请重新领取。")
	}
	$(".prompt_box_1").hide(900);
})

var Coupon_Popup_4 =$(".Call_center_box");
//页码
var newPage_4 = $(".page_box").find(".newPage_4");
//总页数
var allPage_4 = $(".page_box").find(".allPage_4");
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
	    var page_1 = rideoH_1 + H_1 - parseInt($(".public1-head-box").height() + 250);
	    var pageNEW_1 = parseInt((page_1 / pageH_1) + 1);
	    newPage.text(pageNEW_1);
    })
}
Fn1(Coupon_Popup_4,newPage_4,allPage_4);

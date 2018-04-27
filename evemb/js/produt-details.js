//补充底部高度
var footerH = $(".action_bar").height();
$(".footer_h").css("height",footerH);
//商品、详情、评价选择
$(".Product_navigation_ico").on("click",function(){
	$(".Product_navigation_ico").css("border-color","#fff");
	$(this).css("border-color","#222");
})
//点击收藏
$(".Collection_btn").on("click",function(){
	$(this).attr("src","img/Collection-2.png");
})
var name_1 = $(".Product_navigation_ico").eq(2).attr("name");
//查看商品详情
$(".Product_navigation_ico").eq(1).on("click",function(){
	name_1 = 0;
	//设置滚动条的高度
	$(document).scrollTop(H - h);
	$(".center_out").show();
	$(".evaluate_box").hide();
})
//查看商品
$(".Product_navigation_ico").eq(0).on("click",function(){
	name_1 = 0;
	//设置滚动条的高度
	$(document).scrollTop(0);
	$(".center_out").show();
	$(".evaluate_box").hide();
})
//查看评价
$(".Product_navigation_ico").eq(2).on("click",function(){
	name_1 = 1;
	//设置滚动条的高度
	$(document).scrollTop(0);
	$(".center_out").hide();
	$(".evaluate_box").show();
	$(".Product_navigation_ico").css("border-color","#fff");
	$(this).css("border-color","#222");
})
$(".Select_color_btn").eq(1).on("click",function(){
	name_1 = 1;
	//设置滚动条的高度
	$(document).scrollTop(0);
	$(".center_out").hide();
	$(".evaluate_box").show();
	$(".Product_navigation_ico").css("border-color","#fff");
	$(".Product_navigation_li").eq(2).find(".Product_navigation_ico").css("border-color","#222");
})
//滚动页面切换商品、详情、评价选择
//获取商品详情距离屏幕顶部的高
var H = parseInt($(".Commodity_information_box").offset().top);
var h = parseInt($(".Commodity_information_head").height());
function scrollH(){
	$(document).scroll(function(){
	    //获取滚动条到顶部的距离
	    var scrollH = parseInt($(document).scrollTop());
	    if(name_1 == 0){
		    if(scrollH < (H - h)){
		        $(".Product_navigation_ico").css("border-color","#fff");
	            $(".Product_navigation_ico").eq(0).css("border-color","#222");
	        }else{
		        $(".Product_navigation_ico").css("border-color","#fff");
	            $(".Product_navigation_ico").eq(1).css("border-color","#222");
	        }
	    }
    })
}
scrollH();
//点击生成优惠劵
//点击领取优惠卷生成优惠卷弹窗
//内容总高度
var allH;
//每页高度（10行每页）
var icoH;
var pageH;
//总页数
var allsum;
var integer;
//优惠券滚屏页码部分
var sum_1 = 0;
$(".Coupon_btn").on("click",function(){
	$(document).scrollTop("0");
	//优惠卷高度补充
	$(".popupeHead,.center_out,.action_bar").hide();
	$(".Coupon-Popup-box").show();
	$(".Coupon-Popup-head-H").css("height",$(".Coupon-Popup-head-box").height());
	$(".Coupon-Popup-head-H").css("height",$(".Coupon-Popup-head-box").height());
	$(".page-box").show();
	$(".Coupon-Popup-ul").find("li").each(function(){
	    sum_1 ++;
    })
	//获取内容总高度
    allH = (parseInt($(".Coupon-Popup-ul").find("li").eq(0).height()) + 10) * sum_1;
    //获取每页高度（10行每页）
    icoH = parseInt($(".Coupon-Popup-ul").find("li").eq(0).height()) + 10;
    pageH = icoH * 10;
    //获取总页数
    allsum = allH / pageH;
    integer = parseInt(allsum);
    if(allsum > integer){
	    allsum = integer + 1;
    }else{
	    allsum = integer;
    }
    $(".allPage").text(allsum);
    $(".newPage").text("1");
})
//关闭优惠劵
$(".Coupon-Popup-close").on("click",function(){
	$(".Coupon-Popup-box").hide();
	$(".popupeHead,.center_out,.action_bar").show();
	$(".page-box").hide();
})
/*颜色/尺寸/商品数量选择*/
var THIS;
var color;
var size;
$(".Select_color_btn_1").on("click",function(){
	Fn();
	$(".maskBox").show();
	THIS = $(this).parent(); 
	$(".maskBox").show();
	//弹窗图片位置
    var TopH = parseInt($(".maskImg").height());
    $(".maskImg").css("top",-TopH/2 + "px");
    $(".goodNumOut").css("height",TopH/2 + "px");
    //获取设置前的数据
    //获取颜色
    var color = $(".Select_color").text();
    //获取尺码
    var size = $(".goods_size_txt").text();
    //获取数量
    var num = $(".goods_Number_txt").text();
    //获取商品单价
    var parice = $(".parice").text();
    //读取并设置颜色
	$(".colorIco").css("border-color","#e0e0e0").css("color","#333");
	$(".colorIco").each(function(){
		if($(this).text() == color){
			$(this).css("border-color","#e63322").css("color","#e63322");
		}
	})
	//读取并设置尺寸
	$(".sizeIco").css("border-color","#e0e0e0").css("color","#333");
	$(".sizeIco").each(function(){
		if($(this).text() == size){
			$(this).css("border-color","#e63322").css("color","#e63322");
		}
	}) 
})
//调整购买个数
//增加购买商品数量
$(".increase_btn").on("click",function(){
	var sum = $(".reduce_num").val();
	sum ++;
	$(".reduce_num").val(sum);
	$(".goods_Number_txt").text(sum);
})
//减少商品数量
$(".reduce_btn").on("click",function(){
	var sum = $(".reduce_num").val();
	if(sum > 1){
		sum --;
		$(".reduce_num").val(sum);
	}else{
		sum = 1;
		$(".reduce_num").val(sum);
	}
	$(".goods_Number_txt").text(sum);
})
//同步数据
function Fn(){
    $(".goodCenterBox").each(function(){
	    var initialColor = $(this).find(".style").find("span").eq(1).text();
	    var initialSize = $(this).find(".style").find("span").eq(3).text();
	    $(this).find(".editStyleBox").find("span").eq(1).text(initialColor);
	    $(this).find(".editStyleBox").find("span").eq(3).text(initialSize);
    })
}
Fn();
//设置颜色
$(".colorIco").on("tap",function(){
	$(".colorIco").css("border-color","#e0e0e0").css("color","#333");
	$(this).css("border-color","#e63322").css("color","#e63322");
	var txt = $(this).text();
	$(".Select_color").text(txt);
})
//设置尺寸
$(".sizeIco").on("tap",function(){
	$(".sizeIco").css("border-color","#e0e0e0").css("color","#333");
	$(this).css("border-color","#e63322").css("color","#e63322");
	var SIZE = $(this).text();
	$(".goods_size_txt").text(SIZE);
})
//关闭选择
$(".maskClose").on("click",function(){
	var sum = $(".reduce_num").val();
	$(".goods_Number_txt").text(sum);
	$(".maskBox").hide();
})
//评论区
var evaluateH = $(".popupeHead").height();
$(".evaluate_box").css("top",evaluateH);
//有图评论和无图评论切换
$(".evaluate_txt").on("click",function(){
	var indexNum = $(this).index();
	$(".evaluate_txt").removeClass("evaluate_txt_click");
	$(this).addClass("evaluate_txt_click");
	$(".evaluate_ul").hide();
	$(".evaluate_ul").eq(indexNum).show();
})
//有图评论区详情图片遮罩
$(".evaluate_mine_img").on("click",function(){
	$(".Mask_Img_box").css("height",$(document).height());
	$(".Mask_Img_box").show();
	//设置遮罩内容的高度
	var H = $(".Mask_Img").height();
	$(".Mask_Img_out").css("height",H);
	//获取点击的图片
	var imgsrc = $(this).attr("src");
	$(".Mask_Img").attr("src",imgsrc);
})
//关闭遮罩
$(".Mask_Img_close_btn").on("click",function(){
	$(".Mask_Img_box").hide();
})
//点击领取优惠券
$(".Coupon-Popup-li").on("click",function(){
	var H = $(document).height();
	$(".prompt_box_1").show();
	$(".prompt_box_1").css("height",H);
	if($(this).attr("name") == 0){
		$(".prompt_box_1_txt").text("该优惠券已被领取，请重新领取。")
	}else{
		$(".prompt_box_1_txt").text("领取成功")
	}
	$(".prompt_box_1").hide(3000);
})
//动态改变当前页码
$(document).scroll(function(){
	//获取元素到可视区顶部的距离
	var rideoH_1 = $(window).height();
	var H = Math.abs($(".Coupon-Popup-ul").offset().top-$(window).scrollTop());
	var page = rideoH_1 + H;
	var pageNEW = parseInt((page / pageH) + 1);
	$(".newPage").text(pageNEW);
})
//点击领取优惠券
$(".Coupon-Popup-li").on("click",function(){
	var H = $(document).height();
	$(".prompt_box_1").show();
	$(".prompt_box_1").css("height",H);
	if($(this).attr("name") == 0){
		$(".prompt_box_1_txt").text("该优惠券已被领取，请重新领取。")
	}else{
		$(".prompt_box_1_txt").text("领取成功")
	}
	$(".prompt_box_1").hide(3000);
})
$(".store_name").on("click",function(){
	$(this).removeClass("ui-link");
})
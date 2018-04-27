var head_h = $(".public1-head-box").height();
$(".head_h").css("height",head_h);
//改变商品数量
//获取商品单价
var price = $(".price_txt").text();
//获取服务费
var Service_charge = parseInt($(".Service_charge_1").text());
//增加购买的商品
$(".increase_btn").on("click",function(){
	var num = $(".quantity_ipt").val();
	num ++;
	$(".quantity_ipt").val(num);
	$(".price_Number").text("╳" + num);
	$(".goods_Total").text(num);
	//获取总价格
	var Total_price = Service_charge + (price * num);
	$(".Total_price").text(Total_price);
})
//减少购买商品数量
$(".reduce_btn").on("click",function(){
	var num = $(".quantity_ipt").val();
	if(num > 1){
		num --;
	    $(".quantity_ipt").val(num);
	    $(".price_Number").text("╳" + num);
	    $(".goods_Total").text(num);
	    //获取总价格
	    var Total_price = Service_charge + (price * num);
	    $(".Total_price").text(Total_price);
	}else{
		num = 1;
	    $(".quantity_ipt").val(num);
	    $(".price_Number").text("╳" + num);
	    $(".goods_Total").text(num);
	    //获取总价格
	    var Total_price = Service_charge + (price * num);
	    $(".Total_price").text(Total_price);
	}
})
//输入改变购买数量
$(".quantity_ipt").on("keyup",function(){
	var num = $(this).val();
	$(".quantity_ipt").val(num);
	$(".price_Number").text("╳" + num);
	$(".goods_Total").text(num);
	//获取总价格
	var Total_price = Service_charge + (price * num);
	$(".Total_price").text(Total_price);
	
})
//价格说明遮罩
//获取高
var window_H = $(document).height();
$(".Price_description_out_box").css("height",window_H);
//关闭价格说明遮罩
$(".Price_description_out_box").find("button").on("click",function(){
	$(".Price_description_out_box").hide();
}) 
//选择配送方式
//$(".Distribution_btn").on("click",function(){
//	$(".center_box").hide();
//	$(".Order_settlement_box").show();
//})
//选择快递
$(".Order_settlement_li").on("click",function(){
	$(".Order_settlement_img").attr("src","img/express-1.png");
	$(this).find(".Order_settlement_img").attr("src","img/express-2.png");
})
//确认返回
$(".express_btn,.public1_return_img").on("click",function(){
	$(".Finish_editing").hide();
	$(".Order_settlement_box").hide();
    //优惠券隐藏
	$(".Coupon_box_2").hide();
	$(".center_box").show();
    //改变标题内容
	$(".public1_head_txt").text("订单结算");
	$(".public1_head_link").hide();
	$(".public1_head_link").text("");
	//支付方式隐藏
	$(".Payment_method_box").hide();
	$(".Address_edit").hide();
	//新建地址按钮隐藏
	$(".New_address_btn").hide();
})
//选择优惠券
$(".Coupon_btn_1").on("click",function(){
	$(".center_box").hide();
	$(".Coupon_box_2").show();
	$(".public1_head_txt").text("使用优惠券");
	$(".public1_head_link").show();
	$(".public1_head_link").text("使用说明");
})
//优惠券统计
var Coupon_num_1 = 0;
var Coupon_num_2 = 0;
//可用优惠券统计
$(".Coupon-Popup-ul").eq(0).find("li").each(function(){
	Coupon_num_1 ++;
	$(".Available_Coupon").find("span").text("(" + Coupon_num_1 + ")" );
})
//不可用优惠券统计
$(".Coupon-Popup-ul").eq(1).find("li").each(function(){
	Coupon_num_2 ++;
	$(".Unavailable_Coupon").find("span").text("(" + Coupon_num_2 + ")" );
})
//可用和不可用优惠券切换
$(".Coupon_box_head_out").on("click",function(){
	var thisIndex = $(this).index();
	console.log(thisIndex);
	$(".Coupon_box_head_out").find("p").removeClass("Coupon_click");
	$(this).find("p").addClass("Coupon_click");
	$(".Coupon-Popup-ul").hide();
	$(".Coupon-Popup-ul").eq(thisIndex).show();
})
//选中优惠券  
$(".Coupon_Choice").on("click",function(){
	$(this).attr("src","img/Choice-2.png");
})
//选择支付方式
$(".confirm_btn").on("click",function(){
	$(".public1_head_txt").text("支付方式");
	$(".center_box").hide();
	$(".Payment_method_box").show();
})
$(".Payment_method_li").on("click",function(){
	$(".payment_img").attr("src","img/payment-img-1.png");
	$(this).find(".payment_img").attr("src","img/payment-img.png");
})
//查看、编辑配送地址
$(".address").on("click",function(){
	$(".public1_head_txt").text("我的地址");
	$(".center_box").hide();
	$(".Address_edit_box").show();
	$(".Address_edit").show();
	$(".New_address_btn").show();
	var H_1 = $(".New_address_btn").height();
    $(".footer_1").css("height",H_1 + 10);
})
//删除提示框
$(".Delete_prompt_box").css("height",window_H);
//点击编辑编辑地址
var THIS;
$(".Address_edit").on("click",function(){
	$(".operation_box").show();
	$(".Finish_editing").show();
	$(this).hide();
})
//点击修改修改地址
$(".modify").on("click",function(){
	$(".public1_head_txt").text("修改地址");
	THIS = $(this).parent().parent();
	$(".public1_return_btn").find("img").hide();
	$(".public1_return_img_2").show();
	$(".Finish_editing").hide();
	$(".save_btn").show();
	$(".Address_edit_box").hide();
	$(".Modify_address_box").show();
	//获取所要修改地址的原始信息
	//用户
	var userName = THIS.find(".Address_user_name").text();
	//获取手机号码
	var Phone_number = THIS.find(".Phone_number").text();
	//获取固话
	var Fixed_line = THIS.find(".Phone_number_1").text();
	//获取邮箱
	var Email = THIS.find(".Phone_number_2").text();
	//地址别名
	var alias = THIS.find(".Phone_number_3").text();
	//获取地址
	var province_1 = THIS.find(".province_1").text();
	var city_1 = THIS.find(".city_1").text();
	var area_1 = THIS.find(".area_1").text();
	var Detailed_address_1 = THIS.find(".Detailed_address_1").text();
	//将原始信息写入信息修改栏
	//用户名
	$(".user_modify_name").text(userName);
	//电话
	$(".user_modify_name_number").text(Phone_number);
	//固话
	$(".user_modify_name_number_1").text(Fixed_line);
	//电子邮箱
	$(".user_modify_name_number_2").text(Email);
	//地址别名
	$(".user_modify_name_number_3").text(alias);
	$(".province_txt").text(province_1);
	$(".city_txt").text(city_1);
	$(".area_txt").text(area_1);
	$(".user_modify_address").text(Detailed_address_1);
	//同步默认与非默认地址状态
	if(THIS.find(".default_btn").attr("name") == 0){
		$(".set_default_btn").attr("src","img/d1.png");
		$(".set_default_btn").attr("name","0");
	}else{
		$(".set_default_btn").attr("src","img/d2.png");
		$(".set_default_btn").attr("name","1");
	}
})
//修改用户名
$(".Modify_address_li").eq(0).on("click",function(){
	$(".Pop_box_2").css("height",window_H);
	$(".Pop_box_2").show();
})
//写入用户名
$(".confirm_deletion_2").on("click",function(){
	var txt = $(".new_address_ipt_2").val();
	$(".user_modify_name").text(txt);
	$(".Pop_box_2").hide();
})
//取消修改用户名
$(".Cancel_delete_2").on("click",function(){
	$(".Pop_box_2").hide();
})
//修改联系电话
$(".Modify_address_li").eq(1).on("click",function(){
	$(".Pop_box_3").css("height",window_H);
	$(".Pop_box_3").show();
})
//写入联系电话
$(".confirm_deletion_3").on("click",function(){
	var txt = $(".new_address_ipt_3").val();
	$(".user_modify_name_number").text(txt);
	$(".Pop_box_3").hide();
})
//取消修改联系电话
$(".Cancel_delete_3").on("click",function(){
	$(".Pop_box_3").hide();
})
//修改固话
$(".Modify_address_li").eq(2).on("click",function(){
	$(".Pop_box_4").css("height",window_H);
	$(".Pop_box_4").show();
})
//写入固话
$(".confirm_deletion_4").on("click",function(){
	var txt = $(".new_address_ipt_4").val();
	$(".user_modify_name_number_1").text(txt);
	$(".Pop_box_4").hide();
})
//取消修改固话
$(".Cancel_delete_4").on("click",function(){
	$(".Pop_box_4").hide();
})
//修改电子邮箱
$(".Modify_address_li").eq(3).on("click",function(){
	$(".Pop_box_5").css("height",window_H);
	$(".Pop_box_5").show();
})
//写入电子邮箱
$(".confirm_deletion_5").on("click",function(){
	var txt = $(".new_address_ipt_5").val();
	$(".user_modify_name_number_2").text(txt);
	$(".Pop_box_5").hide();
})
//取消修改电子邮箱
$(".Cancel_delete_5").on("click",function(){
	$(".Pop_box_5").hide();
})
//修改地址别名
$(".Modify_address_li").eq(4).on("click",function(){
	$(".Pop_box_6").css("height",window_H);
	$(".Pop_box_6").show();
})
//写入地址别名
$(".confirm_deletion_6").on("click",function(){
	var txt = $(".new_address_ipt_6").val();
	$(".user_modify_name_number_3").text(txt);
	$(".Pop_box_6").hide();
})
//取消修改地址别名
$(".Cancel_delete_6").on("click",function(){
	$(".Pop_box_6").hide();
})
//点击地址编辑地址
$(".user_address").on("click",function(){
	$(this).hide();
	$(".demo-content").css("display","inline-block");
	$(".Modify_address_img").hide();
	$(".new_address").css("display","inline-block");
})
//点击确认确认新地址
$(".new_address").on("click",function(){
	var province_1 = $(".province_txt").text();
	var province_2 = $(".city_txt").text();
	var province_3 = $(".area_txt").text();
	$(".demo-content").css("display","none");
	$(this).css("display","none");
	$(".user_address").show();
	$(".Modify_address_img").show();
	//写入新地址
	$(".user_modify_province").text(province_1);
	$(".user_modify_city").text(province_2);
	$(".user_modify_province_area").text(province_3);
})
//点击完成完成修改
$(".save_btn").on("click",function(){
	//获取用户名
	var userName = $(".user_modify_name").text();
	//获取手机号
	var Phone_number = $(".user_modify_name_number").text();
	//获取固话
	var Fixed_line = $(".user_modify_name_number_1").text();
	//获取E-mail
	var Email = $(".user_modify_name_number_2").text();
	//获取地址别名
	var address = $(".user_modify_name_number_3").text();
	//获取地址
	var address_1 = $(".province_txt").text();
	var address_2 = $(".city_txt").text();
	var address_3 = $(".area_txt").text();
	//获取详细地址
	var address_4 = $(".user_modify_address").text();
	$(".Modify_address_box").hide();
	$(this).hide();
	$(".Address_edit_box").show();
	THIS.find(".province_1").text(address_1);
	THIS.find(".city_1").text(address_2);
	THIS.find(".area_1").text(address_3);
	THIS.find(".Detailed_address_1").text(address_4);
	
	THIS.find(".User_information_txt_1").text(userName);
	THIS.find(".User_information_txt_2").text(Phone_number);
	THIS.find(".User_information_txt_3").text(Fixed_line);
	THIS.find(".User_information_txt_4").text(Email);
	THIS.find(".User_information_txt_5").text(address);
	$(".Finish_editing").show();
	$(".save_new_address").hide();
})
//编辑详细信息
$(".user_modify_address").on("click",function(){
	$(".Pop_box").css("height",window_H);
	$(".Pop_box").show();
})
//修改详细地址
$(".confirm_deletion_1").on("click",function(){
	//获取修改的详细信息
	var new_txt = $(".new_address_ipt").val();
	//写入信息
	$(".user_modify_address").text(new_txt);
	$(".Pop_box").hide();
})
$(".Cancel_delete_1").on("click",function(){
	$(".Pop_box").hide();
})
//新建地址
var newAddress;
$(".New_address_btn").on("click",function(){
	$(".public1_return_btn").find("img").hide();
	$(".public1_return_img_1").show();
	$(".Finish_editing").hide();
	$(".Address_edit_box").hide();
	$(".Modify_address_box").show();
	$(".save_new_address").css("display","block");
	$(".province_txt").text("点击编辑地址");
	$(".city_txt").text("");
	$(".area_txt").text("");
	$(".user_modify_address").text("点击编辑详细地址");
	$(".public1_head_txt").text("新建地址");
	$(".Address_edit").hide();
	$(".public1_return_img_1").show();
	$(".public1_return_img").hide();
})
//保存新建地址
$(".save_new_address").on("click",function(){
	//克隆元素以及事件
	newAddress = $(".Address_edit_li").eq(0).clone(true,true);
	newAddress.removeClass("clone");
	$(".Address_edit_ul").prepend(newAddress);
	var userName = $(".user_modify_name").text();
	//获取手机号
	var Phone_number = $(".user_modify_name_number").text();
	//获取固话
	var Fixed_line = $(".user_modify_name_number_1").text();
	//获取E-mail
	var Email = $(".user_modify_name_number_2").text();
	//获取地址别名
	var address = $(".user_modify_name_number_3").text();
	//获取地址别名
	var address = $(".user_modify_name_number_3").text();
	console.log(userName,Phone_number);
	//写入用户资料
	newAddress.find(".Address_user_name").text(userName);
	newAddress.find(".Phone_number").text(Phone_number);
	newAddress.find(".Phone_number_1").text(Fixed_line);
	newAddress.find(".Phone_number_2").text(Email);
	newAddress.find(".Phone_number_3").text(address);
	newAddress.find(".province_1").text($(".province_txt").text());
	newAddress.find(".city_1").text($(".city_txt").text());
	newAddress.find(".area_1").text($(".area_txt").text());
	newAddress.find(".Detailed_address_1").text($(".user_modify_address").text());
	$(".Modify_address_box").hide();
	$(".save_new_address").hide();
	$(".Address_edit_box").show();
	$(".save_btn").hide();
	$(".public1_head_txt").text("我的地址");
	$(".Address_edit").show();
})
//删除地址
var this_1
$(".delect_address").on("click",function(){
	this_1 = $(this).parent().parent();
	$(".Delete_prompt_box").show();
})
//确定删除地址
$(".confirm_deletion").on("click",function(){
	this_1.remove();
	$(".Delete_prompt_box").hide();
})
//取消删除地址
$(".Cancel_delete").on("click",function(){
	$(".Delete_prompt_box").hide();
})
//选择默认地址
$(".default_btn").on("click",function(){
	$(".default_btn").attr("src","img/payment-img-1.png");
	$(".default_btn").attr("name","0");
	$(this).attr("src","img/payment-img.png");
	$(this).attr("name","1");
})
//设置默认地址
$(".set_default_btn").on("click",function(){
	if($(".set_default_btn").attr("name") == 0){
		$(this).attr("src","img/d2.png");
		$(this).attr("name","1");
		$(".Default_address_setting_left").css("color","#000000");
		$(".default_btn").attr("src","img/payment-img-1.png");
		$(".default_btn").attr("name","1");
		THIS.find(".default_btn").attr("src","img/payment-img.png");
		THIS.find(".default_btn").attr("name","1");
	}else{
		$(this).attr("src","img/d1.png");
		$(this).attr("name","0");
		$(".Default_address_setting_left").css("color","#b3b3b3");
		$(".default_btn").attr("src","img/payment-img-1.png");
		$(".default_btn").attr("name","1");
		THIS.find(".default_btn").attr("src","img/payment-img-1.png");
		THIS.find(".default_btn").attr("name","0");
	}
})
//点击完成完成地址编辑
$(".Finish_editing").on("click",function(){
	$(this).hide();
	$(".Address_edit").show();
	$(".operation_box").hide();
})
//新建地址状态返回返回到我的地址
$(".public1_return_img_1").on("click",function(){
	$(".public1_head_txt").text("我的地址");
	$(".Address_edit").show();
	$(".Modify_address_box").hide();
	$(".Address_edit_box").show();
	$(".save_new_address").hide();
	$(".public1_return_img_1").hide();
	$(".public1_return_img").show();
})
//修改地址状态返回到我的地址
$(".public1_return_img_2").on("click",function(){
	$(".Finish_editing").show();
	$(".public1_head_txt").text("我的地址");
	$(".Modify_address_box").hide();
	$(".Address_edit_box").show();
	$(".save_btn").hide();
	$(this).hide();
	$(".public1_return_img").show();
})
//修改订单备注
$(".Explain").on("click",function(){
	$(".Pop_box_7").css("height",window_H);
	$(".Pop_box_7").show();
})
//确定输入备注
$(".confirm_deletion_7").on("click",function(){
	var txt = $(".new_address_ipt_7").val();
	$(".Explain").text(txt);
	$(".Pop_box_7").hide();
})
//确定输入备注
$(".Cancel_delete_7").on("click",function(){
	$(".Pop_box_7").hide();
})

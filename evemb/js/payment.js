//选择支付宝支付
$(".Alipay_box").on("click",function(){
	$(".Alipay_img_1").attr("src","img/hrthrtn.png");
	$(this).find(".Alipay_img_1").attr("src","img/htrcdz.png");
	$(".Immediate_payment_btn").show();
})
//选择银行卡支付
//$(".Other_payment_link").eq(1).on("click",function(){
//	//改变头部文本
//	$(".public1_head_txt").text("我的银行卡");
//	//显示银行卡返回按钮
//	$(".public1_return_btn").css("display","none");
//	$(".public1_return_btn_1").css("display","inline-block");
//	//显示添加银行卡按钮
//	$(".add_btn").show();
//	$(".center_box").hide();
//	//显示无银行卡状态
//	$(".no_banck_card_1").show();
//	//立即支付按钮不可点击
//	$(".Immediate_payment_btn").attr("disabled","disabled");
//	$(".Immediate_payment_btn").css("background","#e6e6e6");
//	$(".Immediate_payment_btn").show();
//})
////点击银行卡返回按钮退回到收银台
//$(".public1_return_btn_1").on("click",function(){
//	//隐藏银行卡返回按钮
//	$(this).css("display","none");
//	$(".public1_return_btn").css("display","inline-block");
//	//隐藏添加银行卡按钮
//	$(".add_btn").hide();
//	//改变头部文本
//	$(".public1_head_txt").text("收银台");
//	//隐藏银行卡块
//	$(".no_banck_card_1").hide();
//	//显示支付类型块
//	$(".center_box").show();
//	//立即支付按钮可点击
//	$(".Immediate_payment_btn").attr("disabled","true");
//	$(".Immediate_payment_btn").css("background","#e63322");
//	//隐藏立即支付按钮
//	$(".Immediate_payment_btn").hide();
//})
////点击添加添加银行卡
//$(".add_btn").on("click",function(){
//	//隐藏银行卡块
//	$(".no_banck_card_1").hide();
//	//显示新建银行卡
//	$(".new_banck_card_1").show();
//	//隐藏银行卡返回按钮
//	$(".public1_return_btn_1").css("display","none");
//	//显示新建银行卡返回按钮
//	$(".public1_return_btn_2").css("display","inline-block");
//	//隐藏立即支付按钮
//	$(".Immediate_payment_btn").hide();
//})
////点击新建银行卡返回按钮返回我的银行卡
//$(".public1_return_btn_2").on("click",function(){
//	//隐藏新建银行卡返回按钮
//	$(this).css("display","none");
//	//显示银行卡返回按钮
//	$(".public1_return_btn_1").css("display","inline-block");
//	//隐藏新建银行卡
//	$(".new_banck_card_1").hide();
//	//显示银行卡块
//	$(".no_banck_card_1").show();
//})
////点击下一步进入短信验证码
//$(".Next_step").on("click",function(){
//	var txt = $(".banck_ipt").val();
//	if(txt == ""){
//		$(".Prompt-box").show();
//		$(".Prompt-box").text("银行账号不能为空");
//	}else{
//		//隐藏新建银行卡块
//		$(".new_banck_card_1").hide();
//		//显示短信验证
//		$(".SMS_verification_box").show();
//		//隐藏新建银行卡返回按钮
//	    $(".public1_return_btn_2").css("display","none");
//	    //添加按钮隐藏
//	    $(".add_btn").hide();
//	    //显示短信验证返回按钮
//	    $(".public1_return_btn_3").css("display","inline-block");
//	    //改变头部文本
//	    $(".public1_head_txt").text("短信验证");
//	    //显示确认支付按钮
//	    $(".confirm_btn_1").css("display","block");
//	    $(".confirm_btn_1").css("background","#e6e6e6");
//	    timeFn();
//	}
//})
////计时器开始计时
//function timeFn(){
//	var t = 80;
//	var timer = setInterval(function(){
//	    t--;
//	    $(".SMS_img_btn").find("span").eq(0).text(t);
//	    if(t == 0){
//	    	clearInterval(timer);
//	    	$(".SMS_img_btn").find("span").eq(1).text("");
//	    	$(".SMS_img_btn").find("span").eq(0).text("获取验证码");
//	    }
//	},1000)
//}
//$(".banck_ipt").on("click",function(){
//	$(".Prompt-box").hide();
//	$(".Prompt-box").text("");
//})
////点击获取验证码重新获取验证码
//$(".SMS_img_btn").on("click",function(){
//	var txt_1 = $(".SMS_img_btn").find("span").text();
//	if(txt_1 == 0){
//		timeFn();
//	}
//})
//$(".SMS_ipt").on("click",function(){
//	$(".confirm_btn_1").css("background","#e63322");
//	$(".confirm_btn_1").attr("disabled",false);
//  $(".Prompt-box").hide();
//	$(".Prompt-box").text("");
//})
////点击短信验证返回按钮返回我的银行卡
//$(".public1_return_btn_3").on("click",function(){
//	//隐藏短信验证返回按钮
//	$(this).css("display","none");
//	//显示新建银行卡返回按钮
//	$(".public1_return_btn_2").css("display","inline-block");
//	//改变头部文本
//	$(".public1_head_txt").text("我的银行卡");
//	//隐藏短信验证码块
//	$(".SMS_verification_box").hide();
//	//隐藏确认支付按钮
//  $(".confirm_btn_1").css("display","none");
//  //显示新建银行卡块
//  $(".new_banck_card_1").show();
//  //显示添加按钮
//  $(".add_btn").show();
//})
////点击确认支付按钮进入支付成功块
//$(".confirm_btn_1").on("click",function(){
//	var txt = $(".SMS_ipt").val();
//	console.log("5656565");
//	if(txt == ""){
//		$(".Prompt-box").show();
//		$(".Prompt-box").text("请输入验证码");
//	}else{
//		//隐藏短信验证返回按钮
//		$(".public1_return_btn_3").css("display","none");
//		//显示验证结果返回按钮
//		$(".public1_return_btn_4").css("display","inline-block");
//		//改变头部文本
//		$(".public1_head_txt").text("支付成功");
//		//隐藏短信验证码块
//	    $(".SMS_verification_box").hide();
//	    //隐藏确认支付按钮
//      $(this).css("display","none");
//      //显示支付结果
//      $(".Payment_success_btn").show();
//	}
//})
////点击支付结果返回按钮返回收银台
//$(".public1_return_btn_4").on("click",function(){
//	//隐藏支付结果返回按钮
//	$(this).css("display","none");
//	$(".public1_return_btn").css("display","inline-block");
//	//改变头部文本
//	$(".public1_head_txt").text("收银台");
//	//隐藏支付结果块
//	$(".Payment_success_btn").hide();
//	//显示收银台
//	$(".center_box").show();
//})

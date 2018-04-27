//点击输入框改变样式
$(".AccountPassword_ipt").on("click",function(){
	$(".AccountPassword_ipt").removeClass("AccountPassword_ipt_add");
	$(".Account_btn").removeClass("Account_btn_add");
	$(this).parent().parent().parent().find(".AccountPassword_ipt").addClass("AccountPassword_ipt_add");
	$(this).parent().parent().parent().find(".Account_btn").addClass("Account_btn_add");
	$(this).parent().parent().parent().find(".Account_btn").removeAttr("disabled");
	//关闭提示框
	$(".Prompt-box").text("");
	$(".Prompt-box").hide();
})
$(".AccountPassword_input_1").keyup(function(){
	$(".delete_btn").show();  
})
//点击删除按钮删除密码
$(".delete_btn").on("click",function(){
	$(".AccountPassword_input_1").val("");
})
//手机快速注册
$(".register").on("click",function(){
	$(".public1_head_txt").text("快速注册");
	$(".AccountPassword_box").hide();
	$(".AccountPassword_box_2").show();
	$(".register_box").hide();
})
//注册成功
//$(".Account_btn_2").on("click",function(){
//	$(".public1_head_txt").text("注册成功");
//	$(".AccountPassword_box").hide();
//	$(".AccountPassword_box_3").show();
//	$(".register_box").hide();
//})
//下一步
//$(".Account_btn_next").on("click",function(){
//	$(".public1_head_txt").text("找回密码");
//	$(".AccountPassword_box").hide();
//	$(".AccountPassword_box_5").show();
//	$(".register_box").hide();
//})
//找回密码
$(".RetrievePassword").on("click",function(){
	$(".public1_head_txt").text("找回密码");
	$(".AccountPassword_box").hide();
	$(".AccountPassword_box_4").show();
	$(".register_box").hide();
})
//登录账号密码检测
$(".Account_btn").on("click",function(){
	var Account = $(".Account_input_1");
	var Password = $(".Password_input_1");
	if((Account.val() == "") && (Password.val() != "")){
		$(".Prompt-box").show();
		$(".Prompt-box").text("账号不能为空");
	}else if((Account.val() != "") && (Password.val() == "")){
		$(".Prompt-box").show();
		$(".Prompt-box").text("请输入密码");
	}else if((Account.val() == "") && (Password.val() == "")){
		$(".Prompt-box").show();
		$(".Prompt-box").text("请输入账号和密码");
	}
})
//找回密码——账号验证码检测
$(".Account_btn_next").on("click",function(){
	var Account = $(".Account_input_2");
	var Verification = $(".Verification_Code_1");
	if((Account.val() == "") && (Verification.val() != "")){
		$(".Prompt-box").show();
		$(".Prompt-box").text("账号不能为空");
	}else if((Account.val() != "") && (Verification.val() == "")){
		$(".Prompt-box").show();
		$(".Prompt-box").text("请输入验证码");
	}else if((Account.val() == "") && (Verification.val() == "")){
		$(".Prompt-box").show();
		$(".Prompt-box").text("请输入账号和验证码");
	}else if((Account.val() != "") && (Verification.val() != "")){
		$(".public1_head_txt").text("找回密码");
	    $(".AccountPassword_box").hide();
	    $(".AccountPassword_box_5").show();
	    $(".register_box").hide();
	    //关闭提示框
	    $(".Prompt-box").text("");
	    $(".Prompt-box").hide();
	}
})
//确认新密码
$(".Determine_1").on("click",function(){
	var password_1 = $(".new_Password_1");
	var password_2 = $(".new_Password_2");
	if((password_1.val() == "") && (password_2.val() != "")){
		$(".Prompt-box").show();
		$(".Prompt-box").text("请输入新密码");
	}else if((password_1.val() != "") && (password_2.val() == "")){
		$(".Prompt-box").show();
		$(".Prompt-box").text("请确认新密码");
	}else if((password_1.val() == "") && (password_2.val() == "")){
		$(".Prompt-box").show();
		$(".Prompt-box").text("请输入新密码");
	}else if((password_1.val()) != (password_2.val())){
	    $(".Prompt-box").show();
		$(".Prompt-box").text("确认的新密码不匹配，请重新输入。");
	}else if((password_1.val() != "") && (password_2.val() != "") && (password_1.val()) == (password_2.val())){
		$(".Prompt-box").show();
		$(".Prompt-box").text("密码修改成功。");
	}
})
//注册检测
$(".Account_btn_2").on("click",function(){
	//用户名
	var user = $(".user_name");
	//E-mail
	var email = $(".Email");
	//手机号码
	var Phone = $(".Phone_number");
	//验证码
	var Verification = $(".Verification_Code_2");
	//新密码
	var Password_1 = $(".new_AccountPassword_1");
	var Password_2 = $(".new_AccountPassword_2");
	if((user.val() == "") || (email.val() == "") || (Phone.val() == "") || (Verification.val() == "")){
		$(".Prompt-box").show();
		$(".Prompt-box").text("请填写完整信息");
	}else if(((user.val() != "") && (email.val() != "") && (Phone.val() == "") && (Verification.val() != "")) &&((Password_1.val() == "") || (Password_2.val() == ""))){
		$(".Prompt-box").show();
		$(".Prompt-box").text("请输入密码");
	}else if((user.val() != "") && (email.val() != "") && (Phone.val() == "") && (Verification.val() != "") && (Password_1.val() != "") && (Password_2.val() != "") && ((Password_1.val() != Password_2.val()))){
		$(".Prompt-box").show();
		$(".Prompt-box").text("确认的密码与输入的密码不匹配");
	}else if((user.val() != "") && (email.val() != "") && (Phone.val() == "") && (Verification.val() != "") && (Password_1.val() != "") && (Password_2.val() != "") && ((Password_1.val() == Password_2.val()))){
		$(".public1_head_txt").text("注册成功");
	    $(".AccountPassword_box").hide();
	    $(".AccountPassword_box_3").show();
	    $(".register_box").hide();
	    //关闭提示框
	    $(".Prompt-box").text("");
	    $(".Prompt-box").hide();
	}
})
//改变密码显示形式
$(".password_img").on("click",function(){
	var Name = $(this).attr("name");
	if(name == 0){
		$(".Password_input_1").attr("type","text");
		name = 1;
	}else{
		$(".Password_input_1").attr("type","password");
		name = 0;
	}
})
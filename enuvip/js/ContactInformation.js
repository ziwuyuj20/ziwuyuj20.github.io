$(".downMenuBox div").click(function(){
    $(this).toggleClass('hover').siblings().removeClass('hover');
})
//下拉框滑入滑出效果
$(".downMenuBox div").click(function(){
	//收回
	$(".downMenuBox div").not(this).next(".MenuCenter").slideUp(350);
	//显示
	$(this).next(".MenuCenter").slideToggle(350);
});
//公司紧急联系人资料修改
//记录原始资料,姓名/公司电话/手机
var $oldName = $(".oldName").text();
var $oldNumber = $(".oldNumber").text();
var $ecRightR1 = $(".ecRightR1").text();
//点击修改按钮生成修改区
$(".tittleBgc").click(function(){
	$(this).css("display","none");
	$("#ecBox").css("display","none");
	$("#disecBox").css("display","block");
})
//点击保存按钮修改区消失
$(".btnLeft1").click(function(){
	$(".tittleBgc").css("display","block");
	$("#ecBox").css("display","block");
	$("#disecBox").css("display","none");
	//修改姓名
	$(".oldName").text($(".name1").val());
	//修改公司电话
	$(".oldNumber").text($(".sellNumber").val());
	//修改手机
	$(".ecRightR1").text($(".sellPhoneNum").val());
})
//点击取消按钮修改区消失切原始资料还原
$(".btnRight1").click(function(){
	$(".tittleBgc").css("display","block");
	$("#ecBox").css("display","block");
	$("#disecBox").css("display","none");
	//资料还原
	$(".oldName").text($oldName);
	$(".oldNumber").text($oldNumber);
	$(".ecRightR").text($ecRightR1);
})
//店铺负责人资料修改
//点击修改按钮生成修改区
$(".chargeHeadBtn").click(function(){
	$(this).css("display","none");
	$("#ResponsibleBox").css("display","none");
	$("#disResponsi").css("display","block");
})
//点击保存按钮修改区消失
$(".landlineLeftBTn").click(function(){
	$(".chargeHeadBtn").css("display","block");
	$("#ResponsibleBox").css("display","block");
	$("#disResponsi").css("display","none");
	//修改姓名
	$(".responsibleName").text($(".responsibleIpt").val());
	//修改电子邮箱
	$(".responsibleEmail").text($(".emailIpt").val());
	//修改座机号码
	$(".landline").text($(".landlineIpt").val());
	//手机修改
	$(".ecRightR2").text($(".responCellNum").val());
	//qq修改
	$(".QQnum").text($(".responQQIpt").val());

})
//点击取消按钮修改区消失
$(".landlineRightBTn").click(function(){
	$(".chargeHeadBtn").css("display","block");
	$("#ResponsibleBox").css("display","block");
	$("#disResponsi").css("display","none");
})
//运营联系人信息修改
//点击修改按钮生成修改区
$(".operateHeadBtn").click(function(){
	$(this).css("display","none");
	$("#operateBox").css("display","none");
	$("#disOperateBox").css("display","block");
})
//点击保存按钮修改区消失
$(".operateLeftBtn").click(function(){
	$(".operateHeadBtn").css("display","block");
	$("#operateBox").css("display","block");
	$("#disOperateBox").css("display","none");
	//修改姓名
	$(".operateNameLiTxt").text($(".operateNameIpt").val());
	//电子邮件修改
	$(".operateEmailLiTxt").text($(".operateEmailIpt").val());
	//座机号码修改
	$("#operateLandLineLiTxt").text($(".operateLandLineIpt").val());
	//手机号码修改
	$(".operateNumberDiv").text($(".operateSellNumIpt").val());
	//QQ号码修改
	$(".operateQQDivTxt").text($(".operateQQNumIpt").val());
})
//点击取消按钮修改区消失
$(".operateLRightBtn").click(function(){
	$(".operateHeadBtn").css("display","block");
	$("#operateBox").css("display","block");
	$("#disOperateBox").css("display","none");
})
//售后联系人信息修改
//点击修改按钮生成修改区
$(".ustomerHeadBtn").click(function(){
	$(this).css("display","none");
	$("#ustomerBox").css("display","none");
	$("#disServiceBox").css("display","block");
})
//点击保存按钮修改区消失
$(".serviceLeftBtn").click(function(){
	$(".ustomerHeadBtn").css("display","block");
	$("#ustomerBox").css("display","block");
	$("#disServiceBox").css("display","none");
	//修改售后联系人姓名
	$(".diaServiceManName").text($(".ServiceManNameIpt").val());
	//修改电子邮件
	$(".diaServiceManEmai").text($(".serviceManEmaiIpt").val());
	//修改座机
	$(".diaServiceManLandline").text($(".serviceManLanlineIpt").val());
	//修改手机号码
	$(".diaServiceManSellNum").text($(".serviceMansellNumberIpt").val());
	//修改QQ
	$(".diaServiceManQQ").text($(".serviceManQQIpt").val());
})
//点击取消按钮修改区消失
$(".serviceLRightBtn").click(function(){
	$(".ustomerHeadBtn").css("display","block");
	$("#ustomerBox").css("display","block");
	$("#disServiceBox").css("display","none");
})
//财务联系人资料修改
//点击修改按钮生成修改区
$(".financeHeadBtn").click(function(){
	$(this).css("display","none");
	$("#financeBox").css("display","none");
	$("#disFinanceBox").css("display","block");
})
//点击保存按钮修改区消失
$(".financeLeftBtn").click(function(){
	$(".financeHeadBtn").css("display","block");
	$("#financeBox").css("display","block");
	$("#disFinanceBox").css("display","none");
	//修改姓名
	$(".disFinanceName").text($(".financeManNameIpt").val());
	//电子邮箱修改
	$(".disFinanceEmail").text($(".financeManEmaiIpt").val());
	//座机号码修改
	$(".disFinanceLanline").text($(".financeManLanlineIpt").val());
	//手机号码修改
	$(".disFinanceSellNumber").text($(".financeMansellNumberIpt").val());
	//QQ号码修改
	$(".disFinanceQQ").text($(".financeManQQIpt").val());
})
//点击取消按钮修改区消失
$(".financeLRightBtn").click(function(){
	$(".financeHeadBtn").css("display","block");
	$("#financeBox").css("display","block");
	$("#disFinanceBox").css("display","none");
})
//技术联系人信息修改
//点击修改按钮生成修改区
$(".technologyHeadBtn").click(function(){
	$(this).css("display","none");
	$("#technologyBox").css("display","none");
	$("#disTechnologyBox").css("display","block");
})
//点击保存按钮修改区消失
$(".technologyLeftBtn").click(function(){
	$(".technologyHeadBtn").css("display","block");
	$("#technologyBox").css("display","block");
	$("#disTechnologyBox").css("display","none");
	//修改姓名
	$(".disTechnologyName").text($(".technologyNameIpt").val());
	//修改电子邮件
	$(".disTechnologyEmail").text($(".technologyEmaiIpt").val());
	//修改座机号码
	$(".disTechnologyLandline").text($(".technologyLanlineIpt").val());
	//手机号码修改
	$(".disTechnologySellNumber").text($(".technologysellNumberIpt").val());
	//QQ号码修改
	$(".disTechnologyQQ").text($(".technologyManQQIpt").val());
})
//点击取消按钮修改区消失
$(".technologyRightBtn").click(function(){
	$(".technologyHeadBtn").css("display","block");
	$("#technologyBox").css("display","block");
	$("#disTechnologyBox").css("display","none");
})
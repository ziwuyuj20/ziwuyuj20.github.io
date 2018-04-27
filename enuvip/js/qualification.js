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
//公司营业执照信息修改
//点击生成修改区
$(".taxHeadRinght").click(function(){
	$(this).css("display","none");
	$(".bankCenterBox").css("display","none");
	$(".disDankCenterBox").css("display","block");
})
//点击提交审核按钮修改区消失
$(".examineBtn").click(function(){
	$(".taxHeadRinght").css("display","block");
	$(".bankCenterBox").css("display","block");
	$(".disDankCenterBox").css("display","none");
	//注册号修改
	$(".registrationNumber").text($(".BusinessLicenseInpt").val());
	//法定代表人姓名修改
	$(".legalName").text($(".legalPerson").val());
	//身份证号修改
	$(".idNumber").text($(".idNum").val());
	//改变详细地址文本
	$(".disPlace").text($(".placIpt").val());
	//改变注册资本
	$(".disDapital").text($(".capitalIpt").val());
	//改变经营范围
	$(".disRange").text($(".textarea").val());
})
//点击取消按钮时修改区消失
$(".cancelBtn").click(function(){
	$(".taxHeadRinght").css("display","block");
	$(".bankCenterBox").css("display","block");
	$(".disDankCenterBox").css("display","none");
})
//点击删除身份证电子版
$(".delete").click(function(){
	$(".electronic").css("display","none");
	$("#place").css("margin-top","42px");
})
//点击删除营业执照副本电子版本
$(".delete1").click(function(){
	$(".divElectronic").css("display","none");
})
//注册所在地修改
var registerProvince = document.getElementById("registerProvince");
var registerCity = document.getElementById("registerCity");
var registerCount = document.getElementById("registerCount");
//获取数据
var province = chinaArea.china.province;
//设置省份下拉框
function setProvinceSelect(){
	var str = '';
	for (var i=0;i<province.length;i++) {
		str += '<option value="'+i+'">'+province[i]["-name"]+'</option>'
	}
	$('#registerProvince').html(str);
}
//设置城市下拉框
function setCitySelect(pindex){
	var city = province[pindex]["city"];
	registerCity.innerHTML = "";//清空操作
	var str = '';
	for (var i=0;i<city.length;i++) {
		str += '<option value="'+i+'">'+city[i]["-name"]+'</option>'
	}
	$('#registerCity').html(str);
}
//设置区县下拉框
function setCountySelect(pindex,cindex){
	var county = province[pindex].city[cindex].county;
	registerCount.innerHTML = "";//清空操作
	var str = '';
	for (var i=0;i<county.length;i++) {
		str += '<option value="'+i+'">'+county[i]["-name"]+'</option>'
	}
	$('#registerCount').html(str);
}
//联动变化事件
//省份修改
registerProvince.onchange = function(){
	var pindex = this.value;
	setCitySelect(pindex);//重置城市
	setCountySelect(pindex,0);//重置区县
	//改变省份文本
	$("#registerProvince").click(function(){
		//获取下拉框文本
		var seleTxt = $("#registerProvince").find("option:selected").text();
		//将下拉框文本写入标签
		$(".provinceTxt").text(seleTxt);
		var seleTxt = $("#registerCity").find("option:selected").text();
		//将下拉框文本写入标签
		$(".cityTxt").text(seleTxt);
		var seleTxt = $("#registerCount").find("option:selected").text();
		//将下拉框文本写入标签
		$(".countyTxt").text(seleTxt);
	})
}
//城市修改
registerCity.onchange = function(){
	var pindex = registerProvince.value;
	var cindex = this.value;
	setCountySelect(pindex,cindex);//重置区县
	//改变城市文本
	$("#registerCity").click(function(){
		//获取下拉框文本
		var seleTxt = $("#registerCity").find("option:selected").text();
		//将下拉框文本写入标签
		var seleTxt = $("#registerCount").find("option:selected").text();
		//将下拉框文本写入标签
		$(".countyTxt").text(seleTxt);
	})
}
//改变区市文本
$("#registerCount").click(function(){
	//获取下拉框文本
	var seleTxt = $("#registerCount").find("option:selected").text();
	//将下拉框文本写入标签
	$(".countyTxt").text(seleTxt);
})
setProvinceSelect();
setCitySelect(0);
setCountySelect(0,0);
//公司组织机构代码修改
//点击修改选项生成修改区
$(".bankBgc").click(function(){
	$(".companyCode").css("display","none");
	$(".disCompanyCode").css("display","block");
})
//点击提交审核按钮修改区消失
$(".codeLeftBtn").click(function(){
	$(".companyCode").css("display","block");
	$(".disCompanyCode").css("display","none");
	//组织机构代码修改
	$(".disCode").text($(".codeIpt").val());
})
//点击删除按钮删除身份证电子版
$(".codeDelete").click(function(){
	$("#LiElectronic").css("display","none");
	$("#edSelection").css("margin-top","40px");
})
//点击取消按钮时修改区消失
$(".codeRightBtn").click(function(){
	$(".companyCode").css("display","block");
	$(".disCompanyCode").css("display","none");
})
//公司税务登记证修改
//点击修改按钮修改区出现
$(".taxBgc").click(function(){
	$(this).css("display","none");
	$(".companyTax").css("display","none");
	$(".disCompanyTax").css("display","block");
	$("#idElectronic").css("display","block");
	$("#LiMan").css("display","block");
})
//点击提交审核按钮修改区消失
$("#manLeftBTn").click(function(){
	$(".companyTax").css("display","block");
	$(".disCompanyTax").css("display","none");
	//公司税务登记证文本修改
	$(".disCodeNum").text($(".registrationIpt").val());
	$(".taxBgc").css("display","block");
})
//点击删除按钮税务登记被删除
$("#taxDelete").click(function(){
	$("#idElectronic").css("display","none");
	$("#IdSelection").css("margin-top","40px");
	$("#taxElectronics").css("margin-top","46px");
})
//点击一般纳税人资格电子版消失
$("#manDelete").click(function(){
	$("#LiMan").css("display","none");
	$("#taxManSelection").css("margin-top","30px");
})
//点击取消按钮时修改区消失
$("#manRightBTn").click(function(){
	$(".companyTax").css("display","block");
	$(".disCompanyTax").css("display","none");
	$(".taxBgc").css("display","block");
})
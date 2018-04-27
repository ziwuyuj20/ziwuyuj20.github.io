$(".downMenuBox div").click(function(){
    // return alert()
    $(this).toggleClass('hover').siblings().removeClass('hover');
})
//下拉框滑入滑出效果
$(".downMenuBox div").click(function(){
	//收回
	$(".downMenuBox div").not(this).next(".MenuCenter").slideUp(350);
	//显示
	$(this).next(".MenuCenter").slideToggle(350);
});
//税务信息修改
//点击修改资料块显示
$(".taxHeadRinght").click(function(){
	$(this).css("display","none");
	$(".taxUlBox").css("display","none");
	$(".taxUldisplay").css("display","block");
})
//点击保存修改资料区消失
$(".btn1Left").click(function(){
	$(".taxHeadRinght").css("display","bone");
	$(".taxUlBox").css("display","bone");
	$(".taxUldisplay").css("display","block");
	//公司详细地址修改
	$(".dAddress").text($(".iptAddress").val());
})
//记录税务信息原始资料
var $taxCode = $(".taxCode").text();
var $manType = $(".manType").text();
var $etpType = $(".etpType").text();
var $proName = $(".proName").text();
var $ctName = $(".ctName").text();
var $cunName = $(".cunName").text();
var $dAddress = $(".dAddress").text();
//点击取消修改资料块消失
$(".btn1Right").click(function(){
	$(".taxHeadRinght").css("display","block");
	$(".taxUlBox").css("display","block");
	$(".taxUldisplay").css("display","none");
	//点击取消修改时恢复原始资料
	$(".taxCode").text($taxCode);
	$(".manType").text($manType);
	$(".etpType").text($etpType);
	$(".proName").text($proName);
	$(".ctName").text($ctName);
	$(".cunName").text($cunName);
	$(".dAddress").text($dAddress);
})
//纳税类型税务码下拉框修改
$(".selectCode").click(function(){
	//获取下拉框文本
	var seleTxt = $(".selectCode").find("option:selected").text();
	//将下拉框文本写入标签
    $(".taxCode").text(seleTxt);
})
//纳税人类型下拉框修改
$(".selectClass").click(function(){
	//获取下拉框文本
	var seleTxt = $(".selectClass").find("option:selected").text();
	//将下拉框文本写入标签
    $(".manType").text(seleTxt);
})
//企业类型修改
$(".selectEtp").click(function(){
	//获取下拉框文本
	var seleTxt = $(".selectEtp").find("option:selected").text();
	//将下拉框文本写入标签
    $(".etpType").text(seleTxt);
})
//公司联系地址修改
//获取数据
var province = chinaArea.china.province;
//获取省份下拉框
var sel_prov = document.getElementById("province");
var sel_city = document.getElementById("city");
var sel_coun = document.getElementById("county");
function setProvinceSelect(){
	//生成字符串
	var str = '';
	for (var i=0;i<province.length;i++) {
		str += '<option value="'+i+'">'+province[i]["-name"]+'</option>';

	}
	$('#province').html(str);
	$("#province").click(function(){
		//获取下拉框文本
		var seleTxt = $("#province").find("option:selected").text();
		//将下拉框文本写入标签
		$(".proName").text(seleTxt);
	})
}
//设置城市下拉框
function setCitySelect(pindex){
	var city = province[pindex]["city"];
	sel_city.innerHTML = "";//清空操作
	var str = '';
	for (var i=0;i<city.length;i++) {
		str += '<option value="'+i+'">'+city[i]["-name"]+'</option>'
	}
	$('#city').html(str);
	$("#city").click(function(){
		//获取下拉框文本
		var seleTxt = $("#city").find("option:selected").text();
		//将下拉框文本写入标签
		$(".ctName").text(seleTxt);
	})
}
//设置区县下拉框
function setCountySelect(pindex,cindex){
	var county = province[pindex].city[cindex].county;
	sel_coun.innerHTML = "";//清空操作
	var str = '';
	for (var i=0;i<county.length;i++) {
		str += '<option value="'+i+'">'+county[i]["-name"]+'</option>'
	}
	$('#county').html(str);
	$("#county").click(function(){
		//获取下拉框文本
		var seleTxt = $("#county").find("option:selected").text();
		//将下拉框文本写入标签
		$(".cunName").text(seleTxt);
	})
}
//联动变化事件
//省份修改
sel_prov.onchange = function(){
	var pindex = this.value;
	console.log(pindex);
	setCitySelect(pindex);//重置城市
	setCountySelect(pindex,0);//重置区县
}
//城市修改
sel_city.onchange = function(){
	var pindex = sel_prov.value;
	var cindex = this.value;
	setCountySelect(pindex,cindex);//重置区县
}
setProvinceSelect();
setCitySelect(0);
setCountySelect(0,0);
//点击保存按钮修改资料页消失
$(".btn1Left").click(function(){
	$(".taxHeadRinght").css("display","block");
	$(".taxUlBox").css("display","block");
	$(".taxUldisplay").css("display","none");
})
//结算银行信息修改
//点击切换到修改页
$(".bankBgc").click(function(){
	$(".bankBox").css("display","none");
	$(".disBankBox").css("display","block");
})
//记录结算银行信息原始资料
var $backProvince = $(".backProvince").text();
var $backCity = $(".backCity").text();
var $backCounty = $(".backCounty").text();
var $bankAccount = $(".bankAccount").text();
//点击保存修改页隐藏
$(".banckBtnLeft").click(function(){
	$(".bankBox").css("display","block");
	$(".disBankBox").css("display","none");
	//点击修改银行账号
	$(".bankAccount").text($(".DisbankAccount").val());
})
//点击取消时隐藏修改区
$(".banckBtnRight").click(function(){
	$(".bankBox").css("display","block");
	$(".disBankBox").css("display","none");
	//点击取消恢复原始资料
	$(".backProvince").text($backProvince);
	$(".backCity").text($backCity);
	$(".backCounty").text($backCounty);
	$(".bankAccount").text($bankAccount);
})
//开户银行所在地修改
var bankProvince = document.getElementById("bankProvince");
var bankCity = document.getElementById("bankCity");
var bankCounty = document.getElementById("bankCounty");
//设置省份下拉框
function setProvinceBack(){
	var str = '';
	for (var i=0;i<province.length;i++) {
		str += '<option value="'+i+'">'+province[i]["-name"]+'</option>'
	}
	$("#bankProvince").html(str);
	$("#bankProvince").click(function(){
		//获取下拉框文本
		var seleTxt = $("#bankProvince").find("option:selected").text();
		//将下拉框文本写入标签
		$(".backProvince").text(seleTxt);
	})
}
//设置城市下拉框
function setCityBack(pindex){
	var city = province[pindex]["city"];
	bankCity.innerHTML = "";//清空操作
	var str = '';
	for (var i=0;i<city.length;i++) {
		str += '<option value="'+i+'">'+city[i]["-name"]+'</option>'
	}
	$("#bankCity").html(str);
	$("#bankCity").click(function(){
		//获取下拉框文本
		var seleTxt = $("#bankCity").find("option:selected").text();
		//将下拉框文本写入标签
		$(".backCity").text(seleTxt);
	})
}
//设置区县下拉框
function setCountyBack(pindex,cindex){
	var county = province[pindex].city[cindex].county;
	bankCounty.innerHTML = "";//清空操作
	var str = '';
	for (var i=0;i<county.length;i++) {
		str += '<option value="'+i+'">'+county[i]["-name"]+'</option>'
	}
	$("#bankCounty").html(str);
	$("#bankCounty").click(function(){
		//获取下拉框文本
		var seleTxt = $("#bankCounty").find("option:selected").text();
		//将下拉框文本写入标签
		$(".backCounty").text(seleTxt);
	})
}
//联动变化事件
//省份修改
bankProvince.onchange = function(){
	var pindex = this.value;
	console.log(pindex);
	setCityBack(pindex);//重置城市
	setCountyBack(pindex,0);//重置区县
}
//城市修改
bankCity.onchange = function(){
	var pindex = bankProvince.value;
	var cindex = this.value;
	setCountyBack(pindex,cindex);//重置区县
}
setProvinceBack();
setCityBack(0);
setCountyBack(0,0);
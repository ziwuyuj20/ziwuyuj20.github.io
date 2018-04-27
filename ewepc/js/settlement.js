//生成订单操作项
$(".consigneeCenterBox").mouseover(function(){
	if($(this).find(".default1").hasClass("default2")){
        $(this).find(".edit").show();
	}else{
		$(this).find(".operationLink").show();
	}
})
$(".consigneeCenterBox").mouseout(function(){
    $(this).find(".operationLink").hide();
})
//设置遮罩宽高
//获取整个页面的宽高
var winW = $(document).width();
var winH = $(document).height();
$(".maskBox").css("width",winW).css("height",winH);
//点击新增收货地址生成遮罩
$(".newAddress").click(function(){
	$(".maskBox").show();
	$(".maskBox").attr("name","1");
	//清空数据
	$(".popupRingthIpt").val("");
	$(".popupRingthIpt1").val("");
	$(".popupRingthIpt3").val("");
	$(".popupRingthIpt2").val("");
	aFn1();
})
var THIS;
$(".edit").click(function(){
	THIS = $(this);
	$(".maskBox").show();
	oldHome = $(this).parent().find(".home").find("span").text();
	oldUserName = $(this).parent().find(".UserName").text();
	oldUprovince = $(this).parent().find(".province").text();
	oldUcity = $(this).parent().find(".city").text();
	oldarea = $(this).parent().find(".area").text();
	oldaddress = $(this).parent().find(".address").text();
	olduserCellPhope = $(this).parent().find(".userCellPhope").text();
	//弹窗内容
	$(".popupRingthIpt").val(oldUserName);
	$("#province option:selected").text(oldUprovince);
	$("#city option:selected").text(oldUcity);
	$("#county option:selected").text(oldarea);
	$("#province option:selected").text(oldUprovince);
	$(".popupRingthIpt1").val(oldaddress);
	$(".popupRingthIpt3").val(olduserCellPhope);
	$(".popupRingthIpt2").val(oldHome);
	$(".maskBox").attr("name","0");
	aFn1();
})
function aFn1(){
    //获取滚动条高度
	var scrollTop = $(document).scrollTop();
	//改变弹窗位置
	$(".popupBox").css("margin-top",+"260"+scrollTop);
}
//点击关闭按钮关闭遮罩
$(".popupHeadLink").click(function(){
	$(".maskBox").hide();
})
//点击保存按钮隐藏遮罩并生成新收货人信息
$(".saveBtn").on("click",function(){
	if($(".maskBox").attr("name") == 1){
		//克隆节点
		var newNode = $(".consigneeCenterBox:last").clone(true,true);
		newNode.show();
		newNode.find(".default1").hide();
		newNode.find(".default1").removeClass("default2");
		//插入节点
		$(".consigneeCenterBox:first").before(newNode);
		$(".maskBox").hide();
		//获取修改的信息
		var popupRingthIpt = $(".popupRingthIpt").val();
		var province = $("#province option:selected").text();
		var city = $("#city option:selected").text();
		var county = $("#county option:selected").text();
		var popupRingthIpt1 = $(".popupRingthIpt1").val();
		var popupRingthIpt2 = $(".popupRingthIpt2").val();
		var popupRingthIpt3 = $(".popupRingthIpt3").val();
		var popupRingthIpt4 = $(".popupRingthIpt4").val();
		var popupRingthIpt5 = $(".popupRingthIpt5").val();
		newNode.find(".UserName").text(popupRingthIpt);
		newNode.find(".province").text(province);
		newNode.find(".city").text(city);
		newNode.find(".area").text(county);
		newNode.find(".address").text(popupRingthIpt1);
		newNode.find(".userCellPhope").text(popupRingthIpt3);
		newNode.find(".home").text(popupRingthIpt2);
		//菜单展开
		$(".openOffBgc").removeClass("couponHeadBgc1");
		$(".openOffBgc").addClass("couponHeadBgc2");
		$(".openOff").attr("name","1");
	}else if($(".maskBox").attr("name") == 0){
		//编辑收货人信息
		var popupRingthIpt = $(".popupRingthIpt").val();
		var province = $("#province option:selected").text();
		var city = $("#city option:selected").text();
		var county = $("#county option:selected").text();
		var popupRingthIpt1 = $(".popupRingthIpt1").val();
		var popupRingthIpt2 = $(".popupRingthIpt2").val();
		var popupRingthIpt3 = $(".popupRingthIpt3").val();
		var popupRingthIpt4 = $(".popupRingthIpt4").val();
		var popupRingthIpt5 = $(".popupRingthIpt5").val();
		console.log(popupRingthIpt)
		THIS.parent().find(".UserName").text(popupRingthIpt);
		THIS.parent().find(".province").text(province);
		THIS.parent().find(".city").text(city);
		THIS.parent().find(".area").text(county);
		THIS.parent().find(".address").text(popupRingthIpt1);
		THIS.parent().find(".userCellPhope").text(popupRingthIpt3);
		THIS.parent().find(".home").text(popupRingthIpt2);
        $(".maskBox").hide();
	}
})
$(".homeBtn,.parentHome,.company").on("click",function(){
	var txt = $(this).text();
	$(".popupRingthIpt2").val(txt);
})
//点击删除删除收货人信息
$(".delect").click(function(){
	$(this).parent().remove();
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
//价格说明弹窗
$(".explainBox").click(function(){
	$(".explainTxt").show();
})
$(".explainPTxt").find("span").click(function(){
	$(".explainTxt").hide();
})
//使用优惠券弹窗
$(".couponDiv").click(function(){
	$(".couponBox,.liFooter").toggle(500);
	$(this).find(".couponHeadBgc").toggleClass('couponHeadBgc1').siblings().removeClass('couponHeadBgc1');
})
//收货人信息收起展开
$(".openOff").click(function(){
	if($(this).attr("name") == 0){
		$(".consigneeCenterBox:not('.consigneeCenterBox:first')").show();
		$(".consigneeCenterBox").show();
		$(".openOffBgc").removeClass("couponHeadBgc1");
		$(".openOffBgc").addClass("couponHeadBgc2");
		$(".openOff").attr("name","1");
		$(this).show();
	}else if($(this).attr("name") == 1){
		// $(".consigneeCenterBox:not('.consigneeCenterBox:first')").hide();
		$(".openOffBgc").removeClass("couponHeadBgc2");
		$(".openOffBgc").addClass("couponHeadBgc1");
		$(this).show();
		$(".openOff").attr("name","0");
		$(".consigneeCenterBox").hide();
		$(".default2").parent().show();
	}
})
//设为默认
$(".default").click(function(){
	$(".default1").hide();
	$(".default1").removeClass("default2");
	$(".consigneeCenterBox").find(".homeBgc").hide();
	$(this).parent().find(".default1").show();
	$(this).parent().find(".default1").addClass("default2");
	$(this).parent().find(".delect").hide();
	$(this).parent().find(".default").hide();
	//克隆节点
	var newNode = $(".homeBgc").clone(true,true);
	newNode.show();
	//插入节点
	$(this).parent().find(".home").append(newNode);
})
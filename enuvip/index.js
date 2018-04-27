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
//税务信息修改  内容块显示/隐藏
//获取标签
var taxHeadRinght = document.getElementsByClassName("taxHeadRinght")[0];
var taxUlBox = document.getElementsByClassName("taxUlBox")[0];
var taxUldisplay = document.getElementsByClassName("taxUldisplay")[0];
var btn1Left = document.getElementsByClassName("btn1Left")[0];
var btn1Right = document.getElementsByClassName("btn1Right")[0];
//点击修改资料块显示
taxHeadRinght.onclick = function(){
	taxHeadRinght.style.display = "none";
	taxUlBox.style.display = "none";
	taxUldisplay.style.display = "block";
}
function taxUlAfn(){
	taxHeadRinght.style.display = "block";
	taxUlBox.style.display = "block";
	taxUldisplay.style.display = "none";
}
//公司详细地址修改
var iptAddress = document.getElementsByClassName("iptAddress")[0];
var prompt = document.getElementsByClassName("prompt")[0];
var dAddress = document.getElementsByClassName("dAddress")[0];
//保存按钮点击事件
btn1Left.onclick = function(){
	taxUlAfn();
	dAddress.innerText = iptAddress.value;
}
//点击输入框，红色提示文字消失
iptAddress.onclick = function(){
	prompt.innerText = "";
}
// 取消按钮点击事件
btn1Right.onclick = function(){
	taxUlAfn();
}
//获取下拉框元素
var selectCode = document.getElementsByClassName("selectCode")[0];
var taxCode = document.getElementsByClassName("taxCode")[0];
selectCode.onchange = function(){
	taxCode.innerText = this.value;
}
var selectClass = document.getElementsByClassName("selectClass")[0];
var manType = document.getElementsByClassName("manType")[0];
selectClass.onchange = function(){
	manType.innerText = this.value;
}
var selectEtp = document.getElementsByClassName("selectEtp")[0];
var etpType = document.getElementsByClassName("etpType")[0];
selectEtp.onchange = function(){
	etpType.innerText = this.value;
}
//获取地区HTML对象
var sel_prov = document.getElementsByName("province")[0];
var sel_city = document.getElementsByName("city")[0];
var sel_coun = document.getElementsByName("county")[0];
//获取数据
var province = chinaArea.china.province;
//设置省份下拉框
function setProvinceSelect(){
	for (var i=0;i<province.length;i++) {
		sel_prov.innerHTML += '<option value="'+i+'">'+province[i]["-name"]+'</option>'
	}
}
//设置城市下拉框
function setCitySelect(pindex){
	var city = province[pindex]["city"];
	sel_city.innerHTML = "";//清空操作
	for (var i=0;i<city.length;i++) {
		sel_city.innerHTML += '<option value="'+i+'">'+city[i]["-name"]+'</option>'
	}
}
//设置区县下拉框
function setCountySelect(pindex,cindex){
	var county = province[pindex].city[cindex].county;
	sel_coun.innerHTML = "";//清空操作
	for (var i=0;i<county.length;i++) {
		sel_coun.innerHTML += '<option value="'+i+'">'+county[i]["-name"]+'</option>';
	}
}
//联动变化事件
//省份修改
var proName = document.getElementsByClassName("proName")[0];
sel_prov.onchange = function(){
	var pindex = this.value;
	console.log(pindex);
	setCitySelect(pindex);//重置城市
	setCountySelect(pindex,0);//重置区县
	var index = sel_prov.selectedIndex; // 选中索引
	var text = sel_prov.options[index].text; // 选中文本
	proName.innerText = text;
	var index1 = sel_city.selectedIndex; // 选中索引
	var text1 = sel_city.options[index1].text; // 选中文本
	ctName.innerText = text1;
	var index2 = sel_coun.selectedIndex; // 选中索引
	var text2 = sel_coun.options[index2].text; // 选中文本
	cunName.innerText = text2;
}
//城市修改
var ctName = document.getElementsByClassName("ctName")[0];
sel_city.onchange = function(){
	var pindex = sel_prov.value;
	var cindex = this.value;
	setCountySelect(pindex,cindex);
	var index1 = sel_city.selectedIndex; // 选中索引
	var text1 = sel_city.options[index1].text; // 选中文本
	ctName.innerText = text1;
}
//区修改
var cunName = document.getElementsByClassName("cunName")[0];
sel_coun.onchange = function(){
	var index2 = sel_coun.selectedIndex; // 选中索引
	var text2 = sel_coun.options[index2].text; // 选中文本
	cunName.innerText = text2;
}
//初始函数调用
setProvinceSelect();
setCitySelect(0);
setCountySelect(0,0);
//结算银行信息修改
//点击修改按钮修改块显示
var bankBgc = document.getElementsByClassName("bankBgc")[0];
var disBankBox = document.getElementsByClassName("disBankBox")[0];
var bankBox = document.getElementsByClassName("bankBox")[0];
bankBgc.onclick = function(){
    disBankBox.style.display = "block";
    bankBox.style.display = "none";
}
//点击保存按钮修改块消失
var banckBtnLeft = document.getElementsByClassName("banckBtnLeft")[0];
//点击账号输入框时清空
var DisbankAccount = document.getElementsByClassName("DisbankAccount")[0];
var bankAccount = document.getElementsByClassName("bankAccount")[0];
DisbankAccount.onclick = function(){
	DisbankAccount.value = "";
}
banckBtnLeft.onclick = function(){
	disBankBox.style.display = "none";
    bankBox.style.display = "block";
    bankAccount.innerText = DisbankAccount.value;
}
//点击取消按钮
var banckBtnRight = document.getElementsByClassName("banckBtnRight")[0];
banckBtnRight.onclick = function(){
	disBankBox.style.display = "none";
    bankBox.style.display = "block";
}
//获取HTML对象
var backProvince = document.getElementsByClassName("backProvince")[0];
var backCity = document.getElementsByClassName("backCity")[0];
var backCounty = document.getElementsByClassName("backCounty")[0];
var sel_Bprov = document.getElementsByName("Bprovince")[0];
var sel_Bcity = document.getElementsByName("Bcity")[0];
var sel_Bcoun = document.getElementsByName("Bcounty")[0];
//获取数据
var provinceBack = chinaArea.china.province;
//设置省份下拉框
function setProvinceSelectBack(){
	for (var i=0;i<provinceBack.length;i++) {
		sel_Bprov.innerHTML += '<option value="'+i+'">'+province[i]["-name"]+'</option>'
	}
}
//设置城市下拉框
function setCitySelectBack(pindex){
	var city = province[pindex]["city"];
	sel_Bcity.innerHTML = "";//清空操作
	for (var i=0;i<city.length;i++) {
		sel_Bcity.innerHTML += '<option value="'+i+'">'+city[i]["-name"]+'</option>'
	}
}
//设置区县下拉框
function setCountySelectBack(pindex,cindex){
	var county = province[pindex].city[cindex].county;
	sel_Bcoun.innerHTML = "";//清空操作
	for (var i=0;i<county.length;i++) {
		sel_Bcoun.innerHTML += '<option value="'+i+'">'+county[i]["-name"]+'</option>'
	}
}
//联动变化事件
//省份修改
sel_Bprov.onchange = function(){
	var pindex = this.value;
	setCitySelectBack(pindex);//重置城市
	setCountySelectBack(pindex,0);//重置区县
	var index = sel_Bprov.selectedIndex; // 选中索引
	var text1 = sel_Bprov.options[index].text; // 选中文本
	backProvince.innerText = text1;
	var index = sel_Bcity.selectedIndex; // 选中索引
	var text2 = sel_Bcity.options[index].text; // 选中文本
	backCity.innerText = text2;
	var index = sel_Bcoun.selectedIndex; // 选中索引
	var text3 = sel_Bcoun.options[index].text; // 选中文本
	backCounty.innerText = text3;
}
//城市修改
sel_Bcity.onchange = function(){
	var pindex = sel_Bprov.value;
	var cindex = this.value;
	setCountySelect(pindex,cindex);//重置区县
	var index = sel_Bcity.selectedIndex; // 选中索引
	var text2 = sel_Bcity.options[index].text; // 选中文本
	backCity.innerText = text2;
}
//市区修改
sel_Bcoun.onchange = function(){
	var index = sel_Bcoun.selectedIndex; // 选中索引
	var text3 = sel_Bcoun.options[index].text; // 选中文本
	backCounty.innerText = text3;
}
//初始函数调用
setProvinceSelectBack();
setCitySelectBack(0);
setCountySelectBack(0,0);

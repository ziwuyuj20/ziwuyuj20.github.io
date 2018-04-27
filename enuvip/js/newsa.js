$(".downMenuBox div").click(function(){
    $(this).toggleClass('hover').siblings().removeClass('hover');
    $(".downMenuBox div").removeAttr("id");
})
//下拉框滑入滑出效果
$(".downMenuBox div").click(function(){
	//收回
	$(".downMenuBox div").not(this).next(".MenuCenter").slideUp(350);
	//显示
	$(this).next(".MenuCenter").slideToggle(350);
});
//所在地区修改
var sel_prov = document.getElementById("province");
var sel_city = document.getElementById("city");
var sel_coun = document.getElementById("area");
//获取数据
var province = chinaArea.china.province;
//获取省份下拉框
function setProvinceSelect(){
	//生成字符串
	var str = '';
	for (var i=0;i<province.length;i++) {
		str += '<option value="'+i+'">'+province[i]["-name"]+'</option>';

	}
	$('#province').html(str);
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
}
//设置区县下拉框
function setCountySelect(pindex,cindex){
	var county = province[pindex].city[cindex].county;
	sel_coun.innerHTML = "";//清空操作
	var str = '';
	for (var i=0;i<county.length;i++) {
		str += '<option value="'+i+'">'+county[i]["-name"]+'</option>'
	}
	$('#area').html(str);
}
//设置地区联动
//省份联动
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
//获取数据
var province = chinaArea.china.province;
var province_txt;
var city_txt;
var area_txt;
//选择省
//设置省份下拉框
function setProvinceBack(){
	//生成字符串
	var str = '';
	for (var i=0;i<province.length;i++) {
		str += '<li value="'+i+'" class="ico">'+province[i]["-name"]+'</li>';

	}
	$('.Address_plug_province_ul_1').html(str);
}
//设置城市下拉框
function setCityBack(pindex){
	$(".Address_plug_province_box_1").hide();
	$(".Address_plug_province_box_2").show();
	var city = province[pindex]["city"];
	$(".Address_plug_province_ul_2").innerHTML = "";//清空操作
	var str = '';
	for (var i=0;i<city.length;i++) {
		str += '<li value="'+i+'" class="ico_2">'+city[i]["-name"]+'</li>'
	}
	$(".Address_plug_province_ul_2").html(str);
}
//设置区县下拉框
function setCountyBack(pindex,cindex){
	var county = province[pindex].city[cindex].county;
	$(".Address_plug_province_ul_3").innerHTML = "";//清空操作
	var str = '';
	for (var i=0;i<county.length;i++) {
		str += '<li value="'+i+'" class="ico_3">'+county[i]["-name"]+'</li>'
	}
	$(".Address_plug_province_ul_3").html(str);
}
//生成省份
$(".Address_plug").on("click",function(){
	$(window).scrollTop("0");
	$(".Modify_address_box,.public1-head-box").hide();
	$(".Address_plug_province_box_1").show();
	setProvinceBack();
})
//联动变化事件
//省份修改
var pindex;
var cindex;
$(document).on("click",".ico",function(){
	$(window).scrollTop("0");
	province_txt = $(this).text();
	$(".province_txt").text(province_txt);
	pindex = this.value;
	$(".Address_plug_province_box_1").hide();
	$(".Address_plug_province_box_2").show();
	setCityBack(pindex);//重置城市
})
//城市修改
$(document).on("click",".ico_2",function(){
	$(window).scrollTop("0");
	city_txt = $(this).text();
	$(".city_txt").text(city_txt);
	cindex = this.value;
	$(".Address_plug_province_box_2").hide();
	$(".Address_plug_province_box_3").show();
	setCountyBack(pindex,cindex);//重置区县
})
//区县修改
$(document).on("click",".ico_3",function(){
	$(window).scrollTop("0");
	$(".Address_plug_province_box_3").hide();
	$(".Modify_address_box,.public1-head-box").show();
	area_txt = $(this).text();
	$(".area_txt").text(area_txt);
	cindex = this.value;
})
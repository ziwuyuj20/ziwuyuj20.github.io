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
//生成所有省市
//获取数据
var province = chinaArea.china.province;
function setProvinceSelect(){
	//循环生成所有省、直辖市
	var str = '';
	for(var i = 0;i < province.length;i++){
		//获取省、直辖市数据
		var txt = province[i]["-name"];
		str += "<div class='ProvinceOut'>";
		str += "<input type='radio' class='provinceRadio'>";
		str += "<span class='ProvinceName'>"+txt+"</span>";
		str +="</div>";
    };
    $(".ProvinceBox").append(str);
}
setProvinceSelect();
//循环生成省内城市  生成弹窗
$(".ProvinceOut").mouseenter(function(){
	var str = '';
	//获取省、直辖市索引值
	var a = $(this).index();
	//获取市数据
	var city = province[a]["city"];
	for(var i = 0;i < city.length;i++){
		var txt = city[i]["-name"];
		str += "<div class='cityOut'>";
		str += "<input type='radio' class='cityRadio'>";
		str += "<span class='cityName'>"+txt+"</span>";
		str += "</div>";
		$(this).append($("<div class='cityBox'></div>"));
	}
	$(".cityBox").append(str);
	$(this).css("background","#fffec6");
})
//鼠标离开事件  弹窗消失
$(".ProvinceOut").mouseleave(function(){
	$(this).find(".cityBox").css("display","none");
	$(this).css("background","#f4f6f9");
})
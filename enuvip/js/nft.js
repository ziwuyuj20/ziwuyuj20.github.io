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
//未指定地区城市设置运费
$(".appointCitySet").click(function(){
	//克隆节点
	$newNode = $(".trCneter1:last").clone(true,true);
	$newNode.show();
	//插入节点
	$(this).parent().parent().find("table").find("tbody").append($newNode);
})
//点击删除删除节点
$(".tdDelect").click(function(){
	$(this).parent().remove();
})
//点击编辑生成弹窗
//获取数据
var province = chinaArea.china.province;
function Afn(){
	//克隆节点
	var $newNode = $(".regionBox").clone(true,true);
	//给节点添加类
	$newNode.addClass("regionBox1")
	// //移除类
	$newNode.removeClass("regionBox");
	// //改变节点样式
	// $newNode.css("display","block");
	// //插入节点
	$(".tdPosition").append($newNode);
	//生成所有省市
	var str = '';
	for(var i = 0;i < province.length;i++){
		//获取省、直辖市数据
		var txt = province[i]["-name"];
		str += "<div class='ProvinceOut'>";
		str += "<input type='checkbox' class='provinceRadio' value='"+txt+"'>";
		str += "<span class='ProvinceName'>"+txt+"</span>";
		str += "<div class='cityBox' style=\"display:none;\">"
   
	// $(".provinceBox").append(str);
	//鼠标进入生成弹窗
	// $(".ProvinceOut").mouseenter(function(){
		// var str = '';
		//获取省、直辖市索引值
		// var a = $(this).index();
		//获取市数据
		var city = province[i]["city"];
		for(var j = 0;j < city.length;j++){
			var c = city[j]["-name"];
			str += "<div class='cityOut'>";
			str += "<input type='checkbox' class='cityRadio' value='"+c+"'>";
			str += "<span class='cityName'>"+c+"</span>";
			str += "</div>";
			// $(this).append($("<div class='cityBox'></div>"));
		}
		str +="</div></div>";
	 };
	    $(".provinceBox").append(str);
		// $(".cityBox").append(str);
		// $(this).css("background","#fffec6");
	// })
	//鼠标离开事件  弹窗消失
	// $(".ProvinceOut").mouseleave(function(){
		// $(this).find(".cityBox").remove();
		// $(this).css("background","#f4f6f9");
	// })
}
//点击修改按钮生成弹窗
$(".edit1").click(function(){
	$(this).parent().find(".regionBox1").css("display","block");
})
//点击关闭按钮关闭弹窗
$(".closeBtn").click(function(){
	$(this).parent().parent().css("display","none");
	$(".cityBox").css("display","none");
})
//点击确定按钮关闭弹窗
$(".leftBtn").click(function(){
	$(this).parent().parent().css("display","none");
})
//点击取消按钮关闭弹窗
$(".rightBtn").click(function(){
	$(this).parent().parent().css("display","none");
})
Afn();
$('.ProvinceOut').hover(function() {
		$(this).css("background","#fffec6");
		var _this = $(this).find('.cityBox')
		var top = $(this).offset().top
		var left = $(this).offset().left
		var clone = _this.clone()
		$('body').append(clone)
		$('.cityBox.new').remove()
		clone.show().css({"position":'absolute','top':(top+$(this).height()-8),'left':left}).addClass('new')
		$(this).siblings().css("background","#f4f6f9");
	}, function() {
	});
$(document).on('mouseleave','.cityBox.new',function(event) {
	$(this).hide()
	$('.ProvinceOut').css({'background':'none'})
})
$('.provinceRadio').click(function(event) {
	if($(this).prop('checked')){
		$(this).siblings('.cityBox').find('input').prop('checked','checked')
		$('.cityBox.new').find('input').prop('checked','checked')
	}else{
		$(this).siblings('.cityBox').find('input').prop('checked',false)
		$('.cityBox.new').find('input').prop('checked',false)
	}
});

$('.provinceRadio').click(function(event) {
	if($(this).prop('checked')){
		$(this).siblings('.cityBox').find('input').prop('checked','checked')
		$('.cityBox.new').find('input').prop('checked','checked')
	}else{
		$(this).siblings('.cityBox').find('input').prop('checked',false)
		$('.cityBox.new').find('input').prop('checked',false)
	}
});


$(document).on('click','.cityBox input',function(event) {
	var old = $('input[value='+$(this).val()+']').eq(0)
	if($(this).prop('checked')){
		old.prop('checked','checked')
	}else{
		old.prop('checked',false)
	}

	var i=0
	$('.cityBox').find('input').each(function(index, el) {
		if($(this).prop('checked')){
 			i++
 			return false
 		}
	});
	// console.log(i)
	if(i>0){
 		old.parent().parent().parent().find('.provinceRadio').prop('checked','checked')
 		i=0
 	}else {
 		old.parent().parent().parent().find('.provinceRadio').prop('checked',false)
 	}
});
//生成运费设置表格
$(".expressRadio").click(function(){
	if($(this).prop("checked")){
	    $(".tableOutBox1").show();
	}else{
		$(".tableOutBox1").hide();
	}
})
$(".deliveryRadio").click(function(){
	if($(this).prop("checked")){
	    $(".tableOutBox2").show();
	}else{
		$(".tableOutBox2").hide();
	}
})
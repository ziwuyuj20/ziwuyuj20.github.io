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
//tap切换
$(".tapUl").find("li").click(function(){
	$(this).toggleClass("tapIco").siblings().removeClass('tapIco');
})
//设置弹窗大小
var popupw = $(document).width();
var popuph = $(document).height();
$(".popup1").css("width",popupw).css("height",popuph);
//点击查看图片生成弹窗
$(".previewImg").click(function(){
	$(".popup1").show();
})
//关闭弹窗
$(".colseBtn1").click(function(){
	$(".popup1").hide();
})
//tap切换内容
//获取元素的索引值
$(".tapUl").find("li").click(function(){
	var num = $(this).index();
	$(".List").hide();
	$(".List").eq(num).show();
})
$(".list").show();
//客户放弃弹窗
//设置弹窗大小
var popupw = $(document).width();
var popuph = $(document).height();
$(".popup4,.popup5,.popup6,.popup7").css("width",popupw).css("height",popuph);
$(".giveUp").click(function(){
	$(".popup4").show();
})
//关闭客户放弃弹窗
$(".closeImg,.popup4LeftBtn,.popup4RightBtn").click(function(){
	$(".popup4").hide();
})
//申请客服介入弹窗
$(".Intervention").click(function(){
	$(".popup5").show();
})
//关闭申请客服介入弹窗
$(".closeImg,.popupBTn").click(function(){
	$(".popup5").hide();
})
//点击退款弹出退款弹窗
$(".refund").click(function(){
	$(".popup6").show();
})
//关闭退款弹窗
$(".closeImg,.ico2SaveBTn").click(function(){
	$(".popup6").hide();
})
//点击换新生成换新弹窗
$(".forNew").click(function(){
	$(".popup7").show();
})
//关闭换新弹窗
$(".closeImg,.popup7TableBtn,.determineBtn").click(function(){
	$(".popup7").hide();
})
//鼠标滚动条滚动事件
$(".scroll").mousedown(function(){
	//获取鼠标在滚动条里的位置
	var y = event.clientY - $(this).position().top;
	//鼠标移动事件
	$(document).mousemove(function(){
		//获取滚动条的移动位置
		var y1 = event.clientY - y;
		//设置滚动条的移动
		$(".scroll").css("top",y1);
		//获取混动条父级的高
		var h = $(".scrollBox").outerHeight();
		//内容移动
		var ch = y1 * $(".popup7Ul").outerHeight() / $(".scroll").outerHeight();
		$(".popup7Ul").css("top",-ch);
		//文本、滚动条碰壁检测
		var bh = $(".scroll").position().top;
		if(bh <= 0){
			$(".scroll").css("top","0px");
			$(".popup7Ul").css("top","0px");
		}else if(bh >= $(".scrollBox").outerHeight() - $(".scroll").outerHeight()){
			$(".scroll").css("top",$(".scrollBox").outerHeight() - $(".scroll").outerHeight());
			$(".popup7Ul").css("top",$(".popup7LeftBox").outerHeight() - $(".popup7Ul").outerHeight() - 30);
		}
	})
})
//松开鼠标移除移动事件
$(document).mouseup(function(){
	$(document).unbind("mousemove");
})
//滚动条滚动事件
var up = 0;
$(".floatBox").on("mousewheel DOMMouseScroll", function (e) {
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  //兼容chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));//兼容firefox
    if (delta < 0) {
    	//向下滚
        up += 10
        $(".scroll").css("top",up);
        $(".popup7Ul").css("top",-up * ($(".popup7Ul").outerHeight() / ($(".scroll").outerHeight())));
    } else if (delta > 0) {
    	//向上滚
        up -= 10
        $(".scroll").css("top",up);
        $(".popup7Ul").css("top",-up * ($(".popup7Ul").outerHeight() / ($(".scroll").outerHeight())));
    }
    //碰壁检测
    //文本、滚动条碰壁检测
    var bh = $(".scroll").position().top;
    if(bh <= 0){
    	up = 0;
    	$(".scroll").css("top","0px");
    	$(".popup7Ul").css("top","0px");
    }else if(bh >= $(".scrollBox").outerHeight() - $(".scroll").outerHeight()){
    	up = $(".scrollBox").outerHeight() - $(".scroll").outerHeight();
    	$(".scroll").css("top",$(".scrollBox").outerHeight() - $(".scroll").outerHeight());
    	$(".popup7Ul").css("top",-($(".popup7Ul").outerHeight() - $(".popup7LeftBox").outerHeight()));
    }
    //清除默认滚轮事件
	return false;
});
//地区联动
//获取数据
var province = chinaArea.china.province;
//设置省份下拉框
function setProvinceSelect(){
	var str = '';
	for (var i=0;i<province.length;i++) {
		str += '<option value="'+i+'">'+province[i]["-name"]+'</option>'
	}
	$('.province').html(str);
}
//设置城市下拉框
function setCitySelect(pindex){
	var city = province[pindex]["city"];
	$(".city").html("");//清空操作
	var str = '';
	for (var i=0;i<city.length;i++) {
		str += '<option value="'+i+'">'+city[i]["-name"]+'</option>'
	}
	$(".city").html(str);
}
//设置区县下拉框
function setCountySelect(pindex,cindex){
	var county = province[pindex].city[cindex].county;
	$(".area").html("");//清空操作
	var str = '';
	for (var i=0;i<county.length;i++) {
		str += '<option value="'+i+'">'+county[i]["-name"]+'</option>'
	}
	$(".area").html(str);
}
//联动变化事件
//省份修改
$(".province").change(function(){
	var pindex = this.value;
	setCitySelect(pindex);//重置城市
	setCountySelect(pindex,0);//重置区县
})
//城市修改
$(".city").change(function(){
	var pindex = $(".province").val();
	var cindex = this.value;
	setCountySelect(pindex,cindex);//重置区县
})
setProvinceSelect();
setCitySelect(0);
setCountySelect(0,0);
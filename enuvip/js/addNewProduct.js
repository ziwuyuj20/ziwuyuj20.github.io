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
//绑定滚动条事件
$(".scrollH").mousedown(function(){
	//获取鼠标在滚动条里的位置
	var y = event.clientY - $(this).position().top;
	//绑定鼠标移动事件
	$(document).mousemove(function(){
		//获取滚动条的移动位置
		var y1 = event.clientY - y;
		//设置滚动条的移动
	    $(".scrollH").css("top",y1);
	    //获取混动条父级的高
	    var h = $(".scrollHBox").outerHeight();
	    //文本移动
	    var ch = y1 * ($(".genderUl").outerHeight() / ($(".scrollHBox1").outerHeight()+20));
	    $(".genderUl").css("top",-ch);
	    //文本、滚动条碰壁检测
	    var bh = $(".scrollH").position().top;
	    if(bh <= 0){
	    	$(".scrollH").css("top","0px");
	    	//移除鼠标移动事件
	    	$(document).unbind("mousemove");
	    }else if(bh >= $(".scrollHBox").outerHeight() - $(".scrollH").outerHeight()){
	    	$(".scrollH").css("top",$(".scrollHBox").outerHeight() - $(".scrollH").outerHeight());
	    	$(".genderUl").css("top",-($(".genderUl").outerHeight() - $(".genderBox1").outerHeight()));
	    	//移除鼠标移动事件
	    	$(document).unbind("mousemove");
	    }
	    return false;
	})
})
//鼠标松开事件
$(document).mouseup(function(){
	//移除鼠标移动事件
	$(document).unbind("mousemove");
})
//给genderBox1绑定滚轮事件
var up = 0;
$(".genderBox1").on("mousewheel DOMMouseScroll", function (e) {
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  //兼容chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));//兼容firefox
    if (delta < 0) {
    	//向下滚
        up += 8
        $(".scrollH").css("top",up);
        $(".genderUl").css("top",-up * ($(".genderUl").outerHeight() / ($(".scrollHBox").outerHeight()+20)));
    } else if (delta > 0) {
    	//向上滚
        up -= 8
        $(".scrollH").css("top",up);
        $(".genderUl").css("top",-up * ($(".genderUl").outerHeight() / ($(".scrollHBox").outerHeight()+20)));
    }
    //碰壁检测
    //文本、滚动条碰壁检测
    var bh = $(".scrollH").position().top;
    if(bh <= 0){
    	$(".scrollH").css("top","0px");
    	$(".genderUl").css("top","0px");
    }else if(bh >= $(".scrollHBox").outerHeight() - $(".scrollH").outerHeight()){
    	$(".scrollH").css("top",$(".scrollHBox").outerHeight() - $(".scrollH").outerHeight());
    	$(".genderUl").css("top",-($(".genderUl").outerHeight() - $(".genderBox1").outerHeight()));
    }
    //清除默认滚轮事件
	return false;
});
//绑定滚动条事件
$(".scrollH1").mousedown(function(){
	//获取鼠标在滚动条里的位置
	var y = event.clientY - $(this).position().top;
	//绑定鼠标移动事件
	$(document).mousemove(function(){
		//获取滚动条的移动位置
		var y1 = event.clientY - y;
		//设置滚动条的移动
	    $(".scrollH1").css("top",y1);
	    //获取混动条父级的高
	    var h = $(".scrollHBox1").outerHeight();
	    //文本移动
	    var ch = y1 * ($(".genderUl1").outerHeight() / ($(".scrollHBox1").outerHeight()+85));
	    $(".genderUl1").css("top",-ch);
	    //文本、滚动条碰壁检测
	    var bh = $(".scrollH1").position().top;
	    if(bh <= 0){
	    	$(".scrollH1").css("top","0px");
	    	//移除鼠标移动事件
	    	$(document).unbind("mousemove");
	    }else if(bh >= $(".scrollHBox1").outerHeight() - $(".scrollH1").outerHeight()){
	    	$(".scrollH1").css("top",$(".scrollHBox1").outerHeight() - $(".scrollH1").outerHeight());
	    	$(".genderUl1").css("top",-($(".genderUl1").outerHeight() - $(".genderBox2").outerHeight()));
	    	//移除鼠标移动事件
	    	$(document).unbind("mousemove");
	    }
	    return false;
	})
})
//鼠标松开事件
$(document).mouseup(function(){
	//移除鼠标移动事件
	$(document).unbind("mousemove");
})
//给genderBox2绑定滚轮事件
var up = 0;
$(".genderBox2").on("mousewheel DOMMouseScroll", function (e) {
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  //兼容chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));//兼容firefox
    if (delta < 0) {
    	//向下滚
        up += 8
        $(".scrollH1").css("top",up);
        $(".genderUl1").css("top",-up * ($(".genderUl1").outerHeight() / ($(".scrollHBox1").outerHeight()+85)));
    } else if (delta > 0) {
    	//向上滚
        up -= 8
        $(".scrollH1").css("top",up);
        $(".genderUl1").css("top",-up * ($(".genderUl1").outerHeight() / ($(".scrollHBox1").outerHeight()+85)));
    }
    //碰壁检测
    //文本、滚动条碰壁检测
    var bh = $(".scrollH1").position().top;
    if(bh <= 0){
    	$(".scrollH1").css("top","0px");
    	$(".genderUl1").css("top","0px");
    }else if(bh >= $(".scrollHBox1").outerHeight() - $(".scrollH1").outerHeight()){
    	$(".scrollH1").css("top",$(".scrollHBox1").outerHeight() - $(".scrollH1").outerHeight());
    	$(".genderUl1").css("top",-($(".genderUl1").outerHeight() - $(".genderBox2").outerHeight()));
    }
    //清除默认滚轮事件
	return false;
});
//点击服饰种类改变样式
$(".ico").click(function(){
	$(".ico").css("background","none");
	$(".ico").css("color","#333");
	$(this).css("background","#DCE6F0");
	$(this).css("color","#206ebc");
	$(".positionPTxt2").text("> "+$(this).text());
})
//点击女装生成对应的滚动窗
$(".genderHead1").click(function(){
	$(".genderBox1").css("display","block");
	$(".genderBox2").css("display","none");
	$(this).css("background","#DCE6F0");
	$(this).css("color","#206ebc");
	$(".genderHead2").css("background","none");
	$(".genderHead2").css("color","#333");
	$(".positionPTxt1").show();
	$(".positionPTxt4").css("display","none");
})
//点击男装生成对应的滚动窗
$(".genderHead2").click(function(){
	$(".genderBox2").css("display","block");
	$(".genderBox1").css("display","none");
	$(this).css("background","#DCE6F0");
	$(this).css("color","#206ebc");
	$(".genderHead1").css("background","none");
	$(".genderHead1").css("color","#333");
	$(".positionPTxt4").show();
	$(".positionPTxt1").css("display","none");
})
//点击服饰内衣生成弹窗
$(".cuHead").click(function(){
	$(this).css("background","#DCE6F0");
	$(this).css("color","#206ebc");
	$(".genderBox").css("display","block");
	$(".positionPTxt3").show();
})
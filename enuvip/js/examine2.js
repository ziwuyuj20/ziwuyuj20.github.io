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
//改变审核数量
var num = 0;
$(".address").click(function(){
	num = $(".ListIpt").val();
	num	++;
	$(".ListIpt").val(num);
})
$(".reduce").click(function(){
	num = $(".ListIpt").val();
	if(num <= 0){
		$(".ListIpt").val("0");
	}else{
		num	--;
	$(".ListIpt").val(num);
	}
})
//设置弹窗大小
var popupw = $(document).width();
var popuph = $(document).height();
$(".popup1,.popup2,.popup3,.popup4,.popup5").css("width",popupw).css("height",popuph);
//点击查看图片生成弹窗
$(".previewImg").click(function(){
	$(".popup1").show();
})
//关闭图片弹窗
$(".colseBtn1").click(function(){
	$(".popup1").hide();
})
//审核不通过弹窗
$(".newGoods").click(function(){
	$(".popup2").show();
})
//关闭审核不通过弹窗
$(".closeImg,.popup2LeftBtn,.popup2RightBtn").click(function(){
	$(".popup2").hide();
	$(".popup3").hide();
})
//待客户反馈弹窗
$(".feedback").click(function(){
	$(".popup3").show();
})
//客户放弃弹窗
$(".giveUp").click(function(){
	$(".popup4").show();
})
//关闭客户放弃弹窗
$(".closeImg,.popup4LeftBtn,.popup4RightBtn").click(function(){
	$(".popup4").hide();
})
//鼠标移动滚动条事件
$(".scrollRight").mousedown(function(){
	//获取鼠标在滚动条里的位置
	var y = event.clientY - $(this).position().top;
	//鼠标移动事件
	$(document).mousemove(function(){
		//获取滚动条的移动位置
		var y1 = event.clientY - y;
		//设置滚动条的移动
	    $(".scrollRight").css("top",y1);
	    //获取混动条父级的高
	    var h = $(".scrollRightBox").outerHeight();
	    //内容移动
	    var ch = y1 * $(".scrollLeftUl").outerHeight() / $(".scrollRightBox").outerHeight() + 45;
	    $(".scrollLeftUl").css("top",-ch);
	    //文本、滚动条碰壁检测
	    var bh = $(".scrollRight").position().top;
	    if(bh <= 0){
	    	$(".scrollRight").css("top","0px");
	    	$(".scrollLeftUl").css("top","0px");
	    }else if(bh >= $(".scrollRightBox").outerHeight() - $(".scrollRight").outerHeight()){
	    	$(".scrollRight").css("top",$(".scrollRightBox").outerHeight() - $(".scrollRight").outerHeight());
	    	$(".scrollLeftUl").css("top",$(".scrollLeftBox").outerHeight() - $(".scrollLeftUl").outerHeight());
	    }
	})
})
//松开鼠标移除移动事件
$(document).mouseup(function(){
	$(document).unbind("mousemove");
})
//滚动条滚动事件
var up = 0;
$(".scrollBox").on("mousewheel DOMMouseScroll", function (e) {
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  //兼容chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));//兼容firefox
    if (delta < 0) {
    	//向下滚
        up += 10
        $(".scrollRight").css("top",up);
        $(".scrollLeftUl").css("top",-up * ($(".scrollLeftUl").outerHeight() / ($(".scrollRight").outerHeight())));
    } else if (delta > 0) {
    	//向上滚
        up -= 10
        $(".scrollRight").css("top",up);
        $(".scrollLeftUl").css("top",-up * ($(".scrollLeftUl").outerHeight() / ($(".scrollRight").outerHeight())));
    }
    //碰壁检测
    //文本、滚动条碰壁检测
    var bh = $(".scrollRight").position().top;
    if(bh <= 0){
    	up = 0;
    	$(".scrollRight").css("top","0px");
    	$(".scrollLeftUl").css("top","0px");
    }else if(bh >= $(".scrollRightBox").outerHeight() - $(".scrollRight").outerHeight()){
    	up = $(".scrollRightBox").outerHeight() - $(".scrollRight").outerHeight();
    	$(".scrollRight").css("top",$(".scrollRightBox").outerHeight() - $(".scrollRight").outerHeight());
    	$(".scrollLeftUl").css("top",-($(".scrollLeftUl").outerHeight() - $(".scrollLeftBox").outerHeight()));
    }
    //清除默认滚轮事件
	return false;
});
//点击同意客户发货生成弹窗
$(".agreeBtn").click(function(){
	$(".popup5").show();
})
//关闭同意客户审核弹窗
$(".closeImg,.saveBtn").click(function(){
	$(".popup5").hide();
})
var time = setInterval(function(){
	var secdDay = new Date(2018,5,15).getTime();
	var Now = new Date().getTime();
	var oDate = new Date();
	var date = oDate.getDate();
	var h = oDate.getHours();
	var m = oDate.getMinutes();
	var s = oDate.getSeconds();
	//总时间差
	var all = secdDay - Now;
	//秒
	var ses = Math.floor((all/1000)%60);
	//分
	var minu = Math.floor((all/(1000*60))%60);
	//时
	var hour = Math.floor((all/(1000*60*60))%24);
	//天
    var day = Math.floor((all/(1000*60*60*24)));
    $(".dayTxt").text(day);
    $(".hourtxt").text(hour);
    $(".minuTxt").text(minu);
    $(".sesTxt").text(ses);
},1000)
$(".list").show();
//tap切换内容
//获取元素的索引值
$(".tapUl").find("li").click(function(){
	var num = $(this).index();
	$(".List").hide();
	$(".List").eq(num).show();
})
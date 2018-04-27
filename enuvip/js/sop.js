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
//遮罩
//设置遮罩的宽高
var dispalyh = $(window).height();
var dispalyw = $(window).width();
$(".maskBox").css("width",dispalyw).css("height",dispalyh);
//全选操作
$(".allSelect").on("click",function(){
	if(this.checked == true){
		$(".orderChe").prop('checked',true);
	}else{
		$(".orderChe").prop('checked',false);
	}
})
//点击修改备注生成遮罩
var _this = "";
$(".tableTdLink").click(function(){
	//获取滚动条高度
	var scrollH = $(document).scrollTop();
	_this= $(this);
	var oldTxt = _this.parent().parent().find(".td9").text();
	$(".mskTextarea").val(oldTxt);
	$(".mskBtn1").click(function(){
		var txt = $(".mskTextarea").val();
		_this.parent().parent().find(".td9").text(txt);
		_this ="";
	})
	//设置遮罩层生成时的高度位置
	$(".maskBox").css("top",scrollH);
	$(".maskBox").show();
})
//关闭遮罩
$(".maskPopupHedBgc,.mskBtn1,.mskBtn2").click(function(){
	$(".maskBox").hide();
})
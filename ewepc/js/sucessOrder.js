//删除商品
$(".odtOut").mouseover(function(){
	$(".delectBn").show();
})
$(".odtOut").mouseout(function(){
	$(".delectBn").hide();
})
$(".delectBn").click(function(){
	$(this).parent().parent().remove();
})
$(".userName").mouseover(function(){
	$(".userWin").show();
})
$(".userName").mouseout(function(){
	$(".userWin").hide();
})
//改变立即购买按钮背景图
$(".buyBtnTxt").mouseover(function(){
	$(".buyBtnBgc").css("background-positionX","0px");
})
$(".buyBtnTxt").mouseout(function(){
	$(".buyBtnBgc").css("background-positionX","-22px");
})
//全选操作
$(".allCkb").on("click",function(){
	if(this.checked == true){
		$(".stdIco1Chb").prop('checked',true);
	}else{
		$(".stdIco1Chb").prop('checked',false);
	}
})
//点击取消关注删除店铺
$(".catBt").click(function(){
	$(".stdIco1Chb").each(function(){
		if(this.checked == true){
			$(this).parent().parent().parent().remove();
		}
	})
})
//点击取消关注删除店铺
$(".catBTn").click(function(){
	$(this).parent().parent().parent().remove();
	console.log("a");
})
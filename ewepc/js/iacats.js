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
//设定轮播图的总长度
$(".cssImgBox,.cssImgBox1").each(function(){
	var LiLenght = $(this).children().length;
	$(this).css("width",130*LiLenght);
})
//tap切换
$(".cssntb").click(function(){
    $(this).addClass("cssntbl").siblings().removeClass('cssntbl');
})
$(".css1").click(function(){
	$(this).parent().parent().find(".cssImgBox").eq(0).show();
	$(this).parent().parent().find(".cssImgBox").eq(1).hide();
})
$(".css2").click(function(){
	$(this).parent().parent().find(".cssImgBox").eq(1).show();
	$(this).parent().parent().find(".cssImgBox").eq(0).hide();
})
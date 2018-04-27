//生成导航下拉菜单
$(".nav_btn").on("click",function(){
	if($(this).attr("name") == 0){
		$(this).attr("src","img/grbbb.png");
		$(".nav_mask_box").show();
		$(this).attr("name","1");
	}else{
		$(this).attr("src","img/dedeex.png");
		$(".nav_mask_box").hide();
		$(this).attr("name","0");
	}
})
//关闭下拉菜单
$(".close_btn").on("click",function(){
	$(".nav_btn").attr("src","img/dedeex.png");
	$(".nav_mask_box").hide();
	$(".nav_btn").attr("name","0");
})
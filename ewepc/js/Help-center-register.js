//侧边栏展开收起
$(".problemHead").click(function(){
	//展开
	$(".problemHead").not(this).next().slideUp(350);
	//显示
	$(this).next(".probleUl").slideToggle(350);
})
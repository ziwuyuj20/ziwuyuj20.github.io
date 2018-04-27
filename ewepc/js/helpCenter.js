var att = 0;
$(".sexMoreBtn").click(function(){
	$(".linkUl").toggleClass("linkUlH");
	if(att == 0){
		$(this).text("收起");
		att = 1;
	}else{
		$(this).text("查看更多");
		att = 0;
	}
})
//服务单信息操作
//添加快递
$(".increaseColor").click(function(){
	//克隆节点
	var $newNode = $(".TdClone:last").clone(true,true);
	$newNode.find(".increaseColor").remove();
	$newNode.find(".increaseTxt").remove();
	$newNode.find(".increaseColor1").show();
	//插入节点
	$(this).parent().parent().parent().append($newNode);
})
//点击删除快递
$(".increaseColor1").click(function(){
	$(this).parent().parent().remove();
})
//侧边栏展开收起
$(".problemHead").click(function(){
	//展开
	$(".problemHead").not(this).next().slideUp(350);
	//显示
	$(this).next(".probleUl").slideToggle(350);
})
//tap切换
$(".classUl").find("li").click(function(){
	$(".classUl").find("a").removeClass("currentClass");
	$(this).find("a").addClass("currentClass");
	var index = $(this).index();
	$(".problemBox").hide();
	$(".problemBox").eq(index).show();
})
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
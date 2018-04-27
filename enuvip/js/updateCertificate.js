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
//点击继续上传生成上传节点
$(".aUpload").click(function(){
	$(this).parent().parent().parent().parent().find(".uploadBox").css("display","block");
})
//点击取消按钮隐藏上传节点
$(".cancelBtn").click(function(){
	$(this).parent().css("display","none");
})
//点击删除删除上传文件
$(".imgdelete").click(function(){
	$(this).parent().remove();
})
//点击添加其他资质添加节点
$(".otherBtn").click(function(){
    //克隆节点
    $newTr = $(".newTr:first").clone(true,true);
    //移除节点类名
    $newTr.removeClass(".newTr");
    $newTr.show();
    //插入节点
    $("tbody").append($newTr);
})
//点击删除删除表格整行
$(".trDelect").click(function(){
	$(this).parent().parent().remove();
})
// if($("td").find("p").length == 0 && $("td").find("form").length == 0){
// 	$(".uploadBox").css("display","block");
// }
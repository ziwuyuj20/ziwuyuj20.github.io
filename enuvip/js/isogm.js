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
//品牌框弹出事件
$("#select").click(function(){
	$(".disSelectUl").show();
})
$(".disSelectLiTxt").click(function(){
	$(".disSelectUl").hide();
})
//复选框操作
$("#allSelect").click(function(){
	$(".commodityIpt").click();
})
$(".svTxtBgc").mouseover(function(){
	$(".popupBox").show();
})
$(".svTxtBgc").mouseout(function(){
	$(".popupBox").hide();
})
$(".popupBox").mouseover(function(){
	$(this).show();
})
$(".popupBox").mouseout(function(){
	$(this).hide();
})
//点击修改图标修改商品描述
$(".saveBgc").click(function(){
	var txt = $(this).parent().find(".cdtext").text();
	$(this).parent().find(".cdtext").hide();
	$(this).hide();
	$(this).parent().find(".disdataBox").show();
	$(this).parent().find(".savabgc1").show();
	$(this).parent().find(".promptTxt1").show();
	$(this).parent().find(".disdataBox").text(txt);
})
//点击保存图标保存修改的值
$(".savabgc1").click(function(){
	$(this).parent().find(".cdtext").show();
	$(this).parent().find(".saveBgc").show();
	$(this).parent().find(".disdataBox").hide();
	$(this).hide();
	$(this).parent().find(".promptTxt1").hide();
	var txt = $(this).parent().find(".disdataBox").val();
	$(this).parent().find(".cdtext").text(txt);
})
//修改商品  鼠标进入
$(".ModifyGoods").mouseover(function(){
	$(this).parent().find(".disModifyGoods").show();
})
$(".disModifyGoods").mouseover(function(){
	$(this).show();
})
//鼠标离开
$(".ModifyGoods").mouseout(function(){
	$(this).parent().find(".disModifyGoods").hide();
})
$(".disModifyGoods").mouseout(function(){
	$(this).hide();
})
//点击总库存修改图标修改库存
$(".titBgc").click(function(){
	var txt = $(this).parent().parent().find(".titTxt1").text();
	//克隆节点
	var newNode = $(".popupSizeBox").clone(true,true);
	//改变节点样式
	newNode.show();
    //插入节点
    $(this).parent().parent().append(newNode);
    $(".titBgc").not(this).parent().parent().find(".popupSizeBox").remove();
    $(this).parent().parent().parent().find(".dataBox").find(".popupSizeBox").find("li").find(".totalNumberIpt1").val(txt);
})
$(".popupCloseBtn").click(function(){
	$(this).parent().parent().remove();
})
//保存修改数据
$(".saveLiBtn").find("button").click(function(){
	var txt = $(this).parent().parent().find("li").find(".totalNumberIpt1").val();
	$(this).parent().parent().parent().find(".titBox").find(".titTxt1").text(txt);
	$(this).parent().parent().remove();
})
//点击重置按钮重置所有数据
$(".querRitghtBtn").click(function(){
	$(".bciRightIpt").val("");
	$(".bpiRigthIpt1").val("");
	$(".bpiRigthIpt2").val("");
	$(".cfIpt2").val("");
})
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
//按重置按钮重置数据
$(".resetBtn").click(function(){
	$(".ciLeftTxt").val("");
	$(".middleIpt").val("");
	$(".middleIpt2").val("");
	$(".ciRightSle2 option:first").prop("selected", 'selected');
	$(".ciRightSle3 option:first").prop("selected", 'selected');
	$(".middleSelect2 option:first").prop("selected", 'selected');
	$(".middleSelect3 option:first").prop("selected", 'selected');
})
var offon = false;
//点击回复按钮生成回复内容
$(".btn1").click(function(){
	//获取用户昵称
	var userName = $(this).parent().parent().parent().find(".commentIco1").find(".userName").text();
	//插入用户名
	$(this).parent().parent().find(".recoveryRecordBox").find(".customerNmae").text(userName);
	//获取输入框内容
	var valTxt = $(this).parent().find(".commentIpt").val();
	//插入回复内容
	$(".messageBox:first").text(valTxt);
	//设置时间
	var mydate = new Date();
    var time = mydate.toLocaleString();
	$(this).parent().parent().parent().find(".commentBox").find(".recoveryRecordBox:first").find(".NewTime").text(time);
	//克隆节点
	var newNode = $(".recoveryRecordBox:first").clone(true,true);
	//显示克隆的节点
	newNode.show();
	//给克隆的节点添加类
	newNode.addClass("recoveryRecordBoxClone");
	//插入节点
	$(this).parent().parent().parent().find($(".disReply1")).before(newNode);
	var number = $(this).parent().parent().find(".number")
	number.each(function(i){
		$(this).text(i);
		i++
	})
	//输入框消失
	$(this).parent().parent().parent().find($(".disIptBox")).hide();
	$(this).parent().parent().parent().find($(".disIptBox1")).hide();
	$(this).parent().parent().parent().find($(".commentBox")).find("div").find(".rightTxt").show();
	offon = true;
})
$(".experienceBox").mouseover(function(){
	if(offon == true){
		$(this).parent().parent().find(".commentBox").find(".disReply").show();
	}
})
$(".disReply").mouseout(function(){
	$(this).parent().parent().find(".commentBox").find(".disReply").hide();
	offon == false;
})
//点击回复生成输入框
$(".disReplyBtn").click(function(){
	$(".commentIpt").val("");
	$(this).parent().parent().parent().find(".commentBox").find(".disIptBox").show();
})
$(".recoveryRecordBox").mouseover(function(){
	$(this).parent().parent().find(".commentBox").find(".disReply1").show();
})
$(".disReply1").mouseout(function(){
	$(this).parent().parent().find(".commentBox").find(".disReply1").hide();
})
$(".disReplyBtn1").click(function(){
	$(".commentIpt").val("");
	$(this).parent().parent().parent().find(".commentBox").find(".disIptBox1").show();
})
// $(function(){
//     var mydate = new Date();
//     var t=mydate.toLocaleString();
//     console.log(t);
// });
// function Afn(){
// 	var mydate = new Date();
// 	var year = mydate.getFullYear(); //获取完整的年份
// 	var mpnth = mydate.getMonth(); //获取当前月份
// 	var date = mydate.getDate(); //获取当前日
// 	var hours = mydate.getHours(); //获取当前小时数
// 	var mit = mydate.getMinutes(); //获取当前分钟数
// 	var sc = mydate.getSeconds(); //获取当前秒数
// 	console.log(year,mpnth,date,hours,mit,sc);
// }
// Afn();
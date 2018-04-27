//点击评价生成遮罩
$(".evaluateBtn").click(function(){
	$(".maskBox").show();
})
//点击取消和关闭按钮关闭遮罩
$(".maskHeadDelect,.button1").click(function(){
	$(".maskBox").hide();
})
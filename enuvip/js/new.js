//创建新节点
var node1 = $(".tblBox").find("tr").eq(0);
node1.append($("<th class='new'>操作</th>"));
var node2 = $(".tblBox").find("tr").not($("tr").eq(0));
node2.append($("<td class='new'></td>"));
var newBtn1 = $("<form method='post' enctype='multipart/form-data'><input type='file' name='files' class='newBtn1'/></form>");
var newBtn2 = $("<button class='newBtn2'>预览</button>");
$(".newBtn1").css("width","64");
$(".new").append(newBtn1);
$(".new").append(newBtn2);
node1.find("form").remove();
node1.find(".newBtn2").remove();
// $(".sizeCheckBox").click(function(){
// 	$(".new").remove();
// })
//创建遮罩节点
var newMask = $("<div class='mask'></div>");
$("body").append(newMask);
//创建图片外框
var newImgBox = $("<div class='newImgBox'></div>")
$(".mask").append(newImgBox);
//创建图片
var newImg = $("<img src='indexImg/5555.jpg'>");
$(".newImgBox").append(newImg);
//创建删除按钮
var delectx = $("<p>×</p>");
$(".newImgBox").append(delectx);
//点击预览生成遮罩
$(".newBtn2").click(function(){
	$(".mask").show();
	//获取滚动条高度
	var scropH = $(document).scrollTop();
	$(".newImgBox").css("margin-top",+"100"+scropH);
})
//点击关闭按钮关闭图片
$(".newImgBox").find("p").click(function(){
	$(".mask").hide();
})

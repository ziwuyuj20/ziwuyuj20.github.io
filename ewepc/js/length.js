//获取可视区域的宽
var WIDTH = $(window).width();
//设置box的宽度
$(".box").css("width",WIDTH);
//设置li的宽度
$(".imgUl").find("li").css("width",WIDTH);
//设置按钮外框宽度
$(".numBox").css("width",WIDTH);
//获取图片的数量
var imgNum = 0;
$(".img").each(function(){
	imgNum += 1;
})
//设置所有图片总长度
$(".imgUl").css("width",imgNum * 100 + "%");
//设置box的高
var boxh = $(".img").eq(0).css("height");
$(".box").css("height",boxh);
var liNum = 0;
$(".imgUl").find("li").each(function(){
	liNum += 1;
	var newLi = $(".disnumUl").find("li").clone(true,true);
	//设置数字按钮文本
	newLi.text(liNum);
	//插入克隆的元素
	$(".numUl").append(newLi);
})
//数字按钮总长度
var numUlW = 20 * liNum + 10 * liNum - 1 + 5;
$(".numUl").css("width",numUlW);
$(".cloneLi:eq(0)").css("background","#c20000");
//点击按钮改变背景色以及背景图
$(".cloneLi").click(function(){
	//改变背景色
	$(".cloneLi").css("background","#999");
	$(this).css("background","#c20000");
	//改变背景图
	var index = $(this).index();
	$(".imgUl").animate({
		left: index * -100 + "%"
	},500,"linear");
})
//设置图片外框宽度
var imgLiW = 1 / imgNum + "%";
var imgW = $(".imgUl").css("width");
$(".imgUl").find("li").css("width",imgLiW * imgW);
//设置box的高
var indexlenght = 0;
$(".cloneLi").click(function(){
	indexlenght = $(this).index();
	//设置box的高
	var boxh = $(".img").eq(indexlenght).css("height");
	$(".box").css("height",boxh);
})
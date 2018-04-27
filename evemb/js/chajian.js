//轮播图
//设置图片宽度
var imgW = $("body").width();
$(".goods_Carousel_img").css("width",imgW);
//设置图片外框的高度
var goods_out_boxH = $(".goods_Carousel_li").height();
$(".goods_out_box").css("height",goods_out_boxH);
//计算图片个数
var imgNum = 0;
var liNum = 0;
$(".goods_Carousel_li").each(function(){
	imgNum ++;
	liNum += 1;
	var newLi = $(".disnumUl").find("li:last").clone(true);
	//设置数字按钮文本
	newLi.text(liNum);
	//插入克隆的元素
	$(".numUl").append(newLi);
})
//设置轮播图总宽度
var icoH = parseInt($(".goods_Carousel_li").width());
var goods_Carousel_liW = imgNum * icoH;
$(".goods_Carousel_ul").css("width",goods_Carousel_liW);
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
	$(".goods_Carousel_ul").animate({
		left: index * -100 + "%"
	},500,"linear");
})
//图片自动滚动
var imgW = 0;
var frequency = 0;
function imgFn(){
	frequency--;
	var index = $(this).index();
	$(".goods_Carousel_ul").animate({
		left: frequency * 100 + "%"
	},500,"linear");
}
setInterval(function(){
    if(imgW < (imgNum - 1)){
    	imgW += 1;
    	imgFn();
    	$(".cloneLi").css("background","#999");
	    $(".cloneLi").eq(imgW).css("background","#c20000");
    }else{
    	imgW = 0;
    	frequency = 0;
    	$(".goods_Carousel_ul").animate({
    		left: 0 + "%"
    	},500,"linear");
    	$(".cloneLi").css("background","#999");
    	$(".cloneLi").eq(0).css("background","#c20000");
    }
},3000);
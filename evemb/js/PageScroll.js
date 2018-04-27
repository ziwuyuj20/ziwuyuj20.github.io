//滚屏页码部分
var sum = 0;
$(".goodUl").find("li").each(function(){
	sum ++;
})
//获取内容总高度
var allH = (parseInt($(".goodUl").find("li").eq(0).height()) + 5) * sum;
//获取每页高度（5行每页）
var icoH = parseInt($(".goodUl").find("li").eq(0).height()) + 5;
var pageH = icoH * 5;
//获取总页数
var allsum = allH / pageH;
var integer = parseInt(allsum);
if(allsum > integer){
	allsum = integer++;
}else{
	allsum = integer;
}
$(".allPage").text(allsum);
//动态改变当前页码
$(document).scroll(function(){
	//获取滚动条高度
	var scrollH = $(window).scrollTop();
	//获取当前页数
	var Current = parseInt((scrollH / pageH) + 1);
	$(".newPage").text(Current);
})
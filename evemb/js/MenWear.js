//禁用手机默认的触屏滚动行为
//document.addEventListener('touchmove',function(event){
//  event.preventDefault(); 
//},false);
function Fadd(){
	$(document).on("touchstart",function (){
	   event.preventDefault();
    },false);
}
//$('body').bind("touchmove",function(e){    
//  e.preventDefault();    
//});  
$("input").attr('data-role','none');
$("select").attr('data-role','none');
//高度补充
var H1 = $(".outBox").css("height");
$(".sizeBox").css("height",H1);
$(".bottom").css("height",$(".footer").css("height"));
$(".classCenter").css("height",$(".classUl").css("height"));
//惰性加载
$(document).scroll(function(){
	//获取滚动条高度
	var scrollH = $(document).scrollTop();
	//获取屏幕高度
	var rideoH = $(window).height();
	//加载图片
	$(".loadImg").each(function(){
		//获取图片的垂直位置
	    var imgh = $(this).offset().top;
		if(scrollH + rideoH > imgh + 90){
		    var add = $(this).attr("data-src");
		    $(this).attr("src",add);
	    }
	})
	//生成返回顶部按钮
	//获取为你推荐位置
	var RecommendBoxH = $(".RecommendBox").offset().top;
	if(scrollH - rideoH > 0){
		$(".topBtn").show();
	}else{
		$(".topBtn").hide();
	}
})
//点击收藏
$(".collectionImg").on("tap",function(){
	if($(this).attr("name") != 1){
		$(this).attr("src","img/Collection.png");
		$(this).attr("name","1");
	}else{
		$(this).attr("src","img/collection1.png");
		$(this).attr("name","0");
	}
})
//返回顶部
$(".topBtn").on("tap",function(){
	$(document).scrollTop("0");
})
$(".goodUl").on("touchstart",function(){
	$(document).unbind("touchstart");
})
$(".classUl").on("touchstart",function(){
	Fadd();
})

//禁用手机默认的触屏滚动行为
function Fadd(){
	$(document).on("touchstart",function (){
	   event.preventDefault();
    },false);
}
$("input").attr('data-role','none');
$("select").attr('data-role','none');
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
})
//获取底部导航栏的高度
var footerH = parseInt($(".public-footer-a").height());
$(".public-footer-ul").css("bottom",footerH + 10 + "px");
//头部搜索栏高度填充
$(".public-head-fill").css("height",$(".public-head").height());
//底部导航栏高度填充
$(".public-footer-div-fill").css("height",$(".public-footer-div").height());
//点击分类生成分类弹窗
$(".public-footer-p").on("click",function(){
	if($(this).attr("name") == 0){
		$(".public-footer-ul").show();
		$(this).attr("name","1");
	}else {
		$(".public-footer-ul").hide();
		$(this).attr("name","0");
	}
})
// $(".public-footer-li").on("tap",function(){
// 	$(".public-footer-ul").hide();
// 	$(".public-footer-p").attr("name","0");
// })
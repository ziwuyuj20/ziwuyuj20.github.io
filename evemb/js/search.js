$("input").attr('data-role','none');  
$("select").attr('data-role','none');
//高度补充
$(".top").css("height",$(".popupeHead").css("height"));
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
//点击返回顶部
$(".topBtn").on("tap",function(){
	$(document).scrollTop("0");
})
//分类、排序操作
var thisname = $(".SelectBox-ul-li3").attr("name");
$(".SelectBox-ul-li").on("tap",function(){
	$(".SelectBox-ul-li").find("p").removeClass("SelectBox-ul-li-txt-color");
	$(this).find("p").addClass("SelectBox-ul-li-txt-color");
})
//销量递增递减符号变化
$(".SelectBox-ul-li3").on("tap",function(){
	$(".SelectBox-ul-li").find("p").removeClass("SelectBox-ul-li-txt-color");
	$(this).find("p").addClass("SelectBox-ul-li-txt-color");
	if(thisname == 0 || thisname == 2){
		$(this).find("img").attr("src","img/state2.png");
		thisname = 1;
	}else if(thisname == 1){
		$(this).find("img").attr("src","img/state1.png");
		thisname = 2;
	}
})
$(".SelectBox-ul-li1,.SelectBox-ul-li2,.SelectBox-ul-li4").on("tap",function(){
	thisname = 0;
	$(".SelectBox-ul-li3").find("img").attr("src","img/state3.png");
})
//顶部导航栏展开收起
var TopImgName = $(this).attr("name");
$(".Navigation-img").on("tap",function(){
	if(TopImgName == 0){
		$(".footer1").show();
		TopImgName = 1;
	}else{
		$(".footer1").hide();
		TopImgName = 0;
	}
})
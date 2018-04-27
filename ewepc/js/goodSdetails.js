//返回顶部
$(".returnTop").click(function(){
	$(document).scrollTop("0px");
})
//滚动加载
$(window).scroll(function(){
	//获取滚动条高度
	var scrollH = $(document).scrollTop();
	//获取屏幕高度
	var rideoH = $(window).height();
	//加载图片
	$(".laoding").each(function(){
		//获取图片的垂直位置
	    var imgh = $(this).offset().top;
		if(scrollH + rideoH > imgh){
		    var add = $(this).data("src");
		    $(this).attr("src",add);
	    }
	})
})
//放大镜操作
//初始化图片
var oldImg = $(".thumbnail").eq(0).attr("data-src");
$(".ZoomOut").attr("src",oldImg);
$(".Original").attr("src",oldImg);
//鼠标移入图片生成放大镜和放大图
$(".OriginalImgBox,.minGlass").mouseover(function(){
	$(".minGlass").show();
	$(".maxImgBox").show();
	//生成放大图
	var maxImg = $(".Original").attr("src");
	$(".ZoomOut").attr("src",maxImg);
})
//鼠标离开时隐藏放大镜
$(".OriginalImgBox").mouseout(function(){
	$(".minGlass").hide();
	$(".maxImgBox").hide();
})
//获取图片距离屏幕左边的距离
var tw = $(".Original").offset().left;
//获取图片距离屏幕上边的距离
var th = $(".Original").offset().top;
//放大镜放大效果生成
$(document).mousemove(function(e){
	//获取鼠标的位置
	var ex = e.pageX;
	var ey =  e.pageY;
	//获取放大镜的位置
	var x = ex - tw - $(".minGlass").width()/2;
    var y = ey - th - $(".minGlass").height()/2;
    //碰壁检测
    if(x < 0){
    	x = 0;
    }else if(x > $(".OriginalImgBox").width() - $(".minGlass").width()){
    	x = $(".OriginalImgBox").width() - $(".minGlass").width();
    }
    if(y < 0){
    	y = 0;
    }else if(y > $(".OriginalImgBox").height() - $(".minGlass").height()){
    	y = $(".OriginalImgBox").height() - $(".minGlass").height();
    }
    $(".minGlass").css("left",x);
    $(".minGlass").css("top",y);
    //放大图的比例
    function move(x,y){
    	//获取比例
    	var scale1 = $(".maxImgBox").width() / $(".ZoomOut").width();
    	var scale2 = $(".maxImgBox").height() / $(".ZoomOut").height();
    	$(".ZoomOut").css("left",-x / scale1);
    	$(".ZoomOut").css("top",-y / scale2);
    }
    move(x,y);
})
//点击缩略图切换图片
$(".thumbnail").click(function(){
	var imgSrc = $(this).attr("data-src");
	$(".Original").attr("src",imgSrc);
})
//点击颜色图片切换图片
$(".goodsColorImg").click(function(){
	$(".goodsColorImg").removeClass("borderClick");
	$(this).addClass("borderClick");
	var imgSrc = $(this).attr("data-src");
	$(".Original").attr("src",imgSrc);
})
//尺寸选择
$(".goodsSize").click(function(){
	$(".goodsSize").removeClass("borderClick");
	$(this).addClass("borderClick");
	var txt = $(this).text();
	$(".sizeTxt").text(txt);
})
//改变购买数量
//增加商品数量
var goodsNum =  $(".sumIpt").val();
$(".increaseBtn").click(function(){
    goodsNum++;
    $(".sumIpt").val(goodsNum);
})
//减少商品数量
$(".reduceBtn").click(function(){
	var numIpt = $(".sumIpt").val();
	if(numIpt > 0){
		goodsNum--;
	}else{
		goodsNum = 0;
	}
	$(".sumIpt").val(goodsNum);
})
//分类的展开收起
$(".StartOff").click(function(){
	if($(this).attr("name") == 1){
		$(this).parent().next(".classCenterBox").slideUp(500);
		$(this).attr("name","0");
		$(this).text("+");
	}else{
		$(this).parent().next(".classCenterBox").slideDown(500);
		$(this).attr("name","1");
		$(this).text("-");
	}
})
//侧边栏导航切换
$(".OtherNavigationTxt").click(function(){
	var OtherNavigationIndex = $(this).index();
	$(".Triangle").hide();
	$(this).find(".Triangle").show();
	$(".OtherNavigationCenterBox").hide();
	$(".OtherNavigationCenterBox").eq(OtherNavigationIndex).show();
})
//悬浮导航栏
//获取悬浮导航栏到顶部的初始距离
var tapTittleTop = $(".tapTittleBox").offset().top;
$(window).scroll(function(){
	//滚动条距顶部的距离
    var scrollBarTop = $("body").scrollTop();
    //获取window宽度
	if(scrollBarTop > tapTittleTop){
		$(".tapTittleOutBox").addClass("tapTittleOutBox1");
		$(".tapTittleBox").css("margin-top","0px");
	}else{
		$(".tapTittleOutBox").removeClass("tapTittleOutBox1");
		$(".tapTittleBox").css("margin-top","20px");
	}
})
//导航悬浮栏切换
$(".tapTittle").click(function(){
	var tapIndex = $(this).index();
	$(".tapTittleH").show();
	$(".Superscript").hide();
	$(this).find(".Superscript").show();
	$(".tapCenterBox").hide();
	$(".tapCenterBox").eq(tapIndex).show();
})
//公司联系地址修改
//获取数据
var province = chinaArea.china.province;
//获取省份下拉框
var sel_prov = document.getElementById("province");
var sel_city = document.getElementById("city");
var sel_coun = document.getElementById("county");
function setProvinceSelect(){
	//生成字符串
	var str = '';
	for (var i=0;i<province.length;i++) {
		str += '<option value="'+i+'">'+province[i]["-name"]+'</option>';

	}
	$('#province').html(str);
	$("#province").click(function(){
		//获取下拉框文本
		var seleTxt = $("#province").find("option:selected").text();
		//将下拉框文本写入标签
		$(".proName").text(seleTxt);
	})
}
//配送地址
//设置城市下拉框
function setCitySelect(pindex){
	var city = province[pindex]["city"];
	sel_city.innerHTML = "";//清空操作
	var str = '';
	for (var i=0;i<city.length;i++) {
		str += '<option value="'+i+'">'+city[i]["-name"]+'</option>'
	}
	$('#city').html(str);
	$("#city").click(function(){
		//获取下拉框文本
		var seleTxt = $("#city").find("option:selected").text();
		//将下拉框文本写入标签
		$(".ctName").text(seleTxt);
	})
}
//联动变化事件
//省份修改
sel_prov.onchange = function(){
	var pindex = this.value;
	setCitySelect(pindex);//重置城市
}
//城市修改
sel_city.onchange = function(){
	var pindex = sel_prov.value;
	var cindex = this.value;
}
setProvinceSelect();
setCitySelect(0);
//收藏商品
$(".Collection1").click(function(){
	$(this).attr("src","img/rgtht.png");
})
var tapH = $(".tapTittleBox").offset().top;
$(".tapTittleBox").click(function(){
	$(document).scrollTop(tapH);
})
$(".thumbnail").click(function(){
	$(".thumbnail").removeClass("thumbnailClick");
	$(this).addClass("thumbnailClick");
})
//显示颜色提示
$(".goodsColorImgBox").mousemove(function(){
	$(".goodsColorPopup").hide();
	$(this).find(".goodsColorPopup").show();
})
//隐藏颜色提示
$(".goodsColorImgBox").mouseout(function(){
	$(".goodsColorPopup").hide();
})
//颜色选择
$(".goodsColorImgBox").click(function(){
	var coloerTxt = $(this).find(".goodsColorPopup").text();
	$(".colorTxt").text(coloerTxt);
})
//设置弹窗大小
$(".popup1").css("width",$(document).width());
$(".popup1").css("height",$(document).height());
//点击评论图生成弹窗
$(".commentImg").click(function(){
	var srcImg = $(this).attr("src");
	var htop = $(this).offset().top;
	$(".popup1Img").attr("src",srcImg);
	$(".popup1Center").css("margin-top",htop);
	$(".popup1").show();
})
//关闭弹窗
$(".colseBtn1").click(function(){
	$(".popup1").hide();
})
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
//点击品牌搜索框弹出窗口
$("#brandSelect").click(function(){
	$(".searchBox").css("display","block");
})
//搜索框收起
$(".searchBox").find("ul").find("li").click(function(){
	$(".searchBox").css("display","none");
})
//颜色块收缩展开
$(".colorTxt1").click(function(){
	$(".colorBox").toggle(500);
	$(this).parent().find(".colorBgc").toggleClass('colorBgc1');
})
//尺寸块收缩展开
$(".colorTxt2").click(function(){
	$(".sizeUl").toggle(500);
	$(this).parent().find(".colorBgc").toggleClass('colorBgc1');
})
//给每种颜色添加不同的类名
var num1 = -1;
$(".icoColor").each(function(i){
    num1 += 1;
    var a = "icoColor" + num1;
    $(this).addClass(a);
})
//点击复选框设定颜色
var a = $(".colorCheckBox").is(':checked');
var b = $(".sizeCheckBox").is(":checked");
//生成滚动条和表格
$(".colorCheckBox").click(function(){
	var bgc = $(this).parent().find("i").css("background");
	var txt = $(this).parent().find(".colorText").text();
	if($(".colorCheckBox").is(':checked') == true || $(".sizeCheckBox").is(':checked') == true){
		//生成滚动条
		$(".sizeBtn").show();
		//生成表格
		$(".tableScrollBox").show();
	}else{
		$(".tableScrollBox").hide();
		$(".sizeBtn").hide();

	}
	if($(this).is(':checked') == true){
		//克隆节点
		var newNode = $(".cloneParent:first").clone(true,true);
		//改变节点样式
		newNode.show();
		var b = $(this).parent().index();
		var a = "icoColor" + b;
		//为该节点添加id
		newNode.attr("val",a);
		newNode.find(".tableIBgc").css("background",bgc);
		newNode.find(".newctxt").text(txt);
		//插入节点
		$(".tblBox").append(newNode);
		$(".cloneParent3").hide();
	}else{
		var b = $(this).parent().index();
		var c = "icoColor"+b;
		var a = $(".tblBox").find('tr[val='+c+']');
		a.remove();
	}
	if($(".colorCheckBox").is(':checked') == true){
		$(".tabledisc").show();
	}else{
		$(".tabledisc").hide();
	}
	if($(".colorCheckBox").is(':checked') == true && $(".sizeCheckBox").is(':checked') == false){
		$(".cloneParent3").hide();
	}else{
		
	}
	var tableH = $(".tblBox").height();
	$(".tableScrollBox").height(tableH+1);
})
$(".sizeCheckBox").click(function(){
	if($(this).is(':checked') == true && $(".colorCheckBox").is(':checked') == false){
		var txt = $(this).parent().find(".sizeTxt").text();
		$(".tableScrollBox").show();
		//克隆节点
		var newNode = $(".cloneParent1:first").clone(true,true);
		//改变节点属性
		newNode.show();
		var b = $(this).parent().index();
		var a = "icoColor" + b;
		newNode.attr("val",a);
		newNode.find(".tableP1").text(txt);
		//添加属性
		newNode.addClass("cloneParent3");
		//插入节点
		$(".tblBox").append(newNode);
	}else{
		var b = $(this).parent().index();
		var c = "icoColor"+b;
		var a = $(".tblBox").find('tr[val='+c+']');
		a.remove();
	}
	if($(".sizeCheckBox").is(':checked') == true || $(".colorCheckBox").is(':checked') == true){
		$(".sizeBtn").show();
		$(".tableScrollBox").show();
	}else{
		$(".sizeBtn").hide();
		$(".tableScrollBox").hide();
	}
	if($(".sizeCheckBox").is(':checked') == true){
		//生成尺寸格
        $(".disTh").show();
	}else{
        $(".disTh").hide();
	}
	var tableH = $(".tblBox").height();
	$(".tableScrollBox").height(tableH+1);
})
//点击图片上传生成弹窗
var offOn = true;
$(".imgUploadLink").click(function(){
	if(offOn == true){
		$(".tapBox").show();
		$(".bgiUload").css("backgroundX","-50px");
		offOn = false;
	}else if(offOn == false){
		$(".tapBox").hide();
		$(".bgiUload").css("backgroundX","-50px");
		offOn = true;
	}
})
//点击本地上传图片生成对应弹框
$(".LocalImg").click(function(){
	$(".locaBox").show();
	$(".spaceBox").hide();
	$(this).addClass("ls");
	$(".spaceSlt").removeClass("ls");
})
//点击从图片空间选择生成对应弹框
$(".spaceSlt").click(function(){
	$(".locaBox").hide();
	$(".spaceBox").show();
	$(this).addClass("ls");
	$(".LocalImg").removeClass("ls");
})
//点击电脑版生成电脑版编辑框
$(".pc").click(function(){
	$(".editBox").show();
	$(".mobileBox").hide();
	$(this).addClass('pc1');
	$(".mobile").removeClass("pc1");
})
//点击移动版生成移动版编辑框
$(".mobile").click(function(){
	$(".editBox").hide();
	$(".mobileBox").show();
	$(this).addClass('pc1');
	$(".pc").removeClass("pc1");
})
//点击添加文字生成输入框
$(".addTxt").click(function(){
	$(".mtctBox").show();
	$(".mtctTxt").hide();
	$(".mtct").val("");
})
//点击确认添加文字并隐藏输入框
$(".mtctclbtn").click(function(){
	$(".mtctTxt").show();
	var txt1 = $(".mtct").val();
	var txt2 = $(".mtctTxt").text();
	$(".mtctTxt").text(txt2+txt1);
	$(".mtctBox").hide();
})
//点击取消按钮取消添加文字
$(".mtctcrbtn").click(function(){
	$(".mtctBox").hide();
	$(".mtctTxt").show();
})
//商品物流信息
//获取数据
var province = chinaArea.china.province;
//获取省份下拉框
var sel_prov = document.getElementById("cliProvince");
var sel_city = document.getElementById("cliArea");
function setProvinceSelect(){
	//生成字符串
	var str = '';
	for (var i=0;i<province.length;i++) {
		str += '<option value="'+i+'">'+province[i]["-name"]+'</option>';

	}
	$('#cliProvince').html(str);
}
//设置城市下拉框
function setCitySelect(pindex){
	var city = province[pindex]["city"];
	sel_city.innerHTML = "";//清空操作
	var str = '';
	for (var i=0;i<city.length;i++) {
		str += '<option value="'+i+'">'+city[i]["-name"]+'</option>'
	}
	$('#cliArea').html(str);
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
//店内分类自定义滚动条事件
$(".iscBtn").mousedown(function(){
	//获取鼠标在滚动条里的位置
	var y = event.clientY - $(this).position().top;
	//绑定鼠标移动事件
	$(document).mousemove(function(){
		//获取滚动条的移动位置
		var y1 = event.clientY - y;
		//设置滚动条的移动
		$(".iscBtn").css("top",y1);
		//获取滚动条父级的高
		var h = $(".iscSrlBox").outerHeight();
		//文本移动
		var ch = y1 * ($(".iscScrollUl").outerHeight() / ($(".iscSrlBox").outerHeight()+20));
		$(".iscScrollUl").css("top",-ch);
		//文本、滚动条碰壁检测
		var bh = $(".iscBtn").position().top;
		if(bh < 0){
	    	$(".iscBtn").css("top","0px");
	    	//移除鼠标移动事件
	    	$(document).unbind("mousemove");
	    }else if(bh > $(".iscSrlBox").outerHeight() - $(".iscBtn").outerHeight()){
	    	$(".iscBtn").css("top",$(".iscSrlBox").outerHeight() - $(".iscBtn").outerHeight());
	    	$(".iscScrollUl").css("top",-($(".iscScrollUl").outerHeight() - $(".iscScrollUlBox").outerHeight()));
	    }
	    return false;
	})
})
//鼠标松开事件
$(document).mouseup(function(){
	//移除鼠标移动事件
	$(document).unbind("mousemove");
})
//绑定滚轮事件
var up = 0;
$(".iscScrollOut").on("mousewheel DOMMouseScroll", function(e){
	var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  //兼容chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));//兼容firefox
    if(delta < 0){
    	up += 8
        $(".iscBtn").css("top",up);
        $(".iscScrollUl").css("top",-up * ($(".iscScrollUl").outerHeight() / ($(".iscSrlBox").outerHeight()+20)));
    }else if(delta > 0){
    	up -= 8
        $(".iscBtn").css("top",up);
        $(".iscScrollUl").css("top",-up * ($(".iscScrollUl").outerHeight() / ($(".iscSrlBox").outerHeight()+20)));
    }
    //文本、滚动条碰壁检测
    var bh = $(".iscBtn").position().top;
    if(bh < 0){
        $(".iscBtn").css("top","0px");
        $(".iscScrollUl").css("top","0px");
    }else if(bh > $(".iscSrlBox").outerHeight() - $(".iscBtn").outerHeight()){
        $(".iscBtn").css("top",$(".iscSrlBox").outerHeight() - $(".iscBtn").outerHeight());
        $(".iscScrollUl").css("top",-($(".iscScrollUl").outerHeight() - $(".iscScrollUlBox").outerHeight()));
    }
    //清除默认滚轮事件
	return false;
})
//产地
//获取省份下拉框
var pfo_prov = document.getElementById("pfo");
function setProvinceSelectpfo(){
	//生成字符串
	var str = '';
	for (var i=0;i<province.length;i++) {
		str += '<option value="'+i+'">'+province[i]["-name"]+'</option>';

	}
	$('#pfo').html(str);
}
setProvinceSelectpfo();
//表格滚动条滚动
$(".sizeBtn").mousedown(function(){
	//获取鼠标在滚动条的位置
	var x = event.clientX - $(this).position().left;
	//绑定鼠标移动事件
	$(document).mousemove(function(){
		//获取滚动条的移动位置
		var x1 = event.clientX - x;
		//设置滚动条的移动
	    $(".sizeBtn").css("left",x1);
	    //获取滚动条父级的宽
	    var w = $(".sizeScroll").outerWidth();
	    //表格移动
	    var ch = x1 * ($(".tblBox").outerWidth() / ($(".sizeScroll").outerWidth()+20));
	    $(".tblBox").css("left",-ch);
	    //表格、滚动条碰壁检测
	    var bh = $(".sizeBtn").position().left;
	    if(bh <= 0){
	    	$(".sizeBtn").css("left","0px");
	    	$(".tblBox").css("left","0px");
	    }else if(bh >= $(".sizeScroll").outerWidth() - $(".sizeBtn").outerWidth()){
	    	$(".sizeBtn").css("left",$(".sizeScroll").outerWidth() - $(".sizeBtn").outerWidth());
	    	$(".tblBox").css("left",-($(".tblBox").outerWidth() - $(".tableScrollBox").outerWidth()));
	    }
	})
})
$(document).mouseup(function(){
	//移除鼠标移动事件
	$(document).unbind("mousemove");
})
//兼容获得滚动条高度
function getScrollH(){
    return document.documentElement.scrollTop || document.body.scrollTop;
}
var windowH = $(window).height();
var footerBoxH = $(".footerBox").offset().top;
$(".footerBox").css("top",windowH-$(".footerBox").outerHeight());
$(".head_H").css("height",$(".public1-head-box").height());
$(".csl_H").css("height",$(".csl_btn").height());
//添加物流公司操作
$(".list_btn1").on("click",function(){
	//克隆物流公司
	var dress_clo = $(".dress_clo").clone(true,true);//克隆内容以及事件
	dress_clo.addClass("dress");
	dress_clo.removeClass("dress_clo");
	$(".list_li2_clo").prepend(dress_clo);
})
//弹出物流公司
var This_log;
$.each($(".dress_p3"),function(){
	$(this).on("click",function(){
		This_log = $(this);
		var H = $(window).height();
		//隐藏进度查询
		$(".progress_box").hide();
		//隐藏返回链接
		$(".public1_return_btn").css("display","none")
		//显示返回按钮
		$(".public1_return_btn").eq(1).css("display","inline-block");
		//显示物流确定按钮
		$(".log_btn1").show();
		//显示物流弹窗
		$(".log_ul").show();
		$(".log_ul").css("height",H);
		$(".log_li").removeClass("log_li2");
	})
})
//选择物流公司
var Log_txt;
$.each($(".log_li"),function(){
	$(this).on("click",function(){
		Log_txt = $(this).text();
		$(".log_li").removeClass("log_li2");
		$(this).addClass("log_li2");
	})
})
//确定选择
$(".log_btn1").on("click",function(){
	This_log.text(Log_txt);
	//显示进度查询
	$(".progress_box").show();
	//隐藏物流确定按钮
	$(".log_btn1").hide();
	//隐藏物流弹窗
	$(".log_ul").hide();
})
//返回主页面
$(".public1_return_btn").eq(1).on("click",function(){
	//显示进度查询
	$(".progress_box").show();
	//显示返回链接
	$(".public1_return_btn").css("display","inline-block")
	//隐藏返回按钮
	$(".public1_return_btn").eq(1).css("display","none");
	//隐藏物流确定按钮
	$(".log_btn1").hide();
})
//上传信息图片遮罩
//查看图片
$.each($(".list_img"),function(){
	$(this).on("click",function(){
	    var name_img = $(this).attr("src");
	    var H = $(window).height();
	    $(".Mask_Img_box").css("height",H);
	    $(".Mask_Img_out").css("height",H);
	    $(".Mask_Img_box").show();
	    $(".Mask_Img").attr("src",name_img);
    })
})
//关闭查看图片
$(".Mask_Img_close_btn").on("click",function(){
	$(".Mask_Img_box").hide();
})
//高度补充
var head_H_1 = parseInt($(".Collection_head_box").height());
var head_H_2 = parseInt($(".Evaluation_type").height());
var footer_H_1 = $(".Cancel_attention_box_1").height();
$(".head").css("height",(head_H_1 + head_H_2));
$(".footer").css("height",footer_H_1);
$(".Evaluation_type").css("top",(head_H_1 + 1));
//检测评价字数是否超出
function Fn1(){
//	window.onload=function(){
	    var num = $(".shop_txt_1").size()
	    for(var i=0; i<num; i++){
		    var titleStr = $(".shop_txt_1").eq(i).text();
		    var maxLen = 12;//设置要显示的字符数
		    if(titleStr.length > maxLen){
		        $(".shop_txt_1").eq(i).html(titleStr.substring(0,maxLen)+"...");
		    }
		    else{
			    $(".shop_txt_1").eq(i).html(titleStr);
		    }
	    }
//  }
}
Fn1();
//检测评价字数是否超出
function Fn2(){
//	window.onload=function(){
	    var num = $(".evaluate_txt").size()
	    for(var i=0; i<num; i++){
		    var titleStr = $(".evaluate_txt").eq(i).text();
		    var maxLen = 33;//设置要显示的字符数
		    if(titleStr.length > maxLen){
		        $(".evaluate_txt").eq(i).html(titleStr.substring(0,maxLen)+"...");
		    }
		    else{
			    $(".evaluate_txt").eq(i).html(titleStr);
		    }
	    }
//  }
}
Fn2();
//切换评价类型
$(".Evaluation_type_li").on("click",function(){
	$(".Evaluation_type_li").find("p").removeClass("Evaluation_type_li_p");
	$(this).find("p").addClass("Evaluation_type_li_p");
	var index = $(this).index();
	$(".shop_ul").hide();
	$(".shop_ul").eq(index).show();
	$(".edit_btn").css("display","none");
	$(".edit_btn").eq(index).css("display","inline-block");
	$(".Cancel_attention_box_1").hide();
	$(".Cancel_attention_box_1").eq(index).show();
})
//编辑全部评价
$(".edit_btn").eq(0).on("click",function(){
	if($(this).attr("name") == 0){
	    $(".shop_div").css("width",57 + "%");
	    $(this).attr("name","1");
	    $(this).text("完成");
	    $(".shop_img_1").css("display","inline-block");
	}else if($(this).attr("name") == 1){
	    $(".shop_div").css("width",66 + "%");
	    $(this).attr("name","0");
	    $(this).text("编辑");
	    $(".shop_img_1").css("display","none");
	}
})
//选择全部评价
$(".shop_ul").eq(0).find(".shop_li").on("click",function(){
	if($(this).find(".shop_img_1").attr("name") == 0){
		$(this).find(".shop_img_1").attr("src","img/htrjyt.png");
		$(this).find(".shop_img_1").attr("name","1");
	}else if($(this).find(".shop_img_1").attr("name") == 1){
		$(this).find(".shop_img_1").attr("src","img/hnernn.png");
		$(this).find(".shop_img_1").attr("name","0");
	}
})
//删除全部评价
$(".Cancel_attention_btn_1").eq(0).on("click",function(){
	$(".shop_ul").eq(0).find(".shop_li").each(function(){
		if($(this).find(".shop_img_1").attr("name") == 1){
			$(this).remove();
		}
	})
})
//编辑有图评价
$(".edit_btn").eq(1).on("click",function(){
	if($(this).attr("name") == 0){
	    $(".img_box").css("width",87.66666 + "%");
	    $(".evaluate_txt").css("width",77.66666 + "%")
	    $(this).attr("name","1");
	    $(".check_btn").css("display","inline-block");
	    $(this).text("完成");
	}else if($(this).attr("name") == 1){
	    $(".img_box").css("width",94.66666 + "%");
	    $(".evaluate_txt").css("width",94.66666 + "%")
	    $(this).attr("name","0");
	    $(".check_btn").css("display","none");
	    $(this).text("完成");
	}
})
//选择有图评价
$(".check_btn").on("click",function(){
	if($(this).attr("name") == 0){
		$(this).attr("src","img/htrjyt.png");
		$(this).attr("name","1");
	}else if($(this).attr("name") == 1){
		$(this).attr("src","img/hnernn.png");
		$(this).attr("name","0");
	}
})
//删除有图评价
$(".Cancel_attention_btn_1").eq(1).on("click",function(){
	$(".check_btn").each(function(){
		if($(this).attr("name") == 1){
			$(this).parent().remove();
		}
	})
})
//查看图片
$(".evaluate_img").on("click",function(){
	var name_img = $(this).attr("src");
	var H = $(window).height();
	$(".Mask_Img_box").css("height",H);
	$(".Mask_Img_out").css("height",H);
	$(".Mask_Img_box").show();
	$(".Mask_Img").attr("src",name_img);
})
//关闭查看图片
$(".Mask_Img_close_btn").on("click",function(){
	$(".Mask_Img_box").hide();
})

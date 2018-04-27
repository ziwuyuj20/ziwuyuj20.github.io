$(".embed").css("height",$(document).height());
//注册协议
//打开
$(".agr_btn").click(function(){
	$(".embed").show();
})
//关闭
$(".embed_p3,.agr_btn2").click(function(){
	$(".embed").hide();
})
//注册资料检测
//获得焦点
$(".center_ipt1").focus(function(){
	$(".center_ul_div1").css("border-color","#dddddd");
	$(".prompt_2,.prompt_1").hide();
	$(this).parent().parent().find(".prompt_1").show();
	var index1 = $(this).parent().parent().index();
	$(".ico1").each(function(){
		if(($(this).find(".center_ipt1").val() == "") && ($(this).index() != index1)){
			$(this).find(".center_ul_div1").css("border-color","#e22");
			$(this).find(".prompt_2").show();
		}else if($(this).index() == index1){
			return false;
		}
	})
})
//点击登录
$(".reg").click(function(){
	$(".ico1").each(function(){
		if($(this).find(".center_ipt1").val() == ""){
			$(this).find(".center_ipt1").focus();
			$(this).find(".center_ul_div1").css("border-color","#e22");
			$(".prompt_1").hide();
			$(this).find(".prompt_2").show();
			return false;
		}
	})
})
var winW = parseInt($(window).width());
if(winW < 1400){
	$(".ifr").css("height",400 + "px");
}
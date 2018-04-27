//高度补充
var head_H_1 = parseInt($(".Collection_head_box").height());
var head_H_2 = parseInt($(".Evaluation_type").height());
var footer_H_1 = $(".delete_box").height();
$(".head").css("height",head_H_1);
$(".footer").css("height",footer_H_1);
$(".head1").css("height",head_H_1 + head_H_2);
//头部下拉框
$(".list_box1").css("top",head_H_1);
$(".serch_box").css("top",head_H_1);
//头部下拉框操作
$(".Link_img1").on("click",function(){
	if($(this).attr("name") == 0){
		$(".list_box1").show();
		$(this).attr("name","1");
	}else{
		$(".list_box1").hide();
		$(".serch_box").hide();
		$(this).attr("name","0");
	}
})
//生成搜索框
$(".serch_btn1").on("click",function(){
	$(".list_box1").hide();
	$(".list_box1").attr("name","0");
	$(".serch_box").show();
})
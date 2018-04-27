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
//点击全部删除删除商品分类
$(".delectBtn").click(function(){
	$(".ico").remove();
	$(".icoi").remove();
})
//点击全部展开所有商品类型
$(".allOpent").click(function(){
	$(".showOff").css("background-position-y","-20px");
})
//点击全部收起所有商品类型
$(".allOff").click(function(){
	$(".showOff").css("background-position-y","-35px");
})
//点击删除键删除商品类型节点
$(".delectImg").click(function(){
	$(this).parent().parent().remove();
	Afn();
})
//点击向下箭头时节点向下移动一级
$(".moveUp").click(function(){
	var $newNode = $(this).parent().parent().parent();
	//将节点插入到该节点下一兄弟元素的后面
	$($(this).parent().parent().parent()).insertAfter($(this).parent().parent().parent().next());
	//调用函数
	Afn();
})
//点击向下箭头时节点向下移动到最底部
$(".moveMostDown").click(function(){
	var $newNode = $(this).parent().parent().parent();
	//将节点插入到最后面
	$("#centerClassBox").append($newNode);
	//调用函数
	Afn();
})
//点击向上箭头时节点向上移动一级
$(".moveDown").not(".moveDown:first").click(function(){
	//克隆节点
	var $newNode = $(this).parent().parent().parent();
	//将节点插入到上一兄弟元素之前
	$($(this).parent().parent().parent().prev()).before($newNode);
	//调用函数
	Afn();
})
//点击向上箭头时节点移动到顶部
$(".moveMostUp").click(function(){
	//克隆节点
	var $newNode = $(this).parent().parent().parent();
	//将节点插入到最顶部
	$("#centerClassBox").prepend($newNode);
	//调用函数
	Afn();
})
var sum2 = 0;
//点击添加新分类按钮添加分类
$(".newClassBtn").click(function(){
	//克隆节点
	var $newNode1 = $(".ICO:last").clone(true,true);
	//改变新添加分类的样式
	$newNode1.css("display","block");
	//移除类，避免影响到删除
	$newNode1.removeClass(".ICO");
	//添加类
	$newNode1.addClass("ico");
	$newNode1.addClass("icoi");
	//插入节点
	$("#centerClassBox").append($newNode1);
	//调用函数
	Afn();
})
//点击添加子分类添加子分类
$(".NewclassTxt").click(function(){
	var s = 0;
	//克隆节点
	var $newNode = $(".ChildICO:last").clone(true,true).show();
	//改变节点样式
	$(".ChildICO:last").css("display","none");
	//插入节点
	$(this).parent().next().append($newNode);
	var ChildNum = $(this).parent().parent().find(".ChildICO").find(".classIpt3");
	ChildNum.each(function(i){
		s += 1;
		ChildNum.eq(i).val(s);
	})
})
//点击子分类向下箭头时节点向下移动一级
$(".moveUpChild").click(function(){
	var $newNode = $(this).parent().parent();
	//将节点插入到该节点下一兄弟元素的后面
	$($(this).parent().parent()).insertAfter($(this).parent().parent().next());
	order($newNode.parent().parent().find('.ChildICO'));
})
//点击子分类向上箭头时节点向上移动一级
$(".moveDownChild").click(function(){
	var $newNode = $(this).parent().parent();
	//将节点插入到上一兄弟元素之前
	$($(this).parent().parent().prev()).before($newNode);
	order($newNode.parent().parent().find('.ChildICO'));
})
//点击子分类向下箭头时节点向下移动到最底部
$(".moveMostDownChild").click(function(){
	var $newNode = $(this).parent().parent();
	//将节点插入到最后面
	$(this).parent().parent().parent().append($newNode);
	order($newNode.parent().parent().find('.ChildICO'));
})
//点击子分类向上箭头时节点移动到顶部
$(".moveMostUpChild").click(function(){
	var sum = 0;
	//克隆节点
	var $newNode = $(this).parent().parent();
	//将节点插入到最顶部
	$(this).parent().parent().parent().prepend($newNode);
	order($newNode.parent().parent().find('.ChildICO'));
})
//封装子分类序号元素
var order = function(selector){
	var i = 0;
	selector.each(function(){
		i++;
		$(this).find('.classIpt3').val(i);

	})
}
//封装分类序号函数
function Afn(){
	var sum = -1;
	$(".classIpt1").each(function(i){
		sum += 1;
		$(this).val(sum);
	})
}
Afn();
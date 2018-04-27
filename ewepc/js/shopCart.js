//全选操作
$(".seleIpt").click(function(){
	if(this.checked == true){
		$(".selectIco1").prop('checked',true);
		$(".storeIpt").prop('checked',true);
		$(".handleIpt").prop('checked',true);
	}else{
		$(".selectIco1").prop('checked',false);
		$(".storeIpt").prop('checked',false);
		$(".handleIpt").prop('checked',false);

	}
})
$(".selectIco1").click(function(){
	if(this.checked == true){
		$(this).parent().next().find(".storeIpt").prop('checked',true);
	}else{
		$(this).parent().next().find(".storeIpt").prop('checked',false);
	}
})
$(".handleIpt").click(function(){
	if(this.checked == true){
		$(".selectIco1").prop('checked',true);
		$(".storeIpt").prop('checked',true);
		$(".seleIpt").prop('checked',true);
	}else{
		$(".selectIco1").prop('checked',false);
		$(".storeIpt").prop('checked',false);
		$(".seleIpt").prop('checked',false);

	}
	//获取总价格
	var allNum = 0;
	$(this).parent().prev().find(".allNum").each(function(){
		var sum = Number($(this).text());
		allNum += sum;
		$(".allNumber").text(allNum+".00");
	})
})
//点击+添加商品数量
$(".addBtn").click(function(){
	var add = $(this).parent().find(".alterNum").val();
	add++;
	$(this).parent().find(".alterNum").val(add);
	//总价值修改
	//获取单价
	var num = $(this).parent().parent().parent().find(".tableTd4").text();
	var allNum = num*add;
	$(this).parent().parent().parent().find(".allNum").text(allNum);
})
//点击-减少商品的数量
$(".minishBtn").click(function(){
	if($(this).parent().find(".alterNum").val() > 0){
		var add = $(this).parent().find(".alterNum").val();
		add--;
		$(this).parent().find(".alterNum").val(add);
		//总价值修改
		//获取单价
		var num = $(this).parent().parent().parent().find(".tableTd4").text();
		var allNum = num*add;
		$(this).parent().parent().parent().find(".allNum").text(allNum);
	}else{
		$(this).parent().find(".alterNum").val("0");
		$(this).parent().parent().parent().find(".allNum").text("0");
	}
})
//点击删除元素
$(".tableTd7").click(function(){
	var num = $(this).parent().parent().find("tr").length;
	if(num < 2){
		$(this).parent().parent().parent().prev().remove();
	}
	$(this).parent().remove();
})
//删除选中的商品
$(".delectGoods").click(function(){
	var node1 = $(this).parent().prev().find(".table1").find($("[type=checkbox]:checked"));
	var node2 = $(this).parent().prev().find(".tableHead").find($("[type=checkbox]:checked"));
	node1.parent().parent().remove();
	node2.parent().remove();
})
$(".tableHead").next().find(".storeIpt").each(function(){
	$(this).click(function(){
		var sum = 0;
		$(this).parent().parent().parent().find(".storeIpt").each(function(){
			if(this.checked == true){
				sum++;
			}
		})
		if(sum == $(this).parent().parent().parent().find(".storeIpt").length){
			$(this).parent().parent().parent().parent().prev().find(".selectIco1").prop('checked',true);
		}
	})
})
$(".alterNum").change(function(){
	var sum = $(this).val();
	var oldSum = $(this).parent().parent().parent().find(".tableTd4").text();
	var allNum = sum * oldSum;
	$(this).parent().parent().parent().find(".allNum").text(allNum);
})

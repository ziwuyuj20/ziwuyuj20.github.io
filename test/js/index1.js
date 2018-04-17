$(".btn1").click(function(){
	if($(this).attr("name") == 0){
		$(this).css("background","#fff");
		$(this).css("border","1px solid red");
		$(this).css("color","black");
		$(".img").css("display","block");
		$(".img").show();
		$(this).attr("name","1");
	}else{
		$(this).css("background","red");
		$(this).css("border","1px solid blue");
		$(this).css("color","#fff");
		$(".img").hide();
		$(this).attr("name","0");
	}
	
})
//联系方式选择
$(".PhoneBox").find("a").click(function(){
	$(this).addClass("PhoneBtn");
	$(this).siblings("a").removeClass("PhoneBtn");
})
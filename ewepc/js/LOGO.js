//LOGO宽度设定
var LOGOW = parseInt($(".JQlogo").width());
if(LOGOW < 1150){
	$(".JQlogo").removeClass("JQlogoW");
}else{
	$(".JQlogo").addClass("JQlogoW");
}
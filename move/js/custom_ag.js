$("#hide").click(function(event){
	$("#quadrato").animate({
	  opacity: 0,
	  height: "-300px"
	}, 1000);
});
$("#show").click(function(event){
	$("#quadrato").animate({
	  opacity: 1,
	  height: "150px"
	}, 1000);
});
$("#toggle").click(function(event){
	$("#quadrato").animate({
		width: [ "toggle" ],
		height: [ "toggle" ],
		opacity: "toggle"
	}, 1000);
});
$("#left").click(function(event){
	$("#quadrato").animate({
		"left": "-=50px"
	}, 1000);
});
$("#right").click(function(event){
	$("#quadrato").animate({
		"left": "+=50px"
	}, 1000);
});
$("#up").click(function(event){
	$("#quadrato").animate({
		"top": "-=50px"
	}, 1000);
});
$("#down").click(function(event){
	$("#quadrato").animate({
		"top": "+=50px"
	}, 1000);
});
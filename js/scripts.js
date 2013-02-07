//local scroll
$(document).ready(function(){
	$.localScroll({axis: 'y'});
});
//hide and show logo when needed
$('#landingpage').waypoint(function(direction) {
	$('.logo').toggle(400);
	$('nav ul li').removeClass('navindicator');
}, { offset: '-80%' });
//Navigation page indicators
$('.pages section')
.waypoint(function(direction) {
	if (direction === 'down') {
		var pagenumber = ($(this).index() -1);
		if (pagenumber > -1){
			$('nav ul li').removeClass('navindicator');
			$("nav ul li:eq(" +pagenumber+ ")").addClass('navindicator');
		}
	}
}, { offset: 10 })
.waypoint(function(direction) {
	if (direction === 'up') {
		var pagenumber = ($(this).index() -1);
		if (pagenumber > -1){
			$('nav ul li').removeClass('navindicator');
			$("nav ul li:eq(" +pagenumber+ ")").addClass('navindicator');
		}
	}
}, { offset: -10 });

//Product Sliders
//images and paragraphs show on load
$(document).ready(function(){
	$("#shampoopage").find(".container p").eq(0).show();
	$("#conditionerpage").find(".container p").eq(0).show();
	$("#finishingpage").find(".container p").eq(0).show();
	$("#stylingpage").find(".container p").eq(0).show();
	$("#shampoopage").find(".leftside img").eq(0).show();
	$("#conditionerpage").find(".leftside img").eq(0).show();
	$("#finishingpage").find(".leftside img").eq(0).show();
	$("#stylingpage").find(".leftside img").eq(0).show();
	$("#shampoopage").find(".tabs p").not(":eq(0)").addClass("tabdisabled");
	$("#conditionerpage").find(".tabs p").not(":eq(0)").addClass("tabdisabled");
	$("#finishingpage").find(".tabs p").not(":eq(0)").addClass("tabdisabled");
	$("#stylingpage").find(".tabs p").not(":eq(0)").addClass("tabdisabled");
});
//tab clicks
$('#shampoopage, #conditionerpage, #stylingpage, #finishingpage').find('.tabs p').click(function(){
	var tabnumber = $(this).index();
	var selectorname = $(this).closest("section");
	var tabwidth = selectorname.find(".tabs p").width();
	selectorname.find(".tabs p").addClass('tabdisabled').eq(tabnumber).removeClass('tabdisabled');
	selectorname.find(".container h1").hide().eq(tabnumber).show();
	selectorname.find(".container p").hide().eq(tabnumber).show();
	selectorname.find(".leftside img").fadeOut(400).eq(tabnumber).fadeIn(400);
	selectorname.find(".tabbottombar").animate({"width": tabwidth}, "400").stop();
});
//function to transition tabs within automatic transition function below
function animatetabs(tabnum, pagename){
	var selectorname = $(pagename);
	selectorname.find(".tabs p").addClass('tabdisabled').eq(tabnum).removeClass('tabdisabled');
	selectorname.find(".container h1").hide().eq(tabnum).show();
	selectorname.find(".container p").hide().eq(tabnum).show();
	selectorname.find(".leftside img").fadeOut(400).eq(tabnum).fadeIn(400);
};
//automatic transitions in sliders
$('#shampoopage, #conditionerpage, #stylingpage, #finishingpage').waypoint(function(){
	var selectorname = $(this).attr("id");
	var tabwidth = $("#" + selectorname).find(".tabs p").width();
	$("#" + selectorname).find(".tabs p").addClass('tabdisabled');
	$("#" + selectorname).find(".container h1").hide().eq(0).show();
	$("#" + selectorname).find(".container p").hide().eq(0).show();
	$("#" + selectorname).find(".leftside img").hide().eq(0).show();
	$("#" + selectorname).find(".tabs p").eq(0).removeClass('tabdisabled');
	$("#" + selectorname).find(".tabbottombar").animate({"width": tabwidth}, "400").stop();
	$("#" + selectorname).find(".tabbottombar:eq(0)").stop().clearQueue().animate({
		width: '0px'
	}, 400, function() {
	$("#" + selectorname).find(".tabbottombar:eq(0)").animate({
		width: tabwidth
	}, 8000, function() {
		if (selectorname == "finishingpage"){
			animatetabs(1, "#finishingpage");
			$("#" + selectorname).find(".tabbottombar:eq(1)").stop().clearQueue().animate({
				width: '0px'
			}, 400, function() {
				$("#" + selectorname).find(".tabbottombar:eq(1)").animate({
					width: tabwidth
				}, 8000, function(){
					animatetabs(0, "#finishingpage");
				});
			});
		}
		else if (selectorname == "shampoopage"){
			animatetabs(1, "#shampoopage");
			$("#" + selectorname).find(".tabbottombar:eq(1)").stop().clearQueue().animate({
				width: '0px'
			}, 400, function() {
				$("#" + selectorname).find(".tabbottombar:eq(1)").animate({
					width: tabwidth
				}, 8000, function(){
					animatetabs(2, "#shampoopage");
					$("#" + selectorname).find(".tabbottombar:eq(2)").stop().clearQueue().animate({
						width: '0px'
					}, 400, function() {
						$("#" + selectorname).find(".tabbottombar:eq(2)").animate({
							width: tabwidth
						}, 8000, function(){
							animatetabs(0, "#shampoopage");
						});
					});
				});
			});
		}
		else if (selectorname == "conditionerpage"){
			animatetabs(1, "#conditionerpage");
			$("#" + selectorname).find(".tabbottombar:eq(1)").stop().clearQueue().animate({
				width: '0px'
			}, 400, function() {
				$("#" + selectorname).find(".tabbottombar:eq(1)").animate({
					width: tabwidth
				}, 8000, function(){
					animatetabs(2, "#conditionerpage");
					$("#" + selectorname).find(".tabbottombar:eq(2)").stop().clearQueue().animate({
						width: '0px'
					}, 400, function() {
						$("#" + selectorname).find(".tabbottombar:eq(2)").animate({
							width: tabwidth
						}, 8000, function(){
							animatetabs(0, "#conditionerpage");
						});
					});
				});
			});
		}
		else if(selectorname == "stylingpage"){
			animatetabs(1, "#stylingpage");
			$("#" + selectorname).find(".tabbottombar:eq(1)").stop().clearQueue().animate({
				width: '0px'
			}, 400, function() {
				$("#" + selectorname).find(".tabbottombar:eq(1)").animate({
					width: tabwidth
				}, 8000, function(){
					animatetabs(2, "#stylingpage");
					$("#" + selectorname).find(".tabbottombar:eq(2)").stop().clearQueue().animate({
						width: '0px'
					}, 400, function() {
						$("#" + selectorname).find(".tabbottombar:eq(2)").animate({
							width: tabwidth
						}, 8000, function(){
							animatetabs(3, "#stylingpage");
							$("#" + selectorname).find(".tabbottombar:eq(3)").stop().clearQueue().animate({
								width: '0px'
							}, 400, function() {
								$("#" + selectorname).find(".tabbottombar:eq(3)").animate({
									width: tabwidth
								}, 8000, function(){
									animatetabs(4, "#stylingpage");
									$("#" + selectorname).find(".tabbottombar:eq(4)").stop().clearQueue().animate({
										width: '0px'
									}, 400, function() {
										$("#" + selectorname).find(".tabbottombar:eq(4)").animate({
											width: tabwidth
										}, 8000, function(){
											animatetabs(0, "#stylingpage");
										});
									});
								});
							});
						});
					});
				});
			});
		}
	});
	});
}, { offset: 10 });
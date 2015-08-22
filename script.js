document.writeln('<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>');
jQuery(function() {
	jQuery('a#poppe').click(function (e) {
	e.preventDefault();
	var page = jQuery(this).attr("href")
	var pagetitle = jQuery(this).attr("title")
	var jQuerydialog = jQuery("<div id='aaape'></div>")
	.html('<iframe style="border: 0px; " src="' + page + '" width="1050" height="550"></iframe>')
	.dialog({
		'dialogClass'   : 'wp-dialog',
		autoOpen: false,
		modal: true,
		height: 580,
		width: 1050,
		title: pagetitle
	});
	jQuerydialog.dialog('open');
	});
});



$(document).ready(function(){

	$(".num").on('input', function(){
		var $num = $(".num").val();
		$(".lol").html("");
		for (i=0; i<parseInt($num); i++){
			$(".lol").append("<input type='text' class='lel legend' placeholder='Legend' required>&nbsp;&nbsp;<input type='text' class='lel amount' required placeholder='Value'><br /><br />");
		}
	});
	$(".ok").click(function(){
		if ($("form")[0].checkValidity()){
			var legend = document.getElementsByClassName('legend');
			var labels = 'labels="';
			for (i=0; i < legend.length; ++i){
   				labels = labels + legend[i].value+ ',';
			}
			labels = labels.substring(0, labels.length-1) + '"';
			var val = document.getElementsByClassName('amount');
			var values = 'data="';
			for (i=0; i < val.length; ++i){
   				values = values + val[i].value+ ',';
			}
			values = values.substring(0, values.length-1) + '"';
			var values2 = 'datasets="';
			for (i=0; i < val.length; ++i){
   				values2 = values2 + val[i].value+ ',';
			}
			values2 = values2.substring(0, values2.length-1) + '"';
			var selected = document.getElementById("type");
			if (selected.options[selected.selectedIndex].value == "line" || selected.options[selected.selectedIndex].value == "bar" || selected.options[selected.selectedIndex].value == "radar"){
				alert(selected.options[selected.selectedIndex].value);
			$(".shortcode").html('[wp_charts type="'+ selected.options[selected.selectedIndex].value+'" title="' + document.getElementById("title").value + '" ' + labels + ' ' + values + ']').fadeIn();
			} else {
				alert(selected.options[selected.selectedIndex].value);
			$(".shortcode").html('[wp_charts type="'+ selected.options[selected.selectedIndex].value+'" title="' + document.getElementById("title").value + '" ' + labels + ' ' + values2 + ']').fadeIn();
			}
		} else {
			$("form")[0].reportValidity();
		}
	});
});
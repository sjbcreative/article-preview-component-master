$( document ).ready(function() {
    
    $(".sharePopout").removeClass('show');

    $("a.share").click(function () {
    	$(".sharePopout").toggleClass('show');
    });

    if ($(window).width() < 768) {
   		$("a.share").click(function () {
   			$(this).toggleClass('show');
	   });
	}
});
$( document ).ready(function() {
    
    $(".sharePopout").removeClass('show');

    $("a.share").click(function () {
    	$(".sharePopout").toggleClass('show');
    })
});
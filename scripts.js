$( document ).ready(function() {
    
    $(".sharePopout").hide();

    $("a.share").click(function () {
    	$(".sharePopout").toggle(200);
    })
});
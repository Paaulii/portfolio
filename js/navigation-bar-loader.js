$(document).ready(function(){
    $('#navigation-bar-loader').load("/pages/components/navigation-bar.html", "", function() {
        $.getScript("/js/navigation-bar.js")
    });
});
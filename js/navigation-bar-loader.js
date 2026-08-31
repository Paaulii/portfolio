$(document).ready(function(){
    $('#navigation-bar-loader').load("/portfolio/pages/components/navigation-bar.html", "", function() {
        $.getScript("/portfolio/js/navigation-bar.js")
    });
});
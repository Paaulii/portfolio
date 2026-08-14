$(document).ready(function(){
    $('#navigation-bar').load("../pages/components/navigation-bar.html", "", function() {
        $.getScript("../js/navigation-bar.js")
    });
});
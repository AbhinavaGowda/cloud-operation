(function($){
"use strict";

/* === SETTING === */
var themeApp = {
    theme_navigation:function(){
        $('.hidden a').click(function(e){
            e.preventDefault();
            $('#theme-navigation-list').slideToggle();
        });
    },
    theme_init:function(){
        themeApp.theme_navigation();
    }
}

/* === INITIALING === */
$(document).ready(function(){
    themeApp.theme_init();
});

}(jQuery));
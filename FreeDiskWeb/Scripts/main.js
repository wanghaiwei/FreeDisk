﻿; (function () {
    "use strict";
    var fullHeight = function () {
        $(".js-fullheight").css("height", $(window).height());
        $(window).resize(function () {
            $(".js-fullheight").css("height", $(window).height());
        });
    }
    // Document on load.
    $(function () {
        fullHeight();
    });
}());
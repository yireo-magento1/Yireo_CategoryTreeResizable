"use strict";
(function ($) {
    $(function () {
        $("#anchor-content .columns").css('background', 'none');
        $("#anchor-content .main-col").css('border-left', '3px solid #eee');
        $("#anchor-content .side-col").resizable({
            resize: function (event, ui) {
                var leftWidth = ui.size.width;
                $("#anchor-content .side-col").css('width', leftWidth + 'px');
                $("#anchor-content .side-col").css('margin-right', '-' + leftWidth + 'px');
                $("#anchor-content .main-col").css('margin-left', leftWidth + 'px');
            }
        });
    });
})(jQuery);

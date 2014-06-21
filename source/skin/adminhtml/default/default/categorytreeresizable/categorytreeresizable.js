jQuery(document).ready(function() {
    jQuery("#anchor-content .columns").css('background', 'none');
    jQuery("#anchor-content .main-col").css('border-left', '3px solid #eee');
    jQuery("#anchor-content .side-col").resizable({
        resize: function(event, ui) {
            var leftWidth = ui.size.width;
            jQuery("#anchor-content .side-col").css('width', leftWidth + 'px');
            jQuery("#anchor-content .side-col").css('margin-right', '-' + leftWidth + 'px');
            jQuery("#anchor-content .main-col").css('margin-left', leftWidth + 'px');
        }
    });
});

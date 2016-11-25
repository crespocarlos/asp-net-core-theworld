(function () {
    var $sidebarWrapper = $('#sidebar, #wrapper');

    $('#sidebarToggle').on('click', function(){
        $sidebarWrapper.toggleClass('hide-sidebar');
        if ($sidebarWrapper.hasClass('hide-sidebar')) {
            $(this).text('Show sidebar');
        } else {
            $(this).text('Hide sidebar')
        }
    });
})();
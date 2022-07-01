$(function() {
    $(".c-hamburger").click(function () {
        $(this).toggleClass('c-active');

        if ($(this).hasClass('c-active')) {
            $('.p-menu-sp__list').addClass('c-active');
            $('body').addClass('c-active--fixed-scroll');
            $('.c-back-dark').show();
        } else {
            $('.p-menu-sp__list').removeClass('c-active');
            $('body').removeClass('c-active--fixed-scroll');
            $('.c-back-dark').hide();
        }
    });
});
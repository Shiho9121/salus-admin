$(function() {
    $(".c-hamburger").click(function () {
        $(this).toggleClass('c-active');

        if ($(this).hasClass('c-active')) {
            $('.p-menu-sp__list').addClass('c-active');
            $('.c-back-dark').show();
        } else {
            $('.p-menu-sp__list').removeClass('c-active');
            $('.c-back-dark').hide();
        }
    });
});
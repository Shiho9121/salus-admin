$(function() {
    $(".p-menu__accordion").click(function () {
        $(this).toggleClass('c-menu-active');
        $(this).next('ul').slideToggle();
    });
});
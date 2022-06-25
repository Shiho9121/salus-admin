// $(function(){
//     //クリックで動く
//     $('.p-menu__accordion').click(function(){
//         $(this).toggleClass('active');
//         // $(this).next('nav').slideToggle();
//     });
//     //ホバーで動く
//     // $('.p-menu__accordion').hover(function(){
//     //     $(this).toggleClass('active');
//     //     $(this).next('nav').slideToggle();
//     // });
// });
$(function() {
    $(".p-menu__accordion").click(function () {
        $(this).toggleClass('c-active');
        $(this).next('ul').slideToggle();

    //     if ($(this).hasClass('c-active')) {
    //         $('.p-nav-sp__list').addClass('c-active');
    //         $('.c-back-dark').show();
    //     } else {
    //         $('.p-nav-sp__list').removeClass('c-active');
    //         $('.c-back-dark').hide();
    //     }
    });
});
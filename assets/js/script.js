$(document).ready(function () {
    $('.carrousel').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false
    });

    $(".hidden-menu").click(function () {
        if($(this).hasClass("active")) {
            $(".menu .menu-items .menu-lista").animate({width:'toggle'},350);

        } else {
            $('.menu .menu-items .menu-lista').addClass('activeList');
            $(".menu .menu-items .menu-lista").animate({width:'toggle'},350);
        }
    });
});
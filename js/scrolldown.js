$(document).ready(function(){


    $(".menuFunciones").click(function() {
        $('html, body').animate({
        scrollTop: $("#funcionalidades").offset().top -50
        }, 700);
        $('.hamburger').toggleClass("is-active");
       });

    $(".menuSobre").click(function() {
        $('html, body').animate({
        scrollTop: $("#sobreNosotros").offset().top -80
        }, 700);
        $('.hamburger').toggleClass("is-active");
       });

    $(".menuEquipo").click(function() {
        $('html, body').animate({
        scrollTop: $("#equipo").offset().top -40
        }, 700);
        $('.hamburger').toggleClass("is-active");
       });

    $(".menuContacto").click(function() {
        $('html, body').animate({
        scrollTop: $("#contacto").offset().top -55
        }, 700);
        $('.hamburger').toggleClass("is-active");
       });

    //Para que el menu desplegable se oculte automáticamente luego de hacer click (en móviles)
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    //Funcionalidad menu Hamburguesa
    $('.navbar-toggler').click(function() {
        $('.hamburger').toggleClass("is-active");
    });
});


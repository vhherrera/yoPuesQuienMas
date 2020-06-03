$(document).ready(function () {

    var links = $('#links');
    var valor = 0;
    $('#btnNav').on('click', function () {
        if (valor == 0) {
            links.css('left', 0);
            valor = 1;
            valor2 = 0;
        } else {
            links.css('left', '-300px');
            valor = 0;
            valor2 = 0;
        }
    })

    var links2 = $('#link2');
    var valor2 = 0;
    $('#btnNav2').on('click', function () {
        if (valor2 == 0) {
            links2.css('left', 0);
            valor2 = 1;
            valor = 0;
        } else {
            links2.css('left', '-300px');
            valor2 = 0;
            valor = 0;
        }
    })

    $(window).on('scroll', function () {

        var proyectosOffsetTop = $('#aboutU').offset().top;
        if ($(window).scrollTop() >= proyectosOffsetTop) {
            valor = 0;
            valor2 = 0;
        } else if ($(window).scrollTop() <= proyectosOffsetTop / 2) {
            valor = 0;
            valor2 = 0;
        }
    });


});

$(document).ready(function () {

    /* MENU DE NAVEGACION PARA COMPUTADORAS */
    $('#btn-burguer').on('mouseover', function () {
        $('#nav-desktop').toggleClass('nav-visible');
    });
    $('#nav-desktop').on('mouseover', function () {
        $('#nav-desktop').addClass('nav-visible');
        $('#nav-desktop').on('mouseout', function () {
            $('#nav-desktop').removeClass('nav-visible');
        });
    });
    /* MENU DE NAVEGACION PARA DISPOSITIVOA MOVILES */
    var btnVal = 0;
    $('#btn-burguer-mobile').on('click', function () {
        $('#btn-burguer-mobile').toggleClass('rotate');
        if (btnVal == 0) {
            $('#nav-mobile').addClass('nav-sm');
            btnVal = 1;
        } else {
            $('#nav-mobile').removeClass('nav-sm');
            btnVal = 0;
        }
    });
    /* AL CAMBIAR EL TAMANHO DEL NAVEGADOR SE OCULTA EL MENU EN DISPOSITIVOS MOVILES */
    var ubicacionPrincipal = window.pageYOffset;
    $(window).scroll(function () {
        var desplazamientoActual = window.pageYOffset;
        if (ubicacionPrincipal <= desplazamientoActual) {
            if (btnVal != 1) {
                $('#btn-burguer').addClass('animationRight');
                $('#btn-burguer-mobile').addClass('animationRight');
            }
        } else {
            $('#btn-burguer').removeClass('animationRight');
            $('#btn-burguer-mobile').removeClass('animationRight');
        }
        ubicacionPrincipal = desplazamientoActual;
    });



});
$(document).ready(function () {

    $('#linkRegistrar').on('click', function () {
        toggleForm();
    });
    $('#linkIngresar').on('click', function () {
        toggleForm();
    });

    function toggleForm() {
        var container = $('.section-login .container');
        container.toggleClass('active');
    }   

});
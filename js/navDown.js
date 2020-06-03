$(document).ready(function () {

    var fixedHeader = $('#navMobile');
    var links = $('#link2');
    var link = $('#links');
  
    $(window).on('scroll', function () {
  
      var proyectosOffsetTop = $('#aboutU').offset().top;
  
      if ($(window).scrollTop() >= proyectosOffsetTop) {
  
        fixedHeader.css('top', 0);
        link.css('left', '-300px');
  
      }else if ($(window).scrollTop() <= proyectosOffsetTop/2) {
  
        fixedHeader.css('top', '-100px');
        links.css('left', '-300px');
      }
    })
  
  
  });
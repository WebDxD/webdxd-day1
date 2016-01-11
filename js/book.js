$(document).ready(function(){

  $('#gen-btn').click(function(){
    var randomPrice = Math.round(Math.random() * 100);
    $('#random-price').text(randomPrice);
    $('#book-title').css({
      'color': '#ff0000',
      'font-size': '8rem',
    });
  });
  
  $('#hide').click(function(){
    $('.books').SlideToggle();
  });

  $('#show').click(function(){
    $('.books').fadeIn();
  });

  $('.bxslider').bxSlider();

});
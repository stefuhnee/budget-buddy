$(document).ready(function(){
  $('.not-index-main').hide();
  $('#home').show();
});

$('.main-nav').find($ 'li').on('click', function(){
  var $reveal = $(this).data('tab');
  $('.not-index-main').fadeOut();
  $('#' + $reveal).fadeIn();
  console.log(event.target);
});

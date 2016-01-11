$(document).ready(function() {

  $('.readmore').click(function () {
    $('.show-this-on-click').slideDown();
    event.preventDefault();
    $('.readmore').hide();
    $('.hide').show();
  });

  $('.readless').click(function () {
    $('.show-this-on-click').slideUp();
    event.preventDefault();
    $('.hide').hide();
    $('.readmore').show();
  });

  $('.learnmore').click(function () {
    $('.learnmoretext').slideDown();
    event.preventDefault();
    $('.learnmore').hide();
  });








});

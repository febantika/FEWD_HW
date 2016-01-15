// var tempC = 0;
// var tempF = tempC * 5/9 + 32;
//
// if tempF =< display snow
// if tempF => display sun
//
// display tempF
//



$(document).ready(function () {

  var tempC = 0;

  $('.entry').submit(temperatureSubmit);

  function temperatureSubmit(event) {
  event.preventDefault();

  var newVal = $('.new-entry').val();
  newVal = parseFloat(newVal);

  farenheit = newVal * 5/9 + 32;

  $('.tempF').text(farenheit);

  var tempF = farenheit;

  if (tempF <= 32) {
    $('.wrapper').addClass('bg-blue');
  }
  else {
    $('.wrapper').addClass('bg-red');
  }
  };



});

//pseudocode
// on .click - when click submit
// event.prevenDefault
// var city - declare input
// backgroundImage.removeClass - clear the background image
// if else if else - city input
// backgroundImage.addClass - switch background image
// clearInput - clear the input field
// end pseudocode





$(document).ready(function () {

 $('.submit-btn').click(citySubmit);

 function citySubmit(event) {
   event.preventDefault();

   var city = $('.city-type').val().toLowerCase();

   $('.wrapper').removeClass('nyc');
   $('.wrapper').removeClass('sf');
   $('.wrapper').removeClass('la');
   $('.wrapper').removeClass('austin');
   $('.wrapper').removeClass('sydney');

    if (city === "new york" || city === "new york city" || city === "NYC")  {
     $('.wrapper').addClass('nyc');
   }
     else if (city === "San Francisco" || city === "sf" || city === "Bay Area")  {
       $('.wrapper').addClass('sf');
     }
       else if (city === "Los Angeles" || city === "LA" || city === "LAX")  {
         $('.wrapper').addClass('la');
       }
         else if (city === "austin" || city === "atx")  {
           $('.wrapper').addClass('austin');
         }
         else if (city === "Sydney" || city === "SYD")  {
           $('.wrapper').addClass('sydney');
         }
           else {
             alert("try again");
           };


   $('.city-type').val('');
 };
 //
}); // end ready
 // //$('#someid').attr('disabled', true);

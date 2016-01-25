//pseudocode//
// create an array of cities
// forEach - calls the callbackfn function one time for each city present in the array - show the list of cities
// append value to select -.append('' + value + '');
// get .val for the city selection
// on Select update the background image - .attr change the images
// end



var city = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];

$.each(city, function (index, value) {
  $('.city-type').append('<option>' + value + '</option>');

});

// $.change(city, function () {
//     alert('change image');
// });

$('.city-type').on('change', function() {
  var getCity = $('.city-type').val();
  //calling the city that's selected
    console.log("the selected city is " + getCity);

    var image = [
    'images/nyc.jpg',
    'images/sf.jpg',
    'images/la.jpg',
    'images/austin.jpg',
    'images/sydney.jpg',
    'images/citipix_skyline.jpg'
  ];


    //if getCity = SF - then city = city[1]
    if (getCity === city[0])  {
      $('.wrapper').attr('background', image[0]);
  }
    else if (getCity === city[1]){
      $('.wrapper').attr('background', image[1]);
      console.log('yes SF');
    }
    else if (getCity === city[2]){
      $('.wrapper').attr('background', image[2]);
      console.log('yes LA');
    }
    else if (getCity === city[3]){
      $('.wrapper').attr('background', image[3]);
      console.log('yes ATX');
    }
    else if (getCity === city[4]){
      $('.wrapper').attr('background', image[4]);
      console.log('yes SYD');
    }
    else {
      $('.wrapper').attr('background', image[5]);
  }

});

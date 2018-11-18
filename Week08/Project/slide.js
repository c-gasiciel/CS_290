
/*
Slider animation adapted from
https://designmodo.com/create-full-screen-slider/
*/

var TIMEOUT = 4000;

//Set interval
var interval = setInterval(handleNext, TIMEOUT);

function handleNext() {
  //Save elements in jQuery objects
  var $radios = $("input[class*='slide-radio']");
  var $activeRadio = $("input[class*='slide-radio']:checked");

  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;

  if (currentIndex >= radiosLength - 1) {
    $radios
      .first()
      .attr('checked', true);
  }

  else {
    $activeRadio
      .next('input[class*="slide-radio"]')
      .attr('checked', true);
  }
}




/*
'use strict';

$(function() {
  //Set configuration
  var width = 720;
  var animationSpeed = 1000;
  var pause = 3000;

  //Cache the DOM
  var $carousel = $('#photoCarousel')
  var $carouselContainer = $carousel.find('.slides');

  //Set interval
  setInterval(function(){
    $carousel.slides).animate({'margin-left': '-=' + width}, animationSpeed);
  }, pause);


  //Animate margin-left


  //If last slide, go to first position
});

*/

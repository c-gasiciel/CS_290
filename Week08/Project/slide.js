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

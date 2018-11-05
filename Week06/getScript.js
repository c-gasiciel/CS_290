/* JavaScript file for sending asynchronous GET request
   to Open Weather Map */

//Store API key so can be changed if needed
var apiKey = '8480cd8a20bc70fd9e797112c7e1883b';

document.addEventListener('DOMContentLoaded', setButtons);

function setButtons(){

   document.getElementById('locationSubmit').addEventListener('click', function(event){
     var req = new XMLHttpRequest();

     var city = {locationIn:null};

     //Set location to user's input
     city.locationIn = document.getElementById('locationIn').value;

     //Took CORS issue solution from
     //https://github.com/axios/axios/issues/853
     var requestString = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=" +
      city.locationIn + ",us&units=imperial&appid="+ apiKey;

     req.open('GET', requestString, true);
     req.setRequestHeader('Content-Type', 'application/json');
     req.addEventListener('load', function(){
       //If request successful, display data
       if(req.status >= 200 && req.status < 400){
         var response = JSON.parse(req.responseText);

         console.log("Request successful");

         document.getElementById('temperature').textContent = response.main.temp + '°F';
         //document.getElementById('conditions').textContent = response.weather.description;
         document.getElementById('tempHi').textContent = response.main.temp_max + '°F';
         document.getElementById('tempLo').textContent = response.main.temp_min + '°F';
       }

       else{
         console.log("Error: " + req.statusText);
       }
     });

     req.send();
     event.preventDefault();
   });
 }

/* JavaScript page for POST request test */

document.addEventListener('DOMContentLoaded', setButtons);

function setButtons(){

   document.getElementById('dataSubmit').addEventListener('click', function(event){
     var req = new XMLHttpRequest();

     var userData = {firstName:null, lastName:null, email:null};

     //Set to user's input
     userData.firstName = document.getElementById('firstName').value;
     userData.lastName = document.getElementById('lastName').value;
     userData.email = document.getElementById('email').value;

     //Took CORS issue solution from
     //https://github.com/axios/axios/issues/853
     var requestString = "https://httpbin.org/post";

     req.open('POST', requestString, true);
     req.setRequestHeader('Content-Type', 'application/json');
     req.addEventListener('load', function(){
       //If request successful, display data
       if(req.status >= 200 && req.status < 400){
         var response = JSON.parse(req.responseText).json;

         console.log(response);

         document.getElementById('givenResp').textContent = "Thanks for signing up!";
      /*   document.getElementById('surnameResp').textContent = response.lastName;
         document.getElementById('emailResp').textContent = response.email; */
       }

       else{
         console.log("Error: " + req.statusText);
       }
     });

     req.send(JSON.stringify(userData));
     event.preventDefault();
   });
 }

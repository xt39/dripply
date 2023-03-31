"use strict";

window.onload = function() {
   var d, dy;
   d = new Date();
   dy = d.getDay();
  
   switch(dy) {
     case 0:
       document.querySelector(".day").innerHTML = "Sunday";
       document.querySelector("#day").innerHTML = "Sunday";
     break;
     case 1: 
       document.querySelector(".day").innerHTML = "Monday";
       document.querySelector("#day").innerHTML = "Monday";
     break;
     case 2:
       document.querySelector(".day").innerHTML = "Tuesday";
       document.querySelector("#day").innerHTML = "Tuesday";
     break;
     case 3:
      document.querySelector(".day").innerHTML = "Wednesday";
      document.querySelector("#day").innerHTML = "Wednesday";
     break;
     case 4:
      document.querySelector(".day").innerHTML = "Thursday";
      document.querySelector("#day").innerHTML = "Thursday";
     break;
     case 5:
       document.querySelector(".day").innerHTML = "Friday";
       document.querySelector("#day").innerHTML = "Friday";
     break;
     case 6:
       document.querySelector(".day").innerHTML = "Saturday";
       document.querySelector("#day").innerHTML = "Saturday";
     break;
     default:
       // do nothing
     break;
   }
}

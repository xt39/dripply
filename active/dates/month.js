"use strict";

window.onload = function() {
  var dt, month;
  dt = new Date();
  month = dt.getMonth();
  
  switch(month) {
    case 0:
      document.querySelector(".month").innerHTML = "January";
      document.querySelector("#month").innerHTML = "January";
    break;
    case 1:
      document.querySelector(".month").innerHTML = "Febuary";
      document.querySelector("#month").innerHTML = "Febuary";
    break;
    case 2:
      document.querySelector(".month").innerHTML = "March";
      document.querySelector("#month").innerHTML = "March";
    break;
    case 3:
      document.querySelector(".month").innerHTML = "April";
      document.querySelector("#month").innerHTML = "April";
    break;
    case 4:
      document.querySelector(".month").innerHTML = "May";
      document.querySelector("#month").innerHTML = "May";
    break;
    case 5:
      document.querySelector(".month").innerHTML = "June";
      document.querySelector("#month").innerHTML = "June";
    break;
    case 6:
      document.querySelector(".month").innerHTML = "July";
      document.querySelector("#month").innerHTML = "July";
    break;
    case 7:
      document.querySelector(".month").innerHTML = "August";
      document.querySelector("#month").innerHTML = "August";
    break;
    case 8:
      document.querySelector(".month").innerHTML = "September";
      document.querySelector("#month").innerHTML = "September";
    break;
    case 9:
      document.querySelector(".month").innerHTML = "October";
      document.querySelector("#month").innerHTML = "October";
    break;
    case 10:
      document.querySelector(".month").innerHTML = "November";
      document.querySelector("#month").innerHTML = "November";
    break;
    case 11:
      document.querySelector(".month").innerHTML = "December";
      document.querySelector("#month").innerHTML = "December";
    break;
    default:
      // do nothing
    break;
  }
}

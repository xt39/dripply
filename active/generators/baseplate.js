"use strict";

window.onload = function() {
  // using classes version
  document.querySelector(".base").innerHTML = "<div class='header'></div><div class='content'></div><div class='end'></div>";
  document.querySelector(".header").innerHTML = "<span class='name'></span><span class='hline'></span>";
  document.querySelector(".name").innerHTML = "<h1></h1>";
  document.querySelector(".hline").innerHTML = "<hr/>";
  document.querySelector(".content").innerHTML = "";
  document.querySelector(".end").innerHTML = "<span class='eline'></span><span class='footertext'></span>";
  document.querySelector(".eline").innerHTML = "<hr/>";
  document.querySelector(".footertext").innerHTML = "<p></p>";
  
  // using id's version
  document.getElementById("base").innerHTML = "<div id='header'></div><div id='content'></div><div id='end'></div>";
  document.getElementById("header").innerHTML = "<span id='name'></span><span id='hline'></span>";
  document.getElementById("name").innerHTML = "<h1></h1>";
  document.getElementById("hline").innerHTML = "<hr/>";
  document.getElementById("content").innerHTML = "";
  document.getElementById("end").innerHTML = "<span id='eline'></span><span id='footertext'></span>";
  document.getElementById("eline").innerHTML = "<hr/>";
  document.getElementById("footertext").innerHTML = "<p></p>";
}

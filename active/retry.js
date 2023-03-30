"use strict";

// optional

window.onload = function() {
  // retry();
  // timedReload();
  // exit();
}

function timedReload() {
  setTimeout("retry()", 5000);
}

function retry() {
  window.location.reload();
}

function exit() {
  const file = "";
  window.close(file);
}

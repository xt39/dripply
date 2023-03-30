"use strict";

function other(id) {
  // number ID's only
  // add like this: <a href='javascript:other(1)'>page</a>
  // will open http://example.com/pages/1
  window.open("/pages/" + id);
}

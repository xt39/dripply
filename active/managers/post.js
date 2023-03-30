"use strict";

function post(post_id) {
  // number ID's only
  // add like this: <a href='javascript:post(1)'>post</a>
  // will open http://example.com/posts/1/
  window.open("/posts/" + post_id);
}

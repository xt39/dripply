"use strict";

function user(user_id) {
  // number ID's only
  // add like this: <a href='javascript:user(1)'>user</a>
  // will open http://example.com/users/1/
  window.open("/users/" + user_id);
}

// vendor/module-67948.js — webpack module 67948
// params: (e, t, n) = (module, exports, require)
"use strict";
t.shortEndReturnMessage = function (e) {
  return "session" === e
    ? `Ended within ${r.SHORT_END_RETURN_MINUTES} minutes, so this session was free: your ${r.SESSION_CREDIT_COST} credit is back.`
    : `Ended within ${r.SHORT_END_RETURN_MINUTES} minutes of extending, so the extension's ${r.SESSION_CREDIT_COST} credit is back.`;
};
const r = n(46852 /* vendor/module-46852 */);

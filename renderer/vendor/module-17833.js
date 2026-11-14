// vendor/module-17833.js — webpack module 17833
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useCreateSessionTitle = function (e, t) {
  const n = (0, r.useSelector)(e.store, i);
  return o[t ? "mock" : n];
};
const r = n(51366 /* vendor/module-51366 */),
  o = {
    interview: "Create interview session",
    regular_call: "Create regular session",
    mock: "Create mock session",
  };
function i(e) {
  return e.values.sessionMode;
}

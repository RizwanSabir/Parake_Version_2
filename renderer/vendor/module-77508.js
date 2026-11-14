// vendor/module-77508.js — webpack module 77508
// params: (e, t, n) = (module, exports, require)
"use strict";
n.d(t, { N: () => o });
var r = n(57949 /* vendor/module-57949 */);
function o(e, t, n, o) {
  const i = o ? o - 1 : Number.POSITIVE_INFINITY;
  let a = 0;
  return function (o) {
    return (0, r.On)(o) ? (e.enter(n), s(o)) : t(o);
  };
  function s(o) {
    return (0, r.On)(o) && a++ < i ? (e.consume(o), s) : (e.exit(n), t(o));
  }
}

// vendor/module-61197.js — webpack module 61197
// params: (e, t) = (module, exports, require)
"use strict";
var n = Symbol.for("react.transitional.element"),
  r = Symbol.for("react.fragment");
function o(e, t, r) {
  var o = null;
  if (
    (void 0 !== r && (o = "" + r),
    void 0 !== t.key && (o = "" + t.key),
    "key" in t)
  )
    for (var i in ((r = {}), t)) "key" !== i && (r[i] = t[i]);
  else r = t;
  return (
    (t = r.ref),
    {
      $$typeof: n,
      type: e,
      key: o,
      ref: void 0 !== t ? t : null,
      props: r,
    }
  );
}
(t.Fragment = r), (t.jsx = o), (t.jsxs = o);

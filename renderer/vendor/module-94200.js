// vendor/module-94200.js — webpack module 94200
// params: (e, t, n) = (module, exports, require)
"use strict";
var r,
  o = Object.defineProperty,
  i = Object.getOwnPropertyDescriptor,
  a = Object.getOwnPropertyNames,
  s = Object.prototype.hasOwnProperty,
  l = {};
((e, t) => {
  for (var n in t) o(e, n, { get: t[n], enumerable: !0 });
})(l, { pendingThenable: () => u, tryResolveSync: () => d }),
  (e.exports =
    ((r = l),
    ((e, t, n, r) => {
      if ((t && "object" == typeof t) || "function" == typeof t)
        for (let n of a(t))
          s.call(e, n) ||
            void 0 === n ||
            o(e, n, {
              get: () => t[n],
              enumerable: !(r = i(t, n)) || r.enumerable,
            });
      return e;
    })(o({}, "__esModule", { value: !0 }), r)));
var c = n(26036 /* vendor/module-26036 */);
function u() {
  let e, t;
  const n = new Promise((n, r) => {
    (e = n), (t = r);
  });
  function r(e) {
    Object.assign(n, e), delete n.resolve, delete n.reject;
  }
  return (
    (n.status = "pending"),
    n.catch(() => {}),
    (n.resolve = (t) => {
      r({ status: "fulfilled", value: t }), e(t);
    }),
    (n.reject = (e) => {
      r({ status: "rejected", reason: e }), t(e);
    }),
    n
  );
}
function d(e) {
  let t;
  if ((e.then((e) => ((t = e), e), c.noop)?.catch(c.noop), void 0 !== t))
    return { data: t };
}

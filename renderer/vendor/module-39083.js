// vendor/module-39083.js — webpack module 39083
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.fastComponent = l),
  (t.fastComponentRef = function (e) {
    return o.forwardRef(l(e));
  }),
  (t.getInstance = function () {
    return s;
  }),
  (t.register = function (e) {
    a.push(e);
  }),
  (t.setInstance = function (e) {
    s = e;
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(16843 /* vendor/module-16843 */);
const a = [];
let s;
function l(e) {
  const t = (t, n) => {
    const r = (0, i.useRefWithInit)(c).current;
    let o;
    try {
      s = r;
      for (const e of a) e.before(r);
      o = e(t, n);
      for (const e of a) e.after(r);
      r.didInitialize = !0;
    } finally {
      s = void 0;
    }
    return o;
  };
  return (t.displayName = e.displayName || e.name), t;
}
function c() {
  return { didInitialize: !1 };
}

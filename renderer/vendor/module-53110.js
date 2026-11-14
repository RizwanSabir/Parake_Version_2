// vendor/module-53110.js — webpack module 53110
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(4293 /* vendor/module-4293 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.createSelector = void 0);
var o = r(n(55099 /* vendor/module-55099 */));
t.createSelector = (e, t, n, r, i, a, ...s) => {
  if (s.length > 0) throw new Error((0, o.default)(1));
  let l;
  if (e && t && n && r && i && a)
    l = (o, s, l, c) => {
      const u = e(o, s, l, c),
        d = t(o, s, l, c),
        p = n(o, s, l, c),
        f = r(o, s, l, c),
        h = i(o, s, l, c);
      return a(u, d, p, f, h, s, l, c);
    };
  else if (e && t && n && r && i)
    l = (o, a, s, l) => {
      const c = e(o, a, s, l),
        u = t(o, a, s, l),
        d = n(o, a, s, l),
        p = r(o, a, s, l);
      return i(c, u, d, p, a, s, l);
    };
  else if (e && t && n && r)
    l = (o, i, a, s) => {
      const l = e(o, i, a, s),
        c = t(o, i, a, s),
        u = n(o, i, a, s);
      return r(l, c, u, i, a, s);
    };
  else if (e && t && n)
    l = (r, o, i, a) => {
      const s = e(r, o, i, a),
        l = t(r, o, i, a);
      return n(s, l, o, i, a);
    };
  else if (e && t)
    l = (n, r, o, i) => {
      const a = e(n, r, o, i);
      return t(a, r, o, i);
    };
  else {
    if (!e) throw new Error("Missing arguments");
    l = e;
  }
  return l;
};

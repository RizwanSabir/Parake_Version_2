// vendor/module-33813.js — webpack module 33813
// params: (e, t, n) = (module, exports, require)
"use strict";
n.d(t, { dc: () => i, _Z: () => a, VG: () => s });
var r = n(15186 /* vendor/module-15186 */);
const o = [],
  i = !1,
  a = "skip";
function s(e, t, n, s) {
  let l;
  "function" == typeof t && "function" != typeof n
    ? ((s = n), (n = t))
    : (l = t);
  const c = (0, r.C)(l),
    u = s ? -1 : 1;
  !(function e(r, l, d) {
    const p = r && "object" == typeof r ? r : {};
    if ("string" == typeof p.type) {
      const e =
        "string" == typeof p.tagName
          ? p.tagName
          : "string" == typeof p.name
            ? p.name
            : void 0;
      Object.defineProperty(f, "name", {
        value: "node (" + r.type + (e ? "<" + e + ">" : "") + ")",
      });
    }
    return f;
    function f() {
      let p,
        f,
        h,
        m = o;
      if (
        (!t || c(r, l, d[d.length - 1] || void 0)) &&
        ((m = (function (e) {
          return Array.isArray(e)
            ? e
            : "number" == typeof e
              ? [true, e]
              : null == e
                ? o
                : [e];
        })(n(r, d))),
        m[0] === i)
      )
        return m;
      if ("children" in r && r.children) {
        const t = r;
        if (t.children && m[0] !== a)
          for (
            f = (s ? t.children.length : -1) + u, h = d.concat(t);
            f > -1 && f < t.children.length;

          ) {
            const n = t.children[f];
            if (((p = e(n, f, h)()), p[0] === i)) return p;
            f = "number" == typeof p[1] ? p[1] : f + u;
          }
      }
      return m;
    }
  })(e, void 0, [])();
}

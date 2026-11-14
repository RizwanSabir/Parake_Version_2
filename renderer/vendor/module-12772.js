// vendor/module-12772.js — webpack module 12772
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useMergedRefs = function (e, t, n, a) {
    const s = (0, r.useRefWithInit)(o).current;
    return (
      (function (e, t, n, r, o) {
        return (
          e.refs[0] !== t ||
          e.refs[1] !== n ||
          e.refs[2] !== r ||
          e.refs[3] !== o
        );
      })(s, e, t, n, a) && i(s, [e, t, n, a]),
      s.callback
    );
  }),
  (t.useMergedRefsN = function (e) {
    const t = (0, r.useRefWithInit)(o).current;
    return (
      (function (e, t) {
        return e.refs.length !== t.length || e.refs.some((e, n) => e !== t[n]);
      })(t, e) && i(t, e),
      t.callback
    );
  });
var r = n(16843 /* vendor/module-16843 */);
function o() {
  return { callback: null, cleanup: null, refs: [] };
}
function i(e, t) {
  (e.refs = t),
    t.every((e) => null == e)
      ? (e.callback = null)
      : (e.callback = (n) => {
          if ((e.cleanup && (e.cleanup(), (e.cleanup = null)), null != n)) {
            const r = Array(t.length).fill(null);
            for (let e = 0; e < t.length; e += 1) {
              const o = t[e];
              if (null != o)
                switch (typeof o) {
                  case "function": {
                    const t = o(n);
                    "function" == typeof t && (r[e] = t);
                    break;
                  }
                  case "object":
                    o.current = n;
                }
            }
            e.cleanup = () => {
              for (let e = 0; e < t.length; e += 1) {
                const n = t[e];
                if (null != n)
                  switch (typeof n) {
                    case "function": {
                      const t = r[e];
                      "function" == typeof t ? t() : n(null);
                      break;
                    }
                    case "object":
                      n.current = null;
                  }
              }
            };
          }
        });
}

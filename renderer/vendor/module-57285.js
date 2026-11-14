// vendor/module-57285.js — webpack module 57285
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.markOthers = function (e, t = {}) {
    const { ariaHidden: n = !1, inert: r = !1, mark: u = !0 } = t;
    return (function (e, t, n, r, { mark: o = !0 }) {
      let u = null;
      r ? (u = "inert") : n && (u = "aria-hidden");
      let h = null,
        m = null;
      const g = d(t, e),
        y = o ? f(t, p(g), new Set(g)) : [],
        v = [],
        b = [];
      if (u) {
        const e = i[u],
          n = (function (e) {
            return s[e];
          })(u);
        (m = n), (h = e);
        const r = d(t, Array.from(t.querySelectorAll("[aria-live]"))),
          o = g.concat(r);
        f(t, p(o), new Set(o)).forEach((t) => {
          const r = t.getAttribute(u),
            o = null !== r && "false" !== r,
            i = (e.get(t) || 0) + 1;
          e.set(t, i),
            v.push(t),
            1 === i && o && n.add(t),
            o || t.setAttribute(u, "inert" === u ? "" : "true");
        });
      }
      return (
        o &&
          y.forEach((e) => {
            const t = (l.get(e) || 0) + 1;
            l.set(e, t), b.push(e), 1 === t && e.setAttribute(a, "");
          }),
        (c += 1),
        () => {
          h &&
            v.forEach((e) => {
              const t = (h.get(e) || 0) - 1;
              h.set(e, t),
                t || (!m?.has(e) && u && e.removeAttribute(u), m?.delete(e));
            }),
            o &&
              b.forEach((e) => {
                const t = (l.get(e) || 0) - 1;
                l.set(e, t), t || e.removeAttribute(a);
              }),
            (c -= 1),
            c ||
              ((i.inert = new WeakMap()),
              (i["aria-hidden"] = new WeakMap()),
              (s.inert = new WeakSet()),
              (s["aria-hidden"] = new WeakSet()),
              (l = new WeakMap()));
        }
      );
    })(e, (0, o.ownerDocument)(e[0]).body, n, r, { mark: u });
  });
var r = n(81339 /* vendor/module-81339 */),
  o = n(854 /* vendor/module-854 */);
const i = { inert: new WeakMap(), "aria-hidden": new WeakMap() },
  a = "data-base-ui-inert",
  s = { inert: new WeakSet(), "aria-hidden": new WeakSet() };
let l = new WeakMap(),
  c = 0;
function u(e) {
  return e ? ((0, r.isShadowRoot)(e) ? e.host : u(e.parentNode)) : null;
}
const d = (e, t) =>
    t
      .map((t) => {
        if (e.contains(t)) return t;
        const n = u(t);
        return e.contains(n) ? n : null;
      })
      .filter((e) => null != e),
  p = (e) => {
    const t = new Set();
    return (
      e.forEach((e) => {
        let n = e;
        for (; n && !t.has(n); ) t.add(n), (n = n.parentNode);
      }),
      t
    );
  },
  f = (e, t, n) => {
    const o = [],
      i = (e) => {
        e &&
          !n.has(e) &&
          Array.from(e.children).forEach((e) => {
            "script" !== (0, r.getNodeName)(e) && (t.has(e) ? i(e) : o.push(e));
          });
      };
    return i(e), o;
  };

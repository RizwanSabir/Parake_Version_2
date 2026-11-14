// vendor/module-65331.js — webpack module 65331
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.DrawerProvider = function (e) {
    const { children: t } = e,
      [n, r] = o.useState(() => new Map()),
      [c] = o.useState(l),
      u = (0, i.useStableCallback)((e, t) => {
        r((n) => {
          if (n.get(e) === t) return n;
          const r = new Map(n);
          return r.set(e, t), r;
        });
      }),
      d = (0, i.useStableCallback)((e) => {
        r((t) => {
          if (!t.has(e)) return t;
          const n = new Map(t);
          return n.delete(e), n;
        });
      }),
      p = o.useMemo(() => {
        for (const e of n.values()) if (e) return !0;
        return !1;
      }, [n]),
      f = o.useMemo(
        () => ({
          setDrawerOpen: u,
          removeDrawer: d,
          active: p,
          visualStateStore: c,
        }),
        [p, d, u, c],
      );
    return (0, s.jsx)(a.DrawerProviderContext.Provider, {
      value: f,
      children: t,
    });
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(4674 /* vendor/module-4674 */),
  a = n(17452 /* vendor/module-17452 */),
  s = n(31085 /* vendor/module-31085 */);
function l() {
  let e = { swipeProgress: 0, frontmostHeight: 0 };
  const t = new Set();
  return {
    getSnapshot: () => e,
    set(n) {
      let r = e.swipeProgress;
      void 0 !== n.swipeProgress &&
        (r = Number.isFinite(n.swipeProgress) ? n.swipeProgress : 0);
      let o = e.frontmostHeight;
      void 0 !== n.frontmostHeight &&
        (o = Number.isFinite(n.frontmostHeight) ? n.frontmostHeight : 0),
        (r === e.swipeProgress && o === e.frontmostHeight) ||
          ((e = { swipeProgress: r, frontmostHeight: o }),
          t.forEach((e) => {
            e();
          }));
    },
    subscribe: (e) => (
      t.add(e),
      () => {
        t.delete(e);
      }
    ),
  };
}

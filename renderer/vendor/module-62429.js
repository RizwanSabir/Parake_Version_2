// vendor/module-62429.js — webpack module 62429
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useLabelableId = function (e = {}) {
    const { id: t, implicit: n = !1, controlRef: r } = e,
      { controlId: p, registerControlId: f } = (0, d.useLabelableContext)(),
      h = (0, u.useBaseUiId)(t),
      m = n ? p : void 0,
      g = (0, s.useRefWithInit)(() => Symbol("labelable-control")),
      y = o.useRef(!1),
      v = o.useRef(null != t),
      b = (0, a.useStableCallback)(() => {
        y.current && f !== c.NOOP && ((y.current = !1), f(g.current, void 0));
      });
    return (
      (0, i.useIsoLayoutEffect)(() => {
        if (f === c.NOOP) return;
        let e;
        if (n) {
          const n = r?.current;
          e =
            (0, l.isElement)(n) && null != n.closest("label")
              ? (t ?? null)
              : (m ?? h);
        } else if (null != t) (v.current = !0), (e = t);
        else {
          if (!v.current) return void b();
          e = h;
        }
        void 0 !== e ? ((y.current = !0), f(g.current, e)) : b();
      }, [t, r, m, f, n, h, g, b]),
      o.useEffect(() => b, [b]),
      p ?? h
    );
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(57122 /* vendor/module-57122 */),
  a = n(4674 /* vendor/module-4674 */),
  s = n(16843 /* vendor/module-16843 */),
  l = n(81339 /* vendor/module-81339 */),
  c = n(75224 /* vendor/module-75224 */),
  u = n(33115 /* vendor/module-33115 */),
  d = n(83470 /* vendor/module-83470 */);

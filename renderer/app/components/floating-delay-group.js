// app/components/floating-delay-group.js — webpack module 8944
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.FloatingDelayGroup = function (e) {
    const { children: t, delay: n, timeoutMs: r = 0 } = e,
      l = o.useRef(n),
      c = o.useRef(n),
      p = o.useRef(null),
      f = o.useRef(null),
      h = (0, i.useTimeout)();
    return (
      (0, a.useIsoLayoutEffect)(() => {
        (c.current = n),
          p.current
            ? (l.current = {
                open: (0, s.getDelay)(l.current, "open"),
                close: (0, s.getDelay)(n, "close"),
              })
            : (l.current = n);
      }, [n, p, l, c]),
      (0, u.jsx)(d.Provider, {
        value: o.useMemo(
          () => ({
            hasProvider: !0,
            delayRef: l,
            initialDelayRef: c,
            currentIdRef: p,
            timeoutMs: r,
            currentContextRef: f,
            timeout: h,
          }),
          [r, h],
        ),
        children: t,
      })
    );
  }),
  (t.useDelayGroup = function (e, t = { open: !1 }) {
    const { open: n } = t,
      r = "rootStore" in e ? e.rootStore : e,
      i = r.useState("floatingId"),
      u = o.useContext(d),
      {
        currentIdRef: p,
        delayRef: f,
        timeoutMs: h,
        initialDelayRef: m,
        currentContextRef: g,
        hasProvider: y,
        timeout: v,
      } = u,
      [b, S] = o.useState(!1),
      _ = o.useRef(n),
      x = o.useRef(!1);
    return (
      (0, a.useIsoLayoutEffect)(() => {
        _.current = n;
      }, [n]),
      (0, a.useIsoLayoutEffect)(
        () => () => {
          x.current = !0;
        },
        [],
      ),
      (0, a.useIsoLayoutEffect)(() => {
        function e() {
          x.current || S(!1),
            g.current?.setIsInstantPhase(!1),
            (p.current = null),
            (g.current = null),
            (f.current = m.current),
            v.clear();
        }
        if (p.current && !n && p.current === i) {
          if ((S(!1), h)) {
            const t = i;
            return (
              v.start(h, () => {
                r.select("open") || (p.current && p.current !== t) || e();
              }),
              () => {
                (_.current || p.current !== t) && v.clear();
              }
            );
          }
          e();
        }
      }, [n, i, p, f, h, m, g, v, r]),
      (0, a.useIsoLayoutEffect)(() => {
        if (!n) return;
        const e = g.current,
          t = p.current;
        v.clear(),
          (g.current = {
            onOpenChange: r.setOpen,
            setIsInstantPhase: S,
          }),
          (p.current = i),
          (f.current = {
            open: 0,
            close: (0, s.getDelay)(m.current, "close"),
          }),
          null !== t && t !== i
            ? (S(!0),
              e?.setIsInstantPhase(!0),
              e?.onOpenChange(
                !1,
                (0, l.createChangeEventDetails)(c.REASONS.none),
              ))
            : (S(!1), e?.setIsInstantPhase(!1));
      }, [n, i, r, p, f, m, g, v]),
      (0, a.useIsoLayoutEffect)(
        () => () => {
          if (p.current === i) {
            if (((g.current = null), !_.current)) return;
            (p.current = null),
              (function (e, t) {
                e.current = t.current;
              })(f, m),
              v.clear();
          }
        },
        [g, p, f, i, m, v],
      ),
      o.useMemo(
        () => ({ hasProvider: y, delayRef: f, isInstantPhase: b }),
        [y, f, b],
      )
    );
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(54807 /* vendor/module-54807 */),
  a = n(57122 /* vendor/module-57122 */),
  s = n(63514 /* vendor/module-63514 */),
  l = n(22877 /* vendor/module-22877 */),
  c = n(82063 /* vendor/module-82063 */),
  u = n(31085 /* vendor/module-31085 */);
const d = o.createContext({
  hasProvider: !1,
  timeoutMs: 0,
  delayRef: { current: 0 },
  initialDelayRef: { current: 0 },
  timeout: new i.Timeout(),
  currentIdRef: { current: null },
  currentContextRef: { current: null },
});

// vendor/module-28717.js — webpack module 28717
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.usePopupAutoResize = function (e) {
    const {
        popupElement: t,
        positionerElement: n,
        content: r,
        mounted: m,
        onMeasureLayout: g,
        onMeasureLayoutComplete: y,
        side: v,
        direction: b,
      } = e,
      S = (0, c.useAnimationsFinished)(t, !0, !1),
      _ = (0, i.useAnimationFrame)(),
      x = o.useRef(null),
      w = o.useRef(!0),
      E = o.useRef(l.NOOP),
      T = (0, s.useStableCallback)(g),
      k = (0, s.useStableCallback)(y),
      C = o.useMemo(() => {
        let e = "top" === v,
          t = "left" === v;
        return (
          "rtl" === b
            ? ((e = e || "inline-end" === v), (t = t || "inline-end" === v))
            : ((e = e || "inline-start" === v),
              (t = t || "inline-start" === v)),
          e
            ? {
                position: "absolute",
                ["top" === v ? "bottom" : "top"]: "0",
                [t ? "right" : "left"]: "0",
              }
            : l.EMPTY_OBJECT
        );
      }, [v, b]);
    (0, a.useIsoLayoutEffect)(() => {
      if (!m)
        return (E.current = l.NOOP), (w.current = !0), void (x.current = null);
      if (!t || !n) return;
      (E.current = p(t, C)), f(t, "auto");
      const e = d(t, "position", "static"),
        r = d(t, "transform", "none"),
        o = d(t, "scale", "1"),
        i = p(n, {
          "--available-width": "max-content",
          "--available-height": "max-content",
        });
      function a() {
        e(), r(), i(), o();
      }
      if ((T?.(), w.current || null === x.current)) {
        h(n, "max-content");
        const e = (0, u.getCssDimensions)(t);
        return (
          (x.current = e),
          h(n, e),
          a(),
          k?.(null, e),
          (w.current = !1),
          () => {
            E.current(), (E.current = l.NOOP);
          }
        );
      }
      h(n, "max-content");
      const s = x.current,
        c = (0, u.getCssDimensions)(t);
      (x.current = c), f(t, s), a(), k?.(s, c), h(n, c);
      const g = new AbortController();
      return (
        _.request(() => {
          f(t, c),
            S(() => {
              t.style.setProperty("--popup-width", "auto"),
                t.style.setProperty("--popup-height", "auto");
            }, g.signal);
        }),
        () => {
          g.abort(), _.cancel(), E.current(), (E.current = l.NOOP);
        }
      );
    }, [r, t, n, S, _, m, T, k, C]);
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(57569 /* vendor/module-57569 */),
  a = n(57122 /* vendor/module-57122 */),
  s = n(4674 /* vendor/module-4674 */),
  l = n(38340 /* vendor/module-38340 */),
  c = n(43808 /* vendor/module-43808 */),
  u = n(64271 /* vendor/module-64271 */);
function d(e, t, n) {
  const r = e.style.getPropertyValue(t);
  return (
    e.style.setProperty(t, n),
    () => {
      e.style.setProperty(t, r);
    }
  );
}
function p(e, t) {
  const n = [];
  for (const [r, o] of Object.entries(t)) n.push(d(e, r, o));
  return n.length
    ? () => {
        n.forEach((e) => e());
      }
    : l.NOOP;
}
function f(e, t) {
  const n = "auto" === t ? "auto" : `${t.width}px`,
    r = "auto" === t ? "auto" : `${t.height}px`;
  e.style.setProperty("--popup-width", n),
    e.style.setProperty("--popup-height", r);
}
function h(e, t) {
  const n = "max-content" === t ? "max-content" : `${t.width}px`,
    r = "max-content" === t ? "max-content" : `${t.height}px`;
  e.style.setProperty("--positioner-width", n),
    e.style.setProperty("--positioner-height", r);
}

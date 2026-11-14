// vendor/module-68433.js — webpack module 68433
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.DrawerIndent = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(57122 /* vendor/module-57122 */),
  a = n(51909 /* vendor/module-51909 */),
  s = n(17452 /* vendor/module-17452 */),
  l = n(86424 /* vendor/module-86424 */),
  c = n(51244 /* vendor/module-51244 */);
const u = {
  active: (e) => (e ? { "data-active": "" } : { "data-inactive": "" }),
};
t.DrawerIndent = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: d, ...p } = e,
    f = (0, s.useDrawerProviderContext)(!0),
    h = f?.active ?? !1,
    m = f?.visualStateStore,
    g = o.useRef(null);
  (0, i.useIsoLayoutEffect)(() => {
    const e = g.current;
    if (!e || !m) return;
    const t = () => {
      const { swipeProgress: t, frontmostHeight: n } = m.getSnapshot();
      t <= 0
        ? e.style.setProperty(l.DrawerBackdropCssVars.swipeProgress, "0")
        : e.style.setProperty(l.DrawerBackdropCssVars.swipeProgress, `${t}`),
        n <= 0
          ? e.style.removeProperty(c.DrawerPopupCssVars.height)
          : e.style.setProperty(c.DrawerPopupCssVars.height, `${n}px`);
    };
    t();
    const n = m.subscribe(t);
    return () => {
      n(),
        e.style.setProperty(l.DrawerBackdropCssVars.swipeProgress, "0"),
        e.style.removeProperty(c.DrawerPopupCssVars.height);
    };
  }, [m]);
  const y = { active: h };
  return (0, a.useRenderElement)("div", e, {
    ref: [t, g],
    state: y,
    props: [{ style: { [l.DrawerBackdropCssVars.swipeProgress]: "0" } }, p],
    stateAttributesMapping: u,
  });
});

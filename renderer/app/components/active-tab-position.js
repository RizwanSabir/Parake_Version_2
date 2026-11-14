// app/components/active-tab-position.js — webpack module 55087
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.TabsIndicator = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(80308 /* vendor/module-80308 */),
  a = n(51909 /* vendor/module-51909 */),
  s = n(64271 /* vendor/module-64271 */),
  l = n(16504 /* vendor/module-16504 */),
  c = n(28562 /* vendor/module-28562 */),
  u = n(73527 /* vendor/module-73527 */),
  d = n(43206 /* vendor/module-43206 */),
  p = n(90604 /* vendor/module-90604 */),
  f = n(37454 /* vendor/module-37454 */),
  h = n(22728 /* vendor/module-22728 */),
  m = n(31085 /* vendor/module-31085 */);
const g = {
  ...u.tabsStateAttributesMapping,
  activeTabPosition: () => null,
  activeTabSize: () => null,
};
t.TabsIndicator = o.forwardRef(function (e, t) {
  const {
      className: n,
      render: r,
      renderBeforeHydration: u = !1,
      style: y,
      ...v
    } = e,
    { nonce: b } = (0, h.useCSPContext)(),
    {
      getTabElementBySelectedValue: S,
      orientation: _,
      tabActivationDirection: x,
      value: w,
    } = (0, c.useTabsRootContext)(),
    { tabsListElement: E, registerIndicatorUpdateListener: T } = (0,
    d.useTabsListContext)(),
    k = (0, l.useIsHydrating)(),
    C = (0, i.useForcedRerendering)();
  o.useEffect(() => T(C), [T, C]);
  let I = 0,
    A = 0,
    O = 0,
    R = 0,
    M = 0,
    P = 0,
    N = !1;
  if (null != w && null != E) {
    const e = S(w);
    if (null != e) {
      N = !0;
      const { width: t, height: n } = (0, s.getCssDimensions)(e),
        { width: r, height: o } = (0, s.getCssDimensions)(E),
        i = e.getBoundingClientRect(),
        a = E.getBoundingClientRect(),
        l = r > 0 ? a.width / r : 1,
        c = o > 0 ? a.height / o : 1;
      if (Math.abs(l) > Number.EPSILON && Math.abs(c) > Number.EPSILON) {
        const e = i.left - a.left,
          t = i.top - a.top;
        (I = e / l + E.scrollLeft - E.clientLeft),
          (O = t / c + E.scrollTop - E.clientTop);
      } else (I = e.offsetLeft), (O = e.offsetTop);
      (M = t),
        (P = n),
        (A = E.scrollWidth - I - M),
        (R = E.scrollHeight - O - P);
    }
  }
  const D = N ? { left: I, right: A, top: O, bottom: R } : null,
    j = N ? { width: M, height: P } : null,
    L = N
      ? {
          [f.TabsIndicatorCssVars.activeTabLeft]: `${I}px`,
          [f.TabsIndicatorCssVars.activeTabRight]: `${A}px`,
          [f.TabsIndicatorCssVars.activeTabTop]: `${O}px`,
          [f.TabsIndicatorCssVars.activeTabBottom]: `${R}px`,
          [f.TabsIndicatorCssVars.activeTabWidth]: `${M}px`,
          [f.TabsIndicatorCssVars.activeTabHeight]: `${P}px`,
        }
      : void 0,
    F = N && M > 0 && P > 0,
    U = {
      orientation: _,
      activeTabPosition: D,
      activeTabSize: j,
      tabActivationDirection: x,
    },
    B = (0, a.useRenderElement)("span", e, {
      state: U,
      ref: t,
      props: [
        { role: "presentation", style: L, hidden: !F },
        v,
        { suppressHydrationWarning: !0 },
      ],
      stateAttributesMapping: g,
    });
  return null == w
    ? null
    : (0, m.jsxs)(o.Fragment, {
        children: [
          B,
          k &&
            u &&
            (0, m.jsx)("script", {
              nonce: b,
              dangerouslySetInnerHTML: { __html: p.script },
              suppressHydrationWarning: !0,
            }),
        ],
      });
});

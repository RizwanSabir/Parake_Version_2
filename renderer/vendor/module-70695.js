// vendor/module-70695.js — webpack module 70695
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.TabsPanel = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(9220 /* vendor/module-9220 */),
  a = n(57122 /* vendor/module-57122 */),
  s = n(33115 /* vendor/module-33115 */),
  l = n(44306 /* vendor/module-44306 */),
  c = n(15586 /* vendor/module-15586 */),
  u = n(45796 /* vendor/module-45796 */),
  d = n(51909 /* vendor/module-51909 */),
  p = n(33770 /* vendor/module-33770 */),
  f = n(73527 /* vendor/module-73527 */),
  h = n(28562 /* vendor/module-28562 */),
  m = n(35050 /* vendor/module-35050 */);
const g = {
  ...f.tabsStateAttributesMapping,
  ...l.transitionStatusMapping,
};
t.TabsPanel = o.forwardRef(function (e, t) {
  const {
      className: n,
      value: r,
      render: l,
      keepMounted: f = !1,
      style: y,
      ...v
    } = e,
    {
      value: b,
      getTabIdByPanelValue: S,
      orientation: _,
      tabActivationDirection: x,
      registerMountedTabPanel: w,
      unregisterMountedTabPanel: E,
    } = (0, h.useTabsRootContext)(),
    T = (0, s.useBaseUiId)(),
    k = o.useMemo(() => ({ id: T, value: r }), [T, r]),
    { ref: C, index: I } = (0, p.useCompositeListItem)({
      metadata: k,
    }),
    A = r === b,
    {
      mounted: O,
      transitionStatus: R,
      setMounted: M,
    } = (0, u.useTransitionStatus)(A),
    P = !O,
    N = S(r),
    D = {
      hidden: P,
      orientation: _,
      tabActivationDirection: x,
      transitionStatus: R,
    },
    j = o.useRef(null),
    L = (0, d.useRenderElement)("div", e, {
      state: D,
      ref: [t, C, j],
      props: [
        {
          "aria-labelledby": N,
          hidden: P,
          id: T,
          role: "tabpanel",
          tabIndex: A ? 0 : -1,
          inert: (0, i.inertValue)(!A),
          [m.TabsPanelDataAttributes.index]: I,
        },
        v,
      ],
      stateAttributesMapping: g,
    });
  return (
    (0, c.useOpenChangeComplete)({
      open: A,
      ref: j,
      onComplete() {
        A || M(!1);
      },
    }),
    (0, a.useIsoLayoutEffect)(() => {
      if ((!P || f) && null != T)
        return (
          w(r, T),
          () => {
            E(r, T);
          }
        );
    }, [P, f, r, T, w, E]),
    f || O ? L : null
  );
});

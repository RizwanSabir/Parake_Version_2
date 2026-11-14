// vendor/module-98550.js — webpack module 98550
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PreviewCardPopup = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(4674 /* vendor/module-4674 */),
  a = n(2001 /* vendor/module-2001 */),
  s = n(16581 /* vendor/module-16581 */),
  l = n(51146 /* vendor/module-51146 */),
  c = n(44306 /* vendor/module-44306 */),
  u = n(15586 /* vendor/module-15586 */),
  d = n(51909 /* vendor/module-51909 */),
  p = n(53469 /* vendor/module-53469 */),
  f = n(47797 /* vendor/module-47797 */);
const h = { ...l.popupStateMapping, ...c.transitionStatusMapping };
t.PreviewCardPopup = o.forwardRef(function (e, t) {
  const { className: n, render: r, style: o, ...l } = e,
    c = (0, a.usePreviewCardRootContext)(),
    { side: m, align: g } = (0, s.usePreviewCardPositionerContext)(),
    y = c.useState("open"),
    v = c.useState("instantType"),
    b = c.useState("transitionStatus"),
    S = c.useState("popupProps"),
    _ = c.useState("floatingRootContext");
  (0, u.useOpenChangeComplete)({
    open: y,
    ref: c.context.popupRef,
    onComplete() {
      y && c.context.onOpenChangeComplete?.(!0);
    },
  });
  const x = (0, i.useStableCallback)(() => c.context.closeDelayRef.current);
  (0, f.useHoverFloatingInteraction)(_, { closeDelay: x });
  const w = {
    open: y,
    side: m,
    align: g,
    instant: v,
    transitionStatus: b,
  };
  return (0, d.useRenderElement)("div", e, {
    state: w,
    ref: [t, c.context.popupRef, c.useStateSetter("popupElement")],
    props: [S, (0, p.getDisabledMountTransitionStyles)(b), l],
    stateAttributesMapping: h,
  });
});

// vendor/module-77655.js — webpack module 77655
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.TooltipPopup = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(14648 /* vendor/module-14648 */),
  a = n(15864 /* vendor/module-15864 */),
  s = n(51146 /* vendor/module-51146 */),
  l = n(44306 /* vendor/module-44306 */),
  c = n(15586 /* vendor/module-15586 */),
  u = n(51909 /* vendor/module-51909 */),
  d = n(53469 /* vendor/module-53469 */),
  p = n(47797 /* vendor/module-47797 */);
const f = { ...s.popupStateMapping, ...l.transitionStatusMapping };
t.TooltipPopup = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...s } = e,
    l = (0, i.useTooltipRootContext)(),
    { side: h, align: m } = (0, a.useTooltipPositionerContext)(),
    g = l.useState("open"),
    y = l.useState("instantType"),
    v = l.useState("transitionStatus"),
    b = l.useState("popupProps"),
    S = l.useState("floatingRootContext"),
    _ = l.useState("disabled"),
    x = l.useState("closeDelay");
  (0, c.useOpenChangeComplete)({
    open: g,
    ref: l.context.popupRef,
    onComplete() {
      g && l.context.onOpenChangeComplete?.(!0);
    },
  }),
    (0, p.useHoverFloatingInteraction)(S, {
      enabled: !_,
      closeDelay: x,
    });
  const w = l.useStateSetter("popupElement"),
    E = {
      open: g,
      side: h,
      align: m,
      instant: y,
      transitionStatus: v,
    };
  return (0, u.useRenderElement)("div", e, {
    state: E,
    ref: [t, l.context.popupRef, w],
    props: [b, (0, d.getDisabledMountTransitionStyles)(v), s],
    stateAttributesMapping: f,
  });
});

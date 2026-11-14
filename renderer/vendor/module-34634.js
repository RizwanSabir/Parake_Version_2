// vendor/module-34634.js — webpack module 34634
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.NumberFieldScrubAreaCursor = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = r(n(43144 /* vendor/module-43144 */)),
  a = n(87177 /* vendor/module-87177 */),
  s = n(854 /* vendor/module-854 */),
  l = n(46007 /* vendor/module-46007 */),
  c = n(5274 /* vendor/module-5274 */),
  u = n(86444 /* vendor/module-86444 */),
  d = n(51909 /* vendor/module-51909 */);
const p = {
  position: "fixed",
  top: 0,
  left: 0,
  pointerEvents: "none",
};
t.NumberFieldScrubAreaCursor = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: f, ...h } = e,
    { state: m } = (0, l.useNumberFieldRootContext)(),
    {
      isScrubbing: g,
      isTouchInput: y,
      isPointerLockDenied: v,
      scrubAreaCursorRef: b,
    } = (0, u.useNumberFieldScrubAreaContext)(),
    [S, _] = o.useState(null),
    x = g && !a.platform.engine.webkit && !y && !v,
    w = (0, d.useRenderElement)("span", e, {
      enabled: x,
      ref: [t, b, _],
      state: m,
      props: [{ role: "presentation", style: p }, h],
      stateAttributesMapping: c.stateAttributesMapping,
    });
  return w && i.createPortal(w, (0, s.ownerDocument)(S).body);
});

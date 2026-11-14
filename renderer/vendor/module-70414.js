// vendor/module-70414.js — webpack module 70414
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default,
  o = n(4293 /* vendor/module-4293 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PreviewCardTrigger = void 0);
var i = o(n(55099 /* vendor/module-55099 */)),
  a = r(n(14041 /* vendor/module-14041 */)),
  s = n(39083 /* vendor/module-39083 */),
  l = n(57122 /* vendor/module-57122 */),
  c = n(2001 /* vendor/module-2001 */),
  u = n(51146 /* vendor/module-51146 */),
  d = n(51909 /* vendor/module-51909 */),
  p = n(33115 /* vendor/module-33115 */),
  f = n(94661 /* vendor/module-94661 */),
  h = n(20838 /* vendor/module-20838 */),
  m = n(47797 /* vendor/module-47797 */);
t.PreviewCardTrigger = (0, s.fastComponentRef)(function (e, t) {
  const {
      render: n,
      className: r,
      delay: o,
      closeDelay: s,
      id: g,
      payload: y,
      handle: v,
      style: b,
      ...S
    } = e,
    _ = (0, c.usePreviewCardRootContext)(!0),
    x = v?.store ?? _;
  if (!x) throw new Error((0, i.default)(89));
  const w = (0, p.useBaseUiId)(g),
    E = x.useState("isTriggerActive", w),
    T = x.useState("isOpenedByTrigger", w),
    k = x.useState("floatingRootContext"),
    C = x.context.inlineRectCoordsRef,
    I = a.useRef(null),
    A = o ?? h.OPEN_DELAY,
    O = s ?? h.CLOSE_DELAY,
    { registerTrigger: R, isMountedByThisTrigger: M } = (0,
    f.useTriggerDataForwarding)(w, I, x, { payload: y });
  (0, l.useIsoLayoutEffect)(() => {
    M && (x.context.closeDelayRef.current = O);
  }, [x, M, O]);
  const P = (0, m.useHoverReferenceInteraction)(k, {
      mouseOnly: !0,
      move: !1,
      handleClose: (0, m.safePolygon)(),
      delay: () => ({ open: A, close: O }),
      triggerElementRef: I,
      isActiveTrigger: E,
      isClosing: () => "ending" === x.select("transitionStatus"),
    }),
    N = (0, m.useFocus)(k, { delay: A }),
    D = { open: T },
    j = x.useState("triggerProps", M),
    L = (0, f.getInlineRectTriggerProps)(C, T);
  return (0, d.useRenderElement)("a", e, {
    state: D,
    ref: [t, R, I],
    props: [P, N.reference, j, L, { id: w }, S],
    stateAttributesMapping: u.triggerOpenStateMapping,
  });
});

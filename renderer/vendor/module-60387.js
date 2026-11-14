// vendor/module-60387.js — webpack module 60387
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default,
  o = n(4293 /* vendor/module-4293 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.DialogTrigger = void 0);
var i = o(n(55099 /* vendor/module-55099 */)),
  a = r(n(14041 /* vendor/module-14041 */)),
  s = n(90498 /* vendor/module-90498 */),
  l = n(87782 /* vendor/module-87782 */),
  c = n(51909 /* vendor/module-51909 */),
  u = n(51146 /* vendor/module-51146 */),
  d = n(25743 /* vendor/module-25743 */),
  p = n(94661 /* vendor/module-94661 */),
  f = n(33115 /* vendor/module-33115 */),
  h = n(47797 /* vendor/module-47797 */),
  m = n(91988 /* vendor/module-91988 */);
t.DialogTrigger = a.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      style: o,
      disabled: g = !1,
      nativeButton: y = !0,
      id: v,
      payload: b,
      handle: S,
      ..._
    } = e,
    x = (0, s.useDialogRootContext)(!0),
    w = S?.store ?? x?.store;
  if (!w) throw new Error((0, i.default)(79));
  const E = (0, f.useBaseUiId)(v),
    T = w.useState("floatingRootContext"),
    k = w.useState("isOpenedByTrigger", E),
    C = w.useState("triggerPopupId", E),
    I = a.useRef(null),
    { registerTrigger: A, isMountedByThisTrigger: O } = (0,
    p.useTriggerDataForwarding)(E, I, w, { payload: b }),
    { getButtonProps: R, buttonRef: M } = (0, l.useButton)({
      disabled: g,
      native: y,
    }),
    P = (0, h.useClick)(T, { enabled: null != T }),
    N = (0, m.useOpenMethodTriggerProps)(
      () => w.select("open"),
      (e) => {
        w.set("openMethod", e);
      },
    ),
    D = { disabled: g, open: k },
    j = w.useState("triggerProps", O);
  return (0, c.useRenderElement)("button", e, {
    state: D,
    ref: [M, t, A, I],
    props: [
      P.reference,
      j,
      N,
      {
        [d.CLICK_TRIGGER_IDENTIFIER]: "",
        id: E,
        "aria-haspopup": "dialog",
        "aria-expanded": k,
        "aria-controls": C,
      },
      _,
      R,
    ],
    stateAttributesMapping: u.triggerOpenStateMapping,
  });
});

// app/components/is-closing.js — webpack module 19475
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default,
  o = n(4293 /* vendor/module-4293 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PopoverTrigger = void 0);
var i = o(n(55099 /* vendor/module-55099 */)),
  a = r(n(14041 /* vendor/module-14041 */)),
  s = n(27788 /* vendor/module-27788 */),
  l = n(87782 /* vendor/module-87782 */),
  c = n(51146 /* vendor/module-51146 */),
  u = n(51909 /* vendor/module-51909 */),
  d = n(25743 /* vendor/module-25743 */),
  p = n(47797 /* vendor/module-47797 */),
  f = n(90665 /* vendor/module-90665 */),
  h = n(33115 /* vendor/module-33115 */),
  m = n(70444 /* vendor/module-70444 */),
  g = n(82063 /* vendor/module-82063 */),
  y = n(94661 /* vendor/module-94661 */),
  v = n(15400 /* vendor/module-15400 */),
  b = n(91988 /* vendor/module-91988 */),
  S = n(31085 /* vendor/module-31085 */);
t.PopoverTrigger = a.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      style: o,
      disabled: _ = !1,
      nativeButton: x = !0,
      handle: w,
      payload: E,
      openOnHover: T = !1,
      delay: k = f.OPEN_DELAY,
      closeDelay: C = 0,
      id: I,
      ...A
    } = e,
    O = (0, s.usePopoverRootContext)(!0),
    R = w?.store ?? O?.store;
  if (!R) throw new Error((0, i.default)(74));
  const M = (0, h.useBaseUiId)(I),
    P = R.useState("isTriggerActive", M),
    N = R.useState("floatingRootContext"),
    D = R.useState("isOpenedByTrigger", M),
    j = R.useState("triggerPopupId", M),
    L = a.useRef(null),
    { registerTrigger: F, isMountedByThisTrigger: U } = (0,
    y.useTriggerDataForwarding)(M, L, R, {
      payload: E,
      disabled: _,
      openOnHover: T,
      closeDelay: C,
    }),
    B = R.useState("openChangeReason"),
    z = R.useState("stickIfOpen"),
    H = R.useState("openMethod"),
    V = R.useState("focusManagerModal"),
    q = (0, p.useHoverReferenceInteraction)(N, {
      enabled:
        !_ && null != N && T && ("touch" !== H || B !== g.REASONS.triggerPress),
      mouseOnly: !0,
      move: !1,
      handleClose: (0, p.safePolygon)(),
      restMs: k,
      delay: { close: C },
      triggerElementRef: L,
      isActiveTrigger: P,
      isClosing: () => "ending" === R.select("transitionStatus"),
    }),
    G = (0, p.useClick)(N, { enabled: null != N, stickIfOpen: z }),
    W = (0, b.useOpenMethodTriggerProps)(
      () => R.select("open"),
      (e) => {
        R.set("openMethod", e);
      },
    ),
    $ = R.useState("triggerProps", U),
    { getButtonProps: Y, buttonRef: K } = (0, l.useButton)({
      disabled: _,
      native: x,
    }),
    Z = {
      open: (e) =>
        e && B === g.REASONS.triggerPress
          ? c.pressableTriggerOpenStateMapping.open(e)
          : c.triggerOpenStateMapping.open(e),
    },
    {
      preFocusGuardRef: Q,
      handlePreFocusGuardFocus: J,
      handleFocusTargetFocus: X,
    } = (0, v.useTriggerFocusGuards)(R, L),
    ee = { disabled: _, open: D },
    te = (0, u.useRenderElement)("button", e, {
      state: ee,
      ref: [K, t, F, L],
      props: [
        G.reference,
        q,
        $,
        W,
        {
          [d.CLICK_TRIGGER_IDENTIFIER]: "",
          id: M,
          "aria-haspopup": "dialog",
          "aria-expanded": D,
          "aria-controls": j,
        },
        A,
        Y,
      ],
      stateAttributesMapping: Z,
    });
  return U && !V
    ? (0, S.jsxs)(a.Fragment, {
        children: [
          (0, S.jsx)(m.FocusGuard, { ref: Q, onFocus: J }),
          (0, S.jsx)(a.Fragment, { children: te }, M),
          (0, S.jsx)(m.FocusGuard, {
            ref: R.context.triggerFocusTargetRef,
            onFocus: X,
          }),
        ],
      })
    : (0, S.jsx)(a.Fragment, { children: te }, M);
});

// vendor/module-90718.js — webpack module 90718
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.usePositioner = function (
    e,
    t,
    {
      styles: n,
      transitionStatus: a,
      props: s,
      refs: l,
      hidden: c,
      inert: u = !1,
    },
  ) {
    const d = { ...n };
    return (
      u && (d.pointerEvents = "none"),
      (0, o.useRenderElement)("div", e, {
        state: t,
        ref: l,
        props: [
          { role: "presentation", hidden: c, style: d },
          (0, i.getDisabledMountTransitionStyles)(a),
          s,
        ],
        stateAttributesMapping: r.popupStateMapping,
      })
    );
  });
var r = n(51146 /* vendor/module-51146 */),
  o = n(51909 /* vendor/module-51909 */),
  i = n(53469 /* vendor/module-53469 */);

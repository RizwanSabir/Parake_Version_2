// vendor/module-89517.js — webpack module 89517
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }), (t.hide = void 0);
const r = (0, n(67728 /* vendor/module-67728 */).hide)().fn;
t.hide = {
  name: "hide",
  async fn(e) {
    const { width: t, height: n, x: o, y: i } = e.rects.reference,
      a = 0 === t && 0 === n && 0 === o && 0 === i,
      s = await r(e);
    return {
      data: { referenceHidden: s.data?.referenceHidden || a },
    };
  },
};

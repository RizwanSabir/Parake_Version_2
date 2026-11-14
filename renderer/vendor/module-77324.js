// vendor/module-77324.js — webpack module 77324
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.findScrollableTouchTarget = function (e, t, n = "vertical", i = !1) {
    let a = (0, r.isHTMLElement)(e) ? e : null;
    for (
      ;
      (0, r.isHTMLElement)(a) && a !== t && !(0, r.isLastTraversableNode)(a);

    ) {
      if (o(a, n, i)) return a;
      a = (0, r.getParentNode)(a);
    }
    return o(t, n, i) ? t : null;
  }),
  (t.hasScrollableAncestor = function (e, t, n) {
    let i = e;
    for (
      ;
      (0, r.isHTMLElement)(i) && i !== t && !(0, r.isLastTraversableNode)(i);

    ) {
      for (const e of n) if (o(i, e)) return !0;
      i = (0, r.getParentNode)(i);
    }
    return !1;
  }),
  (t.isScrollable = o);
var r = n(81339 /* vendor/module-81339 */);
function o(e, t, n = !1) {
  const o = (0, r.getComputedStyle)(e);
  if ("vertical" === t) {
    const t = o.overflowY;
    return (
      ("auto" === t || "scroll" === t) &&
      (n ? e.clientHeight > 0 : e.scrollHeight > e.clientHeight)
    );
  }
  const i = o.overflowX;
  return (
    ("auto" === i || "scroll" === i) &&
    (n ? e.clientWidth > 0 : e.scrollWidth > e.clientWidth)
  );
}

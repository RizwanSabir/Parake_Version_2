// vendor/module-77814.js — webpack module 77814
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.getPseudoElementBounds = function (e) {
    const t = e.getBoundingClientRect(),
      n = (0, r.ownerWindow)(e);
    if (o.platform.env.jsdom) return t;
    const i = n.getComputedStyle(e, "::before"),
      a = n.getComputedStyle(e, "::after");
    if ("none" === i.content && "none" === a.content) return t;
    const s = parseFloat(i.width) || 0,
      l = parseFloat(i.height) || 0,
      c = parseFloat(a.width) || 0,
      u = parseFloat(a.height) || 0,
      d = Math.max(t.width, s, c),
      p = Math.max(t.height, l, u),
      f = d - t.width,
      h = p - t.height;
    return {
      left: t.left - f / 2,
      right: t.right + f / 2,
      top: t.top - h / 2,
      bottom: t.bottom + h / 2,
    };
  });
var r = n(854 /* vendor/module-854 */),
  o = n(87177 /* vendor/module-87177 */);

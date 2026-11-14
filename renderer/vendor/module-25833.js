// vendor/module-25833.js — webpack module 25833
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.adaptiveOrigin = t.DEFAULT_SIDES = void 0);
var r = n(854 /* vendor/module-854 */),
  o = n(28229 /* vendor/module-28229 */);
const i = (t.DEFAULT_SIDES = { sideX: "left", sideY: "top" });
t.adaptiveOrigin = {
  name: "adaptiveOrigin",
  async fn(e) {
    const {
        x: t,
        y: n,
        rects: { floating: a },
        elements: { floating: s },
        platform: l,
        strategy: c,
        placement: u,
      } = e,
      d = (0, r.ownerWindow)(s),
      p = d.getComputedStyle(s);
    if ("0s" === p.transitionDuration || "" === p.transitionDuration)
      return { x: t, y: n, data: i };
    const f = await l.getOffsetParent?.(s);
    let h = { width: 0, height: 0 };
    if ("fixed" === c && d?.visualViewport)
      h = {
        width: d.visualViewport.width,
        height: d.visualViewport.height,
      };
    else if (f === d) {
      const e = (0, r.ownerDocument)(s);
      h = {
        width: e.documentElement.clientWidth,
        height: e.documentElement.clientHeight,
      };
    } else (await l.isElement?.(f)) && (h = await l.getDimensions(f));
    const m = (0, o.getSide)(u);
    let g = t,
      y = n;
    return (
      "left" === m && (g = h.width - (t + a.width)),
      "top" === m && (y = h.height - (n + a.height)),
      {
        x: g,
        y,
        data: {
          sideX: "left" === m ? "right" : i.sideX,
          sideY: "top" === m ? "bottom" : i.sideY,
        },
      }
    );
  },
};

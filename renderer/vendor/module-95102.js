// vendor/module-95102.js — webpack module 95102
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.InternalBackdrop = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(31085 /* vendor/module-31085 */);
t.InternalBackdrop = o.forwardRef(function (e, t) {
  const { cutout: n, ...r } = e;
  let o;
  if (n) {
    const e = n.getBoundingClientRect();
    o = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${e.left}px ${e.top}px,${e.left}px ${e.bottom}px,${e.right}px ${e.bottom}px,${e.right}px ${e.top}px,${e.left}px ${e.top}px)`;
  }
  return (0, i.jsx)("div", {
    ref: t,
    role: "presentation",
    "data-base-ui-inert": "",
    ...r,
    style: {
      position: "fixed",
      inset: 0,
      userSelect: "none",
      WebkitUserSelect: "none",
      clipPath: o,
    },
  });
});

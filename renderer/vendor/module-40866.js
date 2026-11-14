// vendor/module-40866.js — webpack module 40866
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ScrollAreaCorner = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(30541 /* vendor/module-30541 */),
  a = n(51909 /* vendor/module-51909 */);
t.ScrollAreaCorner = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...s } = e,
    {
      cornerRef: l,
      cornerSize: c,
      hiddenState: u,
    } = (0, i.useScrollAreaRootContext)(),
    d = (0, a.useRenderElement)("div", e, {
      ref: [t, l],
      props: [
        {
          style: {
            position: "absolute",
            bottom: 0,
            insetInlineEnd: 0,
            width: c.width,
            height: c.height,
          },
        },
        s,
      ],
    });
  return u.corner ? null : d;
});

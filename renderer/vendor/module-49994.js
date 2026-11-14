// vendor/module-49994.js — webpack module 49994
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ScrollAreaThumb = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(30541 /* vendor/module-30541 */),
  a = n(15347 /* vendor/module-15347 */),
  s = n(74737 /* vendor/module-74737 */),
  l = n(51909 /* vendor/module-51909 */);
t.ScrollAreaThumb = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...c } = e,
    {
      thumbYRef: u,
      thumbXRef: d,
      handlePointerDown: p,
      handlePointerMove: f,
      handlePointerUp: h,
      setScrollingX: m,
      setScrollingY: g,
      scrollingX: y,
      scrollingY: v,
      hasMeasuredScrollbar: b,
    } = (0, i.useScrollAreaRootContext)(),
    { orientation: S } = (0, a.useScrollAreaScrollbarContext)(),
    _ = { scrolling: "horizontal" === S ? y : v, orientation: S };
  function x(e) {
    "vertical" === S && g(!1), "horizontal" === S && m(!1), h(e);
  }
  return (0, l.useRenderElement)("div", e, {
    ref: [t, "vertical" === S ? u : d],
    state: _,
    props: [
      {
        onPointerDown: p,
        onPointerMove: f,
        onPointerUp: x,
        onPointerCancel: x,
        style: {
          visibility: b ? void 0 : "hidden",
          ...("vertical" === S && {
            height: `var(${s.ScrollAreaScrollbarCssVars.scrollAreaThumbHeight})`,
          }),
          ...("horizontal" === S && {
            width: `var(${s.ScrollAreaScrollbarCssVars.scrollAreaThumbWidth})`,
          }),
        },
      },
      c,
    ],
  });
});

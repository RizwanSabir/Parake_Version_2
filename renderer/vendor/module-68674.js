// vendor/module-68674.js — webpack module 68674
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ScrollAreaContent = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(57122 /* vendor/module-57122 */),
  a = n(20457 /* vendor/module-20457 */),
  s = n(51909 /* vendor/module-51909 */),
  l = n(30541 /* vendor/module-30541 */),
  c = n(50726 /* vendor/module-50726 */);
t.ScrollAreaContent = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: u, ...d } = e,
    { computeThumbPosition: p } = (0, a.useScrollAreaViewportContext)(),
    { hasMeasuredScrollbar: f, viewportState: h } = (0,
    l.useScrollAreaRootContext)(),
    m = o.useRef(null),
    g = o.useRef(f);
  return (
    (0, i.useIsoLayoutEffect)(() => {
      if ("undefined" == typeof ResizeObserver) return;
      let e = !1;
      const t = new ResizeObserver(() => {
        (e || ((e = !0), g.current)) && p();
      });
      return (
        m.current && t.observe(m.current),
        () => {
          t.disconnect();
        }
      );
    }, [p]),
    (0, s.useRenderElement)("div", e, {
      ref: [t, m],
      state: h,
      stateAttributesMapping: c.scrollAreaStateAttributesMapping,
      props: [{ role: "presentation", style: { minWidth: "fit-content" } }, d],
    })
  );
});

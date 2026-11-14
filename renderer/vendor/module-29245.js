// vendor/module-29245.js — webpack module 29245
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.SelectList = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(4674 /* vendor/module-4674 */),
  a = n(78207 /* vendor/module-78207 */),
  s = n(22370 /* vendor/module-22370 */),
  l = n(67538 /* vendor/module-67538 */),
  c = n(51909 /* vendor/module-51909 */),
  u = n(18395 /* vendor/module-18395 */),
  d = n(74940 /* vendor/module-74940 */),
  p = n(84557 /* vendor/module-84557 */);
t.SelectList = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...f } = e,
    { store: h, scrollHandlerRef: m } = (0, s.useSelectRootContext)(),
    { alignItemWithTriggerActive: g } = (0, l.useSelectPositionerContext)(),
    y = (0, a.useStore)(h, p.selectors.hasScrollArrows),
    v = (0, a.useStore)(h, p.selectors.openMethod),
    b = (0, a.useStore)(h, p.selectors.multiple),
    S = {
      id: `${(0, a.useStore)(h, p.selectors.id)}-list`,
      role: "listbox",
      "aria-multiselectable": b || void 0,
      onScroll(e) {
        m.current?.(e.currentTarget);
      },
      ...(g && { style: d.LIST_FUNCTIONAL_STYLES }),
      className:
        y && "touch" !== v ? u.styleDisableScrollbar.className : void 0,
    },
    _ = (0, i.useStableCallback)((e) => {
      h.set("listElement", e);
    });
  return (0, c.useRenderElement)("div", e, {
    ref: [t, _],
    props: [S, f],
  });
});

// vendor/module-2661.js — webpack module 2661
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxChips = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(78207 /* vendor/module-78207 */),
  a = n(38340 /* vendor/module-38340 */),
  s = n(51909 /* vendor/module-51909 */),
  l = n(84542 /* vendor/module-84542 */),
  c = n(77144 /* app/components/composite-list */),
  u = n(32118 /* vendor/module-32118 */),
  d = n(36826 /* vendor/module-36826 */),
  p = n(29312 /* vendor/module-29312 */),
  f = n(31085 /* vendor/module-31085 */);
t.ComboboxChips = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: h, ...m } = e,
    g = (0, u.useComboboxRootContext)(),
    y = (0, i.useStore)(g, d.selectors.open),
    v = (0, i.useStore)(g, d.selectors.hasSelectionChips),
    [b, S] = o.useState(void 0);
  y && void 0 !== b && S(void 0);
  const _ = o.useRef([]),
    x = (0, s.useRenderElement)("div", e, {
      ref: [t, g.state.chipsContainerRef],
      props: [
        v ? { role: "toolbar" } : a.EMPTY_OBJECT,
        {
          onMouseDown(e) {
            (0, p.handleInputPress)(e, g, g.state.disabled, g.state.readOnly);
          },
        },
        m,
      ],
    }),
    w = o.useMemo(
      () => ({
        highlightedChipIndex: b,
        setHighlightedChipIndex: S,
        chipsRef: _,
      }),
      [b, S, _],
    );
  return (0, f.jsx)(l.ComboboxChipsContext.Provider, {
    value: w,
    children: (0, f.jsx)(c.CompositeList, {
      elementsRef: _,
      children: x,
    }),
  });
});

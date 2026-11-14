// vendor/module-87476.js — webpack module 87476
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxInputGroup = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(4674 /* vendor/module-4674 */),
  a = n(78207 /* vendor/module-78207 */),
  s = n(51909 /* vendor/module-51909 */),
  l = n(62527 /* vendor/module-62527 */),
  c = n(32118 /* vendor/module-32118 */),
  u = n(36826 /* vendor/module-36826 */),
  d = n(67631 /* vendor/module-67631 */),
  p = n(29312 /* vendor/module-29312 */),
  f = n(80475 /* vendor/module-80475 */);
t.ComboboxInputGroup = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...h } = e,
    { state: m } = (0, l.useFieldRootContext)(),
    g = (0, c.useComboboxRootContext)(),
    { filteredItems: y } = (0, c.useComboboxDerivedItemsContext)(),
    v = (0, a.useStore)(g, u.selectors.open),
    b = (0, a.useStore)(g, u.selectors.mounted),
    S = (0, a.useStore)(g, u.selectors.popupSide),
    _ = (0, a.useStore)(g, u.selectors.positionerElement),
    x = (0, a.useStore)(g, u.selectors.disabled),
    w = (0, a.useStore)(g, u.selectors.readOnly),
    E = (0, a.useStore)(g, u.selectors.hasSelectedValue),
    T = (0, a.useStore)(g, u.selectors.selectionMode),
    k = b && _ ? S : null,
    C = x,
    I = 0 === y.length,
    A = {
      ...m,
      open: v,
      disabled: C,
      readOnly: w,
      popupSide: k,
      listEmpty: I,
      placeholder: "none" !== T && !E,
    },
    O = (0, i.useStableCallback)((e) => {
      g.set("inputGroupElement", e);
    });
  return (0, s.useRenderElement)("div", e, {
    ref: [t, O],
    props: [
      {
        role: "group",
        onMouseDown(e) {
          (0, p.handleInputPress)(e, g, C, w, (e) =>
            (0, f.contains)(g.state.chipsContainerRef.current, e),
          );
        },
      },
      h,
    ],
    state: A,
    stateAttributesMapping: d.triggerStateAttributesMapping,
  });
});

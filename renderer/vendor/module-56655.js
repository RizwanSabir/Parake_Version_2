// vendor/module-56655.js — webpack module 56655
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.SelectValue = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(78207 /* vendor/module-78207 */),
  a = n(51909 /* vendor/module-51909 */),
  s = n(22370 /* vendor/module-22370 */),
  l = n(25411 /* vendor/module-25411 */),
  c = n(84557 /* vendor/module-84557 */);
const u = { value: () => null };
t.SelectValue = o.forwardRef(function (e, t) {
  const {
      className: n,
      render: r,
      children: o,
      placeholder: d,
      style: p,
      ...f
    } = e,
    { store: h, valueRef: m } = (0, s.useSelectRootContext)(),
    g = (0, i.useStore)(h, c.selectors.value),
    y = (0, i.useStore)(h, c.selectors.items),
    v = (0, i.useStore)(h, c.selectors.itemToStringLabel),
    b = (0, i.useStore)(h, c.selectors.hasSelectedValue),
    S = !b && null != d && null == o,
    _ = (0, i.useStore)(h, c.selectors.hasNullItemLabel, S),
    x = { value: g, placeholder: !b };
  let w = null;
  return (
    (w =
      "function" == typeof o
        ? o(g)
        : null != o
          ? o
          : b || null == d || _
            ? Array.isArray(g)
              ? (0, l.resolveMultipleLabels)(g, y, v)
              : (0, l.resolveSelectedLabel)(g, y, v)
            : d),
    (0, a.useRenderElement)("span", e, {
      state: x,
      ref: [t, m],
      props: [{ children: w }, f],
      stateAttributesMapping: u,
    })
  );
});

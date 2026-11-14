// vendor/module-76341.js — webpack module 76341
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxValue = function (e) {
    const { children: t, placeholder: n } = e,
      r = (0, a.useComboboxRootContext)(),
      u = (0, i.useStore)(r, l.selectors.itemToStringLabel),
      d = (0, i.useStore)(r, l.selectors.selectedValue),
      p = (0, i.useStore)(r, l.selectors.items),
      f = "multiple" === (0, i.useStore)(r, l.selectors.selectionMode),
      h = (0, i.useStore)(r, l.selectors.hasSelectedValue),
      m = !h && null != n && null == t,
      g = (0, i.useStore)(r, l.selectors.hasNullItemLabel, m);
    let y = null;
    return (
      (y =
        "function" == typeof t
          ? t(d)
          : null != t
            ? t
            : h || null == n || g
              ? f && Array.isArray(d)
                ? (0, s.resolveMultipleLabels)(d, p, u)
                : (0, s.resolveSelectedLabel)(d, p, u)
              : n),
      (0, c.jsx)(o.Fragment, { children: y })
    );
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(78207 /* vendor/module-78207 */),
  a = n(32118 /* vendor/module-32118 */),
  s = n(25411 /* vendor/module-25411 */),
  l = n(36826 /* vendor/module-36826 */),
  c = n(31085 /* vendor/module-31085 */);

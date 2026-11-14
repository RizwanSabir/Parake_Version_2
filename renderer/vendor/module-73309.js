// vendor/module-73309.js — webpack module 73309
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxRoot = function (e) {
    const {
      multiple: t = !1,
      defaultValue: n,
      value: r,
      onValueChange: a,
      autoComplete: s,
      ...l
    } = e;
    return (0, i.jsx)(o.AriaCombobox, {
      ...l,
      selectionMode: t ? "multiple" : "single",
      selectedValue: r,
      defaultSelectedValue: n,
      onSelectedValueChange: a,
      formAutoComplete: s,
    });
  }),
  r(n(14041 /* vendor/module-14041 */));
var o = n(30408 /* app/components/aria-combobox */),
  i = n(31085 /* vendor/module-31085 */);

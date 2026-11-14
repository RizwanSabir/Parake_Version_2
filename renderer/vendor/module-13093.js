// vendor/module-13093.js — webpack module 13093
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxCollection = function (e) {
    const { children: t } = e,
      { filteredItems: n } = (0, i.useComboboxDerivedItemsContext)(),
      r = (0, a.useGroupCollectionContext)(),
      l = r ? r.items : n;
    return l ? (0, s.jsx)(o.Fragment, { children: l.map(t) }) : null;
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(32118 /* vendor/module-32118 */),
  a = n(4796 /* vendor/module-4796 */),
  s = n(31085 /* vendor/module-31085 */);

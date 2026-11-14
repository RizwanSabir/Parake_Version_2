// vendor/module-76291.js — webpack module 76291
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }), (t.itemMapping = void 0);
var r = n(44306 /* vendor/module-44306 */),
  o = n(20075 /* vendor/module-20075 */);
t.itemMapping = {
  checked: (e) =>
    e
      ? { [o.MenuCheckboxItemDataAttributes.checked]: "" }
      : { [o.MenuCheckboxItemDataAttributes.unchecked]: "" },
  ...r.transitionStatusMapping,
};

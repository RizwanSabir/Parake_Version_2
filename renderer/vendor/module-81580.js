// vendor/module-81580.js — webpack module 81580
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.stateAttributesMapping = void 0);
var r = n(41128 /* vendor/module-41128 */),
  o = n(96316 /* vendor/module-96316 */);
t.stateAttributesMapping = {
  ...r.fieldValidityMapping,
  checked: (e) =>
    e
      ? { [o.SwitchRootDataAttributes.checked]: "" }
      : { [o.SwitchRootDataAttributes.unchecked]: "" },
};

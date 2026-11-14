// vendor/module-40799.js — webpack module 40799
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.stateAttributesMapping = void 0);
var r = n(44306 /* vendor/module-44306 */),
  o = n(41128 /* vendor/module-41128 */),
  i = n(80478 /* vendor/module-80478 */);
t.stateAttributesMapping = {
  checked: (e) =>
    e
      ? { [i.RadioRootDataAttributes.checked]: "" }
      : { [i.RadioRootDataAttributes.unchecked]: "" },
  ...r.transitionStatusMapping,
  ...o.fieldValidityMapping,
};

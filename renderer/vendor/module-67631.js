// vendor/module-67631.js — webpack module 67631
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.triggerStateAttributesMapping = void 0);
var r = n(51146 /* vendor/module-51146 */),
  o = n(41128 /* vendor/module-41128 */);
t.triggerStateAttributesMapping = {
  ...r.pressableTriggerOpenStateMapping,
  ...o.fieldValidityMapping,
  popupSide: (e) => (e ? { "data-popup-side": e } : null),
  listEmpty: (e) => (e ? { "data-list-empty": "" } : null),
};

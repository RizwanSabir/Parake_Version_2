// vendor/module-68323.js — webpack module 68323
// params: (e, t) = (module, exports, require)
"use strict";
function n(e, t, n) {
  return null == e || null == t ? Object.is(e, t) : n(e, t);
}
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.compareItemEquality = n),
  (t.defaultItemEquality = void 0),
  (t.findItemIndex = function (e, t, r) {
    return e && 0 !== e.length
      ? e.findIndex((e) => void 0 !== e && n(e, t, r))
      : -1;
  }),
  (t.removeItem = function (e, t, r) {
    return e.filter((e) => !n(t, e, r));
  }),
  (t.selectedValueIncludes = function (e, t, r) {
    return !(!e || 0 === e.length) && e.some((e) => void 0 !== e && n(t, e, r));
  }),
  (t.defaultItemEquality = (e, t) => Object.is(e, t));

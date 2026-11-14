// vendor/module-41128.js — webpack module 41128
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.fieldValidityMapping =
    t.DEFAULT_VALIDITY_STATE =
    t.DEFAULT_FIELD_STATE_ATTRIBUTES =
    t.DEFAULT_FIELD_ROOT_STATE =
      void 0);
var r = n(70328 /* vendor/module-70328 */);
t.DEFAULT_VALIDITY_STATE = {
  badInput: !1,
  customError: !1,
  patternMismatch: !1,
  rangeOverflow: !1,
  rangeUnderflow: !1,
  stepMismatch: !1,
  tooLong: !1,
  tooShort: !1,
  typeMismatch: !1,
  valid: null,
  valueMissing: !1,
};
const o = (t.DEFAULT_FIELD_STATE_ATTRIBUTES = {
  valid: null,
  touched: !1,
  dirty: !1,
  filled: !1,
  focused: !1,
});
(t.DEFAULT_FIELD_ROOT_STATE = { disabled: !1, ...o }),
  (t.fieldValidityMapping = {
    valid: (e) =>
      null === e
        ? null
        : e
          ? { [r.FieldControlDataAttributes.valid]: "" }
          : { [r.FieldControlDataAttributes.invalid]: "" },
  });

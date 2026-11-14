// vendor/module-62527.js — webpack module 62527
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default,
  o = n(4293 /* vendor/module-4293 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.FieldRootContext = t.DEFAULT_FIELD_ROOT_CONTEXT = void 0),
  (t.useFieldRootContext = function (e = !0) {
    const t = a.useContext(d);
    if (t.setValidityData === l.NOOP && !e) throw new Error((0, i.default)(28));
    return t;
  });
var i = o(n(55099 /* vendor/module-55099 */)),
  a = r(n(14041 /* vendor/module-14041 */)),
  s = n(38340 /* vendor/module-38340 */),
  l = n(75224 /* vendor/module-75224 */),
  c = n(41128 /* vendor/module-41128 */);
const u = (t.DEFAULT_FIELD_ROOT_CONTEXT = {
    invalid: void 0,
    name: void 0,
    validityData: {
      state: c.DEFAULT_VALIDITY_STATE,
      errors: [],
      error: "",
      value: "",
      initialValue: null,
    },
    setValidityData: l.NOOP,
    disabled: void 0,
    touched: c.DEFAULT_FIELD_STATE_ATTRIBUTES.touched,
    setTouched: l.NOOP,
    dirty: c.DEFAULT_FIELD_STATE_ATTRIBUTES.dirty,
    setDirty: l.NOOP,
    filled: c.DEFAULT_FIELD_STATE_ATTRIBUTES.filled,
    setFilled: l.NOOP,
    focused: c.DEFAULT_FIELD_STATE_ATTRIBUTES.focused,
    setFocused: l.NOOP,
    validate: () => null,
    validationMode: "onSubmit",
    validationDebounceTime: 0,
    shouldValidateOnChange: () => !1,
    state: c.DEFAULT_FIELD_ROOT_STATE,
    markedDirtyRef: { current: !1 },
    registerFieldControl: l.NOOP,
    validation: {
      getValidationProps: (e, t = s.EMPTY_OBJECT) => t,
      inputRef: { current: null },
      registerInput: l.NOOP,
      commit: async () => {},
      change: l.NOOP,
    },
  }),
  d = (t.FieldRootContext = a.createContext(u));

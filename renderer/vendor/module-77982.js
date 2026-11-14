// vendor/module-77982.js — webpack module 77982
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.FormContext = void 0),
  (t.useFormContext = function () {
    return o.useContext(a);
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(75224 /* vendor/module-75224 */);
const a = (t.FormContext = o.createContext({
  formRef: { current: { fields: new Map() } },
  errors: {},
  clearErrors: i.NOOP,
  validationMode: "onSubmit",
  submitAttemptedRef: { current: !1 },
}));

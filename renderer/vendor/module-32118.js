// vendor/module-32118.js — webpack module 32118
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default,
  o = n(4293 /* vendor/module-4293 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxRootContext =
    t.ComboboxInputValueContext =
    t.ComboboxHasItemsContext =
    t.ComboboxFloatingContext =
    t.ComboboxDerivedItemsContext =
      void 0),
  (t.useComboboxDerivedItemsContext = function () {
    const e = a.useContext(c);
    if (!e) throw new Error((0, i.default)(24));
    return e;
  }),
  (t.useComboboxFloatingContext = function () {
    const e = a.useContext(l);
    if (!e) throw new Error((0, i.default)(23));
    return e;
  }),
  (t.useComboboxHasItemsContext = function () {
    return a.useContext(u);
  }),
  (t.useComboboxInputValueContext = function () {
    return a.useContext(d);
  }),
  (t.useComboboxRootContext = function () {
    const e = a.useContext(s);
    if (!e) throw new Error((0, i.default)(22));
    return e;
  });
var i = o(n(55099 /* vendor/module-55099 */)),
  a = r(n(14041 /* vendor/module-14041 */));
const s = (t.ComboboxRootContext = a.createContext(void 0)),
  l = (t.ComboboxFloatingContext = a.createContext(void 0)),
  c = (t.ComboboxDerivedItemsContext = a.createContext(void 0)),
  u = (t.ComboboxHasItemsContext = a.createContext(!1)),
  d = (t.ComboboxInputValueContext = a.createContext(""));

// vendor/module-83470.js — webpack module 83470
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.LabelableContext = void 0),
  (t.useLabelableContext = function () {
    return o.useContext(a);
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(75224 /* vendor/module-75224 */);
const a = (t.LabelableContext = o.createContext({
  controlId: void 0,
  registerControlId: i.NOOP,
  labelId: void 0,
  setLabelId: i.NOOP,
  messageIds: [],
  setMessageIds: i.NOOP,
  getDescriptionProps: (e) => e,
}));

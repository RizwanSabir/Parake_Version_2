// vendor/module-2001.js — webpack module 2001
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default,
  o = n(4293 /* vendor/module-4293 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PreviewCardRootContext = void 0),
  (t.usePreviewCardRootContext = function (e) {
    const t = a.useContext(s);
    if (void 0 === t && !e) throw new Error((0, i.default)(50));
    return t;
  });
var i = o(n(55099 /* vendor/module-55099 */)),
  a = r(n(14041 /* vendor/module-14041 */));
const s = (t.PreviewCardRootContext = a.createContext(void 0));

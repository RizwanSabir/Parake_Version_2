// vendor/module-24422.js — webpack module 24422
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useValueChanged = function (e, t) {
    const n = o.useRef(e),
      r = (0, a.useStableCallback)(t);
    (0, i.useIsoLayoutEffect)(() => {
      n.current !== e && r(n.current);
    }, [e, r]),
      (0, i.useIsoLayoutEffect)(() => {
        n.current = e;
      }, [e]);
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(57122 /* vendor/module-57122 */),
  a = n(4674 /* vendor/module-4674 */);

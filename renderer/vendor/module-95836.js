// vendor/module-95836.js — webpack module 95836
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useControlled = function ({
    controlled: e,
    default: t,
    name: n,
    state: r = "value",
  }) {
    const { current: i } = o.useRef(void 0 !== e),
      [a, s] = o.useState(t);
    return [
      i ? e : a,
      o.useCallback((e) => {
        i || s(e);
      }, []),
    ];
  });
var o = r(n(14041 /* vendor/module-14041 */));
n(71923 /* vendor/module-71923 */);

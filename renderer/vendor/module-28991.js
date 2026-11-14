// vendor/module-28991.js — webpack module 28991
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useId = function (e, t) {
    if (void 0 !== s) {
      const n = s();
      return e ?? (t ? `${t}-${n}` : n);
    }
    return (function (e, t = "mui") {
      const [n, r] = o.useState(e),
        i = e || n;
      return (
        o.useEffect(() => {
          null == n && ((a += 1), r(`${t}-${a}`));
        }, [n, t]),
        i
      );
    })(e, t);
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(23549 /* vendor/module-23549 */);
let a = 0;
const s = i.SafeReact.useId;

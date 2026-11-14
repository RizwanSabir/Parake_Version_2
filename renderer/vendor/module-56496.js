// vendor/module-56496.js — webpack module 56496
// params: (t, e, r) = (module, exports, require)
"use strict";
r.d(e, { D: () => a });
var i = r(8679 /* vendor/module-8679 */),
  o = r(79456 /* vendor/module-79456 */),
  n = r(27197 /* vendor/module-27197 */),
  a = (0, o.K)((t) => {
    const { securityLevel: e } = (0, i.D7)();
    let r = (0, n.Ltv)("body");
    if ("sandbox" === e) {
      const e = (0, n.Ltv)(`#i${t}`),
        i = e.node()?.contentDocument ?? document;
      r = (0, n.Ltv)(i.body);
    }
    return r.select(`#${t}`);
  }, "selectSvgElement");

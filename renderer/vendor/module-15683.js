// vendor/module-15683.js — webpack module 15683
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.getReactElementRef = function (e) {
    if (!o.isValidElement(e)) return null;
    const t = e,
      n = t.props;
    return ((0, i.isReactVersionAtLeast)(19) ? n?.ref : t.ref) ?? null;
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(83708 /* vendor/module-83708 */);

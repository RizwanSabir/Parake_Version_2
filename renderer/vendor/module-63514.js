// vendor/module-63514.js — webpack module 63514
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.getDelay = function (e, t, n) {
    const o = (function (e, t) {
      return null == t || (0, r.isMouseLikePointerType)(t)
        ? "function" == typeof e
          ? e()
          : e
        : 0;
    })(e, n);
    return "number" == typeof o ? o : o?.[t];
  }),
  (t.getRestMs = function (e) {
    return "function" == typeof e ? e() : e;
  }),
  (t.isClickLikeOpenEvent = function (e, t) {
    return t || "click" === e || "mousedown" === e;
  }),
  (t.isHoverOpenEvent = function (e) {
    return e?.includes("mouse") && "mousedown" !== e;
  }),
  Object.defineProperty(t, "isInsideEnabledTrigger", {
    enumerable: !0,
    get: function () {
      return o.isTargetInsideEnabledTrigger;
    },
  });
var r = n(76475 /* vendor/module-76475 */),
  o = n(80475 /* vendor/module-80475 */);

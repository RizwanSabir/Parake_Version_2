// vendor/module-76475.js — webpack module 76475
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.isClickLikeEvent = function (e) {
    const t = e.type;
    return (
      "click" === t || "mousedown" === t || "keydown" === t || "keyup" === t
    );
  }),
  (t.isMouseLikePointerType = function (e, t) {
    const n = ["mouse", "pen"];
    return t || n.push("", void 0), n.includes(e);
  }),
  (t.isReactEvent = function (e) {
    return "nativeEvent" in e;
  }),
  (t.isVirtualClick = function (e) {
    return (
      !("" !== e.pointerType || !e.isTrusted) ||
      (r.platform.os.android && e.pointerType
        ? "click" === e.type && 1 === e.buttons
        : 0 === e.detail && !e.pointerType)
    );
  }),
  (t.isVirtualPointerEvent = function (e) {
    return (
      !r.platform.env.jsdom &&
      ((!r.platform.os.android && 0 === e.width && 0 === e.height) ||
        (r.platform.os.android &&
          1 === e.width &&
          1 === e.height &&
          0 === e.pressure &&
          0 === e.detail &&
          "mouse" === e.pointerType) ||
        (e.width < 1 &&
          e.height < 1 &&
          0 === e.pressure &&
          0 === e.detail &&
          "touch" === e.pointerType))
    );
  }),
  (t.stopEvent = function (e) {
    e.preventDefault(), e.stopPropagation();
  });
var r = n(87177 /* vendor/module-87177 */);

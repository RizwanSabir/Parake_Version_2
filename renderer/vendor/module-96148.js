// vendor/module-96148.js — webpack module 96148
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useEnhancedClickHandler = function (e) {
    const t = o.useRef(""),
      n = o.useCallback(
        (n) => {
          n.defaultPrevented ||
            ((t.current = n.pointerType), e(n, n.pointerType));
        },
        [e],
      );
    return {
      onClick: o.useCallback(
        (n) => {
          0 !== n.detail
            ? (e(n, "pointerType" in n ? n.pointerType : t.current),
              (t.current = ""))
            : e(n, "keyboard");
        },
        [e],
      ),
      onPointerDown: n,
    };
  });
var o = r(n(14041 /* vendor/module-14041 */));

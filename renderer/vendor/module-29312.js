// vendor/module-29312.js — webpack module 29312
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.handleInputPress = function (e, t, n, s, l) {
    if (e.baseUIHandlerPrevented || s) return;
    const c = (0, a.getTarget)(e.nativeEvent),
      u = (0, r.isElement)(c) ? c : null;
    (u !== e.currentTarget && (l?.(u) || (0, a.isInteractiveElement)(u))) ||
      (e.preventDefault(),
      n ||
        (t.state.inputRef.current?.focus(),
        t.state.openOnInputClick &&
          t.state.setOpen(
            !0,
            (0, o.createChangeEventDetails)(
              i.REASONS.inputPress,
              e.nativeEvent,
            ),
          )));
  });
var r = n(81339 /* vendor/module-81339 */),
  o = n(22877 /* vendor/module-22877 */),
  i = n(82063 /* vendor/module-82063 */),
  a = n(80475 /* vendor/module-80475 */);

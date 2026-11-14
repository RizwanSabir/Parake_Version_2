// vendor/module-15400.js — webpack module 15400
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useTriggerFocusGuards = function (e, t) {
    const n = o.useRef(null);
    return {
      preFocusGuardRef: n,
      handlePreFocusGuardFocus: function (t) {
        i.flushSync(() => {
          e.setOpen(
            !1,
            (0, s.createChangeEventDetails)(
              l.REASONS.focusOut,
              t.nativeEvent,
              t.currentTarget,
            ),
          );
        });
        const r = (0, a.getTabbableBeforeElement)(n.current);
        r?.focus();
      },
      handleFocusTargetFocus: function (n) {
        const r = e.select("positionerElement");
        if (r && (0, a.isOutsideEvent)(n, r))
          e.context.beforeContentFocusGuardRef.current?.focus();
        else {
          i.flushSync(() => {
            e.setOpen(
              !1,
              (0, s.createChangeEventDetails)(
                l.REASONS.focusOut,
                n.nativeEvent,
                n.currentTarget,
              ),
            );
          });
          let o = (0, a.getTabbableAfterElement)(
            e.context.triggerFocusTargetRef.current || t.current,
          );
          for (; null !== o && (0, a.contains)(r, o); ) {
            const e = o;
            if (((o = (0, a.getNextTabbable)(o)), o === e)) break;
          }
          o?.focus();
        }
      },
    };
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = r(n(43144 /* vendor/module-43144 */)),
  a = n(65200 /* vendor/module-65200 */),
  s = n(22877 /* vendor/module-22877 */),
  l = n(82063 /* vendor/module-82063 */);

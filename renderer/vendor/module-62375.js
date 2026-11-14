// vendor/module-62375.js — webpack module 62375
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useNumberFieldButton = function (e) {
    const {
        allowInputSyncRef: t,
        disabled: n,
        formatOptionsRef: c,
        getStepAmount: u,
        id: d,
        incrementValue: p,
        inputRef: f,
        inputValue: h,
        isIncrement: m,
        locale: g,
        readOnly: y,
        setValue: v,
        valueRef: b,
        lastChangedValueRef: S,
        onValueCommitted: _,
      } = e,
      x = m ? s.REASONS.incrementPress : s.REASONS.decrementPress;
    function w(e) {
      const n = !t.current;
      if (((t.current = !0), !n)) return void (S.current = b.current);
      const r = (0, i.parseNumber)(h, g, c.current);
      if (null !== r) {
        const t = (0, a.createChangeEventDetails)(x, e);
        v(r, t), t.isCanceled || (b.current = r);
      }
    }
    const { pointerHandlers: E, shouldSkipClick: T } = (0, r.usePressAndHold)({
      disabled: n || y,
      elementRef: f,
      tickDelay: o.CHANGE_VALUE_TICK_DELAY,
      startDelay: o.START_AUTO_CHANGE_DELAY,
      scrollDistance: o.SCROLLING_POINTER_MOVE_DISTANCE,
      tick(e) {
        const t = u(e);
        return p(t, { direction: m ? 1 : -1, event: e, reason: x });
      },
      onStop(e) {
        const t = S.current ?? b.current;
        _(t, (0, a.createGenericEventDetails)(x, e));
      },
    });
    return {
      disabled: n,
      "aria-label": m ? "Increase" : "Decrease",
      "aria-controls": d,
      tabIndex: -1,
      style: l,
      ...E,
      onClick(e) {
        const t = n || y;
        if (e.defaultPrevented || t || T(e)) return;
        w(e.nativeEvent);
        const r = u(e),
          o = b.current;
        p(r, {
          direction: m ? 1 : -1,
          event: e.nativeEvent,
          reason: x,
        });
        const i = S.current ?? b.current;
        i !== o && _(i, (0, a.createGenericEventDetails)(x, e.nativeEvent));
      },
      onPointerDown(e) {
        const t = !e.button || 0 === e.button;
        e.defaultPrevented ||
          y ||
          !t ||
          n ||
          (w(e.nativeEvent),
          (S.current = null),
          (0, r.isTouchLikePointerType)(e.pointerType) || f.current?.focus(),
          E.onPointerDown(e));
      },
    };
  });
var r = n(87236 /* vendor/module-87236 */),
  o = n(24599 /* vendor/module-24599 */),
  i = n(46597 /* vendor/module-46597 */),
  a = n(22877 /* vendor/module-22877 */),
  s = n(82063 /* vendor/module-82063 */);
const l = { WebkitUserSelect: "none", userSelect: "none" };

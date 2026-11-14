// vendor/module-87236.js — webpack module 87236
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.isTouchLikePointerType = h),
  (t.usePressAndHold = function (e) {
    const {
        disabled: t,
        readOnly: n = !1,
        tick: r,
        onStop: m,
        tickDelay: g = d,
        startDelay: y = p,
        scrollDistance: v = f,
        elementRef: b,
      } = e,
      S = (0, s.useTimeout)(),
      _ = (0, l.useInterval)(),
      x = (0, s.useTimeout)(),
      w = o.useRef(!1),
      E = o.useRef(0),
      T = o.useRef({ x: 0, y: 0 }),
      k = o.useRef(!1),
      C = o.useRef(!1),
      I = o.useRef(""),
      A = o.useRef(a.NOOP),
      O = o.useRef(a.NOOP),
      R = (0, c.useStableCallback)(() => {
        x.clear(), S.clear(), _.clear(), A.current(), (E.current = 0);
      });
    function M(e) {
      R();
      const t = b.current;
      if (!t) return;
      const n = (0, u.ownerWindow)(t);
      (A.current = (0, i.addEventListener)(n, "contextmenu", function (e) {
        e.preventDefault();
      })),
        O.current(),
        (O.current = (0, i.addEventListener)(
          n,
          "pointerup",
          (e) => {
            (w.current = !1), R(), m?.(e);
          },
          { once: !0 },
        )),
        r(e)
          ? S.start(y, () => {
              _.start(g, () => {
                r(e) || R();
              });
            })
          : R();
    }
    o.useEffect(
      () => () => {
        R(), O.current();
      },
      [R],
    );
    return {
      pointerHandlers: {
        onTouchStart() {
          k.current = !0;
        },
        onTouchEnd() {
          k.current = !1;
        },
        onPointerDown(e) {
          const r = !e.button || 0 === e.button;
          e.defaultPrevented ||
            !r ||
            t ||
            n ||
            ((I.current = e.pointerType),
            (C.current = !1),
            (w.current = !0),
            (T.current = { x: e.clientX, y: e.clientY }),
            h(e.pointerType)
              ? x.start(50, () => {
                  const t = E.current;
                  (E.current = 0),
                    w.current && t < 3
                      ? (M(e.nativeEvent), (C.current = !0))
                      : ((C.current = !1), R());
                })
              : (e.preventDefault(), M(e.nativeEvent)));
        },
        onPointerUp(e) {
          h(e.pointerType) && (w.current = !1);
        },
        onPointerMove(e) {
          if (t || n || !h(e.pointerType) || !w.current) return;
          null != E.current && (E.current += 1);
          const { x: r, y: o } = T.current;
          (r - e.clientX) ** 2 + (o - e.clientY) ** 2 > v ** 2 && R();
        },
        onMouseEnter(e) {
          e.defaultPrevented ||
            t ||
            n ||
            !w.current ||
            k.current ||
            h(I.current) ||
            M(e.nativeEvent);
        },
        onMouseLeave() {
          k.current || R();
        },
        onMouseUp() {
          k.current || R();
        },
      },
      shouldSkipClick: (0, c.useStableCallback)(
        (e) =>
          !!e.defaultPrevented || (h(I.current) ? C.current : 0 !== e.detail),
      ),
    };
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(23504 /* vendor/module-23504 */),
  a = n(38340 /* vendor/module-38340 */),
  s = n(54807 /* vendor/module-54807 */),
  l = n(50455 /* vendor/module-50455 */),
  c = n(4674 /* vendor/module-4674 */),
  u = n(854 /* vendor/module-854 */);
const d = 60,
  p = 400,
  f = 8;
function h(e) {
  return "touch" === e || "pen" === e;
}

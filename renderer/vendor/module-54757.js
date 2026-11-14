// vendor/module-54757.js — webpack module 54757
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useClick = function (e, t = {}) {
    const {
        enabled: n = !0,
        event: r = "click",
        toggle: p = !0,
        ignoreMouse: f = !1,
        stickIfOpen: h = !0,
        touchOpenDelay: m = 0,
        reason: g = d.REASONS.triggerPress,
      } = t,
      y = "rootStore" in e ? e.rootStore : e,
      v = y.context.dataRef,
      b = o.useRef(void 0),
      S = (0, i.useAnimationFrame)(),
      _ = (0, a.useTimeout)(),
      x = o.useMemo(() => {
        function e(e, t, n, r) {
          const o = (0, u.createChangeEventDetails)(g, t, n);
          e && "touch" === r && m > 0
            ? _.start(m, () => {
                y.setOpen(!0, o);
              })
            : y.setOpen(e, o);
        }
        function t(e, t, n) {
          const r = v.current.openEvent,
            o = y.select("domReferenceElement") !== t;
          return !((!e || !o) && e && p && (!r || !h || n(r.type)));
        }
        return {
          onPointerDown(e) {
            b.current = e.pointerType;
          },
          onMouseDown(n) {
            const o = b.current,
              i = n.nativeEvent,
              a = y.select("open");
            if (
              0 !== n.button ||
              "click" === r ||
              ((0, c.isMouseLikePointerType)(o, !0) && f)
            )
              return;
            const s = t(
                a,
                n.currentTarget,
                (e) => "click" === e || "mousedown" === e,
              ),
              u = (0, l.getTarget)(i);
            if ((0, l.isTypeableElement)(u)) return void e(s, i, u, o);
            const d = n.currentTarget;
            S.request(() => {
              e(s, i, d, o);
            });
          },
          onClick(n) {
            if ("mousedown-only" === r) return;
            const o = b.current;
            "mousedown" === r && o
              ? (b.current = void 0)
              : ((0, c.isMouseLikePointerType)(o, !0) && f) ||
                e(
                  t(
                    y.select("open"),
                    n.currentTarget,
                    (e) =>
                      "click" === e ||
                      "mousedown" === e ||
                      "keydown" === e ||
                      "keyup" === e,
                  ),
                  n.nativeEvent,
                  n.currentTarget,
                  o,
                );
          },
          onKeyDown() {
            b.current = void 0;
          },
        };
      }, [v, r, f, g, y, h, p, S, _, m]);
    return o.useMemo(() => (n ? { reference: x } : s.EMPTY_OBJECT), [n, x]);
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(57569 /* vendor/module-57569 */),
  a = n(54807 /* vendor/module-54807 */),
  s = n(38340 /* vendor/module-38340 */),
  l = n(80475 /* vendor/module-80475 */),
  c = n(76475 /* vendor/module-76475 */),
  u = n(22877 /* vendor/module-22877 */),
  d = n(82063 /* vendor/module-82063 */);

// vendor/module-78897.js — webpack module 78897
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useFocus = function (e, t = {}) {
    const { enabled: n = !0, delay: r } = t,
      a = "rootStore" in e ? e.rootStore : e,
      { events: g, dataRef: y } = a.context,
      v = o.useRef(!1),
      b = o.useRef(null),
      S = o.useRef(!0),
      _ = (0, c.useTimeout)();
    o.useEffect(() => {
      const e = a.select("domReferenceElement");
      if (!n) return;
      const t = (0, u.getWindow)(e);
      return (0, s.mergeCleanups)(
        (0, i.addEventListener)(t, "blur", function () {
          const e = a.select("domReferenceElement");
          !a.select("open") &&
            (0, u.isHTMLElement)(e) &&
            e === (0, p.activeElement)((0, l.ownerDocument)(e)) &&
            (v.current = !0);
        }),
        m &&
          (0, i.addEventListener)(
            t,
            "keydown",
            function () {
              S.current = !0;
            },
            !0,
          ),
        m &&
          (0, i.addEventListener)(
            t,
            "pointerdown",
            function () {
              S.current = !1;
            },
            !0,
          ),
      );
    }, [a, n]),
      o.useEffect(() => {
        if (n)
          return (
            g.on("openchange", e),
            () => {
              g.off("openchange", e);
            }
          );
        function e(e) {
          if (
            e.reason === h.REASONS.triggerPress ||
            e.reason === h.REASONS.escapeKey
          ) {
            const e = a.select("domReferenceElement");
            (0, u.isElement)(e) && ((b.current = e), (v.current = !0));
          }
        }
      }, [g, n, a]);
    const x = o.useMemo(() => {
      function e() {
        (v.current = !1), (b.current = null);
      }
      return {
        onMouseLeave() {
          e();
        },
        onFocus(t) {
          const n = t.currentTarget;
          if (v.current) {
            if (b.current === n) return;
            e();
          }
          const o = (0, p.getTarget)(t.nativeEvent);
          if ((0, u.isElement)(o))
            if (m && !t.relatedTarget) {
              if (!S.current && !(0, p.isTypeableElement)(o)) return;
            } else if (!(0, p.matchesFocusVisible)(o)) return;
          const i = (0, p.isTargetInsideEnabledTrigger)(
              t.relatedTarget,
              a.context.triggerElements,
            ),
            { nativeEvent: s, currentTarget: l } = t,
            c = "function" == typeof r ? r() : r;
          (a.select("open") && i) || 0 === c || void 0 === c
            ? a.setOpen(
                !0,
                (0, f.createChangeEventDetails)(h.REASONS.triggerFocus, s, l),
              )
            : _.start(c, () => {
                v.current ||
                  a.setOpen(
                    !0,
                    (0, f.createChangeEventDetails)(
                      h.REASONS.triggerFocus,
                      s,
                      l,
                    ),
                  );
              });
        },
        onBlur(t) {
          e();
          const n = t.relatedTarget,
            r = t.nativeEvent,
            o =
              (0, u.isElement)(n) &&
              n.hasAttribute((0, d.createAttribute)("focus-guard")) &&
              "outside" === n.getAttribute("data-type");
          _.start(0, () => {
            const e = a.select("domReferenceElement"),
              t = (0, p.activeElement)((0, l.ownerDocument)(e));
            if (!n && t === e) return;
            if (
              (0, p.contains)(
                y.current.floatingContext?.refs.floating.current,
                t,
              ) ||
              (0, p.contains)(e, t) ||
              o
            )
              return;
            const i = n ?? t;
            (0, p.isTargetInsideEnabledTrigger)(i, a.context.triggerElements) ||
              a.setOpen(
                !1,
                (0, f.createChangeEventDetails)(h.REASONS.triggerFocus, r),
              );
          });
        },
      };
    }, [y, r, a, _]);
    return o.useMemo(() => (n ? { reference: x, trigger: x } : {}), [n, x]);
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(23504 /* vendor/module-23504 */),
  a = n(87177 /* vendor/module-87177 */),
  s = n(38592 /* vendor/module-38592 */),
  l = n(854 /* vendor/module-854 */),
  c = n(54807 /* vendor/module-54807 */),
  u = n(81339 /* vendor/module-81339 */),
  d = n(48719 /* vendor/module-48719 */),
  p = n(80475 /* vendor/module-80475 */),
  f = n(22877 /* vendor/module-22877 */),
  h = n(82063 /* vendor/module-82063 */);
const m = a.platform.os.mac && a.platform.engine.webkit;

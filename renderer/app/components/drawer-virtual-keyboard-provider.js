// app/components/drawer-virtual-keyboard-provider.js — webpack module 14501
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.DrawerVirtualKeyboardProvider = function (e) {
    const { children: t } = e,
      { store: n } = (0, u.useDialogRootContext)(),
      r = n.useState("open"),
      b = n.useState("mounted"),
      _ = n.useState("nestedOpenDialogCount"),
      E = n.useState("viewportElement"),
      T = _ > 0,
      k = o.useRef(!1),
      C = o.useRef(null),
      I = o.useRef(null),
      A = o.useRef(null),
      O = (0, l.useAnimationFrame)(),
      R = (0, c.useStableCallback)(() => {
        const e = A.current;
        e &&
          ((e.element.style.overflowAnchor = e.overflowAnchor),
          (e.element.style.paddingBottom = e.paddingBottom),
          (e.element.style.scrollPaddingBottom = e.scrollPaddingBottom),
          (A.current = null));
      }),
      M = (0, c.useStableCallback)((e, t) => {
        const n = Math.max(0, Math.ceil(t));
        let r = A.current;
        if ((r && !r.element.isConnected && (R(), (r = null)), 0 !== n)) {
          if ((r && r.element !== e && (R(), (r = null)), !r)) {
            const t = (0, i.getComputedStyle)(e);
            (r = {
              element: e,
              overflowAnchor: e.style.overflowAnchor,
              paddingBottom: e.style.paddingBottom,
              scrollPaddingBottom: e.style.scrollPaddingBottom,
              computedPaddingBottom: Number.parseFloat(t.paddingBottom) || 0,
              computedScrollPaddingBottom:
                Number.parseFloat(t.scrollPaddingBottom) || 0,
            }),
              (A.current = r);
          }
          (e.style.overflowAnchor = "none"),
            (e.style.paddingBottom = `${r.computedPaddingBottom + n}px`),
            (e.style.scrollPaddingBottom = `${r.computedScrollPaddingBottom + 16}px`);
        } else R();
      }),
      P = (0, c.useStableCallback)((e, t) => {
        const n = (0, s.ownerWindow)(e),
          r = n.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
            ? "auto"
            : "smooth";
        e.scrollTo({ top: t, behavior: r });
      }),
      N = (0, c.useStableCallback)(() => {
        (k.current = !1), (C.current = null);
      });
    o.useEffect(() => {
      if (!b || !r) return (I.current = null), R(), void O.cancel();
      if (!E) return void R();
      const e = (0, s.ownerDocument)(E),
        t = (0, s.ownerWindow)(E),
        n = t.visualViewport,
        o = (e) => {
          E.style.setProperty(
            m.DrawerViewportCssVars.keyboardInset,
            `${Math.max(0, Math.ceil(e))}px`,
          );
        },
        l = () => {
          o(0);
        },
        c = () => {
          (I.current = null), l(), R(), O.cancel();
        },
        u = () => {
          const e = I.current;
          if (T || !e || !(0, p.contains)(E, e)) return l(), void R();
          const n = w(t);
          if (!n) return l(), void R();
          o(
            (function (e, t) {
              return Math.max(0, e.innerHeight - t.bottom);
            })(t, n),
          );
          const r = (function (e, t) {
            const n = (0, i.getParentNode)(e);
            return (
              (0, f.findScrollableTouchTarget)(n, t, "vertical") ??
              (0, f.findScrollableTouchTarget)(n, t, "vertical", !0)
            );
          })(e, E);
          if (!r) return void R();
          if (!r.isConnected || !(0, p.contains)(E, r)) return l(), void R();
          const a = r.getBoundingClientRect(),
            s = Math.min(a.bottom, n.bottom),
            c = Math.max(0, a.bottom - n.bottom);
          M(r, c > 0 ? c + 48 : 0);
          const u = Math.max(0, r.scrollHeight - r.clientHeight);
          if (u <= 0) return;
          const h = Math.max(a.top, n.top) + 16,
            m = s - 16;
          if (m <= h) return;
          const g = e.getBoundingClientRect(),
            y = (g.top + g.bottom) / 2,
            v = (h + m) / 2,
            b = r.scrollTop + y - v;
          P(r, (0, d.clamp)(b, 0, u));
        },
        h = () => {
          O.request(u);
        },
        g = (e) => {
          if (T) return !1;
          const t = x(e);
          return !(!t || !(0, p.contains)(E, t) || ((I.current = t), 0));
        },
        y = () => {
          (I.current || g((0, p.activeElement)(e))) && h();
        },
        v = [];
      return (
        n &&
          v.push(
            (0, a.addEventListener)(n, "resize", y),
            (0, a.addEventListener)(n, "scroll", y),
          ),
        v.push(
          (0, a.addEventListener)(
            e,
            "focusin",
            (e) => {
              g((0, p.getTarget)(e)) && h();
            },
            !0,
          ),
          (0, a.addEventListener)(
            e,
            "focusout",
            (e) => {
              g(e.relatedTarget) ? h() : c();
            },
            !0,
          ),
        ),
        g((0, p.activeElement)(e)) && h(),
        () => {
          v.forEach((e) => e()),
            c(),
            E.style.removeProperty(m.DrawerViewportCssVars.keyboardInset);
        }
      );
    }, [P, O, b, T, r, R, E, M]);
    const D = (0, c.useStableCallback)((e) => {
        if (!r || !b || T) return void N();
        const t = e.touches[0];
        t && ((k.current = !1), (C.current = { x: t.clientX, y: t.clientY }));
      }),
      j = (0, c.useStableCallback)((e) => {
        const t = e.touches[0],
          n = C.current;
        t &&
          n &&
          !k.current &&
          (Math.abs(t.clientX - n.x) > 10 || Math.abs(t.clientY - n.y) > 10) &&
          (k.current = !0);
      }),
      L = (0, c.useStableCallback)((e) => {
        if (!r || !b || T || !E || !C.current || k.current) return void N();
        const t = e.changedTouches[0] ?? e.touches[0],
          n = (0, s.ownerDocument)(e.currentTarget),
          o = (0, p.getTarget)(e.nativeEvent),
          a = t
            ? (function (e, t, n) {
                const r = (0, h.getElementAtPoint)(e, t, n),
                  o = x(r);
                if (o)
                  return {
                    focusTarget: o,
                    clickTarget: (0, i.isHTMLElement)(r) ? r : o,
                  };
                if (
                  (0, p.isInteractiveElement)(r) ||
                  null != r?.closest("label")
                )
                  return S;
                for (const [r, o] of [
                  [0, v],
                  [0, -16],
                  [v, 0],
                  [-16, 0],
                ]) {
                  const i = x((0, h.getElementAtPoint)(e, t + r, n + o));
                  if (i) return { focusTarget: i, clickTarget: i };
                }
                return null;
              })(n, t.clientX, t.clientY)
            : null;
        if (a === S) return void N();
        const l =
          t &&
          (a ??
            (function (e) {
              const t = x(e);
              return t
                ? {
                    focusTarget: t,
                    clickTarget: (0, i.isHTMLElement)(e) ? e : t,
                  }
                : null;
            })(o));
        if (
          !l ||
          ((0, p.contains)(E, l.focusTarget) &&
            (0, p.contains)(E, l.clickTarget))
        ) {
          if (l) {
            const { clickTarget: n, focusTarget: r } = l,
              o = (0, s.ownerWindow)(r);
            return (
              (o.visualViewport && 1 !== o.visualViewport.scale) ||
                ((0, p.activeElement)((0, s.ownerDocument)(r)) === r &&
                  (function (e) {
                    return !e.visualViewport || null != w(e);
                  })(o)) ||
                (e.preventDefault(),
                (function (e) {
                  const t = (0, p.activeElement)((0, s.ownerDocument)(e)) === e,
                    n = e.style.opacity,
                    r = e.style.transform,
                    o = e.style.transition;
                  (e.style.transition = "none"),
                    (e.style.opacity = "0"),
                    (e.style.transform = "translateY(-2000px)");
                  try {
                    t && e.blur(), e.focus({ preventScroll: !0 });
                  } finally {
                    (e.style.opacity = n),
                      (e.style.transform = r),
                      (e.style.transition = o);
                  }
                })(r),
                (function (e, t) {
                  const n = (0, s.ownerWindow)(e),
                    r = n.PointerEvent ?? n.MouseEvent;
                  e.dispatchEvent(
                    new r("click", {
                      bubbles: !0,
                      cancelable: !0,
                      clientX: t.clientX,
                      clientY: t.clientY,
                      detail: 1,
                      view: n,
                    }),
                  );
                })(n, t)),
              void N()
            );
          }
          N();
        } else N();
      }),
      F = o.useMemo(
        () => ({
          onTouchStart: D,
          onTouchMove: j,
          onTouchEnd: L,
          onTouchCancel: N,
        }),
        [L, j, D, N],
      );
    return (0, y.jsx)(g.DrawerVirtualKeyboardContext.Provider, {
      value: F,
      children: t,
    });
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(81339 /* vendor/module-81339 */),
  a = n(23504 /* vendor/module-23504 */),
  s = n(854 /* vendor/module-854 */),
  l = n(57569 /* vendor/module-57569 */),
  c = n(4674 /* vendor/module-4674 */),
  u = n(90498 /* vendor/module-90498 */),
  d = n(41153 /* vendor/module-41153 */),
  p = n(65200 /* vendor/module-65200 */),
  f = n(77324 /* vendor/module-77324 */),
  h = n(71256 /* vendor/module-71256 */),
  m = n(55036 /* vendor/module-55036 */),
  g = n(19805 /* vendor/module-19805 */),
  y = n(31085 /* vendor/module-31085 */);
const v = 16,
  b = new Set(["email", "number", "password", "search", "tel", "text", "url"]),
  S = Symbol("KeyboardTapBlocked");
function _(e) {
  if (e.isContentEditable) return !0;
  const t = (0, s.ownerWindow)(e);
  return (
    !!(
      e instanceof t.HTMLTextAreaElement ||
      (e instanceof t.HTMLInputElement && b.has(e.type))
    ) && !e.matches(":disabled")
  );
}
function x(e) {
  if (!(0, i.isHTMLElement)(e)) return null;
  if (_(e))
    return e.isContentEditable
      ? (function (e) {
          let t = e;
          for (; t.parentElement?.isContentEditable; ) t = t.parentElement;
          return t;
        })(e)
      : e;
  const t = e.closest("label"),
    n = t?.control ?? null;
  return (0, i.isHTMLElement)(n) && _(n) ? n : null;
}
function w(e) {
  const t = e.visualViewport;
  if (!t || 1 !== t.scale) return null;
  if (e.innerHeight - t.height <= 60) return null;
  const n = Math.max(0, t.offsetTop);
  return { top: n, bottom: Math.min(e.innerHeight, n + t.height) };
}

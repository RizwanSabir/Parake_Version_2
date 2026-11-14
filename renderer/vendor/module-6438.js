// vendor/module-6438.js — webpack module 6438
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.DrawerSwipeArea = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(4674 /* vendor/module-4674 */),
  a = n(54807 /* vendor/module-54807 */),
  s = n(90498 /* vendor/module-90498 */),
  l = n(51909 /* vendor/module-51909 */),
  c = n(22877 /* vendor/module-22877 */),
  u = n(82063 /* vendor/module-82063 */),
  d = n(13652 /* vendor/module-13652 */),
  p = n(51244 /* vendor/module-51244 */),
  f = n(16072 /* vendor/module-16072 */),
  h = n(86424 /* vendor/module-86424 */),
  m = n(14714 /* vendor/module-14714 */),
  g = n(33115 /* vendor/module-33115 */),
  y = n(94661 /* vendor/module-94661 */),
  v = n(17452 /* vendor/module-17452 */),
  b = n(36579 /* vendor/module-36579 */);
const S = { [b.DrawerSwipeAreaDataAttributes.open]: "" },
  _ = { [b.DrawerSwipeAreaDataAttributes.closed]: "" },
  x = { [b.DrawerSwipeAreaDataAttributes.swiping]: "" },
  w = { [b.DrawerSwipeAreaDataAttributes.disabled]: "" },
  E = {
    open: (e) => (e ? S : _),
    swiping: (e) => (e ? x : null),
    swipeDirection: (e) =>
      e ? { [b.DrawerSwipeAreaDataAttributes.swipeDirection]: e } : null,
    disabled: (e) => (e ? w : null),
  },
  T = { up: "down", down: "up", left: "right", right: "left" };
t.DrawerSwipeArea = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      style: b,
      disabled: S = !1,
      swipeDirection: _,
      ...x
    } = e,
    { store: w } = (0, s.useDialogRootContext)(),
    { swipeDirection: k, frontmostHeight: C } = (0, m.useDrawerRootContext)(),
    I = (0, v.useDrawerProviderContext)(!0),
    [A, O] = o.useState(!1),
    R = (0, a.useTimeout)(),
    M = o.useRef(null),
    P = o.useRef(null),
    N = o.useRef(!1),
    D = o.useRef({ x: 0, y: 0 }),
    j = o.useRef(null),
    L = o.useRef(!1),
    F = o.useRef(null),
    U = (0, g.useBaseUiId)(e.id),
    B = (0, y.useTriggerRegistration)(U, w),
    z = w.useState("open"),
    H = (0, i.useStableCallback)(() => {
      (D.current.x = 0), (D.current.y = 0);
    }),
    V = _ ?? T[k],
    q = T[V],
    G = !S && (!z || A);
  function W() {
    const e = w.context.popupRef.current;
    if (!e) return null;
    const t = "left" === q || "right" === q ? e.offsetWidth : e.offsetHeight;
    return t <= 0 ? null : t;
  }
  const $ = (0, i.useStableCallback)(() => {
    const e = w.context.popupRef.current;
    e &&
      L.current &&
      (e.style.removeProperty(p.DrawerPopupCssVars.swipeMovementX),
      e.style.removeProperty(p.DrawerPopupCssVars.swipeMovementY),
      e.removeAttribute(f.DrawerPopupDataAttributes.swiping)),
      e &&
        null !== F.current &&
        ((e.style.transition = F.current), (F.current = null));
    const t = w.context.backdropRef.current;
    t &&
      (t.removeAttribute(f.DrawerPopupDataAttributes.swiping),
      t.style.setProperty(h.DrawerBackdropCssVars.swipeProgress, "0"),
      t.style.removeProperty(p.DrawerPopupCssVars.height)),
      I?.visualStateStore.set({
        swipeProgress: 0,
        frontmostHeight: 0,
      }),
      (L.current = !1);
  });
  function Y(e) {
    w.select("open") ||
      ((N.current = !0),
      w.setOpen(
        !0,
        (0, c.createChangeEventDetails)(
          u.REASONS.swipe,
          e,
          M.current ?? void 0,
        ),
      ));
  }
  function K() {
    (P.current = null), (N.current = !1), (j.current = null), O(!1);
  }
  function Z() {
    K(),
      R.start(0, () => {
        w.context.outsidePressEnabledRef.current = !0;
      }),
      H(),
      $();
  }
  const Q = (0, d.useSwipeDismiss)({
      enabled: G,
      directions: [V],
      elementRef: M,
      trackDrag: !1,
      movementCssVars: {
        x: p.DrawerPopupCssVars.swipeMovementX,
        y: p.DrawerPopupCssVars.swipeMovementY,
      },
      onSwipeStart(e) {
        R.clear(),
          (w.context.outsidePressEnabledRef.current = !1),
          (P.current = e),
          (N.current = !1),
          O(!0),
          H();
      },
      onProgress(e, t) {
        t &&
          P.current &&
          ((D.current.x = t.deltaX),
          (D.current.y = t.deltaY),
          t.direction === V &&
            (((0, d.getDisplacement)(V, t.deltaX, t.deltaY) < 1 &&
              !N.current) ||
              (N.current || Y(P.current),
              (function () {
                if (!A) return;
                const e = w.context.popupRef.current;
                if (!e) return;
                if (!w.select("open") || !w.select("mounted")) return;
                null == j.current &&
                  (j.current = (function () {
                    const e = W();
                    if (null == e) return null;
                    const t = w.context.popupRef.current;
                    if (!t) return e;
                    const n = "left" === q || "right" === q,
                      r = (0, d.getElementTransform)(t),
                      o = n ? r.x : r.y;
                    return Number.isFinite(o) && Math.abs(o) > 0.5
                      ? Math.min(e, Math.abs(o))
                      : e;
                  })());
                const t = j.current;
                if (!t || !Number.isFinite(t) || t <= 0) return;
                const { x: n, y: r } = D.current,
                  o = (0, d.getDisplacement)(V, n, r),
                  i = Math.max(0, o),
                  a =
                    (t - (i > t ? t + Math.sqrt(i - t) : i)) *
                    ("left" === q || "up" === q ? -1 : 1),
                  s = "left" === q || "right" === q,
                  l = s ? a : 0,
                  c = s ? 0 : a,
                  u = Math.max(0, Math.min(1, i / t)),
                  m = Math.max(0, Math.min(1, 1 - u));
                e.style.setProperty(
                  p.DrawerPopupCssVars.swipeMovementX,
                  `${l}px`,
                ),
                  e.style.setProperty(
                    p.DrawerPopupCssVars.swipeMovementY,
                    `${c}px`,
                  ),
                  e.setAttribute(f.DrawerPopupDataAttributes.swiping, ""),
                  null === F.current && (F.current = e.style.transition),
                  (e.style.transition = "none");
                const g = w.context.backdropRef.current;
                g &&
                  (g.setAttribute(f.DrawerPopupDataAttributes.swiping, ""),
                  g.style.setProperty(
                    h.DrawerBackdropCssVars.swipeProgress,
                    `${m}`,
                  ),
                  u > 0 && C > 0
                    ? g.style.setProperty(p.DrawerPopupCssVars.height, `${C}px`)
                    : g.style.removeProperty(p.DrawerPopupCssVars.height)),
                  I?.visualStateStore.set({
                    swipeProgress: u,
                    frontmostHeight: u > 0 ? C : 0,
                  }),
                  (L.current = !0);
              })())));
      },
      onRelease({
        event: e,
        direction: t,
        deltaX: n,
        deltaY: r,
        releaseVelocityX: o,
        releaseVelocityY: i,
      }) {
        const a = (0, d.getDisplacement)(V, n, r),
          s = (0, d.getDisplacement)(V, o, i),
          l = (function () {
            const e = W();
            return null == e ? 40 : 0.5 * e;
          })();
        return (
          null != l && t === V && ((null != l && a >= l) || s >= 0.1) && !S
            ? w.select("open") || Y(e)
            : N.current &&
              (function (e) {
                w.select("open") &&
                  w.setOpen(
                    !1,
                    (0, c.createChangeEventDetails)(
                      u.REASONS.swipe,
                      e,
                      M.current ?? void 0,
                    ),
                  );
              })(e),
          Z(),
          !1
        );
      },
      onCancel: Z,
    }),
    J = Q.getPointerProps(),
    X = Q.getTouchProps(),
    ee = Q.reset;
  o.useEffect(() => {
    G || (ee(), H(), $(), K());
  }, [$, G, H, ee]),
    o.useEffect(
      () => () => {
        w.context.outsidePressEnabledRef.current = !0;
      },
      [w],
    );
  const te = {
    open: z,
    swiping: Q.swiping,
    swipeDirection: V,
    disabled: S,
  };
  return (0, l.useRenderElement)("div", e, {
    state: te,
    ref: [t, M, B],
    stateAttributesMapping: E,
    props: [
      {
        role: "presentation",
        "aria-hidden": !0,
        style: {
          pointerEvents: G ? void 0 : "none",
          touchAction:
            ((ne = V), "left" === ne || "right" === ne ? "pan-y" : "pan-x"),
        },
        onPointerDown(e) {
          "touch" !== e.pointerType &&
            (J.onPointerDown?.(e), e.cancelable && e.preventDefault());
        },
        onPointerMove(e) {
          "touch" !== e.pointerType && J.onPointerMove?.(e);
        },
        onPointerUp(e) {
          "touch" !== e.pointerType && J.onPointerUp?.(e);
        },
        onPointerCancel(e) {
          "touch" !== e.pointerType && J.onPointerCancel?.(e);
        },
      },
      X,
      U ? { id: U } : void 0,
      x,
    ],
  });
  var ne;
});

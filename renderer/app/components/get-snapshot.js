// app/components/get-snapshot.js — webpack module 58225
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.DrawerRoot = function (e) {
    const {
        children: t,
        open: n,
        defaultOpen: r = !1,
        onOpenChange: s,
        onOpenChangeComplete: u,
        disablePointerDismissal: d = !1,
        modal: p = !0,
        actionsRef: v,
        handle: x,
        triggerId: w,
        defaultTriggerId: E = null,
        swipeDirection: T = "down",
        snapToSequentialPoints: k = !1,
        snapPoints: C,
        snapPoint: I,
        defaultSnapPoint: A,
        onSnapPointChange: O,
      } = e,
      R = (0, f.useDrawerRootContext)(!0),
      M = R?.onNestedSwipeProgressChange,
      P = R?.onNestedFrontmostHeightChange,
      N = R?.onNestedSwipingChange,
      D = R?.onNestedDrawerPresenceChange,
      [j, L] = a.useState(0),
      [F, U] = a.useState(0),
      [B, z] = a.useState(!1),
      [H, V] = a.useState(!1),
      [q] = a.useState(S),
      G = void 0 !== A ? A : (C?.[0] ?? null),
      W = void 0 !== I,
      [$, Y] = (0, l.useControlled)({
        controlled: I,
        default: G,
        name: "Drawer",
        state: "snapPoint",
      }),
      K = a.useRef(!1),
      Z = (0, c.useStableCallback)((e, t) => {
        const n = t ?? (0, m.createChangeEventDetails)(g.REASONS.none);
        O?.(e, n), n.isCanceled || Y(e);
      }),
      Q = a.useMemo(
        () =>
          W
            ? $
            : C && 0 !== C.length
              ? null !== $ && C.some((e) => Object.is(e, $))
                ? $
                : G
              : $,
        [$, W, G, C],
      ),
      J = (0, c.useStableCallback)((e) => {
        L(e), !K.current && e > 0 && U(e);
      }),
      X = (0, c.useStableCallback)((e) => {
        if (e > 0) return (K.current = !0), void U(e);
        (K.current = !1), j > 0 && U(j);
      }),
      ee = (0, c.useStableCallback)((e) => {
        z(e);
      }),
      te = (0, c.useStableCallback)((e) => {
        q.set(e), M?.(e);
      }),
      ne = (0, c.useStableCallback)((e) => {
        V(e), N?.(e);
      }),
      re = (0, c.useStableCallback)((e, t) => {
        s?.(e, t),
          t.isCanceled ||
            (!e &&
              C &&
              C.length > 0 &&
              Z(
                G,
                (0, m.createChangeEventDetails)(t.reason, t.event, t.trigger),
              ));
      }),
      oe = a.useMemo(
        () => ({
          swipeDirection: T,
          snapToSequentialPoints: k,
          snapPoints: C,
          activeSnapPoint: Q,
          setActiveSnapPoint: Z,
          frontmostHeight: F,
          popupHeight: j,
          hasNestedDrawer: B,
          nestedSwiping: H,
          nestedSwipeProgressStore: q,
          onNestedDrawerPresenceChange: ee,
          onPopupHeightChange: J,
          onNestedFrontmostHeightChange: X,
          onNestedSwipingChange: ne,
          onNestedSwipeProgressChange: te,
          notifyParentFrontmostHeight: P,
          notifyParentSwipingChange: N,
          notifyParentSwipeProgressChange: M,
          notifyParentHasNestedDrawer: D,
        }),
        [Q, F, B, H, q, D, M, N, P, ee, X, te, ne, J, j, Z, C, k, T],
      ),
      ie =
        "function" == typeof t
          ? (e) =>
              (0, b.jsxs)(a.Fragment, {
                children: [o || (o = (0, b.jsx)(_, {})), t(e)],
              })
          : (0, b.jsxs)(a.Fragment, {
              children: [i || (i = (0, b.jsx)(_, {})), t],
            });
    return (0, b.jsx)(f.DrawerRootContext.Provider, {
      value: oe,
      children: (0, b.jsx)(y.IsDrawerContext.Provider, {
        value: !0,
        children: (0, b.jsx)(h.Dialog.Root, {
          open: n,
          defaultOpen: r,
          onOpenChange: re,
          onOpenChangeComplete: u,
          disablePointerDismissal: d,
          modal: p,
          actionsRef: v,
          handle: x,
          triggerId: w,
          defaultTriggerId: E,
          children: ie,
        }),
      }),
    });
  });
var o,
  i,
  a = r(n(14041 /* vendor/module-14041 */)),
  s = n(23504 /* vendor/module-23504 */),
  l = n(95836 /* vendor/module-95836 */),
  c = n(4674 /* vendor/module-4674 */),
  u = n(854 /* vendor/module-854 */),
  d = n(87177 /* vendor/module-87177 */),
  p = n(28991 /* vendor/module-28991 */),
  f = n(14714 /* vendor/module-14714 */),
  h = n(77948 /* vendor/module-77948 */),
  m = n(22877 /* vendor/module-22877 */),
  g = n(82063 /* vendor/module-82063 */),
  y = n(90498 /* vendor/module-90498 */),
  v = n(17452 /* vendor/module-17452 */),
  b = n(31085 /* vendor/module-31085 */);
function S() {
  let e = 0;
  const t = new Set();
  return {
    getSnapshot: () => e,
    set(n) {
      const r = Number.isFinite(n) ? n : 0;
      r !== e &&
        ((e = r),
        t.forEach((e) => {
          e();
        }));
    },
    subscribe: (e) => (
      t.add(e),
      () => {
        t.delete(e);
      }
    ),
  };
}
function _() {
  const e = (0, p.useId)(),
    t = (0, v.useDrawerProviderContext)(!0),
    { store: n } = (0, y.useDialogRootContext)(!1),
    r = n.useState("open"),
    o = n.useState("nestedOpenDialogCount"),
    i = n.useState("popupElement"),
    l = 0 === o;
  return (
    a.useEffect(() => {
      if (t && null != e)
        return () => {
          t.removeDrawer(e);
        };
    }, [e, t]),
    a.useEffect(() => {
      null != e && t?.setDrawerOpen(e, r);
    }, [e, r, t]),
    a.useEffect(() => {
      if (!r || !l || !d.platform.os.android) return;
      const e = (0, u.ownerWindow)(i).CloseWatcher;
      if (!e) return;
      const t = new e(),
        o = (0, s.addEventListener)(t, "close", function (e) {
          n.select("open") &&
            n.setOpen(
              !1,
              (0, m.createChangeEventDetails)(g.REASONS.closeWatcher, e),
            );
        });
      return () => {
        o(), t.destroy();
      };
    }, [n, l, r, i]),
    null
  );
}

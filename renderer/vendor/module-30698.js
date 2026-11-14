// vendor/module-30698.js — webpack module 30698
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.DialogInteractions = function ({
    store: e,
    parentContext: t,
    isDrawer: n,
  }) {
    const r = e.useState("open"),
      c = e.useState("disablePointerDismissal"),
      u = e.useState("modal"),
      p = e.useState("popupElement"),
      f = e.useState("floatingRootContext"),
      [h, m] = o.useState(0),
      [g, y] = o.useState(0),
      v = 0 === h,
      b = (0, s.useDismiss)(f, {
        outsidePressEvent: () =>
          e.context.internalBackdropRef.current || e.context.backdropRef.current
            ? "intentional"
            : {
                mouse: "trap-focus" === u ? "sloppy" : "intentional",
                touch: "sloppy",
              },
        outsidePress(t) {
          if (!e.context.outsidePressEnabledRef.current) return !1;
          if ("button" in t && 0 !== t.button) return !1;
          if ("touches" in t && 1 !== t.touches.length) return !1;
          const n = (0, l.getTarget)(t);
          return (
            !(!v || c) &&
            (!u ||
              (!e.context.internalBackdropRef.current &&
                !e.context.backdropRef.current) ||
              e.context.internalBackdropRef.current === n ||
              e.context.backdropRef.current === n ||
              ((0, l.contains)(n, p) &&
                !n?.hasAttribute("data-base-ui-portal")))
          );
        },
        escapeKey: v,
      });
    (0, i.useScrollLock)(r && !0 === u, p),
      e.useContextCallback("onNestedDialogOpen", (e, t) => {
        m(e), y(t);
      }),
      e.useContextCallback("onNestedDialogClose", () => {
        m(0), y(0);
      }),
      o.useEffect(
        () => (
          t?.onNestedDialogOpen &&
            r &&
            t.onNestedDialogOpen(h + 1, g + (n ? 1 : 0)),
          t?.onNestedDialogClose && !r && t.onNestedDialogClose(),
          () => {
            t?.onNestedDialogClose && r && t.onNestedDialogClose();
          }
        ),
        [n, r, h, g, t],
      );
    const S = b.reference ?? a.EMPTY_OBJECT,
      _ = b.trigger ?? a.EMPTY_OBJECT,
      x = b.floating ?? a.EMPTY_OBJECT;
    return (
      (0, d.usePopupInteractionProps)(e, {
        activeTriggerProps: S,
        inactiveTriggerProps: _,
        popupProps: x,
        nestedOpenDialogCount: h,
        nestedOpenDrawerCount: g,
      }),
      null
    );
  }),
  (t.useDialogRoot = function (e) {
    const { store: t, actionsRef: n } = e,
      r = t.useState("open");
    (0, d.usePopupRootSync)(t, r), (0, d.useImplicitActiveTrigger)(t);
    const { forceUnmount: i } = (0, d.useOpenStateTransitions)(r, t),
      a = o.useCallback(() => {
        t.setOpen(
          !1,
          (0, c.createChangeEventDetails)(u.REASONS.imperativeAction),
        );
      }, [t]);
    o.useImperativeHandle(n, () => ({ unmount: i, close: a }), [i, a]);
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(43976 /* vendor/module-43976 */),
  a = n(38340 /* vendor/module-38340 */),
  s = n(47797 /* vendor/module-47797 */),
  l = n(65200 /* vendor/module-65200 */),
  c = n(22877 /* vendor/module-22877 */),
  u = n(82063 /* vendor/module-82063 */),
  d = n(94661 /* vendor/module-94661 */);

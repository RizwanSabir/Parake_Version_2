// vendor/module-37890.js — webpack module 37890
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useRenderDialogRoot = function (e, t = "dialog") {
    const {
        children: n,
        open: r,
        defaultOpen: u = !1,
        onOpenChange: d,
        onOpenChangeComplete: p,
        disablePointerDismissal: f = !1,
        modal: h = !0,
        actionsRef: m,
        handle: g,
        triggerId: y,
        defaultTriggerId: v = null,
      } = e,
      b = "drawer" === t,
      S = "alert-dialog" === t,
      _ = !!S || h,
      x = S || f,
      w = S ? "alertdialog" : "dialog",
      E = (0, s.useDialogRootContext)(!0),
      T = {
        modal: _,
        disablePointerDismissal: x,
        nested: Boolean(E),
        role: w,
      },
      k = l.DialogStore.useStore(g?.store, {
        open: u,
        openProp: r,
        activeTriggerId: v,
        triggerIdProp: y,
        ...T,
      });
    (0, i.useOnFirstRender)(() => {
      const e =
        void 0 === r && !1 === k.state.open && !0 === u
          ? { open: !0, activeTriggerId: v }
          : null;
      S ? k.update(e ? { ...T, ...e } : T) : e && k.update(e);
    }),
      k.useControlledProp("openProp", r),
      k.useControlledProp("triggerIdProp", y),
      k.useSyncedValues(T),
      k.useContextCallback("onOpenChange", d),
      k.useContextCallback("onOpenChangeComplete", p);
    const C = k.useState("open"),
      I = k.useState("mounted"),
      A = k.useState("payload");
    (0, a.useDialogRoot)({ store: k, actionsRef: m });
    const O = C || I,
      R = o.useMemo(() => ({ store: k }), [k]);
    return (0, c.jsx)(s.IsDrawerContext.Provider, {
      value: !1,
      children: (0, c.jsxs)(s.DialogRootContext.Provider, {
        value: R,
        children: [
          O &&
            (0, c.jsx)(a.DialogInteractions, {
              store: k,
              parentContext: E?.store.context,
              isDrawer: b,
            }),
          "function" == typeof n ? n({ payload: A }) : n,
        ],
      }),
    });
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(30101 /* vendor/module-30101 */),
  a = n(30698 /* vendor/module-30698 */),
  s = n(90498 /* vendor/module-90498 */),
  l = n(9187 /* vendor/module-9187 */),
  c = n(31085 /* vendor/module-31085 */);

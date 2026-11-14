// vendor/module-57871.js — webpack module 57871
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.TabsTab = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(854 /* vendor/module-854 */),
  a = n(57122 /* vendor/module-57122 */),
  s = n(33115 /* vendor/module-33115 */),
  l = n(51909 /* vendor/module-51909 */),
  c = n(63917 /* vendor/module-63917 */),
  u = n(8647 /* vendor/module-8647 */),
  d = n(73063 /* vendor/module-73063 */),
  p = n(28562 /* vendor/module-28562 */),
  f = n(73527 /* vendor/module-73527 */),
  h = n(43206 /* vendor/module-43206 */),
  m = n(22877 /* vendor/module-22877 */),
  g = n(82063 /* vendor/module-82063 */),
  y = n(65200 /* vendor/module-65200 */);
t.TabsTab = o.forwardRef(function (e, t) {
  const {
      className: n,
      disabled: r = !1,
      render: v,
      value: b,
      id: S,
      nativeButton: _ = !0,
      style: x,
      ...w
    } = e,
    {
      value: E,
      getTabPanelIdByValue: T,
      orientation: k,
      tabActivationDirection: C,
    } = (0, p.useTabsRootContext)(),
    {
      activateOnFocus: I,
      highlightedTabIndex: A,
      onTabActivation: O,
      registerTabResizeObserverElement: R,
      setHighlightedTabIndex: M,
      tabsListElement: P,
    } = (0, h.useTabsListContext)(),
    N = (0, s.useBaseUiId)(S),
    D = o.useMemo(() => ({ disabled: r, id: N, value: b }), [r, N, b]),
    {
      compositeProps: j,
      compositeRef: L,
      index: F,
    } = (0, d.useCompositeItem)({ metadata: D }),
    U = b === E,
    B = o.useRef(!1),
    z = o.useRef(null);
  (0, a.useIsoLayoutEffect)(() => {
    const e = z.current;
    if (e) return R(e);
  }, [R]),
    (0, a.useIsoLayoutEffect)(() => {
      if (B.current) return void (B.current = !1);
      if (!(U && F > -1 && A !== F)) return;
      const e = P;
      if (null != e) {
        const t = (0, y.activeElement)((0, i.ownerDocument)(e));
        if (t && (0, y.contains)(e, t)) return;
      }
      r || M(F);
    }, [U, F, A, M, r, P]);
  const { getButtonProps: H, buttonRef: V } = (0, c.useButton)({
      disabled: r,
      native: _,
      focusableWhenDisabled: !0,
    }),
    q = T(b),
    G = o.useRef(!1),
    W = o.useRef(!1),
    $ = {
      disabled: r,
      active: U,
      orientation: k,
      tabActivationDirection: C,
    };
  return (0, l.useRenderElement)("button", e, {
    state: $,
    ref: [t, V, L, z],
    props: [
      j,
      {
        role: "tab",
        "aria-controls": q,
        "aria-selected": U,
        id: N,
        onClick: function (e) {
          U ||
            r ||
            O(
              b,
              (0, m.createChangeEventDetails)(
                g.REASONS.none,
                e.nativeEvent,
                void 0,
                { activationDirection: "none" },
              ),
            );
        },
        onFocus: function (e) {
          U ||
            (F > -1 && !r && M(F),
            r ||
              (I &&
                (!G.current || (G.current && W.current)) &&
                O(
                  b,
                  (0, m.createChangeEventDetails)(
                    g.REASONS.none,
                    e.nativeEvent,
                    void 0,
                    { activationDirection: "none" },
                  ),
                )));
        },
        onPointerDown: function (e) {
          U ||
            r ||
            ((G.current = !0), e.button && 0 !== e.button) ||
            ((W.current = !0),
            (0, i.ownerDocument)(e.currentTarget).addEventListener(
              "pointerup",
              function () {
                (G.current = !1), (W.current = !1);
              },
              { once: !0 },
            ));
        },
        [u.ACTIVE_COMPOSITE_ITEM]: U ? "" : void 0,
        onKeyDownCapture() {
          B.current = !0;
        },
      },
      w,
      H,
    ],
    stateAttributesMapping: f.tabsStateAttributesMapping,
  });
});

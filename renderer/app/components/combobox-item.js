// app/components/combobox-item.js — webpack module 46923
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxItem = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = r(n(43144 /* vendor/module-43144 */)),
  a = n(78207 /* vendor/module-78207 */),
  s = n(57122 /* vendor/module-57122 */),
  l = n(32118 /* vendor/module-32118 */),
  c = n(33770 /* vendor/module-33770 */),
  u = n(51909 /* vendor/module-51909 */),
  d = n(94756 /* vendor/module-94756 */),
  p = n(36826 /* vendor/module-36826 */),
  f = n(63917 /* vendor/module-63917 */),
  h = n(28490 /* vendor/module-28490 */),
  m = n(68323 /* vendor/module-68323 */),
  g = n(31085 /* vendor/module-31085 */);
function y(e) {
  const {
      componentProps: t,
      forwardedRef: n,
      virtualized: r,
      indexFromFilter: y,
    } = e,
    {
      render: v,
      className: b,
      style: S,
      value: _ = null,
      index: x,
      disabled: w = !1,
      nativeButton: E = !1,
      ...T
    } = t,
    k = o.useRef(!1),
    C = o.useRef(null),
    I = (0, c.useCompositeListItem)({
      index: x,
      textRef: C,
      indexGuessBehavior: c.IndexGuessBehavior.GuessFromOrder,
    }),
    A = (0, l.useComboboxRootContext)(),
    O = (0, h.useComboboxRowContext)(),
    R = (0, l.useComboboxHasItemsContext)(),
    M = (0, a.useStore)(A, p.selectors.open),
    P = (0, a.useStore)(A, p.selectors.selectionMode),
    N = (0, a.useStore)(A, p.selectors.readOnly),
    D = (0, a.useStore)(A, p.selectors.isItemEqualToValue),
    j = "none" !== P,
    L = x ?? (r ? (y ?? -1) : I.index),
    F = -1 !== I.index,
    U = (0, a.useStore)(A, p.selectors.id),
    B = (0, a.useStore)(A, p.selectors.isActive, L),
    z = (0, a.useStore)(A, p.selectors.isSelected, _),
    H = (0, a.useStore)(A, p.selectors.itemProps),
    V = o.useRef(null),
    q = null != U && F ? `${U}-${L}` : void 0,
    G = z && j;
  (0, s.useIsoLayoutEffect)(() => {
    if (!F || (!r && null == x)) return;
    const e = A.state.listRef.current;
    return (
      (e[L] = V.current),
      () => {
        delete e[L];
      }
    );
  }, [F, r, L, x, A]),
    (0, s.useIsoLayoutEffect)(() => {
      if (!F || R) return;
      const e = A.state.valuesRef.current;
      return (
        (e[L] = _),
        "none" !== P && A.state.allValuesRef.current.push(_),
        () => {
          delete e[L];
        }
      );
    }, [F, R, L, _, A, P]),
    (0, s.useIsoLayoutEffect)(() => {
      if (!M) return void (k.current = !1);
      if (!F || R) return;
      const e = A.state.selectedValue,
        t = Array.isArray(e) ? e[e.length - 1] : e;
      (0, m.compareItemEquality)(_, t, D) && A.set("selectedIndex", L);
    }, [F, R, M, A, L, _, D]);
  const { getButtonProps: W, buttonRef: $ } = (0, f.useButton)({
      disabled: w,
      focusableWhenDisabled: !0,
      native: E,
      composite: !0,
    }),
    Y = { disabled: w, selected: G, highlighted: B };
  function K(e) {
    function t() {
      A.state.handleSelection(e, _);
    }
    A.state.submitOnItemClick ? (i.flushSync(t), A.state.requestSubmit()) : t();
  }
  const Z = {
      id: q,
      role: O ? "gridcell" : "option",
      "aria-selected": j ? G : void 0,
      tabIndex: void 0,
      onPointerDownCapture(e) {
        (k.current = !0), e.preventDefault();
      },
      onMouseDown(e) {
        e.preventDefault();
      },
      onClick(e) {
        w || N || K(e.nativeEvent);
      },
      onMouseUp(e) {
        const t = k.current;
        (k.current = !1),
          w || N || 0 !== e.button || t || !B || K(e.nativeEvent);
      },
    },
    Q = (0, u.useRenderElement)("div", t, {
      ref: [$, n, I.ref, V],
      state: Y,
      props: [H, Z, T, W],
    }),
    J = o.useMemo(() => ({ selected: G, textRef: C }), [G, C]);
  return (0, g.jsx)(d.ComboboxItemContext.Provider, {
    value: J,
    children: Q,
  });
}
function v(e) {
  const { componentProps: t, forwardedRef: n } = e,
    r = (0, l.useComboboxRootContext)(),
    o = (0, a.useStore)(r, p.selectors.isItemEqualToValue),
    { flatFilteredItems: i } = (0, l.useComboboxDerivedItemsContext)(),
    s = (0, m.findItemIndex)(i, t.value ?? null, o);
  return (0, g.jsx)(y, {
    componentProps: t,
    forwardedRef: n,
    virtualized: !0,
    indexFromFilter: s,
  });
}
t.ComboboxItem = o.memo(
  o.forwardRef(function (e, t) {
    const n = (0, l.useComboboxRootContext)(),
      r = (0, a.useStore)(n, p.selectors.virtualized);
    return r && null == e.index
      ? (0, g.jsx)(v, { componentProps: e, forwardedRef: t })
      : (0, g.jsx)(y, {
          componentProps: e,
          forwardedRef: t,
          virtualized: r,
          indexFromFilter: void 0,
        });
  }),
);

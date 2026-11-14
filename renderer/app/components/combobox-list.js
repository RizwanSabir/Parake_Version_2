// app/components/combobox-list.js — webpack module 48301
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxList = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(78207 /* vendor/module-78207 */),
  a = n(4674 /* vendor/module-4674 */),
  s = n(51909 /* vendor/module-51909 */),
  l = n(32118 /* vendor/module-32118 */),
  c = n(95350 /* vendor/module-95350 */),
  u = n(36826 /* vendor/module-36826 */),
  d = n(13093 /* vendor/module-13093 */),
  p = n(77144 /* app/components/composite-list */),
  f = n(65200 /* vendor/module-65200 */),
  h = n(31085 /* vendor/module-31085 */);
t.ComboboxList = o.forwardRef(function (e, t) {
  var n;
  const { render: r, className: m, style: g, children: y, ...v } = e,
    b = (0, l.useComboboxRootContext)(),
    S = (0, l.useComboboxFloatingContext)(),
    _ = Boolean((0, c.useComboboxPositionerContext)(!0)),
    { filteredItems: x, hasItems: w } = (0, l.useComboboxDerivedItemsContext)(),
    E = (0, i.useStore)(b, u.selectors.selectionMode),
    T = (0, i.useStore)(b, u.selectors.grid),
    k = (0, i.useStore)(b, u.selectors.popupProps),
    C = (0, i.useStore)(b, u.selectors.virtualized),
    I = (0, i.useStore)(b, u.selectors.forceMounted),
    A = "multiple" === E,
    O = 0 === x.length,
    R = (0, a.useStableCallback)((e) => {
      b.set("positionerElement", e);
    }),
    M = (0, a.useStableCallback)((e) => {
      b.set("listElement", e);
    }),
    P = o.useMemo(
      () =>
        "function" == typeof y
          ? n || (n = (0, h.jsx)(d.ComboboxCollection, { children: y }))
          : y,
      [y],
    ),
    N = { empty: O },
    D = S.useState("floatingId"),
    j = (0, s.useRenderElement)("div", e, {
      state: N,
      ref: [t, M, _ ? null : R],
      props: [
        k,
        {
          children: P,
          tabIndex: -1,
          id: D,
          role: T ? "grid" : "listbox",
          "aria-multiselectable": A ? "true" : void 0,
          onKeyDown(e) {
            if (!b.state.disabled && !b.state.readOnly && "Enter" === e.key) {
              const t = b.state.activeIndex;
              if (null == t) return;
              (0, f.stopEvent)(e);
              const n = e.nativeEvent,
                r = b.state.listRef.current[t];
              r &&
                ((b.state.selectionEventRef.current = n),
                r.click(),
                (b.state.selectionEventRef.current = null));
            }
          },
          onKeyDownCapture() {
            b.state.keyboardActiveRef.current = !0;
          },
          onPointerMoveCapture() {
            b.state.keyboardActiveRef.current = !1;
          },
        },
        v,
      ],
    });
  if (C) return j;
  const L = w && !I ? void 0 : b.state.labelsRef;
  return (0, h.jsx)(p.CompositeList, {
    elementsRef: b.state.listRef,
    labelsRef: L,
    children: j,
  });
});

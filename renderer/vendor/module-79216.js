// vendor/module-79216.js — webpack module 79216
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.CompositeRoot = function (e) {
    const {
        render: t,
        className: n,
        style: r,
        refs: p = i.EMPTY_ARRAY,
        props: f = i.EMPTY_ARRAY,
        state: h = i.EMPTY_OBJECT,
        stateAttributesMapping: m,
        highlightedIndex: g,
        onHighlightedIndexChange: y,
        orientation: v,
        grid: b,
        loopFocus: S,
        onLoop: _,
        enableHomeAndEndKeys: x,
        onMapChange: w,
        stopEventPropagation: E = !0,
        rootRef: T,
        disabledIndices: k,
        modifierKeys: C,
        highlightItemOnHover: I = !1,
        tag: A = "div",
        ...O
      } = e,
      R = (0, u.useDirection)(),
      {
        props: M,
        highlightedIndex: P,
        onHighlightedIndexChange: N,
        elementsRef: D,
        onMapChange: j,
        relayKeyboardEvent: L,
      } = (0, s.useCompositeRoot)({
        grid: b,
        loopFocus: S,
        onLoop: _,
        orientation: v,
        highlightedIndex: g,
        onHighlightedIndexChange: y,
        rootRef: T,
        stopEventPropagation: E,
        enableHomeAndEndKeys: x,
        direction: R,
        disabledIndices: k,
        modifierKeys: C,
      }),
      F = (0, c.useRenderElement)(A, e, {
        state: h,
        ref: p,
        props: [M, ...f, O],
        stateAttributesMapping: m,
      }),
      U = o.useMemo(
        () => ({
          highlightedIndex: P,
          onHighlightedIndexChange: N,
          highlightItemOnHover: I,
          relayKeyboardEvent: L,
        }),
        [P, N, I, L],
      );
    return (0, d.jsx)(l.CompositeRootContext.Provider, {
      value: U,
      children: (0, d.jsx)(a.CompositeList, {
        elementsRef: D,
        onMapChange: (e) => {
          w?.(e), j(e);
        },
        children: F,
      }),
    });
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(38340 /* vendor/module-38340 */),
  a = n(77144 /* app/components/composite-list */),
  s = n(50009 /* vendor/module-50009 */),
  l = n(35749 /* vendor/module-35749 */),
  c = n(51909 /* vendor/module-51909 */),
  u = n(96092 /* vendor/module-96092 */),
  d = n(31085 /* vendor/module-31085 */);

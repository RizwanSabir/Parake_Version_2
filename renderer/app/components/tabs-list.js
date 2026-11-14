// app/components/tabs-list.js — webpack module 51341
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.TabsList = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(4674 /* vendor/module-4674 */),
  a = n(57122 /* vendor/module-57122 */),
  s = n(38340 /* vendor/module-38340 */),
  l = n(79216 /* vendor/module-79216 */),
  c = n(73527 /* vendor/module-73527 */),
  u = n(28562 /* vendor/module-28562 */),
  d = n(43206 /* vendor/module-43206 */),
  p = n(31085 /* vendor/module-31085 */);
t.TabsList = o.forwardRef(function (e, t) {
  const {
      activateOnFocus: n = !1,
      className: r,
      loopFocus: f = !0,
      render: h,
      style: m,
      ...g
    } = e,
    {
      onValueChange: y,
      orientation: v,
      value: b,
      setTabMap: S,
      tabActivationDirection: _,
    } = (0, u.useTabsRootContext)(),
    [x, w] = o.useState(0),
    [E, T] = o.useState(null),
    k = o.useRef(new Set()),
    C = o.useRef(new Set()),
    I = o.useRef(null);
  (0, a.useIsoLayoutEffect)(() => {
    if ("undefined" == typeof ResizeObserver) return;
    const e = new ResizeObserver(() => {
      k.current.forEach((e) => {
        e();
      });
    });
    return (
      (I.current = e),
      E && e.observe(E),
      C.current.forEach((t) => {
        e.observe(t);
      }),
      () => {
        e.disconnect(), (I.current = null);
      }
    );
  }, [E]);
  const A = (0, i.useStableCallback)(
      (e) => (
        k.current.add(e),
        () => {
          k.current.delete(e);
        }
      ),
    ),
    O = (0, i.useStableCallback)(
      (e) => (
        C.current.add(e),
        I.current?.observe(e),
        () => {
          C.current.delete(e), I.current?.unobserve(e);
        }
      ),
    ),
    R = (0, i.useStableCallback)((e, t) => {
      e !== b && y(e, t);
    }),
    M = { orientation: v, tabActivationDirection: _ },
    P = {
      "aria-orientation": "vertical" === v ? "vertical" : void 0,
      role: "tablist",
    },
    N = o.useMemo(
      () => ({
        activateOnFocus: n,
        highlightedTabIndex: x,
        registerIndicatorUpdateListener: A,
        registerTabResizeObserverElement: O,
        onTabActivation: R,
        setHighlightedTabIndex: w,
        tabsListElement: E,
      }),
      [n, x, A, O, R, w, E],
    );
  return (0, p.jsx)(d.TabsListContext.Provider, {
    value: N,
    children: (0, p.jsx)(l.CompositeRoot, {
      render: h,
      className: r,
      style: m,
      state: M,
      refs: [t, T],
      props: [P, g],
      stateAttributesMapping: c.tabsStateAttributesMapping,
      highlightedIndex: x,
      enableHomeAndEndKeys: !0,
      loopFocus: f,
      orientation: v,
      onHighlightedIndexChange: w,
      onMapChange: S,
      disabledIndices: s.EMPTY_ARRAY,
    }),
  });
});

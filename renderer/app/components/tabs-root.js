// app/components/tabs-root.js — webpack module 44777
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.TabsRoot = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(95836 /* vendor/module-95836 */),
  a = n(57122 /* vendor/module-57122 */),
  s = n(4674 /* vendor/module-4674 */),
  l = n(51909 /* vendor/module-51909 */),
  c = n(77144 /* app/components/composite-list */),
  u = n(28562 /* vendor/module-28562 */),
  d = n(73527 /* vendor/module-73527 */),
  p = n(22877 /* vendor/module-22877 */),
  f = n(82063 /* vendor/module-82063 */),
  h = n(31085 /* vendor/module-31085 */);
function m(e, t, n, r) {
  if (null == e || null == t) return "none";
  let o = null,
    i = null;
  for (const [n, a] of r.entries()) {
    if (null == a) continue;
    const r = a.value ?? a.index;
    if ((e === r && (o = n), t === r && (i = n), null != o && null != i)) break;
  }
  if (null == o || null == i)
    return o === i ||
      ("number" != typeof e && "string" != typeof e) ||
      typeof e != typeof t
      ? "none"
      : "horizontal" === n
        ? t > e
          ? "right"
          : "left"
        : t > e
          ? "down"
          : "up";
  const a = o.getBoundingClientRect(),
    s = i.getBoundingClientRect();
  if ("horizontal" === n) {
    if (s.left < a.left) return "left";
    if (s.left > a.left) return "right";
  } else {
    if (s.top < a.top) return "up";
    if (s.top > a.top) return "down";
  }
  return "none";
}
t.TabsRoot = o.forwardRef(function (e, t) {
  const {
      className: n,
      defaultValue: r = 0,
      onValueChange: g,
      orientation: y = "horizontal",
      render: v,
      value: b,
      style: S,
      ..._
    } = e,
    x = void 0 !== e.defaultValue,
    w = o.useRef([]),
    [E, T] = o.useState(() => new Map()),
    [k, C] = (0, i.useControlled)({
      controlled: b,
      default: r,
      name: "Tabs",
      state: "value",
    }),
    I = void 0 !== b,
    [A, O] = o.useState(() => new Map()),
    R = o.useRef(void 0),
    M = o.useCallback(
      (e) => {
        if (void 0 === e) return null;
        for (const [t, n] of A.entries())
          if (null != n && e === (n.value ?? n.index)) return t;
        return null;
      },
      [A],
    ),
    [P, N] = o.useState(() => ({
      previousValue: k,
      tabActivationDirection: "none",
    })),
    { previousValue: D, tabActivationDirection: j } = P;
  let L = j,
    F = !1;
  D !== k &&
    ((L = m(D, k, y, A)), (F = null != D && null != k && null == M(k)));
  const U = F ? D : k,
    B = D !== U || j !== L;
  (0, a.useIsoLayoutEffect)(() => {
    B && N({ previousValue: U, tabActivationDirection: L });
  }, [U, B, L]);
  const z = (0, s.useStableCallback)((e, t) => {
      const n = m(k, e, y, A);
      (t.activationDirection = n), g?.(e, t), t.isCanceled || C(e);
    }),
    H = (0, s.useStableCallback)((e, t) => {
      g?.(
        e,
        (0, p.createChangeEventDetails)(t, void 0, void 0, {
          activationDirection: "none",
        }),
      );
    }),
    V = (0, s.useStableCallback)((e, t) => {
      T((n) => {
        if (n.get(e) === t) return n;
        const r = new Map(n);
        return r.set(e, t), r;
      });
    }),
    q = (0, s.useStableCallback)((e, t) => {
      T((n) => {
        if (!n.has(e) || n.get(e) !== t) return n;
        const r = new Map(n);
        return r.delete(e), r;
      });
    }),
    G = o.useCallback((e) => E.get(e), [E]),
    W = o.useCallback(
      (e) => {
        for (const t of A.values()) if (e === t?.value) return t?.id;
      },
      [A],
    ),
    $ = o.useMemo(
      () => ({
        getTabElementBySelectedValue: M,
        getTabIdByPanelValue: W,
        getTabPanelIdByValue: G,
        onValueChange: z,
        orientation: y,
        registerMountedTabPanel: V,
        setTabMap: O,
        unregisterMountedTabPanel: q,
        tabActivationDirection: L,
        value: k,
      }),
      [M, W, G, z, y, V, O, q, L, k],
    ),
    Y = o.useMemo(() => {
      for (const e of A.values()) if (null != e && e.value === k) return e;
    }, [A, k]),
    K = o.useMemo(() => {
      for (const e of A.values()) if (null != e && !e.disabled) return e.value;
    }, [A]),
    Z = o.useRef(!x),
    Q = o.useRef(r),
    J = o.useRef(x),
    X = o.useRef(!1);
  (0, a.useIsoLayoutEffect)(() => {
    if (I) return;
    function e(e, t) {
      C(e),
        N((t) =>
          t.previousValue === e && "none" === t.tabActivationDirection
            ? t
            : { previousValue: e, tabActivationDirection: "none" },
        ),
        H(e, t),
        (Z.current = !1);
    }
    if (0 === A.size)
      return void (
        X.current &&
        null !== k &&
        !R.current?.isConnected &&
        e(null, f.REASONS.missing)
      );
    (X.current = !0), (R.current = A.keys().next().value);
    const t = Y?.disabled,
      n = null == Y && null !== k;
    if (
      (t || k !== Q.current || (J.current = !1),
      J.current && t && k === Q.current)
    )
      return;
    const r = Z.current;
    if (t || n) {
      const n = K ?? null;
      if (k === n) return void (Z.current = !1);
      let o = f.REASONS.missing;
      return (
        r ? (o = f.REASONS.initial) : t && (o = f.REASONS.disabled),
        void e(n, o)
      );
    }
    r && null != Y && (H(k, f.REASONS.initial), (Z.current = !1));
  }, [K, I, H, Y, C, A, k]);
  const ee = { orientation: y, tabActivationDirection: L },
    te = (0, l.useRenderElement)("div", e, {
      state: ee,
      ref: t,
      props: _,
      stateAttributesMapping: d.tabsStateAttributesMapping,
    });
  return (0, h.jsx)(u.TabsRootContext.Provider, {
    value: $,
    children: (0, h.jsx)(c.CompositeList, {
      elementsRef: w,
      children: te,
    }),
  });
});

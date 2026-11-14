// app/components/scroll-area-scrollbar.js — webpack module 44950
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ScrollAreaScrollbar = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(23504 /* vendor/module-23504 */),
  a = n(65200 /* vendor/module-65200 */),
  s = n(30541 /* vendor/module-30541 */),
  l = n(15347 /* vendor/module-15347 */),
  c = n(51909 /* vendor/module-51909 */),
  u = n(87604 /* vendor/module-87604 */),
  d = n(63639 /* vendor/module-63639 */),
  p = n(74737 /* vendor/module-74737 */),
  f = n(96092 /* vendor/module-96092 */),
  h = n(50726 /* vendor/module-50726 */),
  m = n(31085 /* vendor/module-31085 */);
t.ScrollAreaScrollbar = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      orientation: g = "vertical",
      keepMounted: y = !1,
      style: v,
      ...b
    } = e,
    {
      hovering: S,
      scrollingX: _,
      scrollingY: x,
      hiddenState: w,
      overflowEdges: E,
      scrollbarYRef: T,
      scrollbarXRef: k,
      viewportRef: C,
      thumbYRef: I,
      thumbXRef: A,
      handlePointerDown: O,
      handlePointerUp: R,
      handleScroll: M,
      rootId: P,
      thumbSize: N,
      hasMeasuredScrollbar: D,
    } = (0, s.useScrollAreaRootContext)(),
    j = {
      hovering: S,
      scrolling: { horizontal: _, vertical: x }[g],
      orientation: g,
      hasOverflowX: !w.x,
      hasOverflowY: !w.y,
      overflowXStart: E.xStart,
      overflowXEnd: E.xEnd,
      overflowYStart: E.yStart,
      overflowYEnd: E.yEnd,
      cornerHidden: w.corner,
    },
    L = (0, f.useDirection)(),
    F = !D && !y,
    U = "vertical" === g ? w.y : w.x,
    B = y || !U;
  o.useEffect(() => {
    if (!B) return;
    const e = C.current,
      t = "vertical" === g ? T.current : k.current;
    return t
      ? (0, i.addEventListener)(
          t,
          "wheel",
          function (n) {
            if (!e || !t || n.ctrlKey) return;
            const r = "horizontal" === g,
              o = r ? "scrollLeft" : "scrollTop",
              i = r ? n.deltaX : n.deltaY;
            if (0 === i) return;
            const a = r
                ? e.scrollWidth - e.clientWidth
                : e.scrollHeight - e.clientHeight,
              s = r && "rtl" === L ? -a : 0,
              l = r && "rtl" === L ? 0 : a,
              c = e[o];
            (c <= s && i < 0) ||
              (c >= l && i > 0) ||
              (n.preventDefault(),
              (e[o] = Math.min(l, Math.max(s, c + i))),
              M({ x: e.scrollLeft, y: e.scrollTop }));
          },
          { passive: !1 },
        )
      : void 0;
  }, [L, M, g, k, T, B, C]);
  const z = {
      ...(P && { "data-id": `${P}-scrollbar` }),
      onPointerDown(e) {
        if (0 !== e.button) return;
        const t = (0, a.getTarget)(e.nativeEvent),
          n = "vertical" === g ? I.current : A.current;
        if ((!n || !(0, a.contains)(n, t)) && C.current) {
          if (I.current && T.current && "vertical" === g) {
            const t = (0, u.getOffset)(I.current, "margin", "y"),
              n = (0, u.getOffset)(T.current, "padding", "y"),
              r = I.current.offsetHeight,
              o = T.current.getBoundingClientRect(),
              i = e.clientY - o.top - r / 2 - n + t / 2,
              a = C.current.scrollHeight,
              s = C.current.clientHeight,
              l = (i / (T.current.offsetHeight - r - n - t)) * (a - s);
            C.current.scrollTop = l;
          }
          if (A.current && k.current && "horizontal" === g) {
            const t = (0, u.getOffset)(A.current, "margin", "x"),
              n = (0, u.getOffset)(k.current, "padding", "x"),
              r = A.current.offsetWidth,
              o = k.current.getBoundingClientRect(),
              i = e.clientX - o.left - r / 2 - n + t / 2,
              a = C.current.scrollWidth,
              s = C.current.clientWidth,
              l = i / (k.current.offsetWidth - r - n - t);
            let c;
            "rtl" === L
              ? ((c = (1 - l) * (a - s)), C.current.scrollLeft <= 0 && (c = -c))
              : (c = l * (a - s)),
              (C.current.scrollLeft = c);
          }
          M({ x: C.current.scrollLeft, y: C.current.scrollTop }), O(e);
        }
      },
      onPointerUp: R,
      onPointerCancel: R,
      style: {
        position: "absolute",
        touchAction: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
        visibility: F ? "hidden" : void 0,
        ...("vertical" === g && {
          top: 0,
          bottom: `var(${d.ScrollAreaRootCssVars.scrollAreaCornerHeight})`,
          insetInlineEnd: 0,
          [p.ScrollAreaScrollbarCssVars.scrollAreaThumbHeight]: `${N.height}px`,
        }),
        ...("horizontal" === g && {
          insetInlineStart: 0,
          insetInlineEnd: `var(${d.ScrollAreaRootCssVars.scrollAreaCornerWidth})`,
          bottom: 0,
          [p.ScrollAreaScrollbarCssVars.scrollAreaThumbWidth]: `${N.width}px`,
        }),
      },
    },
    H = (0, c.useRenderElement)("div", e, {
      ref: [t, "vertical" === g ? T : k],
      state: j,
      props: [z, b],
      stateAttributesMapping: h.scrollAreaStateAttributesMapping,
    }),
    V = o.useMemo(() => ({ orientation: g }), [g]);
  return B
    ? (0, m.jsx)(l.ScrollAreaScrollbarContext.Provider, {
        value: V,
        children: H,
      })
    : null;
});

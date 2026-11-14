// app/components/scroll-area-root.js — webpack module 40952
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ScrollAreaRoot = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(4674 /* vendor/module-4674 */),
  a = n(54807 /* vendor/module-54807 */),
  s = n(30541 /* vendor/module-30541 */),
  l = n(51909 /* vendor/module-51909 */),
  c = n(63639 /* vendor/module-63639 */),
  u = n(53088 /* vendor/module-53088 */),
  d = n(87604 /* vendor/module-87604 */),
  p = n(25427 /* vendor/module-25427 */),
  f = n(18395 /* vendor/module-18395 */),
  h = n(33115 /* vendor/module-33115 */),
  m = n(50726 /* vendor/module-50726 */),
  g = n(65200 /* vendor/module-65200 */),
  y = n(22728 /* vendor/module-22728 */),
  v = n(31085 /* vendor/module-31085 */);
const b = { x: 0, y: 0 },
  S = { width: 0, height: 0 },
  _ = { xStart: !1, xEnd: !1, yStart: !1, yEnd: !1 },
  x = { x: !0, y: !0, corner: !0 };
t.ScrollAreaRoot = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      overflowEdgeThreshold: w,
      style: E,
      ...T
    } = e,
    {
      xStart: k,
      xEnd: C,
      yStart: I,
      yEnd: A,
    } = (function (e) {
      if ("number" == typeof e) {
        const t = Math.max(0, e);
        return { xStart: t, xEnd: t, yStart: t, yEnd: t };
      }
      return {
        xStart: Math.max(0, e?.xStart || 0),
        xEnd: Math.max(0, e?.xEnd || 0),
        yStart: Math.max(0, e?.yStart || 0),
        yEnd: Math.max(0, e?.yEnd || 0),
      };
    })(w),
    O = (0, h.useBaseUiId)(),
    R = (0, a.useTimeout)(),
    M = (0, a.useTimeout)(),
    { nonce: P, disableStyleElements: N } = (0, y.useCSPContext)(),
    [D, j] = o.useState(!1),
    [L, F] = o.useState(!1),
    [U, B] = o.useState(!1),
    [z, H] = o.useState(!1),
    [V, q] = o.useState(!1),
    [G, W] = o.useState(S),
    [$, Y] = o.useState(S),
    [K, Z] = o.useState(_),
    [Q, J] = o.useState(x),
    X = o.useRef(null),
    ee = o.useRef(null),
    te = o.useRef(null),
    ne = o.useRef(null),
    re = o.useRef(null),
    oe = o.useRef(null),
    ie = o.useRef(null),
    ae = o.useRef(!1),
    se = o.useRef(0),
    le = o.useRef(0),
    ce = o.useRef(0),
    ue = o.useRef(0),
    de = o.useRef("vertical"),
    pe = o.useRef(b),
    fe = (0, i.useStableCallback)((e) => {
      const t = e.x - pe.current.x,
        n = e.y - pe.current.y;
      (pe.current = e),
        0 !== n &&
          (B(!0),
          R.start(u.SCROLL_TIMEOUT, () => {
            B(!1);
          })),
        0 !== t &&
          (F(!0),
          M.start(u.SCROLL_TIMEOUT, () => {
            F(!1);
          }));
    }),
    he = (0, i.useStableCallback)((e) => {
      0 === e.button &&
        ((ae.current = !0),
        (se.current = e.clientY),
        (le.current = e.clientX),
        (de.current = e.currentTarget.getAttribute(
          p.ScrollAreaScrollbarDataAttributes.orientation,
        )),
        ee.current &&
          ((ce.current = ee.current.scrollTop),
          (ue.current = ee.current.scrollLeft)),
        re.current &&
          "vertical" === de.current &&
          re.current.setPointerCapture(e.pointerId),
        oe.current &&
          "horizontal" === de.current &&
          oe.current.setPointerCapture(e.pointerId));
    }),
    me = (0, i.useStableCallback)((e) => {
      if (!ae.current) return;
      const t = e.clientY - se.current,
        n = e.clientX - le.current;
      if (ee.current) {
        const r = ee.current.scrollHeight,
          o = ee.current.clientHeight,
          i = ee.current.scrollWidth,
          a = ee.current.clientWidth;
        if (re.current && te.current && "vertical" === de.current) {
          const n = (0, d.getOffset)(te.current, "padding", "y"),
            i = (0, d.getOffset)(re.current, "margin", "y"),
            a = re.current.offsetHeight,
            s = t / (te.current.offsetHeight - a - n - i);
          (ee.current.scrollTop = ce.current + s * (r - o)),
            e.preventDefault(),
            B(!0),
            R.start(u.SCROLL_TIMEOUT, () => {
              B(!1);
            });
        }
        if (oe.current && ne.current && "horizontal" === de.current) {
          const t = (0, d.getOffset)(ne.current, "padding", "x"),
            r = (0, d.getOffset)(oe.current, "margin", "x"),
            o = oe.current.offsetWidth,
            s = n / (ne.current.offsetWidth - o - t - r);
          (ee.current.scrollLeft = ue.current + s * (i - a)),
            e.preventDefault(),
            F(!0),
            M.start(u.SCROLL_TIMEOUT, () => {
              F(!1);
            });
        }
      }
    }),
    ge = (0, i.useStableCallback)((e) => {
      (ae.current = !1),
        re.current &&
          "vertical" === de.current &&
          re.current.hasPointerCapture(e.pointerId) &&
          re.current.releasePointerCapture(e.pointerId),
        oe.current &&
          "horizontal" === de.current &&
          oe.current.hasPointerCapture(e.pointerId) &&
          oe.current.releasePointerCapture(e.pointerId);
    });
  function ye(e) {
    H("touch" === e.pointerType);
  }
  function ve(e) {
    if ((ye(e), "touch" !== e.pointerType)) {
      const t = (0, g.contains)(X.current, e.target);
      j(t);
    }
  }
  const be = o.useMemo(
      () => ({
        scrolling: L || U,
        hasOverflowX: !Q.x,
        hasOverflowY: !Q.y,
        overflowXStart: K.xStart,
        overflowXEnd: K.xEnd,
        overflowYStart: K.yStart,
        overflowYEnd: K.yEnd,
        cornerHidden: Q.corner,
      }),
      [L, U, Q.x, Q.y, Q.corner, K],
    ),
    Se = {
      role: "presentation",
      onPointerEnter: ve,
      onPointerMove: ve,
      onPointerDown: ye,
      onPointerLeave() {
        j(!1);
      },
      style: {
        position: "relative",
        [c.ScrollAreaRootCssVars.scrollAreaCornerHeight]: `${G.height}px`,
        [c.ScrollAreaRootCssVars.scrollAreaCornerWidth]: `${G.width}px`,
      },
    },
    _e = (0, l.useRenderElement)("div", e, {
      state: be,
      ref: [t, X],
      props: [Se, T],
      stateAttributesMapping: m.scrollAreaStateAttributesMapping,
    }),
    xe = o.useMemo(
      () => ({
        handlePointerDown: he,
        handlePointerMove: me,
        handlePointerUp: ge,
        handleScroll: fe,
        cornerSize: G,
        setCornerSize: W,
        thumbSize: $,
        setThumbSize: Y,
        hasMeasuredScrollbar: V,
        setHasMeasuredScrollbar: q,
        touchModality: z,
        cornerRef: ie,
        scrollingX: L,
        setScrollingX: F,
        scrollingY: U,
        setScrollingY: B,
        hovering: D,
        setHovering: j,
        viewportRef: ee,
        rootRef: X,
        scrollbarYRef: te,
        scrollbarXRef: ne,
        thumbYRef: re,
        thumbXRef: oe,
        rootId: O,
        hiddenState: Q,
        setHiddenState: J,
        overflowEdges: K,
        setOverflowEdges: Z,
        viewportState: be,
        overflowEdgeThreshold: {
          xStart: k,
          xEnd: C,
          yStart: I,
          yEnd: A,
        },
      }),
      [he, me, ge, fe, G, $, V, z, L, F, U, B, D, j, O, Q, K, be, k, C, I, A],
    );
  return (0, v.jsxs)(s.ScrollAreaRootContext.Provider, {
    value: xe,
    children: [!N && f.styleDisableScrollbar.getElement(P), _e],
  });
});

// app/components/scroll-area-viewport.js — webpack module 85908
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ScrollAreaViewport = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(4674 /* vendor/module-4674 */),
  a = n(57122 /* vendor/module-57122 */),
  s = n(87177 /* vendor/module-87177 */),
  l = n(54807 /* vendor/module-54807 */),
  c = n(30541 /* vendor/module-30541 */),
  u = n(20457 /* vendor/module-20457 */),
  d = n(51909 /* vendor/module-51909 */),
  p = n(96092 /* vendor/module-96092 */),
  f = n(87604 /* vendor/module-87604 */),
  h = n(53088 /* vendor/module-53088 */),
  m = n(41153 /* vendor/module-41153 */),
  g = n(18395 /* vendor/module-18395 */),
  y = n(50726 /* vendor/module-50726 */),
  v = n(66115 /* vendor/module-66115 */),
  b = n(82764 /* vendor/module-82764 */),
  S = n(31085 /* vendor/module-31085 */);
let _ = !1;
t.ScrollAreaViewport = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: x, ...w } = e,
    {
      viewportRef: E,
      scrollbarYRef: T,
      scrollbarXRef: k,
      thumbYRef: C,
      thumbXRef: I,
      cornerRef: A,
      cornerSize: O,
      setCornerSize: R,
      setThumbSize: M,
      rootId: P,
      setHiddenState: N,
      hiddenState: D,
      setHasMeasuredScrollbar: j,
      handleScroll: L,
      setHovering: F,
      setOverflowEdges: U,
      overflowEdges: B,
      overflowEdgeThreshold: z,
      scrollingX: H,
      scrollingY: V,
    } = (0, c.useScrollAreaRootContext)(),
    q = (0, p.useDirection)(),
    G = o.useRef(!0),
    W = o.useRef([NaN, NaN, NaN, NaN]),
    $ = (0, l.useTimeout)(),
    Y = (0, l.useTimeout)(),
    K = (0, i.useStableCallback)(() => {
      const e = E.current,
        t = T.current,
        n = k.current,
        r = C.current,
        o = I.current,
        i = A.current;
      if (!e) return;
      const a = e.scrollHeight,
        s = e.scrollWidth,
        l = e.clientHeight,
        c = e.clientWidth,
        u = e.scrollTop,
        d = e.scrollLeft,
        p = W.current,
        g = Number.isNaN(p[0]);
      if (
        ((p[0] = l),
        (p[1] = a),
        (p[2] = c),
        (p[3] = s),
        g && j(!0),
        0 === a || 0 === s)
      )
        return;
      const y = (function (e) {
          const t = e.clientHeight >= e.scrollHeight,
            n = e.clientWidth >= e.scrollWidth;
          return { y: t, x: n, corner: t || n };
        })(e),
        S = y.y,
        _ = y.x,
        x = c / s,
        w = l / a,
        P = Math.max(0, s - c),
        D = Math.max(0, a - l);
      let L = 0,
        F = 0;
      if (!_) {
        let e = 0;
        (e = "rtl" === q ? (0, m.clamp)(-d, 0, P) : (0, m.clamp)(d, 0, P)),
          (L = (0, b.normalizeScrollOffset)(e, P)),
          (F = P - L);
      }
      const B = S ? 0 : (0, m.clamp)(u, 0, D),
        H = S ? 0 : (0, b.normalizeScrollOffset)(B, D),
        V = S ? 0 : D - H,
        G = _ ? 0 : c,
        $ = S ? 0 : l;
      let Y = 0,
        K = 0;
      _ || S || ((Y = t?.offsetWidth || 0), (K = n?.offsetHeight || 0));
      const Z = 0 === O.width && 0 === O.height,
        Q = Z ? Y : 0,
        J = Z ? K : 0,
        X = (0, f.getOffset)(n, "padding", "x"),
        ee = (0, f.getOffset)(t, "padding", "y"),
        te = (0, f.getOffset)(o, "margin", "x"),
        ne = (0, f.getOffset)(r, "margin", "y"),
        re = G - X - te,
        oe = $ - ee - ne,
        ie = n ? Math.min(n.offsetWidth - Q, re) : re,
        ae = t ? Math.min(t.offsetHeight - J, oe) : oe,
        se = Math.max(h.MIN_THUMB_SIZE, ie * x),
        le = Math.max(h.MIN_THUMB_SIZE, ae * w);
      if (
        (M((e) =>
          e.height === le && e.width === se ? e : { width: se, height: le },
        ),
        t && r)
      ) {
        const e = t.offsetHeight - le - ee - ne,
          n = a - l,
          o = 0 === n ? 0 : u / n,
          i = Math.min(e, Math.max(0, o * e));
        r.style.transform = `translate3d(0,${i}px,0)`;
      }
      if (n && o) {
        const e = n.offsetWidth - se - X - te,
          t = s - c,
          r = 0 === t ? 0 : d / t,
          i =
            "rtl" === q
              ? (0, m.clamp)(r * e, -e, 0)
              : (0, m.clamp)(r * e, 0, e);
        o.style.transform = `translate3d(${i}px,0,0)`;
      }
      const ce = [
        [v.ScrollAreaViewportCssVars.scrollAreaOverflowXStart, L],
        [v.ScrollAreaViewportCssVars.scrollAreaOverflowXEnd, F],
        [v.ScrollAreaViewportCssVars.scrollAreaOverflowYStart, H],
        [v.ScrollAreaViewportCssVars.scrollAreaOverflowYEnd, V],
      ];
      for (const [t, n] of ce) e.style.setProperty(t, `${n}px`);
      i &&
        (_ || S
          ? R({ width: 0, height: 0 })
          : _ || S || R({ width: Y, height: K })),
        N((e) =>
          (function (e, t) {
            return e.y === t.y && e.x === t.x && e.corner === t.corner ? e : t;
          })(e, y),
        );
      const ue = {
        xStart: !_ && L > z.xStart,
        xEnd: !_ && F > z.xEnd,
        yStart: !S && H > z.yStart,
        yEnd: !S && V > z.yEnd,
      };
      U((e) =>
        e.xStart === ue.xStart &&
        e.xEnd === ue.xEnd &&
        e.yStart === ue.yStart &&
        e.yEnd === ue.yEnd
          ? e
          : ue,
      );
    });
  function Z() {
    G.current = !1;
  }
  (0, a.useIsoLayoutEffect)(() => {
    E.current &&
      (_ ||
        s.platform.engine.webkit ||
        ("undefined" != typeof CSS &&
          "registerProperty" in CSS &&
          [
            v.ScrollAreaViewportCssVars.scrollAreaOverflowXStart,
            v.ScrollAreaViewportCssVars.scrollAreaOverflowXEnd,
            v.ScrollAreaViewportCssVars.scrollAreaOverflowYStart,
            v.ScrollAreaViewportCssVars.scrollAreaOverflowYEnd,
          ].forEach((e) => {
            try {
              CSS.registerProperty({
                name: e,
                syntax: "<length>",
                inherits: !1,
                initialValue: "0px",
              });
            } catch {}
          }),
        (_ = !0)));
  }, [E]),
    (0, a.useIsoLayoutEffect)(() => {
      queueMicrotask(K);
    }, [K, D, q, z.xStart, z.xEnd, z.yStart, z.yEnd]),
    (0, a.useIsoLayoutEffect)(() => {
      E.current?.matches(":hover") && F(!0);
    }, [E, F]),
    (0, a.useIsoLayoutEffect)(() => {
      const e = E.current;
      if ("undefined" == typeof ResizeObserver || !e) return;
      let t = !1;
      const n = new ResizeObserver(() => {
        if (!t) {
          t = !0;
          const n = W.current;
          if (
            n[0] === e.clientHeight &&
            n[1] === e.scrollHeight &&
            n[2] === e.clientWidth &&
            n[3] === e.scrollWidth
          )
            return;
        }
        K();
      });
      return (
        n.observe(e),
        Y.start(0, () => {
          const t = e.getAnimations({ subtree: !0 });
          0 !== t.length &&
            Promise.allSettled(t.map((e) => e.finished))
              .then(K)
              .catch(() => {});
        }),
        () => {
          n.disconnect(), Y.clear();
        }
      );
    }, [K, E, Y]);
  const Q = {
      role: "presentation",
      ...(P && { "data-id": `${P}-viewport` }),
      tabIndex: D.x && D.y ? -1 : 0,
      className: g.styleDisableScrollbar.className,
      style: { overflow: "scroll" },
      onScroll() {
        E.current &&
          (K(),
          G.current || L({ x: E.current.scrollLeft, y: E.current.scrollTop }),
          $.start(100, () => {
            G.current = !0;
          }));
      },
      onWheel: Z,
      onTouchMove: Z,
      onPointerMove: Z,
      onPointerEnter: Z,
      onKeyDown: Z,
    },
    J = o.useMemo(
      () => ({
        scrolling: H || V,
        hasOverflowX: !D.x,
        hasOverflowY: !D.y,
        overflowXStart: B.xStart,
        overflowXEnd: B.xEnd,
        overflowYStart: B.yStart,
        overflowYEnd: B.yEnd,
        cornerHidden: D.corner,
      }),
      [H, V, D.x, D.y, D.corner, B],
    ),
    X = (0, d.useRenderElement)("div", e, {
      ref: [t, E],
      state: J,
      props: [Q, w],
      stateAttributesMapping: y.scrollAreaStateAttributesMapping,
    }),
    ee = o.useMemo(() => ({ computeThumbPosition: K }), [K]);
  return (0, S.jsx)(u.ScrollAreaViewportContext.Provider, {
    value: ee,
    children: X,
  });
});

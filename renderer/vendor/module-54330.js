// vendor/module-54330.js — webpack module 54330
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useAnchorPositioning = function (e) {
    const {
        anchor: t,
        positionMethod: n = "absolute",
        side: r = "bottom",
        sideOffset: v = 0,
        align: b = "center",
        alignOffset: S = 0,
        collisionBoundary: _,
        collisionPadding: x = 5,
        sticky: w = !1,
        arrowPadding: E = 5,
        disableAnchorTracking: T = !1,
        inline: k,
        keepMounted: C = !1,
        floatingRootContext: I,
        mounted: A,
        collisionAvoidance: O,
        shiftCrossAxis: R = !1,
        nodeId: M,
        adaptiveOrigin: P,
        lazyFlip: N = !1,
        externalTree: D,
      } = e,
      [j, L] = o.useState(null);
    A || null === j || L(null);
    const F = O.side || "flip",
      U = O.align || "flip",
      B = O.fallbackAxisSide || "end",
      z = "function" == typeof t ? t : void 0,
      H = (0, c.useStableCallback)(z),
      V = z ? H : t,
      q = (0, l.useValueAsRef)(t),
      G = (0, l.useValueAsRef)(A),
      W = "rtl" === (0, d.useDirection)(),
      $ =
        j ||
        {
          top: "top",
          right: "right",
          bottom: "bottom",
          left: "left",
          "inline-end": W ? "left" : "right",
          "inline-start": W ? "right" : "left",
        }[r],
      Y = "center" === b ? $ : `${$}-${b}`;
    let K = x;
    const Z = "bottom" === r ? 1 : 0,
      Q = "top" === r ? 1 : 0,
      J = "right" === r ? 1 : 0,
      X = "left" === r ? 1 : 0;
    "number" == typeof K
      ? (K = { top: K + Z, right: K + X, bottom: K + Q, left: K + J })
      : K &&
        (K = {
          top: (K.top || 0) + Z,
          right: (K.right || 0) + X,
          bottom: (K.bottom || 0) + Q,
          left: (K.left || 0) + J,
        });
    const ee = {
        boundary: "clipping-ancestors" === _ ? "clippingAncestors" : _,
        padding: K,
      },
      te = o.useRef(null),
      ne = (0, l.useValueAsRef)(v),
      re = (0, l.useValueAsRef)(S),
      oe = "function" != typeof v ? v : 0,
      ie = "function" != typeof S ? S : 0,
      ae = [];
    k && ae.push(k),
      ae.push(
        (0, u.offset)(
          (e) => {
            const t = g(e, r, W),
              n = "function" == typeof ne.current ? ne.current(t) : ne.current,
              o = "function" == typeof re.current ? re.current(t) : re.current;
            return { mainAxis: n, crossAxis: o, alignmentAxis: o };
          },
          [oe, ie, W, r],
        ),
      );
    const se = "none" === U && "shift" !== F,
      le = !se && (w || R || "shift" === F),
      ce =
        "none" === F
          ? null
          : (0, u.flip)({
              ...ee,
              padding: {
                top: K.top + 1,
                right: K.right + 1,
                bottom: K.bottom + 1,
                left: K.left + 1,
              },
              mainAxis: !R && "flip" === F,
              crossAxis: "flip" === U && "alignment",
              fallbackAxisSideDirection: B,
            }),
      ue = se
        ? null
        : (0, u.shift)(
            (e) => {
              const t = (0, a.ownerDocument)(
                e.elements.floating,
              ).documentElement;
              return {
                ...ee,
                rootBoundary: R
                  ? {
                      x: 0,
                      y: 0,
                      width: t.clientWidth,
                      height: t.clientHeight,
                    }
                  : void 0,
                mainAxis: "none" !== U,
                crossAxis: le,
                limiter:
                  w || R
                    ? void 0
                    : (0, u.limitShift)((e) => {
                        if (!te.current) return {};
                        const { width: t, height: n } =
                            te.current.getBoundingClientRect(),
                          r = (0, i.getSideAxis)((0, i.getSide)(e.placement));
                        return {
                          offset:
                            ("y" === r ? t : n) / 2 +
                            ("y" === r ? K.left + K.right : K.top + K.bottom) /
                              2,
                        };
                      }),
              };
            },
            [ee, w, R, K, U],
          );
    "shift" === F || "shift" === U || "center" === b
      ? ae.push(ue, ce)
      : ae.push(ce, ue),
      ae.push(
        (0, u.size)({
          ...ee,
          apply({
            elements: { floating: e },
            availableWidth: t,
            availableHeight: n,
            rects: r,
          }) {
            if (!G.current) return;
            const o = e.style;
            o.setProperty("--available-width", `${t}px`),
              o.setProperty("--available-height", `${n}px`);
            const i = (0, a.ownerWindow)(e).devicePixelRatio || 1,
              { x: s, y: l, width: c, height: u } = r.reference,
              d = (Math.round((s + c) * i) - Math.round(s * i)) / i,
              p = (Math.round((l + u) * i) - Math.round(l * i)) / i;
            o.setProperty("--anchor-width", `${d}px`),
              o.setProperty("--anchor-height", `${p}px`);
          },
        }),
        (0, p.arrow)(
          (e) => ({
            element:
              te.current ||
              (0, a.ownerDocument)(e.elements.floating).createElement("div"),
            padding: E,
            offsetParent: "floating",
          }),
          [E],
        ),
        {
          name: "transformOrigin",
          fn(e) {
            const {
                elements: t,
                middlewareData: n,
                placement: o,
                rects: a,
                y: s,
              } = e,
              l = (0, i.getSide)(o),
              c = (0, i.getSideAxis)(l),
              u = te.current,
              d = n.arrow?.x || 0,
              p = n.arrow?.y || 0,
              f = d + (u?.clientWidth || 0) / 2,
              h = p + (u?.clientHeight || 0) / 2,
              m = Math.abs(n.shift?.y || 0),
              y = a.reference.height / 2,
              b = "function" == typeof v ? v(g(e, r, W)) : v,
              S = m > b,
              _ = {
                top: `${f}px calc(100% + ${b}px)`,
                bottom: `${f}px ${-b}px`,
                left: `calc(100% + ${b}px) ${h}px`,
                right: `${-b}px ${h}px`,
              }[l],
              x = `${f}px ${a.reference.y + y - s}px`;
            return (
              t.floating.style.setProperty(
                "--transform-origin",
                le && "y" === c && S ? x : _,
              ),
              {}
            );
          },
        },
        f.hide,
        P,
      ),
      (0, s.useIsoLayoutEffect)(() => {
        !A &&
          I &&
          I.update({
            referenceElement: null,
            floatingElement: null,
            domReferenceElement: null,
            positionReference: null,
          });
      }, [A, I]);
    const de = o.useMemo(
        () => ({
          elementResize: !T && "undefined" != typeof ResizeObserver,
          layoutShift: !T && "undefined" != typeof IntersectionObserver,
        }),
        [T],
      ),
      {
        refs: pe,
        elements: fe,
        x: he,
        y: me,
        middlewareData: ge,
        update: ye,
        placement: ve,
        context: be,
        isPositioned: Se,
        floatingStyles: _e,
      } = (0, u.useFloating)({
        rootContext: I,
        open: C ? A : void 0,
        placement: Y,
        middleware: ae,
        strategy: n,
        whileElementsMounted: C
          ? void 0
          : (...e) => (0, u.autoUpdate)(...e, de),
        nodeId: M,
        externalTree: D,
      }),
      { sideX: xe, sideY: we } = ge.adaptiveOrigin || h.DEFAULT_SIDES,
      Ee = Se ? n : "fixed",
      Te = o.useMemo(() => {
        const e = P
          ? { position: Ee, [xe]: he, [we]: me }
          : { position: Ee, ..._e };
        return Se || (e.opacity = 0), e;
      }, [P, Ee, xe, he, we, me, _e, Se]),
      ke = o.useRef(null);
    (0, s.useIsoLayoutEffect)(() => {
      if (!A) return;
      const e = q.current,
        t = "function" == typeof e ? e() : e,
        n = (y(t) ? t.current : t) || null;
      n !== ke.current && (pe.setPositionReference(n), (ke.current = n));
    }, [A, pe, V, q]),
      o.useEffect(() => {
        if (!A) return;
        const e = q.current;
        "function" != typeof e &&
          y(e) &&
          e.current !== ke.current &&
          (pe.setPositionReference(e.current), (ke.current = e.current));
      }, [A, pe, V, q]),
      o.useEffect(() => {
        if (C && A && fe.reference && fe.floating)
          return (0, u.autoUpdate)(fe.reference, fe.floating, ye, de);
      }, [C, A, fe, ye, de]);
    const Ce = (0, i.getSide)(ve),
      Ie = m(r, Ce, W),
      Ae = (0, i.getAlignment)(ve) || "center",
      Oe = Boolean(ge.hide?.referenceHidden);
    (0, s.useIsoLayoutEffect)(() => {
      N && A && Se && L(Ce);
    }, [N, A, Se, Ce]);
    const Re = o.useMemo(
        () => ({
          position: "absolute",
          top: ge.arrow?.y,
          left: ge.arrow?.x,
        }),
        [ge.arrow],
      ),
      Me = 0 !== ge.arrow?.centerOffset;
    return o.useMemo(
      () => ({
        positionerStyles: Te,
        arrowStyles: Re,
        arrowRef: te,
        arrowUncentered: Me,
        side: Ie,
        align: Ae,
        physicalSide: Ce,
        anchorHidden: Oe,
        refs: pe,
        context: be,
        isPositioned: Se,
        update: ye,
      }),
      [Te, Re, te, Me, Ie, Ae, Ce, Oe, pe, be, Se, ye],
    );
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(28229 /* vendor/module-28229 */),
  a = n(854 /* vendor/module-854 */),
  s = n(57122 /* vendor/module-57122 */),
  l = n(71740 /* vendor/module-71740 */),
  c = n(4674 /* vendor/module-4674 */),
  u = n(47797 /* vendor/module-47797 */),
  d = n(96092 /* vendor/module-96092 */),
  p = n(38767 /* vendor/module-38767 */),
  f = n(89517 /* vendor/module-89517 */),
  h = n(25833 /* vendor/module-25833 */);
function m(e, t, n) {
  const r = "inline-start" === e || "inline-end" === e;
  return {
    top: "top",
    right: r ? (n ? "inline-start" : "inline-end") : "right",
    bottom: "bottom",
    left: r ? (n ? "inline-end" : "inline-start") : "left",
  }[t];
}
function g(e, t, n) {
  const { rects: r, placement: o } = e;
  return {
    side: m(t, (0, i.getSide)(o), n),
    align: (0, i.getAlignment)(o) || "center",
    anchor: { width: r.reference.width, height: r.reference.height },
    positioner: {
      width: r.floating.width,
      height: r.floating.height,
    },
  };
}
function y(e) {
  return null != e && "current" in e;
}

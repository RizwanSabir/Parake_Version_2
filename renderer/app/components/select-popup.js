// app/components/select-popup.js — webpack module 89275
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.SelectPopup = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(28229 /* vendor/module-28229 */),
  a = n(23504 /* vendor/module-23504 */),
  s = n(87177 /* vendor/module-87177 */),
  l = n(4674 /* vendor/module-4674 */),
  c = n(854 /* vendor/module-854 */),
  u = n(57122 /* vendor/module-57122 */),
  d = n(78207 /* vendor/module-78207 */),
  p = n(57569 /* vendor/module-57569 */),
  f = n(47797 /* vendor/module-47797 */),
  h = n(22370 /* vendor/module-22370 */),
  m = n(51146 /* vendor/module-51146 */),
  g = n(67538 /* vendor/module-67538 */),
  y = n(18395 /* vendor/module-18395 */),
  v = n(44306 /* vendor/module-44306 */),
  b = n(15586 /* vendor/module-15586 */),
  S = n(51909 /* vendor/module-51909 */),
  _ = n(84557 /* vendor/module-84557 */),
  x = n(74940 /* vendor/module-74940 */),
  w = n(22877 /* vendor/module-22877 */),
  E = n(82063 /* vendor/module-82063 */),
  T = n(75256 /* vendor/module-75256 */),
  k = n(30197 /* vendor/module-30197 */),
  C = n(53469 /* vendor/module-53469 */),
  I = n(41153 /* vendor/module-41153 */),
  A = n(82764 /* vendor/module-82764 */),
  O = n(22728 /* vendor/module-22728 */),
  R = n(96092 /* vendor/module-96092 */),
  M = n(31085 /* vendor/module-31085 */);
const P = { ...m.popupStateMapping, ...v.transitionStatusMapping };
function N(e) {
  const t = e.maxHeight || "";
  return (t.endsWith("px") && parseFloat(t)) || 1 / 0;
}
function D(e) {
  return (0, A.getMaxScrollOffset)(e.scrollHeight, e.clientHeight);
}
function j(e) {
  return f.platform.getScale(e);
}
function L(e, t, n) {
  return e / n[t];
}
function F(e, t) {
  return (0, i.rectToClientRect)({
    x: L(e.x, "x", t),
    y: L(e.y, "y", t),
    width: L(e.width, "x", t),
    height: L(e.height, "y", t),
  });
}
t.SelectPopup = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: i, finalFocus: m, ...v } = e,
    {
      store: B,
      popupRef: z,
      onOpenChangeComplete: H,
      setOpen: V,
      valueRef: q,
      firstItemTextRef: G,
      selectedItemTextRef: W,
      multiple: $,
      handleScrollArrowVisibility: Y,
      scrollHandlerRef: K,
      listRef: Z,
      highlightItemOnHover: Q,
    } = (0, h.useSelectRootContext)(),
    {
      side: J,
      align: X,
      alignItemWithTriggerActive: ee,
      isPositioned: te,
      setControlledAlignItemWithTrigger: ne,
    } = (0, g.useSelectPositionerContext)(),
    re = null != (0, T.useToolbarRootContext)(!0),
    oe = (0, h.useSelectFloatingContext)(),
    ie = (0, R.useDirection)(),
    { nonce: ae, disableStyleElements: se } = (0, O.useCSPContext)(),
    le = (0, d.useStore)(B, _.selectors.id),
    ce = (0, d.useStore)(B, _.selectors.open),
    ue = (0, d.useStore)(B, _.selectors.openMethod),
    de = (0, d.useStore)(B, _.selectors.mounted),
    pe = (0, d.useStore)(B, _.selectors.popupProps),
    fe = (0, d.useStore)(B, _.selectors.transitionStatus),
    he = (0, d.useStore)(B, _.selectors.triggerElement),
    me = (0, d.useStore)(B, _.selectors.positionerElement),
    ge = (0, d.useStore)(B, _.selectors.listElement),
    ye = o.useRef(!1),
    ve = o.useRef(!1),
    be = o.useRef({}),
    Se = (0, p.useAnimationFrame)(),
    _e = (0, l.useStableCallback)((e) => {
      if (!me || !z.current || !ve.current) return;
      if (ye.current || !ee) return void Y();
      const t = "0px" === me.style.top,
        n = "0px" === me.style.bottom;
      if (!t && !n) return void Y();
      const r = j(me),
        o = L(me.getBoundingClientRect().height, "y", r),
        i = (0, c.ownerDocument)(me),
        a = (0, c.ownerWindow)(me),
        s = a.getComputedStyle(me),
        l = parseFloat(s.marginTop),
        u = parseFloat(s.marginBottom),
        d = N(a.getComputedStyle(z.current)),
        p = Math.min(i.documentElement.clientHeight - l - u, d),
        f = e.scrollTop,
        h = D(e);
      let m = 0,
        g = null,
        y = !1,
        v = !1;
      const b = (e) => {
          me.style.height = `${e}px`;
        },
        S = t ? h - f : f,
        _ = Math.min(o + S, p);
      if (((m = _), S <= A.SCROLL_EDGE_TOLERANCE_PX))
        ((t, n) => {
          const r = (0, I.clamp)(t, 0, p - o);
          r > 0 && b(o + r),
            (e.scrollTop = n),
            p - (o + r) <= A.SCROLL_EDGE_TOLERANCE_PX && (ye.current = !0),
            Y();
        })(S, t ? h : 0);
      else {
        if (
          (p - _ > A.SCROLL_EDGE_TOLERANCE_PX
            ? t
              ? (v = !0)
              : (g = 0)
            : ((y = !0), n && f < h && (g = f - (S - (o + S - p)))),
          (m = Math.ceil(m)),
          0 !== m && b(m),
          v || null != g)
        ) {
          const t = D(e),
            n = v ? t : (0, I.clamp)(g, 0, t);
          Math.abs(e.scrollTop - n) > A.SCROLL_EDGE_TOLERANCE_PX &&
            (e.scrollTop = n);
        }
        (y || m >= p - A.SCROLL_EDGE_TOLERANCE_PX) && (ye.current = !0), Y();
      }
    });
  o.useImperativeHandle(K, () => _e, [_e]),
    (0, b.useOpenChangeComplete)({
      open: ce,
      ref: z,
      onComplete() {
        ce && H?.(!0);
      },
    });
  const xe = { open: ce, transitionStatus: fe, side: J, align: X };
  (0, u.useIsoLayoutEffect)(() => {
    me &&
      z.current &&
      !Object.keys(be.current).length &&
      (be.current = {
        top: me.style.top || "0",
        left: me.style.left || "0",
        right: me.style.right,
        height: me.style.height,
        bottom: me.style.bottom,
        minHeight: me.style.minHeight,
        maxHeight: me.style.maxHeight,
        marginTop: me.style.marginTop,
        marginBottom: me.style.marginBottom,
      });
  }, [z, me]),
    (0, u.useIsoLayoutEffect)(() => {
      ce ||
        ee ||
        ((ve.current = !1),
        (ye.current = !1),
        (0, x.clearStyles)(me, be.current));
    }, [ce, ee, me, z]),
    (0, u.useIsoLayoutEffect)(() => {
      const e = z.current;
      if (
        !ce ||
        !he ||
        !me ||
        !e ||
        (ee && !te) ||
        "ending" === B.state.transitionStatus
      )
        return;
      if (!ee)
        return (
          (ve.current = !0),
          Se.request(Y),
          void e.style.removeProperty("--transform-origin")
        );
      const t = (function (e) {
        const { style: t } = e,
          n = {};
        for (const [e, r] of U)
          (n[e] = t.getPropertyValue(e)), t.setProperty(e, r, "important");
        return () => {
          for (const [e] of U) {
            const r = n[e];
            r ? t.setProperty(e, r) : t.removeProperty(e);
          }
        };
      })(e);
      e.style.removeProperty("--transform-origin");
      try {
        let t = W.current;
        t?.isConnected ||
          (t =
            !_.selectors.hasSelectedValue(B.state) && G.current?.isConnected
              ? G.current
              : null);
        const n = q.current,
          r = (0, c.ownerWindow)(me),
          o = r.getComputedStyle(me),
          i = r.getComputedStyle(e),
          a = (0, c.ownerDocument)(he),
          l = j(he),
          u = F(he.getBoundingClientRect(), l),
          d = F(me.getBoundingClientRect(), l),
          p = u.height,
          f = ge || e,
          h = f.scrollHeight,
          m = parseFloat(i.borderBottomWidth),
          g = parseFloat(o.marginTop) || 10,
          y = parseFloat(o.marginBottom) || 10,
          v = parseFloat(o.minHeight) || 100,
          b = N(i),
          S = 5,
          w = 5,
          E = 20,
          T = a.documentElement.clientHeight - g - y,
          k = a.documentElement.clientWidth,
          C = T - u.bottom + p;
        let O,
          R = "rtl" === ie ? u.right - d.width : u.left,
          M = 0;
        if (t && n) {
          const e = F(n.getBoundingClientRect(), l);
          (O = F(t.getBoundingClientRect(), l)),
            (R = d.left + ("rtl" === ie ? e.right - O.right : e.left - O.left));
          const r = e.top - u.top + e.height / 2;
          M = O.top - d.top + O.height / 2 - r;
        }
        const P = C + M + y + m;
        let L = Math.min(T, P);
        const U = T - g - y,
          z = P - L,
          H = k - w;
        (me.style.left = `${(0, I.clamp)(R, S, H - d.width)}px`),
          (me.style.height = `${L}px`),
          (me.style.maxHeight = "none"),
          (me.style.marginTop = `${g}px`),
          (me.style.marginBottom = `${y}px`),
          (e.style.height = "100%");
        const V = D(f),
          $ = z >= V - A.SCROLL_EDGE_TOLERANCE_PX;
        $ && (L = Math.min(T, d.height) - (z - V));
        const K =
            u.top < E ||
            u.bottom > T - E ||
            Math.ceil(L) + A.SCROLL_EDGE_TOLERANCE_PX < Math.min(h, v),
          J = 1 !== (r.visualViewport?.scale ?? 1) && s.platform.engine.webkit;
        if (K || J)
          return (
            (ve.current = !0), (0, x.clearStyles)(me, be.current), void ne(!1)
          );
        const X = Math.max(v, L);
        if ($) {
          const e = Math.max(0, T - P);
          (me.style.top = d.height >= U ? "0" : `${e}px`),
            (me.style.height = `${L}px`),
            (f.scrollTop = D(f));
        } else (me.style.bottom = "0"), (f.scrollTop = z);
        if (O) {
          const t = d.top,
            n = d.height,
            r = O.top + O.height / 2,
            o = n > 0 ? ((r - t) / n) * 100 : 50,
            i = (0, I.clamp)(o, 0, 100);
          e.style.setProperty("--transform-origin", `50% ${i}%`);
        }
        (X === T || L >= b) && (ye.current = !0),
          Y(),
          Q &&
            null === B.state.selectedIndex &&
            null === B.state.activeIndex &&
            null != Z.current[0] &&
            B.set("activeIndex", 0),
          (ve.current = !0);
      } finally {
        t();
      }
    }, [B, ce, me, he, q, G, W, z, Y, ee, ne, Se, ge, Z, Q, ie, te]),
    o.useEffect(() => {
      if (!ee || !me || !ce) return;
      const e = (0, c.ownerWindow)(me);
      return (0, a.addEventListener)(e, "resize", function (e) {
        V(!1, (0, w.createChangeEventDetails)(E.REASONS.windowResize, e));
      });
    }, [V, ee, me, ce]);
  const we = {
      ...(ge
        ? { role: "presentation", "aria-orientation": void 0 }
        : {
            role: "listbox",
            "aria-multiselectable": $ || void 0,
            id: `${le}-list`,
          }),
      onKeyDown(e) {
        re && k.COMPOSITE_KEYS.has(e.key) && e.stopPropagation();
      },
      onScroll(e) {
        ge || _e(e.currentTarget);
      },
      ...(ee && {
        style: ge ? { height: "100%" } : x.LIST_FUNCTIONAL_STYLES,
      }),
    },
    Ee = (0, S.useRenderElement)("div", e, {
      ref: [t, z],
      state: xe,
      stateAttributesMapping: P,
      props: [
        pe,
        we,
        (0, C.getDisabledMountTransitionStyles)(fe),
        {
          className: !ge && ee ? y.styleDisableScrollbar.className : void 0,
        },
        v,
      ],
    });
  return (0, M.jsxs)(o.Fragment, {
    children: [
      !se && y.styleDisableScrollbar.getElement(ae),
      (0, M.jsx)(f.FloatingFocusManager, {
        context: oe,
        modal: !1,
        disabled: !de,
        openInteractionType: ue,
        returnFocus: m,
        restoreFocus: !0,
        children: Ee,
      }),
    ],
  });
});
const U = [
  ["transform", "none"],
  ["scale", "1"],
  ["translate", "0 0"],
];

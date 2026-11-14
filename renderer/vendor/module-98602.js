// vendor/module-98602.js — webpack module 98602
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.SelectScrollArrow = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(54807 /* vendor/module-54807 */),
  a = n(78207 /* vendor/module-78207 */),
  s = n(57122 /* vendor/module-57122 */),
  l = n(22370 /* vendor/module-22370 */),
  c = n(67538 /* vendor/module-67538 */),
  u = n(45796 /* vendor/module-45796 */),
  d = n(15586 /* vendor/module-15586 */),
  p = n(51909 /* vendor/module-51909 */),
  f = n(44306 /* vendor/module-44306 */),
  h = n(82764 /* vendor/module-82764 */),
  m = n(84557 /* vendor/module-84557 */);
t.SelectScrollArrow = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      style: o,
      direction: g,
      keepMounted: y = !1,
      ...v
    } = e,
    b = "up" === g,
    {
      store: S,
      popupRef: _,
      listRef: x,
      handleScrollArrowVisibility: w,
      scrollArrowsMountedCountRef: E,
    } = (0, l.useSelectRootContext)(),
    {
      side: T,
      scrollDownArrowRef: k,
      scrollUpArrowRef: C,
    } = (0, c.useSelectPositionerContext)(),
    I = b
      ? m.selectors.scrollUpArrowVisible
      : m.selectors.scrollDownArrowVisible,
    A = (0, a.useStore)(S, I),
    O = (0, a.useStore)(S, m.selectors.openMethod),
    R = A && "touch" !== O,
    M = (0, i.useTimeout)(),
    P = b ? C : k,
    {
      mounted: N,
      transitionStatus: D,
      setMounted: j,
    } = (0, u.useTransitionStatus)(R);
  (0, s.useIsoLayoutEffect)(
    () => (
      (E.current += 1),
      S.state.hasScrollArrows || S.set("hasScrollArrows", !0),
      () => {
        (E.current = Math.max(0, E.current - 1)),
          0 === E.current &&
            S.state.hasScrollArrows &&
            S.set("hasScrollArrows", !1);
      }
    ),
    [S, E],
  ),
    (0, d.useOpenChangeComplete)({
      open: R,
      ref: P,
      onComplete() {
        R || j(!1);
      },
    });
  const L = {
      direction: g,
      visible: R,
      side: T,
      transitionStatus: D,
    },
    F = {
      "aria-hidden": !0,
      children: b ? "▲" : "▼",
      style: { position: "absolute" },
      onMouseMove(e) {
        (0 === e.movementX && 0 === e.movementY) ||
          M.isStarted() ||
          (S.set("activeIndex", null),
          M.start(40, function e() {
            const t = S.state.listElement ?? _.current;
            if (!t) return;
            S.set("activeIndex", null), w();
            const n = (0, h.getMaxScrollOffset)(t.scrollHeight, t.clientHeight),
              r = (0, h.normalizeScrollOffset)(t.scrollTop, n),
              o = r === (b ? 0 : n),
              i = x.current;
            if (
              (r !== t.scrollTop && (t.scrollTop = r),
              0 === i.length &&
                S.set(
                  b ? "scrollUpArrowVisible" : "scrollDownArrowVisible",
                  !o,
                ),
              o)
            )
              M.clear();
            else {
              if (i.length > 0) {
                const e = P.current?.offsetHeight || 0;
                t.scrollTop = (function (e, t, n, r, o, i) {
                  if (t) {
                    let t = 0;
                    const r = n + o - h.SCROLL_EDGE_TOLERANCE_PX;
                    for (let n = 0; n < e.length; n += 1) {
                      const o = e[n];
                      if (o && o.offsetTop >= r) {
                        t = n;
                        break;
                      }
                    }
                    const a = Math.max(0, t - 1),
                      s = e[a];
                    return a < t && s
                      ? (0, h.normalizeScrollOffset)(s.offsetTop - o, i)
                      : 0;
                  }
                  let a = e.length - 1;
                  const s = n + r - o + h.SCROLL_EDGE_TOLERANCE_PX;
                  for (let t = 0; t < e.length; t += 1) {
                    const n = e[t];
                    if (n && n.offsetTop + n.offsetHeight > s) {
                      a = Math.max(0, t - 1);
                      break;
                    }
                  }
                  const l = Math.min(e.length - 1, a + 1),
                    c = e[l];
                  return l > a && c
                    ? (0, h.normalizeScrollOffset)(
                        c.offsetTop + c.offsetHeight - r + o,
                        i,
                      )
                    : i;
                })(i, b, r, t.clientHeight, e, n);
              }
              M.start(40, e);
            }
          }));
      },
      onMouseLeave() {
        M.clear();
      },
    },
    U = (0, p.useRenderElement)("div", e, {
      ref: [t, P],
      state: L,
      props: [F, v],
      stateAttributesMapping: f.transitionStatusMapping,
    });
  return N || y ? U : null;
});

// app/components/floating-portal.js — webpack module 39160
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.FloatingPortal = void 0),
  (t.useFloatingPortalNode = E),
  (t.usePortalContext = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = r(n(43144 /* vendor/module-43144 */)),
  a = n(81339 /* vendor/module-81339 */),
  s = n(23504 /* vendor/module-23504 */),
  l = n(38592 /* vendor/module-38592 */),
  c = n(28991 /* vendor/module-28991 */),
  u = n(57122 /* vendor/module-57122 */),
  d = n(4674 /* vendor/module-4674 */),
  p = n(38340 /* vendor/module-38340 */),
  f = n(70444 /* vendor/module-70444 */),
  h = n(3148 /* vendor/module-3148 */),
  m = n(22877 /* vendor/module-22877 */),
  g = n(82063 /* vendor/module-82063 */),
  y = n(48719 /* vendor/module-48719 */),
  v = n(51909 /* vendor/module-51909 */),
  b = n(25743 /* vendor/module-25743 */),
  S = n(31085 /* vendor/module-31085 */);
const _ = o.createContext(null),
  x = () => o.useContext(_);
t.usePortalContext = x;
const w = (0, y.createAttribute)("portal");
function E(e = {}) {
  const {
      ref: t,
      container: n,
      componentProps: r = p.EMPTY_OBJECT,
      elementProps: s,
    } = e,
    l = (0, c.useId)(),
    f = x(),
    h = f?.portalNode,
    [m, g] = o.useState(null),
    [y, b] = o.useState(null),
    S = (0, d.useStableCallback)((e) => {
      null !== e && b(e);
    }),
    _ = o.useRef(null);
  (0, u.useIsoLayoutEffect)(() => {
    if (null === n)
      return void (_.current && ((_.current = null), b(null), g(null)));
    if (null == l) return;
    const e = (n && ((0, a.isNode)(n) ? n : n.current)) ?? h ?? document.body;
    null != e
      ? _.current !== e && ((_.current = e), b(null), g(e))
      : _.current && ((_.current = null), b(null), g(null));
  }, [n, h, l]);
  const E = (0, v.useRenderElement)("div", r, {
    ref: [t, S],
    props: [{ id: l, [w]: "" }, s],
  });
  return {
    portalNode: y,
    portalSubtree: m && E ? i.createPortal(E, m) : null,
  };
}
t.FloatingPortal = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      style: a,
      children: c,
      container: d,
      renderGuards: p,
      ...y
    } = e,
    { portalNode: v, portalSubtree: x } = E({
      container: d,
      ref: t,
      componentProps: e,
      elementProps: y,
    }),
    w = o.useRef(null),
    T = o.useRef(null),
    k = o.useRef(null),
    C = o.useRef(null),
    [I, A] = o.useState(null),
    O = o.useRef(!1),
    R = I?.modal,
    M = I?.open,
    P = "boolean" == typeof p ? p : !!I && !I.modal && I.open && !!v;
  o.useEffect(() => {
    if (v && !R)
      return (0, l.mergeCleanups)(
        (0, s.addEventListener)(v, "focusin", e, !0),
        (0, s.addEventListener)(v, "focusout", e, !0),
      );
    function e(e) {
      v &&
        e.relatedTarget &&
        (0, h.isOutsideEvent)(e) &&
        ("focusin" === e.type
          ? O.current && ((0, h.enableFocusInside)(v), (O.current = !1))
          : ((0, h.disableFocusInside)(v), (O.current = !0)));
    }
  }, [v, R]),
    (0, u.useIsoLayoutEffect)(() => {
      v &&
        !0 === M &&
        O.current &&
        ((0, h.enableFocusInside)(v), (O.current = !1));
    }, [M, v]);
  const N = o.useMemo(
    () => ({
      beforeOutsideRef: w,
      afterOutsideRef: T,
      beforeInsideRef: k,
      afterInsideRef: C,
      portalNode: v,
      setFocusManagerState: A,
    }),
    [v],
  );
  return (0, S.jsxs)(o.Fragment, {
    children: [
      x,
      (0, S.jsxs)(_.Provider, {
        value: N,
        children: [
          P &&
            v &&
            (0, S.jsx)(f.FocusGuard, {
              "data-type": "outside",
              ref: w,
              onFocus: (e) => {
                if ((0, h.isOutsideEvent)(e, v)) k.current?.focus();
                else {
                  const e = I ? I.domReference : null,
                    t = (0, h.getPreviousTabbable)(e);
                  t?.focus();
                }
              },
            }),
          P &&
            v &&
            (0, S.jsx)("span", {
              "aria-owns": v.id,
              style: b.ownerVisuallyHidden,
            }),
          v && i.createPortal(c, v),
          P &&
            v &&
            (0, S.jsx)(f.FocusGuard, {
              "data-type": "outside",
              ref: T,
              onFocus: (e) => {
                if ((0, h.isOutsideEvent)(e, v)) C.current?.focus();
                else {
                  const t = I ? I.domReference : null,
                    n = (0, h.getNextTabbable)(t);
                  n?.focus(),
                    I?.closeOnFocusOut &&
                      I?.onOpenChange(
                        !1,
                        (0, m.createChangeEventDetails)(
                          g.REASONS.focusOut,
                          e.nativeEvent,
                        ),
                      );
                }
              },
            }),
        ],
      }),
    ],
  });
});

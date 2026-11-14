// app/components/branch.js — webpack module 56453
// params: (e, t, n) = (module, exports, require)
"use strict";
var r,
  o = Object.create,
  i = Object.defineProperty,
  a = Object.getOwnPropertyDescriptor,
  s = Object.getOwnPropertyNames,
  l = Object.getPrototypeOf,
  c = Object.prototype.hasOwnProperty,
  u = (e, t, n, r) => {
    if ((t && "object" == typeof t) || "function" == typeof t)
      for (let o of s(t))
        c.call(e, o) ||
          o === n ||
          i(e, o, {
            get: () => t[o],
            enumerable: !(r = a(t, o)) || r.enumerable,
          });
    return e;
  },
  d = {};
((e, t) => {
  for (var n in t) i(e, n, { get: t[n], enumerable: !0 });
})(d, {
  Branch: () => C,
  DismissableLayer: () => x,
  DismissableLayerBranch: () => w,
  Root: () => k,
}),
  (e.exports = ((r = d), u(i({}, "__esModule", { value: !0 }), r)));
var p,
  f = ((e, t, n) => (
    (n = null != e ? o(l(e)) : {}),
    u(e && e.__esModule ? n : i(n, "default", { value: e, enumerable: !0 }), e)
  ))(n(14041 /* vendor/module-14041 */)),
  h = n(96928 /* vendor/module-96928 */),
  m = n(76018 /* vendor/module-76018 */),
  g = n(95046 /* vendor/module-95046 */),
  y = n(81374 /* vendor/module-81374 */),
  v = n(7388 /* vendor/module-7388 */),
  b = n(31085 /* vendor/module-31085 */),
  S = "dismissableLayer.update",
  _ = f.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  x = f.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: a,
        onDismiss: s,
        ...l
      } = e,
      c = f.useContext(_),
      [u, d] = f.useState(null),
      x = u?.ownerDocument ?? globalThis?.document,
      [, w] = f.useState({}),
      k = (0, g.useComposedRefs)(t, (e) => d(e)),
      C = Array.from(c.layers),
      [I] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      A = C.indexOf(I),
      O = u ? C.indexOf(u) : -1,
      R = c.layersWithOutsidePointerEventsDisabled.size > 0,
      M = O >= A,
      P = (function (e, t = globalThis?.document) {
        const n = (0, y.useCallbackRef)(e),
          r = f.useRef(!1),
          o = f.useRef(() => {});
        return (
          f.useEffect(() => {
            const e = (e) => {
                if (e.target && !r.current) {
                  let r = function () {
                    T("dismissableLayer.pointerDownOutside", n, i, {
                      discrete: !0,
                    });
                  };
                  const i = { originalEvent: e };
                  "touch" === e.pointerType
                    ? (t.removeEventListener("click", o.current),
                      (o.current = r),
                      t.addEventListener("click", o.current, {
                        once: !0,
                      }))
                    : r();
                } else t.removeEventListener("click", o.current);
                r.current = !1;
              },
              i = window.setTimeout(() => {
                t.addEventListener("pointerdown", e);
              }, 0);
            return () => {
              window.clearTimeout(i),
                t.removeEventListener("pointerdown", e),
                t.removeEventListener("click", o.current);
            };
          }, [t, n]),
          { onPointerDownCapture: () => (r.current = !0) }
        );
      })((e) => {
        const t = e.target,
          n = [...c.branches].some((e) => e.contains(t));
        M && !n && (o?.(e), a?.(e), e.defaultPrevented || s?.());
      }, x),
      N = (function (e, t = globalThis?.document) {
        const n = (0, y.useCallbackRef)(e),
          r = f.useRef(!1);
        return (
          f.useEffect(() => {
            const e = (e) => {
              e.target &&
                !r.current &&
                T(
                  "dismissableLayer.focusOutside",
                  n,
                  { originalEvent: e },
                  { discrete: !1 },
                );
            };
            return (
              t.addEventListener("focusin", e),
              () => t.removeEventListener("focusin", e)
            );
          }, [t, n]),
          {
            onFocusCapture: () => (r.current = !0),
            onBlurCapture: () => (r.current = !1),
          }
        );
      })((e) => {
        const t = e.target;
        [...c.branches].some((e) => e.contains(t)) ||
          (i?.(e), a?.(e), e.defaultPrevented || s?.());
      }, x);
    return (
      (0, v.useEscapeKeydown)((e) => {
        O === c.layers.size - 1 &&
          (r?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()));
      }, x),
      f.useEffect(() => {
        if (u)
          return (
            n &&
              (0 === c.layersWithOutsidePointerEventsDisabled.size &&
                ((p = x.body.style.pointerEvents),
                (x.body.style.pointerEvents = "none")),
              c.layersWithOutsidePointerEventsDisabled.add(u)),
            c.layers.add(u),
            E(),
            () => {
              n &&
                1 === c.layersWithOutsidePointerEventsDisabled.size &&
                (x.body.style.pointerEvents = p);
            }
          );
      }, [u, x, n, c]),
      f.useEffect(
        () => () => {
          u &&
            (c.layers.delete(u),
            c.layersWithOutsidePointerEventsDisabled.delete(u),
            E());
        },
        [u, c],
      ),
      f.useEffect(() => {
        const e = () => w({});
        return (
          document.addEventListener(S, e),
          () => document.removeEventListener(S, e)
        );
      }, []),
      (0, b.jsx)(m.Primitive.div, {
        ...l,
        ref: k,
        style: {
          pointerEvents: R ? (M ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: (0, h.composeEventHandlers)(
          e.onFocusCapture,
          N.onFocusCapture,
        ),
        onBlurCapture: (0, h.composeEventHandlers)(
          e.onBlurCapture,
          N.onBlurCapture,
        ),
        onPointerDownCapture: (0, h.composeEventHandlers)(
          e.onPointerDownCapture,
          P.onPointerDownCapture,
        ),
      })
    );
  });
x.displayName = "DismissableLayer";
var w = f.forwardRef((e, t) => {
  const n = f.useContext(_),
    r = f.useRef(null),
    o = (0, g.useComposedRefs)(t, r);
  return (
    f.useEffect(() => {
      const e = r.current;
      if (e)
        return (
          n.branches.add(e),
          () => {
            n.branches.delete(e);
          }
        );
    }, [n.branches]),
    (0, b.jsx)(m.Primitive.div, { ...e, ref: o })
  );
});
function E() {
  const e = new CustomEvent(S);
  document.dispatchEvent(e);
}
function T(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, {
      bubbles: !1,
      cancelable: !0,
      detail: n,
    });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? (0, m.dispatchDiscreteCustomEvent)(o, i) : o.dispatchEvent(i);
}
w.displayName = "DismissableLayerBranch";
var k = x,
  C = w;

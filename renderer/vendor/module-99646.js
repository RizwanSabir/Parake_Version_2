// vendor/module-99646.js — webpack module 99646
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
  d = (e, t, n) => (
    (n = null != e ? o(l(e)) : {}),
    u(
      !t && e && e.__esModule
        ? n
        : i(n, "default", { value: e, enumerable: !0 }),
      e,
    )
  ),
  p = {};
((e, t) => {
  for (var n in t) i(e, n, { get: t[n], enumerable: !0 });
})(p, { Presence: () => y, Root: () => b }),
  (e.exports = ((r = p), u(i({}, "__esModule", { value: !0 }), r)));
var f = d(n(14041 /* vendor/module-14041 */)),
  h = n(95046 /* vendor/module-95046 */),
  m = n(70135 /* vendor/module-70135 */),
  g = d(n(14041 /* vendor/module-14041 */)),
  y = (e) => {
    const { present: t, children: n } = e,
      r = (function (e) {
        const [t, n] = f.useState(),
          r = f.useRef(null),
          o = f.useRef(e),
          i = f.useRef("none"),
          a = e ? "mounted" : "unmounted",
          [s, l] = (function (e, t) {
            return g.useReducer((e, n) => t[e][n] ?? e, e);
          })(a, {
            mounted: {
              UNMOUNT: "unmounted",
              ANIMATION_OUT: "unmountSuspended",
            },
            unmountSuspended: {
              MOUNT: "mounted",
              ANIMATION_END: "unmounted",
            },
            unmounted: { MOUNT: "mounted" },
          });
        return (
          f.useEffect(() => {
            const e = v(r.current);
            i.current = "mounted" === s ? e : "none";
          }, [s]),
          (0, m.useLayoutEffect)(() => {
            const t = r.current,
              n = o.current;
            if (n !== e) {
              const r = i.current,
                a = v(t);
              l(
                e
                  ? "MOUNT"
                  : "none" === a || "none" === t?.display
                    ? "UNMOUNT"
                    : n && r !== a
                      ? "ANIMATION_OUT"
                      : "UNMOUNT",
              ),
                (o.current = e);
            }
          }, [e, l]),
          (0, m.useLayoutEffect)(() => {
            if (t) {
              let e;
              const n = t.ownerDocument.defaultView ?? window,
                a = (i) => {
                  const a = v(r.current).includes(CSS.escape(i.animationName));
                  if (i.target === t && a && (l("ANIMATION_END"), !o.current)) {
                    const r = t.style.animationFillMode;
                    (t.style.animationFillMode = "forwards"),
                      (e = n.setTimeout(() => {
                        "forwards" === t.style.animationFillMode &&
                          (t.style.animationFillMode = r);
                      }));
                  }
                },
                s = (e) => {
                  e.target === t && (i.current = v(r.current));
                };
              return (
                t.addEventListener("animationstart", s),
                t.addEventListener("animationcancel", a),
                t.addEventListener("animationend", a),
                () => {
                  n.clearTimeout(e),
                    t.removeEventListener("animationstart", s),
                    t.removeEventListener("animationcancel", a),
                    t.removeEventListener("animationend", a);
                }
              );
            }
            l("ANIMATION_END");
          }, [t, l]),
          {
            isPresent: ["mounted", "unmountSuspended"].includes(s),
            ref: f.useCallback((e) => {
              (r.current = e ? getComputedStyle(e) : null), n(e);
            }, []),
          }
        );
      })(t),
      o =
        "function" == typeof n
          ? n({ present: r.isPresent })
          : f.Children.only(n),
      i = (0, h.useComposedRefs)(
        r.ref,
        (function (e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n
            ? e.ref
            : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
              (n = t && "isReactWarning" in t && t.isReactWarning),
              n ? e.props.ref : e.props.ref || e.ref);
        })(o),
      );
    return "function" == typeof n || r.isPresent
      ? f.cloneElement(o, { ref: i })
      : null;
  };
function v(e) {
  return e?.animationName || "none";
}
y.displayName = "Presence";
var b = y;

// vendor/module-51909.js — webpack module 51909
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default,
  o = n(4293 /* vendor/module-4293 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useRenderElement = function (e, t, n = {}) {
    const r = t.render,
      o = (function (e, t = {}) {
        const { className: n, style: r, render: o } = e,
          {
            state: i = d.EMPTY_OBJECT,
            ref: a,
            props: s,
            stateAttributesMapping: g,
            enabled: y = !0,
          } = t,
          v = y ? (0, f.resolveClassName)(n, i) : void 0,
          b = y ? (0, h.resolveStyle)(r, i) : void 0,
          S = y ? (0, p.getStateAttributesProps)(i, g) : d.EMPTY_OBJECT,
          _ =
            y && s
              ? (function (e) {
                  return Array.isArray(e)
                    ? (0, m.mergePropsN)(e)
                    : (0, m.mergeProps)(void 0, e);
                })(s)
              : void 0,
          x = y ? ((0, u.mergeObjects)(S, _) ?? {}) : d.EMPTY_OBJECT;
        return (
          "undefined" != typeof document &&
            (y
              ? Array.isArray(a)
                ? (x.ref = (0, l.useMergedRefsN)([
                    x.ref,
                    (0, c.getReactElementRef)(o),
                    ...a,
                  ]))
                : (x.ref = (0, l.useMergedRefs)(
                    x.ref,
                    (0, c.getReactElementRef)(o),
                    a,
                  ))
              : (0, l.useMergedRefs)(null, null)),
          y
            ? (void 0 !== v &&
                (x.className = (0, m.mergeClassNames)(x.className, v)),
              void 0 !== b && (x.style = (0, u.mergeObjects)(x.style, b)),
              x)
            : d.EMPTY_OBJECT
        );
      })(t, n);
    if (!1 === n.enabled) return null;
    return (function (e, t, n, r) {
      if (t) {
        if ("function" == typeof t) return t(n, r);
        const e = (0, m.mergeProps)(n, t.props);
        e.ref = n.ref;
        let o = t;
        return (
          o?.$$typeof === g && (o = s.Children.toArray(t)[0]),
          s.cloneElement(o, e)
        );
      }
      if (e && "string" == typeof e)
        return (function (e, t) {
          return "button" === e
            ? (0, a.createElement)("button", {
                type: "button",
                ...t,
                key: t.key,
              })
            : "img" === e
              ? (0, a.createElement)("img", {
                  alt: "",
                  ...t,
                  key: t.key,
                })
              : s.createElement(e, t);
        })(e, n);
      throw new Error((0, i.default)(8));
    })(e, r, o, n.state ?? d.EMPTY_OBJECT);
  });
var i = o(n(55099 /* vendor/module-55099 */)),
  a = r(n(14041 /* vendor/module-14041 */)),
  s = a,
  l = n(12772 /* vendor/module-12772 */),
  c = n(15683 /* vendor/module-15683 */),
  u = n(569 /* vendor/module-569 */),
  d = (n(77157 /* vendor/module-77157 */), n(38340 /* vendor/module-38340 */)),
  p = n(28184 /* vendor/module-28184 */),
  f = n(64714 /* vendor/module-64714 */),
  h = n(20916 /* vendor/module-20916 */),
  m = n(55327 /* vendor/module-55327 */);
const g = Symbol.for("react.lazy");

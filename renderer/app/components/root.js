// app/components/root.js — webpack module 17499
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
  Root: () => g,
  Slot: () => g,
  Slottable: () => S,
  createSlot: () => m,
  createSlottable: () => b,
}),
  (e.exports = ((r = d), u(i({}, "__esModule", { value: !0 }), r)));
var p = ((e, t, n) => (
    (n = null != e ? o(l(e)) : {}),
    u(e && e.__esModule ? n : i(n, "default", { value: e, enumerable: !0 }), e)
  ))(n(14041 /* vendor/module-14041 */)),
  f = n(95046 /* vendor/module-95046 */),
  h = n(31085 /* vendor/module-31085 */);
function m(e) {
  const t = y(e),
    n = p.forwardRef((e, n) => {
      const { children: r, ...o } = e,
        i = p.Children.toArray(r),
        a = i.find(_);
      if (a) {
        const e = a.props.children,
          r = i.map((t) =>
            t === a
              ? p.Children.count(e) > 1
                ? p.Children.only(null)
                : p.isValidElement(e)
                  ? e.props.children
                  : null
              : t,
          );
        return (0, h.jsx)(t, {
          ...o,
          ref: n,
          children: p.isValidElement(e) ? p.cloneElement(e, void 0, r) : null,
        });
      }
      return (0, h.jsx)(t, { ...o, ref: n, children: r });
    });
  return (n.displayName = `${e}.Slot`), n;
}
var g = m("Slot");
function y(e) {
  const t = p.forwardRef((e, t) => {
    const { children: n, ...r } = e;
    if (p.isValidElement(n)) {
      const e = (function (e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n
            ? e.ref
            : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
              (n = t && "isReactWarning" in t && t.isReactWarning),
              n ? e.props.ref : e.props.ref || e.ref);
        })(n),
        o = (function (e, t) {
          const n = { ...t };
          for (const r in t) {
            const o = e[r],
              i = t[r];
            /^on[A-Z]/.test(r)
              ? o && i
                ? (n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t;
                  })
                : o && (n[r] = o)
              : "style" === r
                ? (n[r] = { ...o, ...i })
                : "className" === r &&
                  (n[r] = [o, i].filter(Boolean).join(" "));
          }
          return { ...e, ...n };
        })(r, n.props);
      return (
        n.type !== p.Fragment && (o.ref = t ? (0, f.composeRefs)(t, e) : e),
        p.cloneElement(n, o)
      );
    }
    return p.Children.count(n) > 1 ? p.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var v = Symbol("radix.slottable");
function b(e) {
  const t = ({ children: e }) => (0, h.jsx)(h.Fragment, { children: e });
  return (t.displayName = `${e}.Slottable`), (t.__radixId = v), t;
}
var S = b("Slottable");
function _(e) {
  return (
    p.isValidElement(e) &&
    "function" == typeof e.type &&
    "__radixId" in e.type &&
    e.type.__radixId === v
  );
}

// app/components/create-context.js — webpack module 56732
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
})(d, { createContext: () => h, createContextScope: () => m }),
  (e.exports = ((r = d), u(i({}, "__esModule", { value: !0 }), r)));
var p = ((e, t, n) => (
    (n = null != e ? o(l(e)) : {}),
    u(e && e.__esModule ? n : i(n, "default", { value: e, enumerable: !0 }), e)
  ))(n(14041 /* vendor/module-14041 */)),
  f = n(31085 /* vendor/module-31085 */);
function h(e, t) {
  const n = p.createContext(t),
    r = (e) => {
      const { children: t, ...r } = e,
        o = p.useMemo(() => r, Object.values(r));
      return (0, f.jsx)(n.Provider, { value: o, children: t });
    };
  return (
    (r.displayName = e + "Provider"),
    [
      r,
      function (r) {
        const o = p.useContext(n);
        if (o) return o;
        if (void 0 !== t) return t;
        throw new Error(`\`${r}\` must be used within \`${e}\``);
      },
    ]
  );
}
function m(e, t = []) {
  let n = [];
  const r = () => {
    const t = n.map((e) => p.createContext(e));
    return function (n) {
      const r = n?.[e] || t;
      return p.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r]);
    };
  };
  return (
    (r.scopeName = e),
    [
      function (t, r) {
        const o = p.createContext(r),
          i = n.length;
        n = [...n, r];
        const a = (t) => {
          const { scope: n, children: r, ...a } = t,
            s = n?.[e]?.[i] || o,
            l = p.useMemo(() => a, Object.values(a));
          return (0, f.jsx)(s.Provider, { value: l, children: r });
        };
        return (
          (a.displayName = t + "Provider"),
          [
            a,
            function (n, a) {
              const s = a?.[e]?.[i] || o,
                l = p.useContext(s);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``);
            },
          ]
        );
      },
      g(r, ...t),
    ]
  );
}
function g(...e) {
  const t = e[0];
  if (1 === e.length) return t;
  const n = () => {
    const n = e.map((e) => ({
      useScope: e(),
      scopeName: e.scopeName,
    }));
    return function (e) {
      const r = n.reduce(
        (t, { useScope: n, scopeName: r }) => ({
          ...t,
          ...n(e)[`__scope${r}`],
        }),
        {},
      );
      return p.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}

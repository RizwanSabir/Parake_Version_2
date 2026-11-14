// vendor/module-1279.js — webpack module 1279
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (function (e, t) {
    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
  })(t, {
    cva: function () {
      return a;
    },
    cx: function () {
      return i;
    },
  });
const r = n(98355 /* vendor/module-98355 */),
  o = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
  i = r.clsx,
  a = (e, t) => (n) => {
    var r;
    if (null == (null == t ? void 0 : t.variants))
      return i(
        e,
        null == n ? void 0 : n.class,
        null == n ? void 0 : n.className,
      );
    const { variants: a, defaultVariants: s } = t,
      l = Object.keys(a).map((e) => {
        const t = null == n ? void 0 : n[e],
          r = null == s ? void 0 : s[e];
        if (null === t) return null;
        const i = o(t) || o(r);
        return a[e][i];
      }),
      c =
        n &&
        Object.entries(n).reduce((e, t) => {
          let [n, r] = t;
          return void 0 === r || (e[n] = r), e;
        }, {}),
      u =
        null == t || null === (r = t.compoundVariants) || void 0 === r
          ? void 0
          : r.reduce((e, t) => {
              let { class: n, className: r, ...o } = t;
              return Object.entries(o).every((e) => {
                let [t, n] = e;
                return Array.isArray(n)
                  ? n.includes({ ...s, ...c }[t])
                  : { ...s, ...c }[t] === n;
              })
                ? [...e, n, r]
                : e;
            }, []);
    return i(
      e,
      l,
      u,
      null == n ? void 0 : n.class,
      null == n ? void 0 : n.className,
    );
  };

// vendor/module-36485.js — webpack module 36485
// params: (e, t) = (module, exports, require)
"use strict";
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = {
  isValidating: !1,
  isTouched: !1,
  isBlurred: !1,
  isDirty: !1,
  isPristine: !0,
  isValid: !0,
  isDefaultValue: !0,
  errors: [],
  errorMap: {},
  errorSourceMap: {},
  _arrayVersion: 0,
  _pendingValidationsCount: 0,
};
(t.defaultFieldMeta = n),
  (t.metaHelper = function (e) {
    function t(t) {
      const r = e.getFieldMeta(t) ?? n;
      e.setFieldMeta(t, {
        ...r,
        _arrayVersion: (r._arrayVersion || 0) + 1,
      });
    }
    function r(e, t) {
      return `${e}[${t}]`;
    }
    function o(t, n, o, i) {
      const a = [r(t, n)];
      switch (o) {
        case "swap":
          a.push(r(t, i));
          break;
        case "move": {
          const [e, o] = [Math.min(n, i), Math.max(n, i)];
          for (let n = e; n <= o; n++) a.push(r(t, n));
          break;
        }
        default: {
          const o = e.getFieldValue(t),
            i = Array.isArray(o) ? o.length : 0;
          for (let e = n + 1; e < i; e++) a.push(r(t, e));
          break;
        }
      }
      return Object.keys(e.fieldInfo).filter((e) =>
        a.some((t) => e.startsWith(t)),
      );
    }
    function i(t, n) {
      ("up" === n ? t : [...t].reverse()).forEach((t) => {
        const r = (function (e, t) {
            return e.replace(/\[(\d+)\]/, (e, n) => {
              const r = parseInt(n, 10);
              return `[${"up" === t ? r + 1 : Math.max(0, r - 1)}]`;
            });
          })(t.toString(), n),
          o = e.getFieldMeta(r);
        o ? e.setFieldMeta(t, o) : e.setFieldMeta(t, a());
      });
    }
    const a = () => n;
    return {
      bumpArrayVersion: t,
      handleArrayMove: function (n, a, s) {
        t(n);
        const l = o(n, a, "move", s),
          c = Math.min(a, s),
          u = Math.max(a, s);
        for (let e = c; e <= u; e++) l.push(r(n, e));
        const d = Object.keys(e.fieldInfo).reduce(
          (t, o) => (o.startsWith(r(n, a)) && t.set(o, e.getFieldMeta(o)), t),
          new Map(),
        );
        i(l, a < s ? "up" : "down"),
          Object.keys(e.fieldInfo)
            .filter((e) => e.startsWith(r(n, s)))
            .forEach((t) => {
              const o = t.replace(r(n, s), r(n, a)),
                i = d.get(o);
              i && e.setFieldMeta(t, i);
            });
      },
      handleArrayRemove: function (e, n) {
        t(e), i(o(e, n, "remove"), "up");
      },
      handleArraySwap: function (n, i, a) {
        t(n),
          o(n, i, "swap", a).forEach((t) => {
            if (!t.toString().startsWith(r(n, i))) return;
            const o = t.toString().replace(r(n, i), r(n, a)),
              [s, l] = [e.getFieldMeta(t), e.getFieldMeta(o)];
            s && e.setFieldMeta(o, s), l && e.setFieldMeta(t, l);
          });
      },
      handleArrayInsert: function (n, s) {
        t(n);
        const l = o(n, s, "insert");
        i(l, "down"),
          l.forEach((t) => {
            t.toString().startsWith(r(n, s)) && e.setFieldMeta(t, a());
          });
      },
    };
  });

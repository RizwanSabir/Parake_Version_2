// vendor/module-42594.js — webpack module 42594
// params: (e, t) = (module, exports, require)
"use strict";
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = (e, t) => {
    const n = (function (e, t) {
      const n = new Map();
      for (const r of e) {
        const e = r.path ?? [];
        let o = t,
          i = "";
        for (let t = 0; t < e.length; t++) {
          const n = e[t];
          if (void 0 === n) continue;
          const r = "object" == typeof n ? n.key : n,
            a = Number(r);
          Array.isArray(o) && !Number.isNaN(a)
            ? (i += `[${a}]`)
            : (i += (t > 0 ? "." : "") + String(r)),
            (o = "object" == typeof o && null !== o ? o[r] : void 0);
        }
        n.set(i, (n.get(i) ?? []).concat(r));
      }
      return Object.fromEntries(n);
    })(e, t);
    return { form: n, fields: n };
  },
  r = {
    validate({ value: e, validationSource: t }, r) {
      const o = r["~standard"].validate(e);
      if (o instanceof Promise)
        throw new Error("async function passed to sync validator");
      if (o.issues) return "field" === t ? o.issues : n(o.issues, e);
    },
    async validateAsync({ value: e, validationSource: t }, r) {
      const o = await r["~standard"].validate(e);
      if (o.issues) return "field" === t ? o.issues : n(o.issues, e);
    },
  };
(t.isStandardSchemaValidator = (e) => !!e && "~standard" in e),
  (t.standardSchemaValidators = r);

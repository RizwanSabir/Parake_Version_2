// vendor/module-48914.js — webpack module 48914
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(14041 /* vendor/module-14041 */),
  o = n(75186 /* vendor/module-75186 */);
function i(e) {
  const t = Object.create(null, {
    [Symbol.toStringTag]: { value: "Module" },
  });
  if (e)
    for (const n in e)
      if ("default" !== n) {
        const r = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(
          t,
          n,
          r.get ? r : { enumerable: !0, get: () => e[n] },
        );
      }
  return (t.default = e), Object.freeze(t);
}
const a = i(r),
  s = a,
  l = "17" === a.version.split(".")[0] ? o.useUUID : s.useId;
t.useFormId = l;

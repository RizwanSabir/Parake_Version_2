// vendor/module-78746.js — webpack module 78746
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.getFilter = function (e = {}) {
    const t = {
        usage: "search",
        sensitivity: "base",
        ignorePunctuation: !0,
        ...e,
      },
      n = `${(0, o.stringifyLocale)(e.locale)}|${JSON.stringify(t)}`,
      a = i.get(n);
    if (a) return a;
    const s = new Intl.Collator(e.locale, t),
      l = {
        contains(e, t, n) {
          if (!t) return !0;
          const o = (0, r.stringifyAsLabel)(e, n);
          for (let e = 0; e <= o.length - t.length; e += 1)
            if (0 === s.compare(o.slice(e, e + t.length), t)) return !0;
          return !1;
        },
        startsWith(e, t, n) {
          if (!t) return !0;
          const o = (0, r.stringifyAsLabel)(e, n);
          return 0 === s.compare(o.slice(0, t.length), t);
        },
        endsWith(e, t, n) {
          if (!t) return !0;
          const o = (0, r.stringifyAsLabel)(e, n),
            i = t.length;
          return o.length >= i && 0 === s.compare(o.slice(o.length - i), t);
        },
      };
    return i.set(n, l), l;
  });
var r = n(25411 /* vendor/module-25411 */),
  o = n(71494 /* vendor/module-71494 */);
const i = new Map();

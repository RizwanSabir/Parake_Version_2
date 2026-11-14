// vendor/module-28184.js — webpack module 28184
// params: (e, t) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.getStateAttributesProps = function (e, t) {
    const n = {};
    for (const r in e) {
      const o = e[r];
      if (t?.hasOwnProperty(r)) {
        const e = t[r](o);
        null != e && Object.assign(n, e);
        continue;
      }
      !0 === o
        ? (n[`data-${r.toLowerCase()}`] = "")
        : o && (n[`data-${r.toLowerCase()}`] = o.toString());
    }
    return n;
  });

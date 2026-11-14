// vendor/module-55099.js — webpack module 55099
// params: (e, t) = (module, exports, require)
"use strict";
function n(e, t) {
  return function (n, ...r) {
    const o = new URL(e);
    return (
      o.searchParams.set("code", n.toString()),
      r.forEach((e) => o.searchParams.append("args[]", e)),
      `${t} error #${n}; visit ${o} for the full message.`
    );
  };
}
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.createFormatErrorMessage = n),
  (t.default = void 0);
const r = n("https://base-ui.com/production-error", "Base UI");
t.default = r;

// vendor/module-71740.js — webpack module 71740
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useValueAsRef = function (e) {
    const t = (0, o.useRefWithInit)(i, e).current;
    return (t.next = e), (0, r.useIsoLayoutEffect)(t.effect), t;
  });
var r = n(57122 /* vendor/module-57122 */),
  o = n(16843 /* vendor/module-16843 */);
function i(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    },
  };
  return t;
}

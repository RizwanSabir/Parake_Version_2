// vendor/module-4674.js — webpack module 4674
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useStableCallback = function (e) {
    const t = (0, o.useRefWithInit)(s).current;
    return (t.next = e), a(t.effect), t.trampoline;
  });
var r = n(23549 /* vendor/module-23549 */),
  o = n(16843 /* vendor/module-16843 */);
const i = r.SafeReact.useInsertionEffect,
  a = i && i !== r.SafeReact.useLayoutEffect ? i : (e) => e();
function s() {
  const e = {
    next: void 0,
    callback: l,
    trampoline: (...t) => e.callback?.(...t),
    effect: () => {
      e.callback = e.next;
    },
  };
  return e;
}
function l() {}

// vendor/module-22877.js — webpack module 22877
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.createChangeEventDetails = function (e, t, n, o) {
    let i = !1,
      a = !1;
    const s = o ?? r.EMPTY_OBJECT;
    return {
      reason: e,
      event: t ?? new Event("base-ui"),
      cancel() {
        i = !0;
      },
      allowPropagation() {
        a = !0;
      },
      get isCanceled() {
        return i;
      },
      get isPropagationAllowed() {
        return a;
      },
      trigger: n,
      ...s,
    };
  }),
  (t.createGenericEventDetails = function (e, t, n) {
    const o = n ?? r.EMPTY_OBJECT;
    return { reason: e, event: t ?? new Event("base-ui"), ...o };
  });
var r = n(38340 /* vendor/module-38340 */);
n(82063 /* vendor/module-82063 */);

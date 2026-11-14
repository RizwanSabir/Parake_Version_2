// vendor/module-71934.js — webpack module 71934
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.activeElement = function (e) {
    let t = e.activeElement;
    for (; null != t?.shadowRoot?.activeElement; )
      t = t.shadowRoot.activeElement;
    return t;
  }),
  (t.contains = function (e, t) {
    if (!e || !t) return !1;
    const n = t.getRootNode?.();
    if (e.contains(t)) return !0;
    if (n && (0, r.isShadowRoot)(n)) {
      let n = t;
      for (; n; ) {
        if (e === n) return !0;
        n = n.parentNode || n.host;
      }
    }
    return !1;
  }),
  (t.getTarget = function (e) {
    return "composedPath" in e ? e.composedPath()[0] : e.target;
  });
var r = n(81339 /* vendor/module-81339 */);

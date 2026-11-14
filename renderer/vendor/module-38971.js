// vendor/module-38971.js — webpack module 38971
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(32401 /* vendor/module-32401 */);
class o extends r.EventClient {
  constructor() {
    super({ pluginId: "form-devtools", reconnectEveryMs: 1e3 });
  }
}
const i = new o();
t.formEventClient = i;

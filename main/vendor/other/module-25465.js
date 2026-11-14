// vendor/other/module-25465.js — webpack module 25465
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
n.d(t, { _: () => c });
var r = n(98902 /* vendor/other/module-98902 */),
  o = n(71895 /* vendor/other/module-71895 */),
  i = n(32535 /* vendor/other/module-32535 */);
const s = "context",
  a = new (class {
    active() {
      return r.l;
    }
    with(e, t, n, ...r) {
      return t.call(n, ...r);
    }
    bind(e, t) {
      return t;
    }
    enable() {
      return this;
    }
    disable() {
      return this;
    }
  })();
class c {
  constructor() {}
  static getInstance() {
    return this._instance || (this._instance = new c()), this._instance;
  }
  setGlobalContextManager(e) {
    return (0, o.$G)(s, e, i.K.instance());
  }
  active() {
    return this._getContextManager().active();
  }
  with(e, t, n, ...r) {
    return this._getContextManager().with(e, t, n, ...r);
  }
  bind(e, t) {
    return this._getContextManager().bind(e, t);
  }
  _getContextManager() {
    return (0, o.mS)(s) || a;
  }
  disable() {
    this._getContextManager().disable(), (0, o.kv)(s, i.K.instance());
  }
}

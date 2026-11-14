// vendor/other/module-46922.js — webpack module 46922
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
n.d(t, { $: () => _ });
var r = n(71895 /* vendor/other/module-71895 */);
const o = {
    get(e, t) {
      if (null != e) return e[t];
    },
    keys: (e) => (null == e ? [] : Object.keys(e)),
  },
  i = {
    set(e, t, n) {
      null != e && (e[t] = n);
    },
  };
var s = n(25465 /* vendor/other/module-25465 */);
const a = (0, n(98902 /* vendor/other/module-98902 */).n)(
  "OpenTelemetry Baggage Key",
);
function c(e) {
  return e.getValue(a) || void 0;
}
function u() {
  return c(s._.getInstance().active());
}
function l(e, t) {
  return e.setValue(a, t);
}
function d(e) {
  return e.deleteValue(a);
}
var p = n(57277 /* vendor/other/module-57277 */),
  f = n(32535 /* vendor/other/module-32535 */);
const h = "propagation",
  g = new (class {
    inject(e, t) {}
    extract(e, t) {
      return e;
    }
    fields() {
      return [];
    }
  })();
class m {
  constructor() {
    (this.createBaggage = p.L),
      (this.getBaggage = c),
      (this.getActiveBaggage = u),
      (this.setBaggage = l),
      (this.deleteBaggage = d);
  }
  static getInstance() {
    return this._instance || (this._instance = new m()), this._instance;
  }
  setGlobalPropagator(e) {
    return (0, r.$G)(h, e, f.K.instance());
  }
  inject(e, t, n = i) {
    return this._getGlobalPropagator().inject(e, t, n);
  }
  extract(e, t, n = o) {
    return this._getGlobalPropagator().extract(e, t, n);
  }
  fields() {
    return this._getGlobalPropagator().fields();
  }
  disable() {
    (0, r.kv)(h, f.K.instance());
  }
  _getGlobalPropagator() {
    return (0, r.mS)(h) || g;
  }
}
const _ = m.getInstance();

// vendor/other/module-36182.js — webpack module 36182
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
n.d(t, { Ac: () => f, Dq: () => i });
class r {}
class o {
  addCallback(e) {}
  removeCallback(e) {}
}
const i = new (class {
    constructor() {}
    createGauge(e, t) {
      return a;
    }
    createHistogram(e, t) {
      return c;
    }
    createCounter(e, t) {
      return s;
    }
    createUpDownCounter(e, t) {
      return u;
    }
    createObservableGauge(e, t) {
      return d;
    }
    createObservableCounter(e, t) {
      return l;
    }
    createObservableUpDownCounter(e, t) {
      return p;
    }
    addBatchObservableCallback(e, t) {}
    removeBatchObservableCallback(e) {}
  })(),
  s = new (class extends r {
    add(e, t) {}
  })(),
  a = new (class extends r {
    record(e, t) {}
  })(),
  c = new (class extends r {
    record(e, t) {}
  })(),
  u = new (class extends r {
    add(e, t) {}
  })(),
  l = new (class extends o {})(),
  d = new (class extends o {})(),
  p = new (class extends o {})();
function f() {
  return i;
}

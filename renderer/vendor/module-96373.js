// vendor/module-96373.js — webpack module 96373
// params: (e, t, n) = (module, exports, require)
const r = n(93097 /* vendor/module-93097 */);
var o = class {
    constructor(e, t) {
      (this.atom = r.createAtom(e)),
        (this.get = this.get.bind(this)),
        (this.setState = this.setState.bind(this)),
        (this.subscribe = this.subscribe.bind(this)),
        t && (this.actions = t(this));
    }
    setState(e) {
      this.atom.set(e);
    }
    get state() {
      return this.atom.get();
    }
    get() {
      return this.state;
    }
    subscribe(e) {
      return this.atom.subscribe(r.toObserver(e));
    }
  },
  i = class {
    constructor(e) {
      this.atom = r.createAtom(e);
    }
    get state() {
      return this.atom.get();
    }
    get() {
      return this.state;
    }
    subscribe(e) {
      return this.atom.subscribe(r.toObserver(e));
    }
  };
(t.ReadonlyStore = i),
  (t.Store = o),
  (t.createStore = function (e, t) {
    return "function" == typeof e ? new i(e) : t ? new o(e, t) : new o(e);
  });

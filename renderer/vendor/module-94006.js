// vendor/module-94006.js — webpack module 94006
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }), (t.Store = void 0);
var r = n(30911 /* vendor/module-30911 */);
t.Store = class {
  constructor(e) {
    (this.state = e), (this.listeners = new Set()), (this.updateTick = 0);
  }
  subscribe = (e) => (
    this.listeners.add(e),
    () => {
      this.listeners.delete(e);
    }
  );
  getSnapshot = () => this.state;
  setState(e) {
    if (this.state === e) return;
    (this.state = e), (this.updateTick += 1);
    const t = this.updateTick;
    for (const n of this.listeners) {
      if (t !== this.updateTick) return;
      n(e);
    }
  }
  update(e) {
    for (const t in e)
      if (!Object.is(this.state[t], e[t]))
        return void this.setState({ ...this.state, ...e });
  }
  set(e, t) {
    Object.is(this.state[e], t) || this.setState({ ...this.state, [e]: t });
  }
  notifyAll() {
    const e = { ...this.state };
    this.setState(e);
  }
  use(e, t, n, o) {
    return (0, r.useStore)(this, e, t, n, o);
  }
};

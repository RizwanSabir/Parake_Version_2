// vendor/other/module-80519.js — webpack module 80519
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
t.Mutex = class {
  constructor() {
    (this._entries = []), (this._waiters = []), (this._value = 1);
  }
  async runExclusive(e) {
    const t = await this._acquire();
    try {
      return await e();
    } finally {
      t();
    }
  }
  _acquire() {
    return new Promise((e, t) => {
      this._entries.push({ resolve: e, reject: t }), this._dispatch();
    });
  }
  _release() {
    (this._value += 1), this._dispatch();
  }
  _dispatch() {
    for (let e = this._value; e > 0; e--) {
      const t = this._entries?.shift();
      t &&
        ((this._value -= e),
        (e = this._value + 1),
        t.resolve(this._newReleaser()));
    }
    this._drainUnlockWaiters();
  }
  _newReleaser() {
    let e = !1;
    return () => {
      e || ((e = !0), this._release());
    };
  }
  _drainUnlockWaiters() {
    for (let e = this._value; e > 0; e--)
      this._waiters[e - 1] &&
        (this._waiters.forEach((e) => e()), (this._waiters = []));
  }
};

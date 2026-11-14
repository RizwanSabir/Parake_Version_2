// vendor/other/module-8462.js — webpack module 8462
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.CancellationError = t.CancellationToken = void 0);
const r = n(24434 /* external/events */);
class o extends r.EventEmitter {
  get cancelled() {
    return this._cancelled || (null != this._parent && this._parent.cancelled);
  }
  set parent(e) {
    this.removeParentCancelHandler(),
      (this._parent = e),
      (this.parentCancelHandler = () => this.cancel()),
      this._parent.onCancel(this.parentCancelHandler);
  }
  constructor(e) {
    super(),
      (this.parentCancelHandler = null),
      (this._parent = null),
      (this._cancelled = !1),
      null != e && (this.parent = e);
  }
  cancel() {
    (this._cancelled = !0), this.emit("cancel");
  }
  onCancel(e) {
    this.cancelled ? e() : this.once("cancel", e);
  }
  createPromise(e) {
    if (this.cancelled) return Promise.reject(new i());
    const t = () => {
      if (null != n)
        try {
          this.removeListener("cancel", n), (n = null);
        } catch (e) {}
    };
    let n = null;
    return new Promise((t, r) => {
      let o = null;
      (n = () => {
        try {
          null != o && (o(), (o = null));
        } finally {
          r(new i());
        }
      }),
        this.cancelled
          ? n()
          : (this.onCancel(n),
            e(t, r, (e) => {
              o = e;
            }));
    })
      .then((e) => (t(), e))
      .catch((e) => {
        throw (t(), e);
      });
  }
  removeParentCancelHandler() {
    const e = this._parent;
    null != e &&
      null != this.parentCancelHandler &&
      (e.removeListener("cancel", this.parentCancelHandler),
      (this.parentCancelHandler = null));
  }
  dispose() {
    try {
      this.removeParentCancelHandler();
    } finally {
      this.removeAllListeners(), (this._parent = null);
    }
  }
}
t.CancellationToken = o;
class i extends Error {
  constructor() {
    super("cancelled");
  }
}
t.CancellationError = i;

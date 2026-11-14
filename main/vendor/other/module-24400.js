// vendor/other/module-24400.js — webpack module 24400
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const { kForOnEventAttribute: r, kListener: o } = n(
    74033 /* vendor/other/module-74033 */,
  ),
  i = Symbol("kCode"),
  s = Symbol("kData"),
  a = Symbol("kError"),
  c = Symbol("kMessage"),
  u = Symbol("kReason"),
  l = Symbol("kTarget"),
  d = Symbol("kType"),
  p = Symbol("kWasClean");
class f {
  constructor(e) {
    (this[l] = null), (this[d] = e);
  }
  get target() {
    return this[l];
  }
  get type() {
    return this[d];
  }
}
Object.defineProperty(f.prototype, "target", { enumerable: !0 }),
  Object.defineProperty(f.prototype, "type", { enumerable: !0 });
class h extends f {
  constructor(e, t = {}) {
    super(e),
      (this[i] = void 0 === t.code ? 0 : t.code),
      (this[u] = void 0 === t.reason ? "" : t.reason),
      (this[p] = void 0 !== t.wasClean && t.wasClean);
  }
  get code() {
    return this[i];
  }
  get reason() {
    return this[u];
  }
  get wasClean() {
    return this[p];
  }
}
Object.defineProperty(h.prototype, "code", { enumerable: !0 }),
  Object.defineProperty(h.prototype, "reason", { enumerable: !0 }),
  Object.defineProperty(h.prototype, "wasClean", { enumerable: !0 });
class g extends f {
  constructor(e, t = {}) {
    super(e),
      (this[a] = void 0 === t.error ? null : t.error),
      (this[c] = void 0 === t.message ? "" : t.message);
  }
  get error() {
    return this[a];
  }
  get message() {
    return this[c];
  }
}
Object.defineProperty(g.prototype, "error", { enumerable: !0 }),
  Object.defineProperty(g.prototype, "message", { enumerable: !0 });
class m extends f {
  constructor(e, t = {}) {
    super(e), (this[s] = void 0 === t.data ? null : t.data);
  }
  get data() {
    return this[s];
  }
}
Object.defineProperty(m.prototype, "data", { enumerable: !0 });
const _ = {
  addEventListener(e, t, n = {}) {
    for (const i of this.listeners(e)) if (!n[r] && i[o] === t && !i[r]) return;
    let i;
    if ("message" === e)
      i = function (e, n) {
        const r = new m("message", { data: n ? e : e.toString() });
        (r[l] = this), S(t, this, r);
      };
    else if ("close" === e)
      i = function (e, n) {
        const r = new h("close", {
          code: e,
          reason: n.toString(),
          wasClean: this._closeFrameReceived && this._closeFrameSent,
        });
        (r[l] = this), S(t, this, r);
      };
    else if ("error" === e)
      i = function (e) {
        const n = new g("error", { error: e, message: e.message });
        (n[l] = this), S(t, this, n);
      };
    else {
      if ("open" !== e) return;
      i = function () {
        const e = new f("open");
        (e[l] = this), S(t, this, e);
      };
    }
    (i[r] = !!n[r]), (i[o] = t), n.once ? this.once(e, i) : this.on(e, i);
  },
  removeEventListener(e, t) {
    for (const n of this.listeners(e))
      if (n[o] === t && !n[r]) {
        this.removeListener(e, n);
        break;
      }
  },
};
function S(e, t, n) {
  "object" == typeof e && e.handleEvent
    ? e.handleEvent.call(e, n)
    : e.call(t, n);
}
e.exports = {
  CloseEvent: h,
  ErrorEvent: g,
  Event: f,
  EventTarget: _,
  MessageEvent: m,
};

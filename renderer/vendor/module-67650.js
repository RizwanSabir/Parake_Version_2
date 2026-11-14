// vendor/module-67650.js — webpack module 67650
// params: (e) = (module, exports, require)
"use strict";
var t,
  n = Object.defineProperty,
  r = Object.getOwnPropertyDescriptor,
  o = Object.getOwnPropertyNames,
  i = Object.prototype.hasOwnProperty,
  a = {};
((e, t) => {
  for (var r in t) n(e, r, { get: t[r], enumerable: !0 });
})(a, { Subscribable: () => s }),
  (e.exports =
    ((t = a),
    ((e, t, a, s) => {
      if ((t && "object" == typeof t) || "function" == typeof t)
        for (let a of o(t))
          i.call(e, a) ||
            void 0 === a ||
            n(e, a, {
              get: () => t[a],
              enumerable: !(s = r(t, a)) || s.enumerable,
            });
      return e;
    })(n({}, "__esModule", { value: !0 }), t)));
var s = class {
  constructor() {
    (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
  }
  subscribe(e) {
    return (
      this.listeners.add(e),
      this.onSubscribe(),
      () => {
        this.listeners.delete(e), this.onUnsubscribe();
      }
    );
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {}
  onUnsubscribe() {}
};

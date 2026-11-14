// vendor/module-97167.js — webpack module 97167
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
})(a, {
  TimeoutManager: () => l,
  defaultTimeoutProvider: () => s,
  systemSetTimeoutZero: () => u,
  timeoutManager: () => c,
}),
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
var s = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  l = class {
    #Ie = s;
    #Ae = !1;
    setTimeoutProvider(e) {
      this.#Ie = e;
    }
    setTimeout(e, t) {
      return this.#Ie.setTimeout(e, t);
    }
    clearTimeout(e) {
      this.#Ie.clearTimeout(e);
    }
    setInterval(e, t) {
      return this.#Ie.setInterval(e, t);
    }
    clearInterval(e) {
      this.#Ie.clearInterval(e);
    }
  },
  c = new l();
function u(e) {
  setTimeout(e, 0);
}

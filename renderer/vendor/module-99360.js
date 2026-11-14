// vendor/module-99360.js — webpack module 99360
// params: (e, t, n) = (module, exports, require)
"use strict";
var r,
  o = Object.defineProperty,
  i = Object.getOwnPropertyDescriptor,
  a = Object.getOwnPropertyNames,
  s = Object.prototype.hasOwnProperty,
  l = {};
((e, t) => {
  for (var n in t) o(e, n, { get: t[n], enumerable: !0 });
})(l, { Removable: () => p }),
  (e.exports =
    ((r = l),
    ((e, t, n, r) => {
      if ((t && "object" == typeof t) || "function" == typeof t)
        for (let n of a(t))
          s.call(e, n) ||
            void 0 === n ||
            o(e, n, {
              get: () => t[n],
              enumerable: !(r = i(t, n)) || r.enumerable,
            });
      return e;
    })(o({}, "__esModule", { value: !0 }), r)));
var c = n(97167 /* vendor/module-97167 */),
  u = n(89425 /* vendor/module-89425 */),
  d = n(26036 /* vendor/module-26036 */),
  p = class {
    #Ce;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(),
        (0, d.isValidTimeout)(this.gcTime) &&
          (this.#Ce = c.timeoutManager.setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime));
    }
    updateGcTime(e) {
      this.gcTime = Math.max(
        this.gcTime || 0,
        e ?? (u.environmentManager.isServer() ? 1 / 0 : 3e5),
      );
    }
    clearGcTimeout() {
      void 0 !== this.#Ce &&
        (c.timeoutManager.clearTimeout(this.#Ce), (this.#Ce = void 0));
    }
  };

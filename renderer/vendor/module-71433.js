// vendor/module-71433.js — webpack module 71433
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
})(l, { OnlineManager: () => u, onlineManager: () => d }),
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
var c = n(67650 /* vendor/module-67650 */),
  u = class extends c.Subscribable {
    #P = !0;
    #v;
    #b;
    constructor() {
      super(),
        (this.#b = (e) => {
          if ("undefined" != typeof window && window.addEventListener) {
            const t = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener("online", t, !1),
              window.addEventListener("offline", n, !1),
              () => {
                window.removeEventListener("online", t),
                  window.removeEventListener("offline", n);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#v || this.setEventListener(this.#b);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#v?.(), (this.#v = void 0));
    }
    setEventListener(e) {
      (this.#b = e), this.#v?.(), (this.#v = e(this.setOnline.bind(this)));
    }
    setOnline(e) {
      this.#P !== e &&
        ((this.#P = e),
        this.listeners.forEach((t) => {
          t(e);
        }));
    }
    isOnline() {
      return this.#P;
    }
  },
  d = new u();

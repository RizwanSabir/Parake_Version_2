// vendor/module-35652.js — webpack module 35652
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
})(l, { FocusManager: () => u, focusManager: () => d }),
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
    #y;
    #v;
    #b;
    constructor() {
      super(),
        (this.#b = (e) => {
          if ("undefined" != typeof window && window.addEventListener) {
            const t = () => e();
            return (
              window.addEventListener("visibilitychange", t, !1),
              () => {
                window.removeEventListener("visibilitychange", t);
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
      (this.#b = e),
        this.#v?.(),
        (this.#v = e((e) => {
          "boolean" == typeof e ? this.setFocused(e) : this.onFocus();
        }));
    }
    setFocused(e) {
      this.#y !== e && ((this.#y = e), this.onFocus());
    }
    onFocus() {
      const e = this.isFocused();
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    isFocused() {
      return "boolean" == typeof this.#y
        ? this.#y
        : "hidden" !== globalThis.document?.visibilityState;
    }
  },
  d = new u();

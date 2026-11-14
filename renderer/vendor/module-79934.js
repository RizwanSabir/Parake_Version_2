// vendor/module-79934.js — webpack module 79934
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
})(l, { MutationObserver: () => f }),
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
var c = n(95080 /* vendor/module-95080 */),
  u = n(46783 /* vendor/module-46783 */),
  d = n(67650 /* vendor/module-67650 */),
  p = n(26036 /* vendor/module-26036 */),
  f = class extends d.Subscribable {
    #S;
    #I = void 0;
    #A;
    #O;
    constructor(e, t) {
      super(), (this.#S = e), this.setOptions(t), this.bindMethods(), this.#R();
    }
    bindMethods() {
      (this.mutate = this.mutate.bind(this)),
        (this.reset = this.reset.bind(this));
    }
    setOptions(e) {
      const t = this.options;
      (this.options = this.#S.defaultMutationOptions(e)),
        (0, p.shallowEqualObjects)(this.options, t) ||
          this.#S.getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: this.#A,
            observer: this,
          }),
        t?.mutationKey &&
        this.options.mutationKey &&
        (0, p.hashKey)(t.mutationKey) !==
          (0, p.hashKey)(this.options.mutationKey)
          ? this.reset()
          : "pending" === this.#A?.state.status &&
            this.#A.setOptions(this.options);
    }
    onUnsubscribe() {
      this.hasListeners() || this.#A?.removeObserver(this);
    }
    onMutationUpdate(e) {
      this.#R(), this.#M(e);
    }
    getCurrentResult() {
      return this.#I;
    }
    reset() {
      this.#A?.removeObserver(this), (this.#A = void 0), this.#R(), this.#M();
    }
    mutate(e, t) {
      return (
        (this.#O = t),
        this.#A?.removeObserver(this),
        (this.#A = this.#S.getMutationCache().build(this.#S, this.options)),
        this.#A.addObserver(this),
        this.#A.execute(e)
      );
    }
    #R() {
      const e = this.#A?.state ?? (0, c.getDefaultState)();
      this.#I = {
        ...e,
        isPending: "pending" === e.status,
        isSuccess: "success" === e.status,
        isError: "error" === e.status,
        isIdle: "idle" === e.status,
        mutate: this.mutate,
        reset: this.reset,
      };
    }
    #M(e) {
      u.notifyManager.batch(() => {
        if (this.#O && this.hasListeners()) {
          const t = this.#I.variables,
            n = this.#I.context,
            r = {
              client: this.#S,
              meta: this.options.meta,
              mutationKey: this.options.mutationKey,
            };
          if ("success" === e?.type) {
            try {
              this.#O.onSuccess?.(e.data, t, n, r);
            } catch (e) {
              Promise.reject(e);
            }
            try {
              this.#O.onSettled?.(e.data, null, t, n, r);
            } catch (e) {
              Promise.reject(e);
            }
          } else if ("error" === e?.type) {
            try {
              this.#O.onError?.(e.error, t, n, r);
            } catch (e) {
              Promise.reject(e);
            }
            try {
              this.#O.onSettled?.(void 0, e.error, t, n, r);
            } catch (e) {
              Promise.reject(e);
            }
          }
        }
        this.listeners.forEach((e) => {
          e(this.#I);
        });
      });
    }
  };

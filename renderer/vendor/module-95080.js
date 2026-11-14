// vendor/module-95080.js — webpack module 95080
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
})(l, { Mutation: () => p, getDefaultState: () => f }),
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
var c = n(46783 /* vendor/module-46783 */),
  u = n(99360 /* vendor/module-99360 */),
  d = n(77664 /* vendor/module-77664 */),
  p = class extends u.Removable {
    #S;
    #_;
    #x;
    #w;
    constructor(e) {
      super(),
        (this.#S = e.client),
        (this.mutationId = e.mutationId),
        (this.#x = e.mutationCache),
        (this.#_ = []),
        (this.state = e.state || {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
          submittedAt: 0,
        }),
        this.setOptions(e.options),
        this.scheduleGc();
    }
    setOptions(e) {
      (this.options = e), this.updateGcTime(this.options.gcTime);
    }
    get meta() {
      return this.options.meta;
    }
    addObserver(e) {
      this.#_.includes(e) ||
        (this.#_.push(e),
        this.clearGcTimeout(),
        this.#x.notify({
          type: "observerAdded",
          mutation: this,
          observer: e,
        }));
    }
    removeObserver(e) {
      (this.#_ = this.#_.filter((t) => t !== e)),
        this.scheduleGc(),
        this.#x.notify({
          type: "observerRemoved",
          mutation: this,
          observer: e,
        });
    }
    optionalRemove() {
      this.#_.length ||
        ("pending" === this.state.status
          ? this.scheduleGc()
          : this.#x.remove(this));
    }
    continue() {
      return this.#w?.continue() ?? this.execute(this.state.variables);
    }
    async execute(e) {
      const t = () => {
          this.#E({ type: "continue" });
        },
        n = {
          client: this.#S,
          meta: this.options.meta,
          mutationKey: this.options.mutationKey,
        };
      this.#w = (0, d.createRetryer)({
        fn: () =>
          this.options.mutationFn
            ? this.options.mutationFn(e, n)
            : Promise.reject(new Error("No mutationFn found")),
        onFail: (e, t) => {
          this.#E({ type: "failed", failureCount: e, error: t });
        },
        onPause: () => {
          this.#E({ type: "pause" });
        },
        onContinue: t,
        retry: this.options.retry ?? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => this.#x.canRun(this),
      });
      const r = "pending" === this.state.status,
        o = !this.#w.canStart();
      try {
        if (r) t();
        else {
          this.#E({ type: "pending", variables: e, isPaused: o }),
            this.#x.config.onMutate &&
              (await this.#x.config.onMutate(e, this, n));
          const t = await this.options.onMutate?.(e, n);
          t !== this.state.context &&
            this.#E({
              type: "pending",
              context: t,
              variables: e,
              isPaused: o,
            });
        }
        const i = await this.#w.start();
        return (
          await this.#x.config.onSuccess?.(i, e, this.state.context, this, n),
          await this.options.onSuccess?.(i, e, this.state.context, n),
          await this.#x.config.onSettled?.(
            i,
            null,
            this.state.variables,
            this.state.context,
            this,
            n,
          ),
          await this.options.onSettled?.(i, null, e, this.state.context, n),
          this.#E({ type: "success", data: i }),
          i
        );
      } catch (t) {
        try {
          await this.#x.config.onError?.(t, e, this.state.context, this, n);
        } catch (e) {
          Promise.reject(e);
        }
        try {
          await this.options.onError?.(t, e, this.state.context, n);
        } catch (e) {
          Promise.reject(e);
        }
        try {
          await this.#x.config.onSettled?.(
            void 0,
            t,
            this.state.variables,
            this.state.context,
            this,
            n,
          );
        } catch (e) {
          Promise.reject(e);
        }
        try {
          await this.options.onSettled?.(void 0, t, e, this.state.context, n);
        } catch (e) {
          Promise.reject(e);
        }
        throw (this.#E({ type: "error", error: t }), t);
      } finally {
        this.#x.runNext(this);
      }
    }
    #E(e) {
      (this.state = ((t) => {
        switch (e.type) {
          case "failed":
            return {
              ...t,
              failureCount: e.failureCount,
              failureReason: e.error,
            };
          case "pause":
            return { ...t, isPaused: !0 };
          case "continue":
            return { ...t, isPaused: !1 };
          case "pending":
            return {
              ...t,
              context: e.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: e.isPaused,
              status: "pending",
              variables: e.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...t,
              data: e.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...t,
              data: void 0,
              error: e.error,
              failureCount: t.failureCount + 1,
              failureReason: e.error,
              isPaused: !1,
              status: "error",
            };
        }
      })(this.state)),
        c.notifyManager.batch(() => {
          this.#_.forEach((t) => {
            t.onMutationUpdate(e);
          }),
            this.#x.notify({
              mutation: this,
              type: "updated",
              action: e,
            });
        });
    }
  };
function f() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}

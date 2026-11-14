// vendor/module-79424.js — webpack module 79424
// params: (e, t) = (module, exports, require)
var n = class {
  constructor(e, t) {
    (this.fn = e),
      (this.options = t),
      (this.lastExecutionTime = 0),
      (this.isPending = !1),
      (this.maybeExecute = (...e) => {
        const t = Date.now() - this.lastExecutionTime;
        if (this.options.leading && t >= this.options.wait) this.execute(...e);
        else if (
          ((this.lastArgs = e), !this.timeoutId && this.options.trailing)
        ) {
          const e = this.options.wait - t;
          (this.isPending = !0),
            (this.timeoutId = setTimeout(() => {
              void 0 !== this.lastArgs && this.execute(...this.lastArgs);
            }, e));
        }
      }),
      (this.execute = (...e) => {
        this.fn(...e),
          this.options.onExecute?.(e, this),
          (this.lastExecutionTime = Date.now()),
          this.clearTimeout(),
          (this.lastArgs = void 0),
          (this.isPending = !1);
      }),
      (this.flush = () => {
        this.isPending && this.lastArgs && this.execute(...this.lastArgs);
      }),
      (this.cancel = () => {
        this.clearTimeout(), (this.lastArgs = void 0), (this.isPending = !1);
      }),
      (this.clearTimeout = () => {
        this.timeoutId &&
          (clearTimeout(this.timeoutId), (this.timeoutId = void 0));
      }),
      void 0 === this.options.leading &&
        void 0 === this.options.trailing &&
        ((this.options.leading = !0), (this.options.trailing = !0));
  }
};
(t.LiteThrottler = n),
  (t.liteThrottle = function (e, t) {
    return new n(e, t).maybeExecute;
  });

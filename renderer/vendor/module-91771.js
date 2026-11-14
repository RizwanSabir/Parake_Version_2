// vendor/module-91771.js — webpack module 91771
// params: (e, t) = (module, exports, require)
var n = class {
  constructor(e, t) {
    (this.fn = e),
      (this.options = t),
      (this.canLeadingExecute = !0),
      (this.maybeExecute = (...e) => {
        let t = !1;
        this.options.leading &&
          this.canLeadingExecute &&
          ((this.canLeadingExecute = !1),
          (t = !0),
          this.fn(...e),
          this.options.onExecute?.(e, this)),
          (this.lastArgs = e),
          this.timeoutId && clearTimeout(this.timeoutId),
          (this.timeoutId = setTimeout(() => {
            (this.canLeadingExecute = !0),
              this.options.trailing &&
                !t &&
                this.lastArgs &&
                (this.fn(...this.lastArgs),
                this.options.onExecute?.(this.lastArgs, this)),
              (this.lastArgs = void 0);
          }, this.options.wait));
      }),
      (this.flush = () => {
        if (this.timeoutId && this.lastArgs) {
          clearTimeout(this.timeoutId), (this.timeoutId = void 0);
          const e = this.lastArgs;
          this.fn(...e),
            this.options.onExecute?.(e, this),
            (this.lastArgs = void 0),
            (this.canLeadingExecute = !0);
        }
      }),
      (this.cancel = () => {
        this.timeoutId &&
          (clearTimeout(this.timeoutId), (this.timeoutId = void 0)),
          (this.lastArgs = void 0),
          (this.canLeadingExecute = !0);
      }),
      void 0 === this.options.leading &&
        void 0 === this.options.trailing &&
        (this.options.trailing = !0);
  }
};
(t.LiteDebouncer = n),
  (t.liteDebounce = function (e, t) {
    return new n(e, t).maybeExecute;
  });

// vendor/module-50611.js — webpack module 50611
// params: (e, t) = (module, exports, require)
var n = class {
  constructor(e, t) {
    (this.fn = e),
      (this.options = t),
      (this.executionTimes = []),
      (this.timeoutIds = new Set()),
      (this.maybeExecute = (...e) => (
        this.cleanupOldExecutions(),
        this.getExecutionTimesInWindow().length < this.options.limit
          ? (this.execute(...e), !0)
          : (this.options.onReject?.(this), !1)
      )),
      (this.execute = (...e) => {
        const t = Date.now();
        this.fn(...e),
          this.options.onExecute?.(e, this),
          this.executionTimes.push(t),
          this.setCleanupTimeout(t);
      }),
      (this.getExecutionTimesInWindow = () => {
        if ("sliding" === this.options.windowType)
          return this.executionTimes.filter(
            (e) => e > Date.now() - this.options.window,
          );
        {
          if (0 === this.executionTimes.length) return [];
          const e = Math.min(...this.executionTimes),
            t = e + this.options.window;
          return Date.now() > t
            ? []
            : this.executionTimes.filter((n) => n >= e && n <= t);
        }
      }),
      (this.setCleanupTimeout = (e) => {
        if (
          "sliding" === this.options.windowType ||
          0 === this.timeoutIds.size
        ) {
          const t = e - Date.now() + this.options.window + 1,
            n = setTimeout(() => {
              this.cleanupOldExecutions(), this.clearTimeout(n);
            }, t);
          this.timeoutIds.add(n);
        }
      }),
      (this.clearTimeout = (e) => {
        clearTimeout(e), this.timeoutIds.delete(e);
      }),
      (this.clearTimeouts = () => {
        this.timeoutIds.forEach((e) => clearTimeout(e)),
          this.timeoutIds.clear();
      }),
      (this.cleanupOldExecutions = () => {
        this.executionTimes = this.getExecutionTimesInWindow();
      }),
      (this.getRemainingInWindow = () => {
        const e = this.getExecutionTimesInWindow();
        return Math.max(0, this.options.limit - e.length);
      }),
      (this.getMsUntilNextWindow = () =>
        this.getRemainingInWindow() > 0
          ? 0
          : (this.executionTimes[0] ?? 1 / 0) +
            this.options.window -
            Date.now()),
      (this.reset = () => {
        (this.executionTimes = []), this.clearTimeouts();
      }),
      void 0 === this.options.windowType && (this.options.windowType = "fixed");
  }
};
(t.LiteRateLimiter = n),
  (t.liteRateLimit = function (e, t) {
    return new n(e, t).maybeExecute;
  });

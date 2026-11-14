// vendor/module-35271.js — webpack module 35271
// params: (e, t) = (module, exports, require)
var n = class {
  constructor(e, t = {}) {
    (this.fn = e),
      (this.options = t),
      (this.items = []),
      (this.timeoutId = null),
      (this._isPending = !1),
      (this.addItem = (e) => {
        this.items.push(e),
          (this._isPending = this.options.wait !== 1 / 0),
          this.options.onItemsChange?.(this),
          this.items.length >= this.options.maxSize ||
          this.options.getShouldExecute(this.items, this)
            ? this.execute()
            : this.options.wait !== 1 / 0 &&
              (this.clearTimeout(),
              (this.timeoutId = setTimeout(
                () => this.execute(),
                this.getWait(),
              )));
      }),
      (this.execute = () => {
        if (0 === this.items.length) return;
        const e = this.peekAllItems();
        this.clear(), this.fn(e), this.options.onExecute?.(e, this);
      }),
      (this.flush = () => {
        this.clearTimeout(), this.execute();
      }),
      (this.peekAllItems = () => [...this.items]),
      (this.clearTimeout = () => {
        this.timeoutId &&
          (clearTimeout(this.timeoutId), (this.timeoutId = null));
      }),
      (this.clear = () => {
        const e = this.items.length > 0;
        (this.items = []),
          (this._isPending = !1),
          e && this.options.onItemsChange?.(this);
      }),
      (this.cancel = () => {
        this.clearTimeout(), (this._isPending = !1);
      }),
      (this.options.maxSize = this.options.maxSize ?? 1 / 0),
      (this.options.started = this.options.started ?? !0),
      (this.options.wait = this.options.wait ?? 1 / 0),
      (this.options.getShouldExecute =
        this.options.getShouldExecute ?? (() => !1));
  }
  get size() {
    return this.items.length;
  }
  get isEmpty() {
    return 0 === this.items.length;
  }
  get isPending() {
    return this._isPending;
  }
  getWait() {
    return "function" == typeof this.options.wait
      ? this.options.wait(this)
      : this.options.wait;
  }
};
(t.LiteBatcher = n),
  (t.liteBatch = function (e, t = {}) {
    return new n(e, t).addItem;
  });

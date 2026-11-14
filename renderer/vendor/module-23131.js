// vendor/module-23131.js — webpack module 23131
// params: (e, t) = (module, exports, require)
var n = class {
  constructor(e, t = {}) {
    if (
      ((this.fn = e),
      (this.options = t),
      (this.items = []),
      (this.timeoutId = null),
      (this.isRunning = !0),
      (this.pendingTick = !1),
      (this.addItem = (e, t = this.options.addItemsTo, n = !0) => {
        if (this.items.length >= this.options.maxSize) return !1;
        if (this.options.getPriority) {
          const n = this.options.getPriority(e);
          if (void 0 !== n) {
            const t = this.items.findIndex(
              (e) => (this.options.getPriority(e) ?? -1 / 0) < n,
            );
            -1 === t ? this.items.push(e) : this.items.splice(t, 0, e);
          } else this.insertAtPosition(e, t);
        } else this.insertAtPosition(e, t);
        return n && this.isRunning && !this.pendingTick && this.tick(), !0;
      }),
      (this.insertAtPosition = (e, t) => {
        "front" === t ? this.items.unshift(e) : this.items.push(e);
      }),
      (this.getNextItem = (e = this.options.getItemsFrom) => {
        if (0 === this.items.length) return;
        let t;
        return (
          (t =
            this.options.getPriority || "front" === e
              ? this.items.shift()
              : this.items.pop()),
          t
        );
      }),
      (this.execute = (e) => {
        const t = this.getNextItem(e);
        return void 0 !== t && this.fn(t), t;
      }),
      (this.tick = () => {
        if (this.isRunning) {
          for (
            this.pendingTick = !0;
            this.items.length > 0 &&
            void 0 !== this.execute(this.options.getItemsFrom);

          ) {
            const e = this.options.wait;
            if (e > 0)
              return void (this.timeoutId = setTimeout(() => this.tick(), e));
          }
          this.pendingTick = !1;
        } else this.pendingTick = !1;
      }),
      (this.start = () => {
        (this.isRunning = !0),
          !this.pendingTick && this.items.length > 0 && this.tick();
      }),
      (this.stop = () => {
        this.clearTimeout(), (this.isRunning = !1), (this.pendingTick = !1);
      }),
      (this.clearTimeout = () => {
        this.timeoutId &&
          (clearTimeout(this.timeoutId), (this.timeoutId = null));
      }),
      (this.peekNextItem = (e = "front") => {
        if (0 !== this.items.length)
          return this.options.getPriority || "front" === e
            ? this.items[0]
            : this.items[this.items.length - 1];
      }),
      (this.peekAllItems = () => [...this.items]),
      (this.flush = (e = this.items.length, t) => {
        this.clearTimeout();
        for (let n = 0; n < e && this.items.length > 0; n++) this.execute(t);
        this.isRunning &&
          this.items.length > 0 &&
          !this.pendingTick &&
          this.tick();
      }),
      (this.flushAsBatch = (e) => {
        const t = this.peekAllItems();
        this.clear(), e(t);
      }),
      (this.clear = () => {
        this.items = [];
      }),
      (this.options.addItemsTo = this.options.addItemsTo ?? "back"),
      (this.options.getItemsFrom = this.options.getItemsFrom ?? "front"),
      (this.options.maxSize = this.options.maxSize ?? 1 / 0),
      (this.options.started = this.options.started ?? !0),
      (this.options.wait = this.options.wait ?? 0),
      (this.isRunning = this.options.started),
      this.options.initialItems)
    )
      for (const e of this.options.initialItems)
        this.addItem(e, this.options.addItemsTo, !1);
    this.isRunning && this.items.length > 0 && this.tick();
  }
  get size() {
    return this.items.length;
  }
  get isEmpty() {
    return 0 === this.items.length;
  }
  get isQueueRunning() {
    return this.isRunning;
  }
};
(t.LiteQueuer = n),
  (t.liteQueue = function (e, t = {}) {
    const r = new n(e, t);
    return (e) => r.addItem(e);
  });

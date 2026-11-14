// vendor/module-63506.js — webpack module 63506
// params: (e, t, n) = (module, exports, require)
"use strict";
t.connectivityService = t.f = void 0;
const r = n(60982 /* vendor/module-60982 */);
(t.f = { high: 2e3, low: 15e3 }),
  (t.connectivityService = new (class {
    snapshot = {
      status: "unknown",
      lastCheckedAt: null,
      lastLatencyMs: null,
      offlineSince: null,
    };
    listeners = new Set();
    leases = new Set();
    timer = null;
    ticking = !1;
    tickCount = 0;
    browserOfflineSince = null;
    constructor() {
      "undefined" != typeof window &&
        (window.addEventListener("offline", () =>
          this.onBrowserOnLineChange(!1),
        ),
        window.addEventListener("online", () => this.onBrowserOnLineChange(!0)),
        "undefined" != typeof navigator &&
          !1 === navigator.onLine &&
          (this.browserOfflineSince = Date.now()));
    }
    onBrowserOnLineChange(e) {
      const t = this.getSnapshot().status;
      e
        ? (null !== this.browserOfflineSince &&
            "offline" === this.snapshot.status &&
            (this.snapshot = {
              ...this.snapshot,
              offlineSince: Math.min(
                this.snapshot.offlineSince ?? this.browserOfflineSince,
                this.browserOfflineSince,
              ),
            }),
          (this.browserOfflineSince = null))
        : (this.browserOfflineSince = this.browserOfflineSince ?? Date.now()),
        this.scheduleImmediateTick(),
        this.notifyIfChanged(t);
    }
    scheduleImmediateTick() {
      0 !== this.leases.size &&
        (null !== this.timer && (clearTimeout(this.timer), (this.timer = null)),
        this.ensureScheduled(0));
    }
    getSnapshot() {
      if (null !== this.browserOfflineSince)
        return {
          status: "offline",
          lastCheckedAt: this.snapshot.lastCheckedAt,
          lastLatencyMs: null,
          offlineSince:
            null === this.snapshot.offlineSince
              ? this.browserOfflineSince
              : Math.min(this.snapshot.offlineSince, this.browserOfflineSince),
        };
      const { lastCheckedAt: e } = this.snapshot;
      return null !== e && Date.now() - e > 6e4
        ? { ...this.snapshot, status: "unknown" }
        : this.snapshot;
    }
    notifyIfChanged(e) {
      const t = this.getSnapshot();
      if (t.status !== e)
        for (const n of this.listeners)
          try {
            n(t, e);
          } catch (e) {}
    }
    onStatusChange(e) {
      return this.listeners.add(e), () => this.listeners.delete(e);
    }
    requestPolling(e) {
      const t = { granularity: e };
      this.leases.add(t),
        "undefined" != typeof window && this.ensureScheduled(0);
      let n = !1;
      return () => {
        n ||
          ((n = !0),
          this.leases.delete(t),
          0 === this.leases.size &&
            null !== this.timer &&
            (clearTimeout(this.timer), (this.timer = null)));
      };
    }
    intervalMs() {
      for (const e of this.leases)
        if ("high" === e.granularity) return t.f.high;
      return t.f.low;
    }
    ensureScheduled(e) {
      null !== this.timer ||
        this.ticking ||
        (this.timer = setTimeout(() => {
          (this.timer = null), this.tick();
        }, e));
    }
    async tick() {
      if (this.ticking) return;
      this.ticking = !0;
      const e = Date.now(),
        t = r.PROBE_URLS[this.tickCount % r.PROBE_URLS.length],
        n = r.PROBE_URLS[(this.tickCount + 1) % r.PROBE_URLS.length];
      this.tickCount += 1;
      let o = null;
      try {
        (o = await (0, r.pingEndpoint)(t)),
          null === o && (o = await (0, r.pingEndpoint)(n));
      } finally {
        this.ticking = !1;
      }
      const i = Date.now(),
        a = null !== o,
        s = this.getSnapshot().status;
      if (
        (a &&
          null !== this.browserOfflineSince &&
          (this.browserOfflineSince = Math.min(
            this.browserOfflineSince,
            this.snapshot.offlineSince ?? this.browserOfflineSince,
          )),
        (this.snapshot = {
          status: a ? "online" : "offline",
          lastCheckedAt: i,
          lastLatencyMs: o,
          offlineSince: a ? null : (this.snapshot.offlineSince ?? i),
        }),
        this.notifyIfChanged(s),
        this.leases.size > 0)
      ) {
        const t = Date.now() - e;
        this.ensureScheduled(Math.max(this.intervalMs() - t, 0));
      }
    }
  })());

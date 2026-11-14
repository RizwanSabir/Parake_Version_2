// vendor/other/module-41727.js — webpack module 41727
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(82987 /* external/perf_hooks */),
  o = n(96137 /* vendor/other/module-96137 */);
function i(e, t, n) {
  return Number.isFinite(e) ? (e < 1e3 ? 1e3 : e) : n;
}
const s = o.defineIntegration((e = {}) => {
  const t = i(e.collectionIntervalMs ?? 3e4, 0, 3e4),
    n = {
      cpuUtilization: !0,
      memHeapUsed: !0,
      memHeapTotal: !0,
      memRss: !0,
      eventLoopDelayP50: !0,
      eventLoopDelayP99: !0,
      eventLoopUtilization: !0,
      uptime: !0,
      cpuTime: !1,
      memExternal: !1,
      eventLoopDelayMin: !1,
      eventLoopDelayMax: !1,
      eventLoopDelayMean: !1,
      eventLoopDelayP90: !1,
      ...e.collect,
    },
    s =
      n.eventLoopDelayP99 ||
      n.eventLoopDelayMin ||
      n.eventLoopDelayMax ||
      n.eventLoopDelayMean ||
      n.eventLoopDelayP50 ||
      n.eventLoopDelayP90,
    a = n.cpuUtilization || n.cpuTime;
  let c,
    u,
    l,
    d,
    p = 0;
  const f = (e) => Math.max(0, (e - 1e7) / 1e9),
    h = {
      attributes: { "sentry.origin": "auto.node.runtime_metrics" },
    },
    g = {
      unit: "byte",
      attributes: { "sentry.origin": "auto.node.runtime_metrics" },
    },
    m = {
      unit: "second",
      attributes: { "sentry.origin": "auto.node.runtime_metrics" },
    };
  function _() {
    const e = o._INTERNAL_safeDateNow(),
      t = e - p;
    if (a && void 0 !== u) {
      const e = process.cpuUsage(u);
      n.cpuTime &&
        (o.metrics.gauge("node.runtime.cpu.user", e.user / 1e6, m),
        o.metrics.gauge("node.runtime.cpu.system", e.system / 1e6, m)),
        n.cpuUtilization &&
          t > 0 &&
          o.metrics.gauge(
            "node.runtime.cpu.utilization",
            (e.user + e.system) / (1e3 * t),
            h,
          ),
        (u = process.cpuUsage());
    }
    if (n.memRss || n.memHeapUsed || n.memHeapTotal || n.memExternal) {
      const e = process.memoryUsage();
      n.memRss && o.metrics.gauge("node.runtime.mem.rss", e.rss, g),
        n.memHeapUsed &&
          o.metrics.gauge("node.runtime.mem.heap_used", e.heapUsed, g),
        n.memHeapTotal &&
          o.metrics.gauge("node.runtime.mem.heap_total", e.heapTotal, g),
        n.memExternal &&
          (o.metrics.gauge("node.runtime.mem.external", e.external, g),
          o.metrics.gauge("node.runtime.mem.array_buffers", e.arrayBuffers, g));
    }
    if (
      (s &&
        d &&
        (n.eventLoopDelayMin &&
          o.metrics.gauge("node.runtime.event_loop.delay.min", f(d.min), m),
        n.eventLoopDelayMax &&
          o.metrics.gauge("node.runtime.event_loop.delay.max", f(d.max), m),
        n.eventLoopDelayMean &&
          o.metrics.gauge("node.runtime.event_loop.delay.mean", f(d.mean), m),
        n.eventLoopDelayP50 &&
          o.metrics.gauge(
            "node.runtime.event_loop.delay.p50",
            f(d.percentile(50)),
            m,
          ),
        n.eventLoopDelayP90 &&
          o.metrics.gauge(
            "node.runtime.event_loop.delay.p90",
            f(d.percentile(90)),
            m,
          ),
        n.eventLoopDelayP99 &&
          o.metrics.gauge(
            "node.runtime.event_loop.delay.p99",
            f(d.percentile(99)),
            m,
          ),
        d.reset()),
      n.eventLoopUtilization && void 0 !== l)
    ) {
      const e = r.performance.eventLoopUtilization(),
        t = r.performance.eventLoopUtilization(e, l);
      o.metrics.gauge("node.runtime.event_loop.utilization", t.utilization, h),
        (l = e);
    }
    n.uptime &&
      t > 0 &&
      o.metrics.count("node.runtime.process.uptime", t / 1e3, m),
      (p = e);
  }
  return {
    name: "NodeRuntimeMetrics",
    setup() {
      if (s) {
        d?.disable();
        try {
          (d = r.monitorEventLoopDelay({ resolution: 10 })), d.enable();
        } catch {
          d = void 0;
        }
      }
      a && (u = process.cpuUsage()),
        n.eventLoopUtilization && (l = r.performance.eventLoopUtilization()),
        (p = o._INTERNAL_safeDateNow()),
        c && clearInterval(c),
        (c = o._INTERNAL_safeUnref(setInterval(_, t)));
    },
  };
});
(t._INTERNAL_normalizeCollectionInterval = i),
  (t.nodeRuntimeMetricsIntegration = s);

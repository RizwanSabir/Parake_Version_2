// vendor/module-71417.js — webpack module 71417
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/module-96137 */),
  o = n(60467 /* vendor/module-60467 */),
  i = n(64830 /* vendor/module-64830 */);
(t.extractNetworkProtocol = function (e) {
  let t = "unknown",
    n = "unknown",
    r = "";
  for (const o of e) {
    if ("/" === o) {
      [t, n] = e.split("/");
      break;
    }
    if (!isNaN(Number(o))) {
      (t = "h" === r ? "http" : r), (n = e.split(r)[1]);
      break;
    }
    r += o;
  }
  return r === e && (t = r), { name: t, version: n };
}),
  (t.getBrowserPerformanceAPI = function () {
    return o.WINDOW.addEventListener && o.WINDOW.performance;
  }),
  (t.isMeasurementValue = function (e) {
    return "number" == typeof e && isFinite(e);
  }),
  (t.listenForWebVitalReportEvents = function (e, t) {
    let n,
      r = !1;
    function o(e) {
      !r && n && t(e, n.spanContext().spanId, n), (r = !0);
    }
    i.onHidden(() => {
      o("pagehide");
    });
    const a = e.on("beforeStartNavigationSpan", (e, t) => {
        t?.isRedirect || (o("navigation"), a(), s());
      }),
      s = e.on("afterStartPageLoadSpan", (e) => {
        (n = e), s();
      });
  }),
  (t.msToSec = function (e) {
    return e / 1e3;
  }),
  (t.startAndEndSpan = function (e, t, n, { ...o }) {
    const i = r.spanToJSON(e).start_timestamp;
    return (
      i &&
        i > t &&
        "function" == typeof e.updateStartTime &&
        e.updateStartTime(t),
      r.withActiveSpan(e, () => {
        const e = r.startInactiveSpan({ startTime: t, ...o });
        return e && e.end(n), e;
      })
    );
  }),
  (t.startStandaloneWebVitalSpan = function (e) {
    const t = r.getClient();
    if (!t) return;
    const { name: n, transaction: i, attributes: a, startTime: s } = e,
      { release: l, environment: c } = t.getOptions(),
      { userInfo: u } = t.getDataCollectionOptions(),
      d = t.getIntegrationByName("Replay"),
      p = d?.getReplayId(),
      f = r.getCurrentScope(),
      h = f.getUser(),
      m = void 0 !== h ? h.email || h.id || h.ip_address : void 0;
    let g;
    try {
      g = f.getScopeData().contexts.profile.profile_id;
    } catch {}
    const y = {
      release: l,
      environment: c,
      user: m || void 0,
      profile_id: g || void 0,
      replay_id: p || void 0,
      transaction: i,
      "user_agent.original": o.WINDOW.navigator?.userAgent,
      "client.address": u ? "{{auto}}" : void 0,
      ...a,
    };
    return r.startInactiveSpan({
      name: n,
      attributes: y,
      startTime: s,
      experimental: { standalone: !0 },
    });
  }),
  (t.supportsWebVital = function (e) {
    try {
      return PerformanceObserver.supportedEntryTypes.includes(e);
    } catch {
      return !1;
    }
  });

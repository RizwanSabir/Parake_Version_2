// vendor/module-44084.js — webpack module 44084
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/module-96137 */),
  o = n(71417 /* vendor/module-71417 */);
function i(e) {
  return e
    ? ((r.browserPerformanceTimeOrigin() || performance.timeOrigin) + e) / 1e3
    : e;
}
t.resourceTimingToSpanAttributes = function (e) {
  const t = {};
  if (null != e.nextHopProtocol) {
    const { name: n, version: r } = o.extractNetworkProtocol(e.nextHopProtocol);
    (t["network.protocol.version"] = r), (t["network.protocol.name"] = n);
  }
  return r.browserPerformanceTimeOrigin() ||
    o.getBrowserPerformanceAPI()?.timeOrigin
    ? ((n = {
        ...t,
        "http.request.redirect_start": i(e.redirectStart),
        "http.request.redirect_end": i(e.redirectEnd),
        "http.request.worker_start": i(e.workerStart),
        "http.request.fetch_start": i(e.fetchStart),
        "http.request.domain_lookup_start": i(e.domainLookupStart),
        "http.request.domain_lookup_end": i(e.domainLookupEnd),
        "http.request.connect_start": i(e.connectStart),
        "http.request.secure_connection_start": i(e.secureConnectionStart),
        "http.request.connection_end": i(e.connectEnd),
        "http.request.request_start": i(e.requestStart),
        "http.request.response_start": i(e.responseStart),
        "http.request.response_end": i(e.responseEnd),
        "http.request.time_to_first_byte":
          null != e.responseStart ? e.responseStart / 1e3 : void 0,
      }),
      Object.fromEntries(Object.entries(n).filter(([, e]) => null != e)))
    : t;
  var n;
};

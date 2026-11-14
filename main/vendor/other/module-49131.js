// vendor/other/module-49131.js — webpack module 49131
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(31637 /* external/diagnostics_channel */),
  s = n(32314 /* vendor/other/module-32314 */),
  a = n(98957 /* vendor/other/module-98957 */);
class c extends r.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-node-fetch", o.SDK_VERSION, e),
      (this._channelSubs = []),
      (this._propagationDecisionMap = new o.LRUMap(100)),
      (this._ignoreOutgoingRequestsMap = new WeakMap());
  }
  init() {}
  disable() {
    super.disable(),
      this._channelSubs.forEach((e) => e.unsubscribe()),
      (this._channelSubs = []);
  }
  enable() {
    super.enable(),
      (this._channelSubs = this._channelSubs || []),
      this._channelSubs.length > 0 ||
        (this._subscribeToChannel(
          "undici:request:create",
          this._onRequestCreated.bind(this),
        ),
        this._subscribeToChannel(
          "undici:request:headers",
          this._onResponseHeaders.bind(this),
        ));
  }
  _onRequestCreated({ request: e }) {
    const t = this.getConfig();
    if (!1 === t.enabled) return;
    const n = this._shouldIgnoreOutgoingRequest(e);
    this._ignoreOutgoingRequestsMap.set(e, n),
      n ||
        (!1 !== t.tracePropagation &&
          a.addTracePropagationHeadersToFetchRequest(
            e,
            this._propagationDecisionMap,
          ));
  }
  _onResponseHeaders({ request: e, response: t }) {
    const n = this.getConfig();
    if (!1 === n.enabled) return;
    const r = n.breadcrumbs,
      o = void 0 === r || r,
      i = this._ignoreOutgoingRequestsMap.get(e);
    o && !i && a.addFetchRequestBreadcrumb(e, t);
  }
  _subscribeToChannel(e, t) {
    let n;
    if (s.NODE_MAJOR > 18 || (18 === s.NODE_MAJOR && s.NODE_MINOR >= 19))
      i.subscribe?.(e, t), (n = () => i.unsubscribe?.(e, t));
    else {
      const r = i.channel(e);
      r.subscribe(t), (n = () => r.unsubscribe(t));
    }
    this._channelSubs.push({ name: e, unsubscribe: n });
  }
  _shouldIgnoreOutgoingRequest(e) {
    if (o.isTracingSuppressed()) return !0;
    const t = a.getAbsoluteUrl(e.origin, e.path),
      n = this.getConfig().ignoreOutgoingRequests;
    return !("function" != typeof n || !t) && n(t);
  }
}
t.SentryNodeFetchInstrumentation = c;

// vendor/other/module-7353.js — webpack module 7353
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
n.d(t, { u: () => v });
var r = n(71895 /* vendor/other/module-71895 */),
  o = n(25465 /* vendor/other/module-25465 */),
  i = n(98902 /* vendor/other/module-98902 */),
  s = n(6461 /* vendor/other/module-6461 */);
const a = (0, i.n)("OpenTelemetry Context Key SPAN");
function c(e) {
  return e.getValue(a) || void 0;
}
function u() {
  return c(o._.getInstance().active());
}
function l(e, t) {
  return e.setValue(a, t);
}
function d(e) {
  return e.deleteValue(a);
}
function p(e, t) {
  return l(e, new s.d(t));
}
function f(e) {
  var t;
  return null === (t = c(e)) || void 0 === t ? void 0 : t.spanContext();
}
var h = n(71664 /* vendor/other/module-71664 */);
const g = o._.getInstance();
class m {
  startSpan(e, t, n = g.active()) {
    if (Boolean(null == t ? void 0 : t.root)) return new s.d();
    const r = n && f(n);
    return null !== (o = r) &&
      "object" == typeof o &&
      "spanId" in o &&
      "string" == typeof o.spanId &&
      "traceId" in o &&
      "string" == typeof o.traceId &&
      "traceFlags" in o &&
      "number" == typeof o.traceFlags &&
      (0, h.YA)(r)
      ? new s.d(r)
      : new s.d();
    var o;
  }
  startActiveSpan(e, t, n, r) {
    let o, i, s;
    if (arguments.length < 2) return;
    2 === arguments.length
      ? (s = t)
      : 3 === arguments.length
        ? ((o = t), (s = n))
        : ((o = t), (i = n), (s = r));
    const a = null != i ? i : g.active(),
      c = this.startSpan(e, o, a),
      u = l(a, c);
    return g.with(u, s, void 0, c);
  }
}
const _ = new m();
class S {
  constructor(e, t, n, r) {
    (this._provider = e),
      (this.name = t),
      (this.version = n),
      (this.options = r);
  }
  startSpan(e, t, n) {
    return this._getTracer().startSpan(e, t, n);
  }
  startActiveSpan(e, t, n, r) {
    const o = this._getTracer();
    return Reflect.apply(o.startActiveSpan, o, arguments);
  }
  _getTracer() {
    if (this._delegate) return this._delegate;
    const e = this._provider.getDelegateTracer(
      this.name,
      this.version,
      this.options,
    );
    return e ? ((this._delegate = e), this._delegate) : _;
  }
}
const E = new (class {
  getTracer(e, t, n) {
    return new m();
  }
})();
class y {
  getTracer(e, t, n) {
    var r;
    return null !== (r = this.getDelegateTracer(e, t, n)) && void 0 !== r
      ? r
      : new S(this, e, t, n);
  }
  getDelegate() {
    var e;
    return null !== (e = this._delegate) && void 0 !== e ? e : E;
  }
  setDelegate(e) {
    this._delegate = e;
  }
  getDelegateTracer(e, t, n) {
    var r;
    return null === (r = this._delegate) || void 0 === r
      ? void 0
      : r.getTracer(e, t, n);
  }
}
var T = n(32535 /* vendor/other/module-32535 */);
const b = "trace";
class I {
  constructor() {
    (this._proxyTracerProvider = new y()),
      (this.wrapSpanContext = h.IP),
      (this.isSpanContextValid = h.YA),
      (this.deleteSpan = d),
      (this.getSpan = c),
      (this.getActiveSpan = u),
      (this.getSpanContext = f),
      (this.setSpan = l),
      (this.setSpanContext = p);
  }
  static getInstance() {
    return this._instance || (this._instance = new I()), this._instance;
  }
  setGlobalTracerProvider(e) {
    const t = (0, r.$G)(b, this._proxyTracerProvider, T.K.instance());
    return t && this._proxyTracerProvider.setDelegate(e), t;
  }
  getTracerProvider() {
    return (0, r.mS)(b) || this._proxyTracerProvider;
  }
  getTracer(e, t) {
    return this.getTracerProvider().getTracer(e, t);
  }
  disable() {
    (0, r.kv)(b, T.K.instance()), (this._proxyTracerProvider = new y());
  }
}
const v = I.getInstance();

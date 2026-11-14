// vendor/other/module-31256.js — webpack module 31256
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(37199 /* vendor/other/module-37199 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(14640 /* vendor/other/module-14640 */),
  s = n(47702 /* vendor/other/module-47702 */),
  a = n(88516 /* vendor/other/module-88516 */),
  c = n(58383 /* vendor/other/module-58383 */);
class u extends s.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-connect", o.SDK_VERSION, e);
  }
  init() {
    return [
      new s.InstrumentationNodeModuleDefinition(
        "connect",
        [">=3.0.0 <4"],
        (e) => this._patchConstructor(e),
      ),
    ];
  }
  _patchApp(e) {
    s.isWrapped(e.use) || this._wrap(e, "use", this._patchUse.bind(this)),
      s.isWrapped(e.handle) ||
        this._wrap(e, "handle", this._patchHandle.bind(this));
  }
  _patchConstructor(e) {
    const t = this._patchApp.bind(this);
    return function (...n) {
      const r = Reflect.apply(e, this, n);
      return t(r), r;
    };
  }
  _patchNext(e, t, n) {
    return function (r) {
      o.isError(r) &&
        t.setStatus({
          code: o.SPAN_STATUS_ERROR,
          message: "internal_error",
        });
      const i = e.apply(this, [r]);
      return n(), i;
    };
  }
  _startSpan(e, t) {
    const n = e ? r.ConnectTypes.REQUEST_HANDLER : r.ConnectTypes.MIDDLEWARE,
      i = e || t.name || "anonymous";
    return o.startInactiveSpan({
      name: i,
      op: `${n}.connect`,
      attributes: {
        [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.connect",
        [a.HTTP_ROUTE]: e.length > 0 ? e : "/",
        [r.AttributeNames.CONNECT_TYPE]: n,
        [r.AttributeNames.CONNECT_NAME]: i,
      },
    });
  }
  _patchMiddleware(e, t) {
    const n = this.isEnabled.bind(this),
      r = this._startSpan.bind(this),
      s = this._patchNext.bind(this),
      a = 4 === t.length;
    function u() {
      if (!n()) return Reflect.apply(t, this, arguments);
      const [u, l, d] = a ? [1, 2, 3] : [0, 1, 2],
        p = arguments[u],
        f = arguments[l],
        h = arguments[d];
      c.replaceCurrentStackRoute(p, e),
        e && i.setHttpServerSpanRouteAttribute(c.generateRoute(p));
      const g = r(e, t);
      let m = !1;
      function _() {
        m || ((m = !0), g.end()), f.removeListener("close", _);
      }
      f.addListener("close", _), (arguments[d] = s(h, g, _));
      try {
        return Reflect.apply(t, this, arguments);
      } catch (e) {
        throw (
          (g.setStatus({
            code: o.SPAN_STATUS_ERROR,
            message: "internal_error",
          }),
          _(),
          e)
        );
      }
    }
    return (
      Object.defineProperty(u, "length", {
        value: t.length,
        writable: !1,
        configurable: !0,
      }),
      u
    );
  }
  _patchUse(e) {
    const t = this._patchMiddleware.bind(this);
    return function (...n) {
      const r = n[n.length - 1],
        o = n[n.length - 2] || "";
      return (n[n.length - 1] = t(o, r)), e.apply(this, n);
    };
  }
  _patchHandle(e) {
    const t = this._patchOut.bind(this);
    return function () {
      const [n, r] = [0, 2],
        o = arguments[n],
        i = arguments[r],
        s = c.addNewStackLayer(o);
      return (
        "function" == typeof i && (arguments[r] = t(i, s)),
        Reflect.apply(e, this, arguments)
      );
    };
  }
  _patchOut(e, t) {
    return function (...n) {
      return t(), Reflect.apply(e, this, n);
    };
  }
}
t.ConnectInstrumentation = u;

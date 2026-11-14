// vendor/other/module-54731.js — webpack module 54731
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(60261 /* vendor/other/module-60261 */),
  s = n(6932 /* vendor/other/module-6932 */),
  a = n(65672 /* vendor/other/module-65672 */);
function c(e) {
  return "Module" === e[Symbol.toStringTag] ? e.default : e;
}
function u(e, t) {
  return function (...n) {
    return o.withActiveSpan(e, () => t.apply(this, n));
  };
}
class l extends r.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-pg", o.SDK_VERSION, e);
  }
  init() {
    const e = [">=8.0.3 <9"],
      t = new i.InstrumentationNodeModuleFile(
        "pg/lib/native/client.js",
        e,
        this._patchPgClient.bind(this),
        this._unpatchPgClient.bind(this),
      ),
      n = new i.InstrumentationNodeModuleFile(
        "pg/lib/client.js",
        e,
        this._patchPgClient.bind(this),
        this._unpatchPgClient.bind(this),
      );
    return [
      new r.InstrumentationNodeModuleDefinition(
        "pg",
        e,
        (e) => {
          const t = c(e);
          return this._patchPgClient(t.Client), e;
        },
        (e) => {
          const t = c(e);
          return this._unpatchPgClient(t.Client), e;
        },
        [n, t],
      ),
      new r.InstrumentationNodeModuleDefinition(
        "pg-pool",
        [">=2.0.0 <4"],
        (e) => {
          const t = c(e);
          return (
            r.isWrapped(t.prototype.connect) &&
              this._unwrap(t.prototype, "connect"),
            this._wrap(t.prototype, "connect", this._getPoolConnectPatch()),
            t
          );
        },
        (e) => {
          const t = c(e);
          r.isWrapped(t.prototype.connect) &&
            this._unwrap(t.prototype, "connect");
        },
      ),
    ];
  }
  _patchPgClient(e) {
    if (!e) return;
    const t = c(e);
    return (
      r.isWrapped(t.prototype.query) && this._unwrap(t.prototype, "query"),
      r.isWrapped(t.prototype.connect) && this._unwrap(t.prototype, "connect"),
      this._wrap(t.prototype, "query", this._getClientQueryPatch()),
      this._wrap(t.prototype, "connect", this._getClientConnectPatch()),
      e
    );
  }
  _unpatchPgClient(e) {
    const t = c(e);
    return (
      r.isWrapped(t.prototype.query) && this._unwrap(t.prototype, "query"),
      r.isWrapped(t.prototype.connect) && this._unwrap(t.prototype, "connect"),
      e
    );
  }
  _getClientConnectPatch() {
    const e = this;
    return (t) =>
      function (n) {
        if (a.shouldSkipInstrumentation() || e.getConfig().ignoreConnectSpans)
          return t.call(this, n);
        const r = o.startInactiveSpan({
          name: s.SpanNames.CONNECT,
          kind: o.SPAN_KIND.CLIENT,
          attributes: a.getSemanticAttributesFromConnection(this),
        });
        let i = n;
        if (i) {
          const e = o.getActiveSpan();
          (i = a.patchClientConnectCallback(r, i)), e && (i = u(e, i));
        }
        return d(
          r,
          o.withActiveSpan(r, () => t.call(this, i)),
        );
      };
  }
  _getClientQueryPatch() {
    return (e) => (
      this._diag.debug("Patching pg.Client.prototype.query"),
      function (...t) {
        if (a.shouldSkipInstrumentation()) return e.apply(this, t);
        const n = t[0],
          r = "string" == typeof n,
          i = a.isObjectWithTextString(n),
          s = r
            ? { text: n, values: Array.isArray(t[1]) ? t[1] : void 0 }
            : i
              ? {
                  ...n,
                  name: n.name,
                  text: n.text,
                  values: n.values ?? (Array.isArray(t[1]) ? t[1] : void 0),
                }
              : void 0,
          c = a.handleConfigQuery.call(this, s);
        if (t.length > 0) {
          const e = o.getActiveSpan();
          if ("function" == typeof t[t.length - 1])
            (t[t.length - 1] = a.patchCallback(c, t[t.length - 1])),
              e && (t[t.length - 1] = u(e, t[t.length - 1]));
          else if ("function" == typeof s?.callback) {
            let n = a.patchCallback(c, s.callback);
            e && (n = u(e, n)), (t[0].callback = n);
          }
        }
        let l;
        try {
          l = e.apply(this, t);
        } catch (e) {
          throw (
            (c.setStatus({
              code: o.SPAN_STATUS_ERROR,
              message: a.getErrorMessage(e),
            }),
            c.end(),
            e)
          );
        }
        return l instanceof Promise
          ? l
              .then((e) => (c.end(), e))
              .catch(
                (e) => (
                  c.setStatus({
                    code: o.SPAN_STATUS_ERROR,
                    message: a.getErrorMessage(e),
                  }),
                  c.end(),
                  Promise.reject(e)
                ),
              )
          : l;
      }
    );
  }
  _getPoolConnectPatch() {
    const e = this;
    return (t) =>
      function (n) {
        if (a.shouldSkipInstrumentation() || e.getConfig().ignoreConnectSpans)
          return t.call(this, n);
        const r = o.startInactiveSpan({
          name: s.SpanNames.POOL_CONNECT,
          kind: o.SPAN_KIND.CLIENT,
          attributes: a.getSemanticAttributesFromPoolConnection(this.options),
        });
        let i = n;
        if (i) {
          const e = o.getActiveSpan();
          (i = a.patchCallbackPGPool(r, i)), e && (i = u(e, i));
        }
        return d(
          r,
          o.withActiveSpan(r, () => t.call(this, i)),
        );
      };
  }
}
function d(e, t) {
  return t instanceof Promise
    ? t
        .then((t) => (e.end(), t))
        .catch(
          (t) => (
            e.setStatus({
              code: o.SPAN_STATUS_ERROR,
              message: a.getErrorMessage(t),
            }),
            e.end(),
            Promise.reject(t)
          ),
        )
    : t;
}
t.PgInstrumentation = l;

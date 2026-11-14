// vendor/other/module-71183.js — webpack module 71183
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = "generic-pool";
class s extends r.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-generic-pool", o.SDK_VERSION, e),
      (this._isDisabled = !1);
  }
  init() {
    return [
      new r.InstrumentationNodeModuleDefinition(
        i,
        [">=3.0.0 <4"],
        (e) => {
          const t = e.Pool;
          return (
            r.isWrapped(t.prototype.acquire) &&
              this._unwrap(t.prototype, "acquire"),
            this._wrap(t.prototype, "acquire", this._acquirePatcher.bind(this)),
            e
          );
        },
        (e) => {
          const t = e.Pool;
          return this._unwrap(t.prototype, "acquire"), e;
        },
      ),
      new r.InstrumentationNodeModuleDefinition(
        i,
        [">=2.4.0 <3"],
        (e) => {
          const t = e.Pool;
          return (
            r.isWrapped(t.prototype.acquire) &&
              this._unwrap(t.prototype, "acquire"),
            this._wrap(
              t.prototype,
              "acquire",
              this._acquireWithCallbacksPatcher.bind(this),
            ),
            e
          );
        },
        (e) => {
          const t = e.Pool;
          return this._unwrap(t.prototype, "acquire"), e;
        },
      ),
      new r.InstrumentationNodeModuleDefinition(
        i,
        [">=2.0.0 <2.4"],
        (e) => (
          (this._isDisabled = !1),
          r.isWrapped(e.Pool) && this._unwrap(e, "Pool"),
          this._wrap(e, "Pool", this._poolWrapper.bind(this)),
          e
        ),
        (e) => ((this._isDisabled = !0), e),
      ),
    ];
  }
  _acquirePatcher(e) {
    return function (...t) {
      return o.startSpan(
        {
          name: "generic-pool.acquire",
          attributes: {
            [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.otel.generic_pool",
          },
        },
        () => e.call(this, ...t),
      );
    };
  }
  _poolWrapper(e) {
    const t = this._wrap.bind(this),
      n = this._acquireWithCallbacksPatcher.bind(this);
    return function (...r) {
      const o = e.apply(this, r);
      return t(o, "acquire", n), o;
    };
  }
  _acquireWithCallbacksPatcher(e) {
    const t = () => this._isDisabled;
    return function (n, r) {
      return t()
        ? e.call(this, n, r)
        : o.startSpanManual(
            {
              name: "generic-pool.acquire",
              attributes: {
                [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
                  "auto.db.otel.generic_pool",
              },
            },
            (t) => {
              e.call(
                this,
                (e, r) => {
                  e &&
                    t.setStatus({
                      code: o.SPAN_STATUS_ERROR,
                      message: "internal_error",
                    }),
                    t.end(),
                    n && n(e, r);
                },
                r,
              );
            },
          );
    };
  }
}
t.GenericPoolInstrumentation = s;

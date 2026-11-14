// vendor/other/module-93118.js — webpack module 93118
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(80781 /* vendor/other/module-80781 */),
  o = n(47702 /* vendor/other/module-47702 */),
  i = n(96137 /* vendor/other/module-96137 */),
  s = n(701 /* vendor/other/module-701 */);
class a extends o.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-hono", "0.0.1", e);
  }
  init() {
    return [
      new o.InstrumentationNodeModuleDefinition("hono", [">=4.0.0 <5"], (e) =>
        this._patch(e),
      ),
    ];
  }
  _patch(e) {
    const t = this;
    class n extends e.Hono {
      constructor(...e) {
        super(...e),
          t._wrap(this, "get", t._patchHandler()),
          t._wrap(this, "post", t._patchHandler()),
          t._wrap(this, "put", t._patchHandler()),
          t._wrap(this, "delete", t._patchHandler()),
          t._wrap(this, "options", t._patchHandler()),
          t._wrap(this, "patch", t._patchHandler()),
          t._wrap(this, "all", t._patchHandler()),
          t._wrap(this, "on", t._patchOnHandler()),
          t._wrap(this, "use", t._patchMiddlewareHandler());
      }
    }
    try {
      e.Hono = n;
    } catch {
      return { ...e, Hono: n };
    }
    return e;
  }
  _patchHandler() {
    const e = this;
    return function (t) {
      return function (...n) {
        if ("string" == typeof n[0]) {
          const r = n[0];
          if (1 === n.length) return t.apply(this, [r]);
          const o = n.slice(1);
          return t.apply(this, [r, ...o.map((t) => e._wrapHandler(t))]);
        }
        return t.apply(
          this,
          n.map((t) => e._wrapHandler(t)),
        );
      };
    };
  }
  _patchOnHandler() {
    const e = this;
    return function (t) {
      return function (...n) {
        const r = n.slice(2);
        return t.apply(this, [
          ...n.slice(0, 2),
          ...r.map((t) => e._wrapHandler(t)),
        ]);
      };
    };
  }
  _patchMiddlewareHandler() {
    const e = this;
    return function (t) {
      return function (...n) {
        if ("string" == typeof n[0]) {
          const r = n[0];
          if (1 === n.length) return t.apply(this, [r]);
          const o = n.slice(1);
          return t.apply(this, [r, ...o.map((t) => e._wrapHandler(t))]);
        }
        return t.apply(
          this,
          n.map((t) => e._wrapHandler(t)),
        );
      };
    };
  }
  _wrapHandler(e) {
    const t = this;
    return function (n, o) {
      if (!t.isEnabled()) return e.apply(this, [n, o]);
      const a = n.req.path,
        c = t.tracer.startSpan(a);
      return r.context.with(r.trace.setSpan(r.context.active(), c), () =>
        t._safeExecute(
          () => {
            const r = e.apply(this, [n, o]);
            if (i.isThenable(r))
              return r.then((n) => {
                const r = t._determineHandlerType(n);
                return (
                  c.setAttributes({
                    [s.AttributeNames.HONO_TYPE]: r,
                    [s.AttributeNames.HONO_NAME]:
                      r === s.HonoTypes.REQUEST_HANDLER
                        ? a
                        : e.name || "anonymous",
                  }),
                  t.getConfig().responseHook?.(c),
                  n
                );
              });
            {
              const n = t._determineHandlerType(r);
              return (
                c.setAttributes({
                  [s.AttributeNames.HONO_TYPE]: n,
                  [s.AttributeNames.HONO_NAME]:
                    n === s.HonoTypes.REQUEST_HANDLER
                      ? a
                      : e.name || "anonymous",
                }),
                t.getConfig().responseHook?.(c),
                r
              );
            }
          },
          () => c.end(),
          (e) => {
            t._handleError(c, e), c.end();
          },
        ),
      );
    };
  }
  _safeExecute(e, t, n) {
    try {
      const r = e();
      return (
        i.isThenable(r)
          ? r.then(
              () => t(),
              (e) => n(e),
            )
          : t(),
        r
      );
    } catch (e) {
      throw (n(e), e);
    }
  }
  _determineHandlerType(e) {
    return void 0 === e ? s.HonoTypes.MIDDLEWARE : s.HonoTypes.REQUEST_HANDLER;
  }
  _handleError(e, t) {
    t instanceof Error &&
      (e.setStatus({
        code: r.SpanStatusCode.ERROR,
        message: t.message,
      }),
      e.recordException(t));
  }
}
t.HonoInstrumentation = a;

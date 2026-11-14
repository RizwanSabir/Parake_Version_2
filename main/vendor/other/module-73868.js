// vendor/other/module-73868.js — webpack module 73868
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(23295 /* vendor/other/module-23295 */),
  o = n(82615 /* vendor/other/module-82615 */),
  i = n(8888 /* vendor/other/module-8888 */),
  s = n(68020 /* vendor/other/module-68020 */);
function a(e, t) {
  return e(t.stack || "", 1);
}
function c(e) {
  return (function (e) {
    return (
      r.isError(e) &&
      "__sentry_fetch_url_host__" in e &&
      "string" == typeof e.__sentry_fetch_url_host__
    );
  })(e)
    ? `${e.message} (${e.__sentry_fetch_url_host__})`
    : e.message;
}
function u(e, t) {
  const n = { type: t.name || t.constructor.name, value: c(t) },
    r = a(e, t);
  return r.length && (n.stacktrace = { frames: r }), n;
}
function l(e, t, n, o) {
  if (r.isError(n)) return [n, void 0];
  if (((t.synthetic = !0), r.isPlainObject(n))) {
    const t = e?.getOptions().normalizeDepth,
      a = { __serialized__: i.normalizeToSize(n, t) },
      c = (function (e) {
        for (const t in e)
          if (Object.prototype.hasOwnProperty.call(e, t)) {
            const n = e[t];
            if (r.isError(n)) return n;
          }
      })(n);
    if (c) return [c, a];
    const u = (function (e) {
        if ("name" in e && "string" == typeof e.name) {
          let t = `'${e.name}' captured as exception`;
          return (
            "message" in e &&
              "string" == typeof e.message &&
              (t += ` with message '${e.message}'`),
            t
          );
        }
        if ("message" in e && "string" == typeof e.message) return e.message;
        const t = s.extractExceptionKeysForMessage(e);
        if (r.isErrorEvent(e))
          return `Event \`ErrorEvent\` captured as exception with message \`${e.message}\``;
        const n = (function (e) {
          try {
            const t = Object.getPrototypeOf(e);
            return t ? t.constructor.name : void 0;
          } catch {}
        })(e);
        return `${n && "Object" !== n ? `'${n}'` : "Object"} captured as exception with keys: ${t}`;
      })(n),
      l = o?.syntheticException || new Error(u);
    return (l.message = u), [l, a];
  }
  const a = o?.syntheticException || new Error(n);
  return (a.message = `${n}`), [a, void 0];
}
(t._enhanceErrorWithSentryInfo = c),
  (t.eventFromMessage = function (e, t, n = "info", i, s) {
    const c = { event_id: i?.event_id, level: n };
    if (s && i?.syntheticException) {
      const n = a(e, i.syntheticException);
      n.length &&
        ((c.exception = {
          values: [{ value: t, stacktrace: { frames: n } }],
        }),
        o.addExceptionMechanism(c, { synthetic: !0 }));
    }
    if (r.isParameterizedString(t)) {
      const { __sentry_template_string__: e, __sentry_template_values__: n } =
        t;
      return (c.logentry = { message: e, params: n }), c;
    }
    return (c.message = t), c;
  }),
  (t.eventFromUnknownInput = function (e, t, n, r) {
    const i = (r?.data && r.data.mechanism) || {
        handled: !0,
        type: "generic",
      },
      [s, a] = l(e, i, n, r),
      c = { exception: { values: [u(t, s)] } };
    return (
      a && (c.extra = a),
      o.addExceptionTypeValue(c, void 0, void 0),
      o.addExceptionMechanism(c, i),
      { ...c, event_id: r?.event_id }
    );
  }),
  (t.exceptionFromError = u),
  (t.parseStackFrames = a);

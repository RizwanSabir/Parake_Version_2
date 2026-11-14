// vendor/module-73868.js — webpack module 73868
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(23295 /* vendor/module-23295 */),
  o = n(82615 /* vendor/module-82615 */),
  i = n(8888 /* vendor/module-8888 */),
  a = n(68020 /* vendor/module-68020 */);
function s(e, t) {
  return e(t.stack || "", 1);
}
function l(e) {
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
function c(e, t) {
  const n = { type: t.name || t.constructor.name, value: l(t) },
    r = s(e, t);
  return r.length && (n.stacktrace = { frames: r }), n;
}
function u(e, t, n, o) {
  if (r.isError(n)) return [n, void 0];
  if (((t.synthetic = !0), r.isPlainObject(n))) {
    const t = e?.getOptions().normalizeDepth,
      s = { __serialized__: i.normalizeToSize(n, t) },
      l = (function (e) {
        for (const t in e)
          if (Object.prototype.hasOwnProperty.call(e, t)) {
            const n = e[t];
            if (r.isError(n)) return n;
          }
      })(n);
    if (l) return [l, s];
    const c = (function (e) {
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
        const t = a.extractExceptionKeysForMessage(e);
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
      u = o?.syntheticException || new Error(c);
    return (u.message = c), [u, s];
  }
  const s = o?.syntheticException || new Error(n);
  return (s.message = `${n}`), [s, void 0];
}
(t._enhanceErrorWithSentryInfo = l),
  (t.eventFromMessage = function (e, t, n = "info", i, a) {
    const l = { event_id: i?.event_id, level: n };
    if (a && i?.syntheticException) {
      const n = s(e, i.syntheticException);
      n.length &&
        ((l.exception = {
          values: [{ value: t, stacktrace: { frames: n } }],
        }),
        o.addExceptionMechanism(l, { synthetic: !0 }));
    }
    if (r.isParameterizedString(t)) {
      const { __sentry_template_string__: e, __sentry_template_values__: n } =
        t;
      return (l.logentry = { message: e, params: n }), l;
    }
    return (l.message = t), l;
  }),
  (t.eventFromUnknownInput = function (e, t, n, r) {
    const i = (r?.data && r.data.mechanism) || {
        handled: !0,
        type: "generic",
      },
      [a, s] = u(e, i, n, r),
      l = { exception: { values: [c(t, a)] } };
    return (
      s && (l.extra = s),
      o.addExceptionTypeValue(l, void 0, void 0),
      o.addExceptionMechanism(l, i),
      { ...l, event_id: r?.event_id }
    );
  }),
  (t.exceptionFromError = c),
  (t.parseStackFrames = s);

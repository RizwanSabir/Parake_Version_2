// vendor/other/module-62665.js — webpack module 62665
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */);
function o(e, t) {
  const n = s(e, t),
    r = { type: u(t), value: l(t) };
  return (
    n.length && (r.stacktrace = { frames: n }),
    void 0 === r.type &&
      "" === r.value &&
      (r.value = "Unrecoverable error caught"),
    r
  );
}
function i(e, t) {
  return { exception: { values: [o(e, t)] } };
}
function s(e, t) {
  const n = t.stacktrace || t.stack || "",
    r = (function (e) {
      return e && a.test(e.message) ? 1 : 0;
    })(t),
    o = (function (e) {
      return "number" == typeof e.framesToPop ? e.framesToPop : 0;
    })(t);
  try {
    return e(n, r, o);
  } catch {}
  return [];
}
const a = /Minified React error #\d+;/i;
function c(e) {
  return (
    "undefined" != typeof WebAssembly &&
    void 0 !== WebAssembly.Exception &&
    e instanceof WebAssembly.Exception
  );
}
function u(e) {
  const t = e?.name;
  return !t && c(e)
    ? e.message && Array.isArray(e.message) && 2 == e.message.length
      ? e.message[0]
      : "WebAssembly.Exception"
    : t;
}
function l(e) {
  const t = e?.message;
  return c(e)
    ? Array.isArray(e.message) && 2 == e.message.length
      ? e.message[1]
      : "wasm exception"
    : t
      ? t.error && "string" == typeof t.error.message
        ? r._INTERNAL_enhanceErrorWithSentryInfo(t.error)
        : r._INTERNAL_enhanceErrorWithSentryInfo(e)
      : "No error message";
}
function d(e, t, n, a, c) {
  let u;
  if (r.isErrorEvent(t) && t.error) return i(e, t.error);
  if (r.isDOMError(t) || r.isDOMException(t)) {
    const o = t;
    if ("stack" in t) {
      u = i(e, t);
      const o = u.exception?.values?.[0];
      if (a && n && o && !o.stacktrace) {
        const t = s(e, n);
        t.length &&
          ((o.stacktrace = { frames: t }),
          r.addExceptionMechanism(u, { synthetic: !0 }));
      }
    } else {
      const t = o.name || (r.isDOMError(o) ? "DOMError" : "DOMException"),
        i = o.message ? `${t}: ${o.message}` : t;
      (u = p(e, i, n, a)), r.addExceptionTypeValue(u, i);
    }
    return (
      "code" in o && (u.tags = { ...u.tags, "DOMException.code": `${o.code}` }),
      u
    );
  }
  return r.isError(t)
    ? i(e, t)
    : r.isPlainObject(t) || r.isEvent(t)
      ? ((u = (function (e, t, n, i) {
          const a = r.getClient(),
            c = a?.getOptions().normalizeDepth,
            u = ((l = t), Object.values(l).find(r.isError));
          var l;
          const d = { __serialized__: r.normalizeToSize(t, c) };
          if (u) return { exception: { values: [o(e, u)] }, extra: d };
          const p = {
            exception: {
              values: [
                {
                  type: r.isEvent(t)
                    ? t.constructor.name
                    : i
                      ? "UnhandledRejection"
                      : "Error",
                  value: f(t, { isUnhandledRejection: i }),
                },
              ],
            },
            extra: d,
          };
          if (n) {
            const t = s(e, n);
            t.length && (p.exception.values[0].stacktrace = { frames: t });
          }
          return p;
        })(e, t, n, c)),
        r.addExceptionMechanism(u, { synthetic: !0 }),
        u)
      : ((u = p(e, t, n, a)),
        r.addExceptionTypeValue(u, `${t}`, void 0),
        r.addExceptionMechanism(u, { synthetic: !0 }),
        u);
}
function p(e, t, n, o) {
  const i = {};
  if (o && n) {
    const o = s(e, n);
    o.length &&
      (i.exception = {
        values: [{ value: t, stacktrace: { frames: o } }],
      }),
      r.addExceptionMechanism(i, { synthetic: !0 });
  }
  if (r.isParameterizedString(t)) {
    const { __sentry_template_string__: e, __sentry_template_values__: n } = t;
    return (i.logentry = { message: e, params: n }), i;
  }
  return (i.message = t), i;
}
function f(e, { isUnhandledRejection: t }) {
  const n = r.extractExceptionKeysForMessage(e),
    o = t ? "promise rejection" : "exception";
  return r.isErrorEvent(e)
    ? `Event \`ErrorEvent\` captured as ${o} with message \`${e.message}\``
    : r.isEvent(e)
      ? `Event \`${(function (e) {
          try {
            const t = Object.getPrototypeOf(e);
            return t ? t.constructor.name : void 0;
          } catch {}
        })(e)}\` (type=${e.type}) captured as ${o}`
      : `Object captured as ${o} with keys: ${n}`;
}
(t.eventFromException = function (e, t, n, o) {
  const i = d(e, t, n?.syntheticException || void 0, o);
  return (
    r.addExceptionMechanism(i),
    (i.level = "error"),
    n?.event_id && (i.event_id = n.event_id),
    r.resolvedSyncPromise(i)
  );
}),
  (t.eventFromMessage = function (e, t, n = "info", o, i) {
    const s = p(e, t, o?.syntheticException || void 0, i);
    return (
      (s.level = n),
      o?.event_id && (s.event_id = o.event_id),
      r.resolvedSyncPromise(s)
    );
  }),
  (t.eventFromUnknownInput = d),
  (t.exceptionFromError = o),
  (t.extractMessage = l),
  (t.extractType = u);

// vendor/module-62665.js — webpack module 62665
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */);
function o(e, t) {
  const n = a(e, t),
    r = { type: c(t), value: u(t) };
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
function a(e, t) {
  const n = t.stacktrace || t.stack || "",
    r = (function (e) {
      return e && s.test(e.message) ? 1 : 0;
    })(t),
    o = (function (e) {
      return "number" == typeof e.framesToPop ? e.framesToPop : 0;
    })(t);
  try {
    return e(n, r, o);
  } catch {}
  return [];
}
const s = /Minified React error #\d+;/i;
function l(e) {
  return (
    "undefined" != typeof WebAssembly &&
    void 0 !== WebAssembly.Exception &&
    e instanceof WebAssembly.Exception
  );
}
function c(e) {
  const t = e?.name;
  return !t && l(e)
    ? e.message && Array.isArray(e.message) && 2 == e.message.length
      ? e.message[0]
      : "WebAssembly.Exception"
    : t;
}
function u(e) {
  const t = e?.message;
  return l(e)
    ? Array.isArray(e.message) && 2 == e.message.length
      ? e.message[1]
      : "wasm exception"
    : t
      ? t.error && "string" == typeof t.error.message
        ? r._INTERNAL_enhanceErrorWithSentryInfo(t.error)
        : r._INTERNAL_enhanceErrorWithSentryInfo(e)
      : "No error message";
}
function d(e, t, n, s, l) {
  let c;
  if (r.isErrorEvent(t) && t.error) return i(e, t.error);
  if (r.isDOMError(t) || r.isDOMException(t)) {
    const o = t;
    if ("stack" in t) {
      c = i(e, t);
      const o = c.exception?.values?.[0];
      if (s && n && o && !o.stacktrace) {
        const t = a(e, n);
        t.length &&
          ((o.stacktrace = { frames: t }),
          r.addExceptionMechanism(c, { synthetic: !0 }));
      }
    } else {
      const t = o.name || (r.isDOMError(o) ? "DOMError" : "DOMException"),
        i = o.message ? `${t}: ${o.message}` : t;
      (c = p(e, i, n, s)), r.addExceptionTypeValue(c, i);
    }
    return (
      "code" in o && (c.tags = { ...c.tags, "DOMException.code": `${o.code}` }),
      c
    );
  }
  return r.isError(t)
    ? i(e, t)
    : r.isPlainObject(t) || r.isEvent(t)
      ? ((c = (function (e, t, n, i) {
          const s = r.getClient(),
            l = s?.getOptions().normalizeDepth,
            c = ((u = t), Object.values(u).find(r.isError));
          var u;
          const d = { __serialized__: r.normalizeToSize(t, l) };
          if (c) return { exception: { values: [o(e, c)] }, extra: d };
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
            const t = a(e, n);
            t.length && (p.exception.values[0].stacktrace = { frames: t });
          }
          return p;
        })(e, t, n, l)),
        r.addExceptionMechanism(c, { synthetic: !0 }),
        c)
      : ((c = p(e, t, n, s)),
        r.addExceptionTypeValue(c, `${t}`, void 0),
        r.addExceptionMechanism(c, { synthetic: !0 }),
        c);
}
function p(e, t, n, o) {
  const i = {};
  if (o && n) {
    const o = a(e, n);
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
    const a = p(e, t, o?.syntheticException || void 0, i);
    return (
      (a.level = n),
      o?.event_id && (a.event_id = o.event_id),
      r.resolvedSyncPromise(a)
    );
  }),
  (t.eventFromUnknownInput = d),
  (t.exceptionFromError = o),
  (t.extractMessage = u),
  (t.extractType = c);

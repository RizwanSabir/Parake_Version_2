// vendor/other/module-79804.js — webpack module 79804
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(60467 /* vendor/other/module-60467 */),
  i = "__sentry_xhr_v3__";
function s() {
  if (!o.WINDOW.XMLHttpRequest) return;
  const e = XMLHttpRequest.prototype;
  (e.open = new Proxy(e.open, {
    apply(e, t, n) {
      const o = new Error(),
        s = 1e3 * r.timestampInSeconds(),
        a = r.isString(n[0]) ? n[0].toUpperCase() : void 0,
        c = (function (e) {
          if (r.isString(e)) return e;
          try {
            return e.toString();
          } catch {}
        })(n[1]);
      if (!a || !c) return e.apply(t, n);
      (t[i] = { method: a, url: c, request_headers: {} }),
        "POST" === a &&
          c.match(/sentry_key/) &&
          (t.__sentry_own_request__ = !0);
      const u = () => {
        const e = t[i];
        if (e && 4 === t.readyState) {
          try {
            e.status_code = t.status;
          } catch {}
          const n = {
            endTimestamp: 1e3 * r.timestampInSeconds(),
            startTimestamp: s,
            xhr: t,
            virtualError: o,
          };
          r.triggerHandlers("xhr", n),
            t.removeEventListener("readystatechange", u);
        }
      };
      return (
        "onreadystatechange" in t && "function" == typeof t.onreadystatechange
          ? (t.onreadystatechange = new Proxy(t.onreadystatechange, {
              apply: (e, t, n) => (u(), e.apply(t, n)),
            }))
          : t.addEventListener("readystatechange", u),
        (t.setRequestHeader = new Proxy(t.setRequestHeader, {
          apply(e, t, n) {
            const [o, s] = n,
              a = t[i];
            return (
              a &&
                r.isString(o) &&
                r.isString(s) &&
                (a.request_headers[o.toLowerCase()] = s),
              e.apply(t, n)
            );
          },
        })),
        e.apply(t, n)
      );
    },
  })),
    (e.send = new Proxy(e.send, {
      apply(e, t, n) {
        const o = t[i];
        if (!o) return e.apply(t, n);
        void 0 !== n[0] && (o.body = n[0]);
        const s = {
          startTimestamp: 1e3 * r.timestampInSeconds(),
          xhr: t,
        };
        return r.triggerHandlers("xhr", s), e.apply(t, n);
      },
    }));
}
(t.SENTRY_XHR_DATA_KEY = i),
  (t.addXhrInstrumentationHandler = function (e) {
    r.addHandler("xhr", e), r.maybeInstrument("xhr", s);
  }),
  (t.instrumentXHR = s);

// vendor/module-79804.js — webpack module 79804
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/module-96137 */),
  o = n(60467 /* vendor/module-60467 */),
  i = "__sentry_xhr_v3__";
function a() {
  if (!o.WINDOW.XMLHttpRequest) return;
  const e = XMLHttpRequest.prototype;
  (e.open = new Proxy(e.open, {
    apply(e, t, n) {
      const o = new Error(),
        a = 1e3 * r.timestampInSeconds(),
        s = r.isString(n[0]) ? n[0].toUpperCase() : void 0,
        l = (function (e) {
          if (r.isString(e)) return e;
          try {
            return e.toString();
          } catch {}
        })(n[1]);
      if (!s || !l) return e.apply(t, n);
      (t[i] = { method: s, url: l, request_headers: {} }),
        "POST" === s &&
          l.match(/sentry_key/) &&
          (t.__sentry_own_request__ = !0);
      const c = () => {
        const e = t[i];
        if (e && 4 === t.readyState) {
          try {
            e.status_code = t.status;
          } catch {}
          const n = {
            endTimestamp: 1e3 * r.timestampInSeconds(),
            startTimestamp: a,
            xhr: t,
            virtualError: o,
          };
          r.triggerHandlers("xhr", n),
            t.removeEventListener("readystatechange", c);
        }
      };
      return (
        "onreadystatechange" in t && "function" == typeof t.onreadystatechange
          ? (t.onreadystatechange = new Proxy(t.onreadystatechange, {
              apply: (e, t, n) => (c(), e.apply(t, n)),
            }))
          : t.addEventListener("readystatechange", c),
        (t.setRequestHeader = new Proxy(t.setRequestHeader, {
          apply(e, t, n) {
            const [o, a] = n,
              s = t[i];
            return (
              s &&
                r.isString(o) &&
                r.isString(a) &&
                (s.request_headers[o.toLowerCase()] = a),
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
        const a = {
          startTimestamp: 1e3 * r.timestampInSeconds(),
          xhr: t,
        };
        return r.triggerHandlers("xhr", a), e.apply(t, n);
      },
    }));
}
(t.SENTRY_XHR_DATA_KEY = i),
  (t.addXhrInstrumentationHandler = function (e) {
    r.addHandler("xhr", e), r.maybeInstrument("xhr", a);
  }),
  (t.instrumentXHR = a);

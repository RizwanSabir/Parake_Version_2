// vendor/module-56782.js — webpack module 56782
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/module-96137 */),
  o = n(60467 /* vendor/module-60467 */);
let i, a, s;
function l() {
  if (!o.WINDOW.document) return;
  const e = r.triggerHandlers.bind(null, "dom"),
    t = c(e, !0);
  o.WINDOW.document.addEventListener("click", t, !1),
    o.WINDOW.document.addEventListener("keypress", t, !1),
    ["EventTarget", "Node"].forEach((t) => {
      const n = o.WINDOW,
        i = n[t]?.prototype;
      i?.hasOwnProperty?.("addEventListener") &&
        (r.fill(i, "addEventListener", function (t) {
          return function (n, r, o) {
            if ("click" === n || "keypress" == n)
              try {
                const r = (this.__sentry_instrumentation_handlers__ =
                    this.__sentry_instrumentation_handlers__ || {}),
                  i = (r[n] = r[n] || { refCount: 0 });
                if (!i.handler) {
                  const r = c(e);
                  (i.handler = r), t.call(this, n, r, o);
                }
                i.refCount++;
              } catch {}
            return t.call(this, n, r, o);
          };
        }),
        r.fill(i, "removeEventListener", function (e) {
          return function (t, n, r) {
            if ("click" === t || "keypress" == t)
              try {
                const n = this.__sentry_instrumentation_handlers__ || {},
                  o = n[t];
                o &&
                  (o.refCount--,
                  o.refCount <= 0 &&
                    (e.call(this, t, o.handler, r),
                    (o.handler = void 0),
                    delete n[t]),
                  0 === Object.keys(n).length &&
                    delete this.__sentry_instrumentation_handlers__);
              } catch {}
            return e.call(this, t, n, r);
          };
        }));
    });
}
function c(e, t = !1) {
  return (n) => {
    if (!n || n._sentryCaptured) return;
    const l = (function (e) {
      try {
        return e.target;
      } catch {
        return null;
      }
    })(n);
    if (
      (function (e, t) {
        return (
          "keypress" === e &&
          (!t?.tagName ||
            ("INPUT" !== t.tagName &&
              "TEXTAREA" !== t.tagName &&
              !t.isContentEditable))
        );
      })(n.type, l)
    )
      return;
    r.addNonEnumerableProperty(n, "_sentryCaptured", !0),
      l &&
        !l._sentryId &&
        r.addNonEnumerableProperty(l, "_sentryId", r.uuid4());
    const c = "keypress" === n.type ? "input" : n.type;
    (function (e) {
      if (e.type !== a) return !1;
      try {
        if (!e.target || e.target._sentryId !== s) return !1;
      } catch {}
      return !0;
    })(n) ||
      (e({ event: n, name: c, global: t }),
      (a = n.type),
      (s = l ? l._sentryId : void 0)),
      clearTimeout(i),
      (i = o.WINDOW.setTimeout(() => {
        (s = void 0), (a = void 0);
      }, 1e3));
  };
}
(t.addClickKeypressInstrumentationHandler = function (e) {
  r.addHandler("dom", e), r.maybeInstrument("dom", l);
}),
  (t.instrumentDOM = l);

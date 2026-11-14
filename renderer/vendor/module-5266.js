// vendor/module-5266.js — webpack module 5266
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = r.GLOBAL_OBJ,
  i = new WeakMap(),
  a = r.defineIntegration((e = {}) => {
    const t = e.types || ["crash", "deprecation", "intervention"];
    function n(e) {
      if (i.has(r.getClient()))
        for (const t of e)
          r.withScope((e) => {
            e.setExtra("url", t.url);
            const n = `ReportingObserver [${t.type}]`;
            let o = "No details available";
            if (t.body) {
              const n = {};
              for (const e in t.body) n[e] = t.body[e];
              if ((e.setExtra("body", n), "crash" === t.type)) {
                const e = t.body;
                o = [e.crashId || "", e.reason || ""].join(" ").trim() || o;
              } else o = t.body.message || o;
            }
            r.captureMessage(`${n}: ${o}`);
          });
    }
    return {
      name: "ReportingObserver",
      setupOnce() {
        r.supportsReportingObserver() &&
          new o.ReportingObserver(n, {
            buffered: !0,
            types: t,
          }).observe();
      },
      setup(e) {
        i.set(e, !0);
      },
    };
  });
t.reportingObserverIntegration = a;

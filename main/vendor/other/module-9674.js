// vendor/other/module-9674.js — webpack module 9674
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = new WeakMap(),
  i = new WeakMap(),
  s = ["text/event-stream", "application/x-ndjson", "application/stream+json"],
  a = r.defineIntegration(() => ({
    name: "FetchStreamPerformance",
    setup() {
      r.addFetchEndInstrumentationHandler((e) => {
        if (e.response) {
          const t = o.get(e.response);
          if (t && e.endTimestamp) {
            t.end(e.endTimestamp);
            const n = i.get(e.response);
            n && clearTimeout(n);
          }
        }
      }),
        r.addFetchInstrumentationHandler((e) => {
          if (e.endTimestamp && e.response) {
            const t = e.response.headers?.get("content-type") || "";
            if (
              e.response.headers?.get("content-length") ||
              !s.some((e) => t.startsWith(e))
            )
              return;
            const n = e.fetchData?.url || "",
              a = e.fetchData?.method || "GET",
              c = r.parseStringToURLObject(n),
              u = n.startsWith("data:")
                ? r.stripDataUrlContent(n)
                : c
                  ? r.getSanitizedUrlStringFromUrlObject(c)
                  : n,
              l = r.startInactiveSpan({
                name: `${a} ${u}`,
                startTime: e.endTimestamp,
                attributes: {
                  url: r.stripDataUrlContent(n),
                  "http.method": a,
                  type: "fetch",
                  [r.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.client.stream",
                  [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
                    "auto.http.browser.stream",
                },
              });
            o.set(e.response, l);
            const d = setTimeout(() => {
              l.isRecording() && l.end();
            }, 9e4);
            i.set(e.response, d);
          }
        });
    },
  }));
t.fetchStreamPerformanceIntegration = a;

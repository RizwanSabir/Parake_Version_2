// vendor/module-9674.js — webpack module 9674
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/module-96137 */),
  o = new WeakMap(),
  i = new WeakMap(),
  a = ["text/event-stream", "application/x-ndjson", "application/stream+json"],
  s = r.defineIntegration(() => ({
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
              !a.some((e) => t.startsWith(e))
            )
              return;
            const n = e.fetchData?.url || "",
              s = e.fetchData?.method || "GET",
              l = r.parseStringToURLObject(n),
              c = n.startsWith("data:")
                ? r.stripDataUrlContent(n)
                : l
                  ? r.getSanitizedUrlStringFromUrlObject(l)
                  : n,
              u = r.startInactiveSpan({
                name: `${s} ${c}`,
                startTime: e.endTimestamp,
                attributes: {
                  url: r.stripDataUrlContent(n),
                  "http.method": s,
                  type: "fetch",
                  [r.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.client.stream",
                  [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
                    "auto.http.browser.stream",
                },
              });
            o.set(e.response, u);
            const d = setTimeout(() => {
              u.isRecording() && u.end();
            }, 9e4);
            i.set(e.response, d);
          }
        });
    },
  }));
t.fetchStreamPerformanceIntegration = s;

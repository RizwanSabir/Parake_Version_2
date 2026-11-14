// vendor/module-45481.js — webpack module 45481
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(39053 /* vendor/module-39053 */),
  i = n(88516 /* vendor/module-88516 */),
  a = r.defineIntegration(() => ({
    name: "HttpContext",
    preprocessEvent(e) {
      if (!o.WINDOW.navigator && !o.WINDOW.location && !o.WINDOW.document)
        return;
      const t = o.getHttpRequestData(),
        n = { ...t.headers, ...e.request?.headers };
      e.request = { ...t, ...e.request, headers: n };
    },
    processSegmentSpan(e) {
      const t = e.attributes?.[r.SEMANTIC_ATTRIBUTE_SENTRY_OP];
      if (!o.WINDOW.navigator && !o.WINDOW.location && !o.WINDOW.document)
        return;
      const n = o.getHttpRequestData();
      r.safeSetSpanJSONAttributes(e, {
        [i.URL_FULL]: "http.client" !== t ? n.url : void 0,
        "http.request.header.user_agent": n.headers["User-Agent"],
        "http.request.header.referer": n.headers.Referer,
      });
    },
  }));
t.httpContextIntegration = a;

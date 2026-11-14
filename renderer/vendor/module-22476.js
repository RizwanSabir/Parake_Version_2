// vendor/module-22476.js — webpack module 22476
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(52891 /* vendor/module-52891 */),
  o = n(83706 /* vendor/module-83706 */),
  i = n(82954 /* vendor/module-82954 */),
  a = n(45814 /* vendor/module-45814 */);
t.addOutgoingRequestBreadcrumb = function (e, t) {
  const n = a.getRequestUrlFromClientRequest(e),
    s = i.parseUrl(n),
    l = t?.statusCode,
    c = o.getBreadcrumbLogLevelFromHttpStatusCode(l);
  r.addBreadcrumb(
    {
      category: "http",
      data: {
        status_code: l,
        url: i.getSanitizedUrlString(s),
        "http.method": e.method || "GET",
        ...(s.search ? { "http.query": s.search } : {}),
        ...(s.hash ? { "http.fragment": s.hash } : {}),
      },
      type: "http",
      level: c,
    },
    { event: "response", request: e, response: t },
  );
};

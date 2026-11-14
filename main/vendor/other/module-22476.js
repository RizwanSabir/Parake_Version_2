// vendor/other/module-22476.js — webpack module 22476
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(52891 /* vendor/other/module-52891 */),
  o = n(83706 /* vendor/other/module-83706 */),
  i = n(82954 /* vendor/other/module-82954 */),
  s = n(45814 /* vendor/other/module-45814 */);
t.addOutgoingRequestBreadcrumb = function (e, t) {
  const n = s.getRequestUrlFromClientRequest(e),
    a = i.parseUrl(n),
    c = t?.statusCode,
    u = o.getBreadcrumbLogLevelFromHttpStatusCode(c);
  r.addBreadcrumb(
    {
      category: "http",
      data: {
        status_code: c,
        url: i.getSanitizedUrlString(a),
        "http.method": e.method || "GET",
        ...(a.search ? { "http.query": a.search } : {}),
        ...(a.hash ? { "http.fragment": a.hash } : {}),
      },
      type: "http",
      level: u,
    },
    { event: "response", request: e, response: t },
  );
};

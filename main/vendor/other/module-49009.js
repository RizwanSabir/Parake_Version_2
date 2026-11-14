// vendor/other/module-49009.js — webpack module 49009
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(31538 /* vendor/other/module-31538 */);
function o(e) {
  const t = e.protocol ? `${e.protocol}:` : "",
    n = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
(t.SENTRY_API_VERSION = "7"),
  (t.getEnvelopeEndpointWithUrlEncodedAuth = function (e, t, n) {
    return (
      t ||
      `${(function (e) {
        return `${o(e)}${e.projectId}/envelope/`;
      })(e)}?${(function (e, t) {
        const n = { sentry_version: "7" };
        return (
          e.publicKey && (n.sentry_key = e.publicKey),
          t && (n.sentry_client = `${t.name}/${t.version}`),
          new URLSearchParams(n).toString()
        );
      })(e, n)}`
    );
  }),
  (t.getReportDialogEndpoint = function (e, t) {
    const n = r.makeDsn(e);
    if (!n) return "";
    const i = `${o(n)}embed/error-page/`;
    let s = `dsn=${r.dsnToString(n)}`;
    for (const e in t)
      if ("dsn" !== e && "onClose" !== e)
        if ("user" === e) {
          const e = t.user;
          if (!e) continue;
          e.name && (s += `&name=${encodeURIComponent(e.name)}`),
            e.email && (s += `&email=${encodeURIComponent(e.email)}`);
        } else s += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`;
    return `${i}?${s}`;
  });

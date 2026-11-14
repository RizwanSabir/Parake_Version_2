// vendor/other/module-45814.js — webpack module 45814
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
function n(e) {
  const t = e.host || "",
    n = /^(.*):(\d+)$/.exec(t),
    r = n ? n[1] : t,
    o = e.port ?? (n ? Number(n[2]) : void 0);
  return {
    method: e.method,
    port: o,
    protocol: e.protocol,
    host: e.host,
    hostname: r,
    path: e.path,
    headers: e.getHeaders(),
  };
}
function r(e) {
  try {
    return String(o(e));
  } catch {
    return "";
  }
}
function o(e) {
  const t = e.protocol || "http:",
    n =
      (e.headers?.host && String(e.headers?.host)) ||
      e.hostname ||
      e.host ||
      "",
    r =
      !e.port || 80 === e.port || 443 === e.port || /^(.*):(\d+)$/.test(n)
        ? ""
        : `:${e.port}`,
    o = e.path ? e.path : "/",
    i = `${t}//${n}${r}`;
  return new URL(o.startsWith("//") ? `${i}${o}` : o, i);
}
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.getRequestOptions = n),
  (t.getRequestUrl = r),
  (t.getRequestUrlFromClientRequest = function (e) {
    return String(r(n(e)));
  }),
  (t.getRequestUrlObject = o);

// vendor/other/module-31538.js — webpack module 31538
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(58637 /* vendor/other/module-58637 */),
  i = /^o(\d+)\./,
  s =
    /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;
function a(e) {
  const t = s.exec(e);
  if (!t) return void o.consoleSandbox(() => {});
  const [n, r, i = "", a = "", u = "", l = ""] = t.slice(1);
  let d = "",
    p = l;
  const f = p.split("/");
  if ((f.length > 1 && ((d = f.slice(0, -1).join("/")), (p = f.pop())), p)) {
    const e = p.match(/^\d+/);
    e && (p = e[0]);
  }
  return c({
    host: a,
    pass: i,
    path: d,
    projectId: p,
    port: u,
    protocol: n,
    publicKey: r,
  });
}
function c(e) {
  return {
    protocol: e.protocol,
    publicKey: e.publicKey || "",
    pass: e.pass || "",
    host: e.host,
    port: e.port || "",
    path: e.path || "",
    projectId: e.projectId,
  };
}
function u(e) {
  const t = e.match(i);
  return t?.[1];
}
(t.dsnFromString = a),
  (t.dsnToString = function (e, t = !1) {
    const {
      host: n,
      path: r,
      pass: o,
      port: i,
      projectId: s,
      protocol: a,
      publicKey: c,
    } = e;
    return `${a}://${c}${t && o ? `:${o}` : ""}@${n}${i ? `:${i}` : ""}/${r ? `${r}/` : r}${s}`;
  }),
  (t.extractOrgIdFromClient = function (e) {
    const t = e.getOptions(),
      { host: n } = e.getDsn() || {};
    let r;
    return t.orgId ? (r = String(t.orgId)) : n && (r = u(n)), r;
  }),
  (t.extractOrgIdFromDsnHost = u),
  (t.makeDsn = function (e) {
    const t = "string" == typeof e ? a(e) : c(e);
    if (
      t &&
      (function (e) {
        if (!r.DEBUG_BUILD) return !0;
        const { port: t, projectId: n, protocol: i } = e;
        return !(
          ["protocol", "publicKey", "host", "projectId"].find(
            (t) =>
              !e[t] && (o.debug.error(`Invalid Sentry Dsn: ${t} missing`), !0),
          ) ||
          (n.match(/^\d+$/)
            ? (function (e) {
                return "http" === e || "https" === e;
              })(i)
              ? t &&
                isNaN(parseInt(t, 10)) &&
                (o.debug.error(`Invalid Sentry Dsn: Invalid port ${t}`), 1)
              : (o.debug.error(`Invalid Sentry Dsn: Invalid protocol ${i}`), 1)
            : (o.debug.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), 1))
        );
      })(t)
    )
      return t;
  });

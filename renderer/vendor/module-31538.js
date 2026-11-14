// vendor/module-31538.js — webpack module 31538
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/module-75703 */),
  o = n(58637 /* vendor/module-58637 */),
  i = /^o(\d+)\./,
  a =
    /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;
function s(e) {
  const t = a.exec(e);
  if (!t) return void o.consoleSandbox(() => {});
  const [n, r, i = "", s = "", c = "", u = ""] = t.slice(1);
  let d = "",
    p = u;
  const f = p.split("/");
  if ((f.length > 1 && ((d = f.slice(0, -1).join("/")), (p = f.pop())), p)) {
    const e = p.match(/^\d+/);
    e && (p = e[0]);
  }
  return l({
    host: s,
    pass: i,
    path: d,
    projectId: p,
    port: c,
    protocol: n,
    publicKey: r,
  });
}
function l(e) {
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
function c(e) {
  const t = e.match(i);
  return t?.[1];
}
(t.dsnFromString = s),
  (t.dsnToString = function (e, t = !1) {
    const {
      host: n,
      path: r,
      pass: o,
      port: i,
      projectId: a,
      protocol: s,
      publicKey: l,
    } = e;
    return `${s}://${l}${t && o ? `:${o}` : ""}@${n}${i ? `:${i}` : ""}/${r ? `${r}/` : r}${a}`;
  }),
  (t.extractOrgIdFromClient = function (e) {
    const t = e.getOptions(),
      { host: n } = e.getDsn() || {};
    let r;
    return t.orgId ? (r = String(t.orgId)) : n && (r = c(n)), r;
  }),
  (t.extractOrgIdFromDsnHost = c),
  (t.makeDsn = function (e) {
    const t = "string" == typeof e ? s(e) : l(e);
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

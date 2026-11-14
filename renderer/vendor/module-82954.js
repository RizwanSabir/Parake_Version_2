// vendor/module-82954.js — webpack module 82954
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(88516 /* vendor/module-88516 */),
  o = n(12724 /* vendor/module-12724 */);
function i(e) {
  return "isRelative" in e;
}
function a(e) {
  if (i(e)) return e.pathname;
  const t = new URL(e);
  return (
    (t.search = ""),
    (t.hash = ""),
    ["80", "443"].includes(t.port) && (t.port = ""),
    t.password && (t.password = "%filtered%"),
    t.username && (t.username = "%filtered%"),
    t.toString()
  );
}
function s(e, t, n, r) {
  return `${n?.method?.toUpperCase() ?? "GET"} ${r || (e ? ("client" === t ? a(e) : e.pathname) : "/")}`;
}
(t.getHttpSpanDetailsFromUrlObject = function (e, t, n, a, l) {
  const c = {
    [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: n,
    [o.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url",
  };
  return (
    l &&
      ((c["server" === t ? "http.route" : "url.template"] = l),
      (c[o.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "route")),
    a?.method &&
      (c[o.SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD] = a.method.toUpperCase()),
    e &&
      (e.search && (c["url.query"] = e.search),
      e.hash && (c["url.fragment"] = e.hash),
      e.pathname &&
        ((c["url.path"] = e.pathname),
        "/" === e.pathname &&
          (c[o.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "route")),
      i(e) ||
        ((c[r.URL_FULL] = e.href),
        e.port && (c["url.port"] = e.port),
        e.protocol && (c["url.scheme"] = e.protocol),
        e.hostname &&
          (c["server" === t ? "server.address" : "url.domain"] = e.hostname))),
    [s(e, t, a, l), c]
  );
}),
  (t.getSanitizedUrlString = function (e) {
    const { protocol: t, host: n, path: r } = e;
    return `${t ? `${t}://` : ""}${
      n
        ?.replace(/^.*@/, "[filtered]:[filtered]@")
        .replace(/(:80)$/, "")
        .replace(/(:443)$/, "") || ""
    }${r}`;
  }),
  (t.getSanitizedUrlStringFromUrlObject = a),
  (t.isURLObjectRelative = i),
  (t.parseStringToURLObject = function (e, t) {
    const n = e.indexOf("://") <= 0 && 0 !== e.indexOf("//"),
      r = t ?? (n ? "thismessage:/" : void 0);
    try {
      if ("canParse" in URL && !URL.canParse(e, r)) return;
      const t = new URL(e, r);
      return n
        ? {
            isRelative: n,
            pathname: t.pathname,
            search: t.search,
            hash: t.hash,
          }
        : t;
    } catch {}
  }),
  (t.parseUrl = function (e) {
    if (!e) return {};
    const t = e.match(
      /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,
    );
    if (!t) return {};
    const n = t[6] || "",
      r = t[8] || "";
    return {
      host: t[4],
      path: t[5],
      protocol: t[2],
      search: n,
      hash: r,
      relative: t[5] + n + r,
    };
  }),
  (t.stripDataUrlContent = function (e, t = !0) {
    if (e.startsWith("data:")) {
      const n = e.match(/^data:([^;,]+)/),
        r = n ? n[1] : "text/plain",
        o = e.includes(";base64,"),
        i = e.indexOf(",");
      let a = "";
      if (t && -1 !== i) {
        const t = e.slice(i + 1);
        a = t.length > 10 ? `${t.slice(0, 10)}... [truncated]` : t;
      }
      return `data:${r}${o ? ",base64" : ""}${a ? `,${a}` : ""}`;
    }
    return e;
  }),
  (t.stripUrlQueryAndFragment = function (e) {
    return e.split(/[?#]/, 1)[0];
  });

// app/api-urls.js — webpack module 7478
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.DEV_HOSTS = t.API_URLS = void 0),
  (t.requiresBypassToken = function (e) {
    return !("localhost" === e || "production" === e);
  }),
  (t.getDefaultApiConfig = function () {
    const e = "production";
    return { environment: e, url: t.API_URLS[e], bypassToken: "" };
  }),
  (t.resolveApiConfigWithOverride = function (e, n) {
    return n.isDevelopment &&
      n.overrideUrl &&
      (function (e) {
        try {
          const n = new URL(e);
          return "http:" === n.protocol && t.DEV_HOSTS.includes(n.hostname);
        } catch {
          return !1;
        }
      })(n.overrideUrl)
      ? { ...e, environment: "localhost", url: n.overrideUrl }
      : e;
  });
const r = n(38591 /* app/brands */),
  o = n(26279 /* app/brand-constants */);
var i;
(t.API_URLS =
  ((i = o.BUILD_BRAND),
  {
    localhost: (0, r.brandOrigin)(r.DEFAULT_BRAND, "development"),
    staging: (0, r.brandOrigin)(i, "staging"),
    production: (0, r.brandOrigin)(i, "production"),
  })),
  (t.DEV_HOSTS = [
    ...new Set(["localhost", r.BRANDS[o.BUILD_BRAND].domains.development]),
  ]);

// app/lib/api-urls.js — webpack module 54049
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.eI = t.API_URLS = void 0),
  (t.requiresBypassToken = function (e) {
    return !("localhost" === e || "production" === e);
  }),
  (t.getDefaultApiConfig = function () {
    const e = "production";
    return { environment: e, url: t.API_URLS[e], bypassToken: "" };
  });
const r = n(81592 /* app/lib/brands */),
  o = n(43286 /* app/lib/desktop-brand */);
var i;
(t.API_URLS =
  ((i = o.BUILD_BRAND),
  {
    localhost: (0, r.brandOrigin)(r.DEFAULT_BRAND, "development"),
    staging: (0, r.brandOrigin)(i, "staging"),
    production: (0, r.brandOrigin)(i, "production"),
  })),
  (t.eI = [
    ...new Set(["localhost", r.BRANDS[o.BUILD_BRAND].domains.development]),
  ]);

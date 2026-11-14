// app/content-security-policy.js — webpack module 90238
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.PROTECTED_ORIGINS = void 0),
  (t.registerContentSecurityPolicy = function () {
    r.session.defaultSession.webRequest.onHeadersReceived((e, t) => {
      t({
        responseHeaders: {
          ...e.responseHeaders,
          "Content-Security-Policy": [s],
        },
      });
    });
  });
const r = n(84157 /* external/electron */),
  o = n(7478 /* app/api-urls */);
t.PROTECTED_ORIGINS = [
  o.API_URLS.production,
  o.API_URLS.staging,
  "https://*.vercel.app",
];
const i = !1,
  s =
    (o.DEV_HOSTS.map((e) => `http://${e}:*`),
    [
      "default-src 'self'",
      ["script-src 'self'", i, i].filter(Boolean).join(" "),
      "style-src 'self' 'unsafe-inline'",
      [
        "img-src 'self' data: blob: https://img.logo.dev",
        ...t.PROTECTED_ORIGINS,
      ]
        .filter(Boolean)
        .join(" "),
      "font-src 'self'",
      [
        "connect-src 'self'",
        i,
        ...t.PROTECTED_ORIGINS,
        "https://api-eu.mixpanel.com",
        "wss://*.rt.speechmatics.com",
        "https://*.uploadthing.com",
        "https://*.ufs.sh",
        "https://api.openai.com",
        "https://www.google.com/generate_204",
        "https://cp.cloudflare.com/generate_204",
      ]
        .filter(Boolean)
        .join(" "),
      "frame-src 'none'",
      "media-src 'self' blob:",
      "object-src 'none'",
      "worker-src 'self' blob:",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "));

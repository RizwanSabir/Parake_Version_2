// app/bypass-token-request-header.js — webpack module 38824
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
t.registerBypassTokenRequestHeader = function () {
  r.session.defaultSession.webRequest.onBeforeSendHeaders(
    { urls: s },
    (e, t) => {
      const { bypassToken: n, environment: r } = (0, i.getApiConfig)(),
        s = { ...e.requestHeaders };
      (0, o.requiresBypassToken)(r) &&
        n &&
        (s["x-vercel-protection-bypass"] = n),
        t({ requestHeaders: s });
    },
  );
};
const r = n(84157 /* external/electron */),
  o = n(7478 /* app/api-urls */),
  i = n(2510 /* app/api-config-store */),
  s = n(90238 /* app/content-security-policy */).PROTECTED_ORIGINS.map(
    (e) => `${e}/*`,
  );

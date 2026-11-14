// vendor/other/module-15881.js — webpack module 15881
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
t.telemetryOptions = function (e) {
  return {
    initialScope: { tags: { runtime: e } },
    enableLogs: !0,
    attachStacktrace: !1,
    beforeSend: (0, r.createBeforeSend)({ appFramePatterns: o[e] }),
    beforeSendLog: r.beforeSendLog,
    beforeSendTransaction: r.beforeSendTransaction,
    beforeBreadcrumb: r.beforeBreadcrumb,
    ignoreErrors: [
      "ResizeObserver loop limit exceeded",
      "ResizeObserver loop completed with undelivered notifications",
      "Failed to execute 'insertBefore' on 'Node'",
      "Failed to execute 'removeChild' on 'Node'",
      "The object can not be found here.",
      "Failed to connect to MetaMask",
      "Java object is gone",
      "Java exception was raised during method invocation",
      "window.webkit.messageHandlers",
      "runtime.sendMessage",
      "Cannot assign to read only property 'open' of object '#<Window>'",
      "Identifier 'originalPrompt' has already been declared",
      "Permission denied to access object",
    ],
  };
};
const r = n(91711 /* vendor/other/module-91711 */),
  o = { web: [/\/_next\//], api: void 0, desktop: void 0 };

// vendor/other/module-68966.js — webpack module 68966
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = n(57230 /* vendor/other/module-57230 */),
  i = n(62665 /* vendor/other/module-62665 */),
  s = n(39053 /* vendor/other/module-39053 */),
  a = n(61586 /* vendor/other/module-61586 */),
  c = "WebWorker",
  u = r.defineIntegration(({ worker: e }) => ({
    name: c,
    setupOnce: () => {
      (Array.isArray(e) ? e : [e]).forEach((e) => l(e));
    },
    addWorker: (e) => l(e),
  }));
function l(e) {
  e.addEventListener("message", (e) => {
    if (
      (function (e) {
        if (!r.isPlainObject(e) || !0 !== e._sentryMessage) return !1;
        const t = "_sentryDebugIds" in e,
          n = "_sentryModuleMetadata" in e,
          o = "_sentryWorkerError" in e,
          i = "_sentryWasmImages" in e;
        return (
          !!(t || n || o || i) &&
          !(
            t &&
            !r.isPlainObject(e._sentryDebugIds) &&
            void 0 !== e._sentryDebugIds
          ) &&
          !(
            n &&
            !r.isPlainObject(e._sentryModuleMetadata) &&
            void 0 !== e._sentryModuleMetadata
          ) &&
          !(o && !r.isPlainObject(e._sentryWorkerError)) &&
          !!(
            !i ||
            (Array.isArray(e._sentryWasmImages) &&
              e._sentryWasmImages.every(
                (e) => r.isPlainObject(e) && "string" == typeof e.code_file,
              ))
          )
        );
      })(e.data)
    ) {
      if (
        (e.stopImmediatePropagation(),
        e.data._sentryDebugIds &&
          (o.DEBUG_BUILD &&
            r.debug.log("Sentry debugId web worker message received", e.data),
          (s.WINDOW._sentryDebugIds = {
            ...e.data._sentryDebugIds,
            ...s.WINDOW._sentryDebugIds,
          })),
        e.data._sentryModuleMetadata &&
          (o.DEBUG_BUILD &&
            r.debug.log(
              "Sentry module metadata web worker message received",
              e.data,
            ),
          (s.WINDOW._sentryModuleMetadata = {
            ...e.data._sentryModuleMetadata,
            ...s.WINDOW._sentryModuleMetadata,
          })),
        e.data._sentryWasmImages)
      ) {
        o.DEBUG_BUILD &&
          r.debug.log("Sentry WASM images web worker message received", e.data);
        const t = s.WINDOW._sentryWasmImages || [],
          n = e.data._sentryWasmImages.filter(
            (e) =>
              r.isPlainObject(e) &&
              "string" == typeof e.code_file &&
              !t.some((t) => t.code_file === e.code_file),
          );
        s.WINDOW._sentryWasmImages = [...t, ...n];
      }
      e.data._sentryWorkerError &&
        (o.DEBUG_BUILD &&
          r.debug.log(
            "Sentry worker rejection message received",
            e.data._sentryWorkerError,
          ),
        (function (e) {
          const t = r.getClient();
          if (!t) return;
          const n = t.getOptions().stackParser,
            s = t.getOptions().attachStacktrace,
            c = e.reason,
            u = r.isPrimitive(c)
              ? a._eventFromRejectionWithPrimitive(c)
              : i.eventFromUnknownInput(n, c, void 0, s, !0);
          (u.level = "error"),
            e.filename &&
              (u.contexts = {
                ...u.contexts,
                worker: { filename: e.filename },
              }),
            r.captureEvent(u, {
              originalException: c,
              mechanism: {
                handled: !1,
                type: "auto.browser.web_worker.onunhandledrejection",
              },
            }),
            o.DEBUG_BUILD &&
              r.debug.log("Captured worker unhandled rejection", c);
        })(e.data._sentryWorkerError));
    }
  });
}
(t.INTEGRATION_NAME = c),
  (t.registerWebWorker = function ({ self: e }) {
    e.postMessage({
      _sentryMessage: !0,
      _sentryDebugIds: e._sentryDebugIds ?? void 0,
      _sentryModuleMetadata: e._sentryModuleMetadata ?? void 0,
    }),
      e.addEventListener("unhandledrejection", (t) => {
        const n = {
          reason: a._getUnhandledRejectionError(t),
          filename: e.location?.href,
        };
        e.postMessage({ _sentryMessage: !0, _sentryWorkerError: n }),
          o.DEBUG_BUILD &&
            r.debug.log(
              "[Sentry Worker] Forwarding unhandled rejection to parent",
              n,
            );
      }),
      o.DEBUG_BUILD &&
        r.debug.log(
          "[Sentry Worker] Registered worker with unhandled rejection handling",
        );
  }),
  (t.webWorkerIntegration = u);

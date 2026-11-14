// app/telemetry-init.js — webpack module 5979
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
var r,
  o =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, n, r) {
          void 0 === r && (r = n);
          var o = Object.getOwnPropertyDescriptor(t, n);
          (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
            (o = {
              enumerable: !0,
              get: function () {
                return t[n];
              },
            }),
            Object.defineProperty(e, r, o);
        }
      : function (e, t, n, r) {
          void 0 === r && (r = n), (e[r] = t[n]);
        }),
  i =
    (this && this.__setModuleDefault) ||
    (Object.create
      ? function (e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t,
          });
        }
      : function (e, t) {
          e.default = t;
        }),
  s =
    (this && this.__importStar) ||
    ((r = function (e) {
      return (
        (r =
          Object.getOwnPropertyNames ||
          function (e) {
            var t = [];
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
            return t;
          }),
        r(e)
      );
    }),
    function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n = r(e), s = 0; s < n.length; s++)
          "default" !== n[s] && o(t, e, n[s]);
      return i(t, e), t;
    });
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.initTelemetry = function () {
    p.SENTRY_DSN &&
      c.app.isPackaged &&
      (a.init({
        dsn: p.SENTRY_DSN,
        environment: (0, p.resolveTelemetryEnvironment)(),
        release: c.app.getVersion(),
        ...(0, l.telemetryOptions)("desktop"),
        integrations: [
          a.electronNetIntegration({ breadcrumbs: !1, tracing: !1 }),
          a.electronBreadcrumbsIntegration({
            app: !1,
            autoUpdater: !1,
            webContents: !1,
            browserWindow: !1,
            screen: !1,
            powerMonitor: !1,
          }),
          a.childProcessIntegration({
            events: [
              "abnormal-exit",
              "launch-failed",
              "integrity-failure",
              "crashed",
              "oom",
            ],
          }),
        ],
        transportOptions: { shouldStore: () => c.net.isOnline() },
      }),
      (0, u.setTelemetrySdk)(a),
      (0, u.setTelemetryContext)({ brand: d.BUILD_BRAND }));
  });
const a = s(n(12636 /* vendor/sentry/node-client */)),
  c = n(84157 /* external/electron */),
  u = n(49581 /* app/telemetry-context */),
  l = n(15881 /* vendor/other/module-15881 */),
  d = n(26279 /* app/brand-constants */),
  p = n(7253 /* vendor/other/module-7253 */);

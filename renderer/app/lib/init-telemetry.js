// app/lib/init-telemetry.js — webpack module 23682
// params: (e, t, n) = (module, exports, require)
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
  a =
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
        for (var n = r(e), a = 0; a < n.length; a++)
          "default" !== n[a] && o(t, e, n[a]);
      return i(t, e), t;
    });
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.initTelemetry = function () {
    d.SENTRY_DSN &&
      (s.init((0, c.telemetryOptions)("desktop")),
      (0, l.setTelemetrySdk)(s),
      (0, l.setTelemetryContext)({ brand: u.BUILD_BRAND }));
  });
const s = a(n(18990 /* vendor/module-18990 */)),
  l = n(37148 /* app/lib/set-telemetry-sdk */),
  c = n(31592 /* vendor/module-31592 */),
  u = n(43286 /* app/lib/desktop-brand */),
  d = n(90354 /* vendor/module-90354 */);

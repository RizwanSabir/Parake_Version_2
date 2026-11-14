// app/native-audio-bindings.js — webpack module 83340
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.listOutputDevices = t.OutputLoopbackCapture = t.AudioProcessor = void 0);
const o = r(n(79896 /* external/fs */)),
  i = r(n(16928 /* external/path */)),
  s = r(n(57686 /* vendor/electron-log/index */)),
  a = n(63043 /* app/native-load-failure */),
  c = (function () {
    try {
      return n(9156 /* app/native/napi-loader */);
    } catch (e) {
      const t = (0, a.describeNativeLoadFailure)(
        e,
        (function () {
          const e = (0, a.unpackedDirectory)(__dirname);
          try {
            return o.default
              .readdirSync(e)
              .filter((e) => e.endsWith(".node"))
              .map((t) => ({
                name: t,
                size: o.default.statSync(i.default.join(e, t)).size,
              }));
          } catch {
            return null;
          }
        })(),
        { platform: process.platform, arch: process.arch },
      );
      throw (s.default.error(t, e), t);
    }
  })();
(t.AudioProcessor = c.AudioProcessor),
  (t.OutputLoopbackCapture = c.OutputLoopbackCapture),
  (t.listOutputDevices = c.listOutputDevices);

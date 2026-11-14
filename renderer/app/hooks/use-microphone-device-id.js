// app/hooks/use-microphone-device-id.js — webpack module 55402
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useMicrophoneDeviceId = function () {
  const e = (0, r.c)(3),
    [t, n] = (0, i.usePersistedDeviceId)(s, a);
  let o;
  return (
    e[0] !== t || e[1] !== n
      ? ((o = { microphoneDeviceId: t, setMicrophoneDeviceId: n }),
        (e[0] = t),
        (e[1] = n),
        (e[2] = o))
      : (o = e[2]),
    o
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(65757 /* app/lib/get-device-id */),
  i = n(85263 /* vendor/module-85263 */);
function a(e) {
  return (0, o.setDeviceId)("microphone", e);
}
function s() {
  return (0, o.getDeviceId)("microphone");
}

// app/hooks/use-capture-snapshot.js — webpack module 41987
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useCaptureSnapshot = function (e) {
  const t = (0, r.c)(12),
    {
      callSessionId: n,
      isActivated: f,
      isMock: h,
      combinedTranscript: m,
      isShareStarting: g,
      isShareTranscribing: y,
      isShareMuted: v,
      hasShareError: b,
      meetingApp: S,
      shareOutputDeviceId: _,
    } = e,
    [x] = (0, o.useState)(p),
    w = (0, o.useRef)(f),
    E = (0, o.useRef)(s.emptyCaptureSnapshotTally),
    T = (0, o.useRef)(!1);
  let k, C;
  t[0] !== n ||
  t[1] !== m ||
  t[2] !== b ||
  t[3] !== h ||
  t[4] !== v ||
  t[5] !== g ||
  t[6] !== y ||
  t[7] !== S ||
  t[8] !== x ||
  t[9] !== _
    ? ((k = () => {
        if (h || T.current) return;
        E.current = (0, s.tallyCaptureSnapshotLines)(
          E.current,
          m,
          (0, l.toServerMs)(x),
        );
        const e = (0, s.decideCaptureSnapshot)(
          E.current,
          (0, l.serverNow)().getTime(),
        );
        if (!e) return;
        T.current = !0;
        const t = {
            isStarting: g,
            isTranscribing: y,
            isMuted: v,
            hasError: b,
          },
          { platform: r, ipcRendererProxy: o } = window.electron;
        Promise.all([
          o.invoke("renderer/get-unrecognized-meeting-apps").catch(d),
          "win32" === r
            ? o.invoke("renderer/list-output-devices").catch(u)
            : null,
          "win32" === r
            ? navigator.mediaDevices.enumerateDevices().catch(c)
            : [],
        ]).then((r) => {
          const [o, l, c] = r;
          (0, i.trackClientEvent)(
            a.mixpanelEvents.transcription.capture_snapshot,
            (0, s.captureSnapshotProperties)({
              callSessionId: n,
              outcome: e,
              share: t,
              rejoined: w.current,
              meetingApp: S,
              unrecognizedMicApps: o,
              shareOutput: l && {
                pinnedDeviceId: _,
                devices: l,
                browserDevices: c,
              },
            }),
          );
        });
      }),
      (C = [h, m, x, n, g, y, v, b, S, _]),
      (t[0] = n),
      (t[1] = m),
      (t[2] = b),
      (t[3] = h),
      (t[4] = v),
      (t[5] = g),
      (t[6] = y),
      (t[7] = S),
      (t[8] = x),
      (t[9] = _),
      (t[10] = k),
      (t[11] = C))
    : ((k = t[10]), (C = t[11])),
    (0, o.useEffect)(k, C);
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(87093 /* vendor/module-87093 */),
  a = n(22764 /* vendor/module-22764 */),
  s = n(57135 /* vendor/module-57135 */),
  l = n(72974 /* vendor/module-72974 */);
function c() {
  return [];
}
function u() {
  return [];
}
function d() {
  return [];
}
function p() {
  return Date.now();
}

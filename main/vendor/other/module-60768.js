// vendor/other/module-60768.js — webpack module 60768
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.initialMeetingDetectionState = void 0),
  (t.reduceMeetingDetection = function (e, n) {
    const c = (function (e, n) {
        if ("liveCallSessionVisibilityChanged" === n.type)
          return i({ ...e, isLiveCallSessionVisible: n.isVisible });
        if ("webServiceRefined" === n.type)
          return s(e) !== n.browserSlug
            ? i(e)
            : i({
                ...e,
                webServiceRefinement: {
                  browserSlug: n.browserSlug,
                  serviceSlug: n.serviceSlug,
                },
              });
        if ("monitorStopped" === n.type)
          return i({
            ...t.initialMeetingDetectionState,
            isLiveCallSessionVisible: e.isLiveCallSessionVisible,
          });
        const a = { ...e, activeProcesses: n.processes };
        if (!n.autoDetectEnabled)
          return i(
            e.isInMeeting ? { ...a, isInMeeting: !1, starterAppSlug: null } : a,
          );
        const c = o(n.processes),
          u = o(n.newlyDetectedProcesses),
          l = o(n.noLongerDetectedProcesses),
          d = u.length > 0 && !e.isInMeeting;
        if (d && e.isLiveCallSessionVisible)
          return i({ ...a, isInMeeting: !0 });
        if (d) {
          const e = u[0];
          return {
            state: {
              ...a,
              isInMeeting: !0,
              starterAppSlug: e ? (0, r.getMeetingAppSlug)(e.bundleId) : null,
            },
            effects: [{ type: "notifyMeetingStarted", processes: u }],
          };
        }
        const p = c.length > 0;
        if (e.isLiveCallSessionVisible && !e.starterAppSlug && l.length > 0)
          return {
            state: { ...a, isInMeeting: p },
            effects: [{ type: "notifyMeetingEnded", processes: l }],
          };
        const f =
            !!e.starterAppSlug &&
            c.some(
              (t) => (0, r.getMeetingAppSlug)(t.bundleId) === e.starterAppSlug,
            ),
          h = e.starterAppSlug ? !f : !p;
        return l.length > 0 && h && e.isInMeeting
          ? {
              state: { ...a, isInMeeting: !1, starterAppSlug: null },
              effects: [{ type: "notifyMeetingEnded", processes: l }],
            }
          : i(a);
      })(e, n),
      u = (function (e) {
        return e.webServiceRefinement
          ? s(e) === e.webServiceRefinement.browserSlug
            ? e
            : { ...e, webServiceRefinement: null }
          : e;
      })(c.state),
      l = a(e),
      d = a(u);
    return l === d
      ? { state: u, effects: c.effects }
      : {
          state: u,
          effects: [
            ...c.effects,
            { type: "meetingAppChanged", meetingApp: d },
            ...(null !== d && (0, r.isBrowserMeetingApp)(d)
              ? [{ type: "refineWebMeetingService", browserSlug: d }]
              : []),
          ],
        };
  }),
  (t.currentMeetingAppSlug = a),
  (t.unrecognizedAudioAppIds = function (e, t) {
    return [
      ...new Set(
        e.activeProcesses
          .filter((e) => !t.has(e.pid))
          .map((e) => e.bundleId)
          .filter(
            (e) => e && !e.startsWith("pid:") && !(0, r.isAllowedMeetingApp)(e),
          ),
      ),
    ];
  });
const r = n(59437 /* vendor/other/module-59437 */);
function o(e) {
  return e.filter((e) => (0, r.isAllowedMeetingApp)(e.bundleId));
}
function i(e) {
  return { state: e, effects: [] };
}
function s(e) {
  if (e.starterAppSlug) return e.starterAppSlug;
  const t = e.activeProcesses.find((e) =>
    (0, r.isAllowedMeetingApp)(e.bundleId),
  );
  return t ? (0, r.getMeetingAppSlug)(t.bundleId) : null;
}
function a(e) {
  return e.webServiceRefinement?.serviceSlug ?? s(e);
}
t.initialMeetingDetectionState = {
  isInMeeting: !1,
  starterAppSlug: null,
  activeProcesses: [],
  isLiveCallSessionVisible: !1,
  webServiceRefinement: null,
};

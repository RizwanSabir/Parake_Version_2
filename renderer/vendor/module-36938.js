// vendor/module-36938.js — webpack module 36938
// params: (e, t, n) = (module, exports, require)
t.useSpeechmaticsConnectionWatcher = function ({
  status: e,
  statusRef: t,
  speechmaticsClientRef: n,
  reportLiveCallSessionError: c,
  queueAction: u,
  showToastWarning: d,
  source: p,
  capturePlatform: f,
  sourceBase: h,
}) {
  const m = (0, r.useRef)([]),
    g = (0, r.useRef)(null),
    y = (0, r.useRef)(0),
    v = (0, r.useRef)(!1);
  return (
    (0, r.useEffect)(() => {
      if ("RECORDING" !== e) return;
      (m.current = []), (g.current = null), (y.current = 0), (v.current = !1);
      const t = Date.now(),
        r = setInterval(() => {
          const e = n.current;
          if (!e) return;
          const m = Date.now() - (e.lastAudioAddedAt ?? t);
          if (m <= s)
            return void (
              v.current &&
              ((v.current = !1),
              c({
                severity: "info",
                source: `${h}.livenessWatchdog`,
                reason: "audio-added-stale-recovered",
                error: new Error("audio-added-stale-recovered"),
                contextData: { staleMs: m, warnThresholdMs: s },
              }))
            );
          if (m <= l)
            return void (
              v.current ||
              ((v.current = !0),
              "offline" === o.connectivityService.getSnapshot().status
                ? d(a.OFFLINE_RECOVERING_MESSAGE, {
                    id: a.OFFLINE_TOAST_ID,
                  })
                : d(
                    "microphone" === p
                      ? "Transcribing your microphone has stalled. Waiting to see if it recovers…"
                      : "Transcribing the call audio has stalled. Waiting to see if it recovers…",
                  ),
              c({
                severity: "warning",
                source: `${h}.livenessWatchdog`,
                reason: "audio-added-stale-warning",
                error: new Error("audio-added-stale-warning"),
                contextData: {
                  staleMs: m,
                  warnThresholdMs: s,
                  disconnectThresholdMs: l,
                },
              }))
            );
          clearInterval(r);
          const y = g.current,
            b = null !== y && Date.now() - y <= s,
            S = b && null !== e.lastAudioAddedAt,
            _ = {
              displayMessage: (0, i.transcriptionStoppedMessage)(
                p,
                S ? "connection" : b ? "service" : "stalled",
                f,
              ),
              source: `${h}.livenessWatchdog`,
              severity: "error",
              reason: "audio-added-stale",
              contextData: {
                staleMs: m,
                warnThresholdMs: s,
                disconnectThresholdMs: l,
              },
            };
          u(
            S
              ? { action: "RECONNECT", error: _ }
              : { action: "STOP", error: _ },
          );
        }, 1e3);
      return () => clearInterval(r);
    }, [e]),
    {
      recordChunkInterval: () => {
        const e = Date.now();
        if (null !== g.current) {
          const n = e - g.current,
            r = m.current;
          if ((r.push(n), r.length > 10 && r.shift(), 10 === r.length)) {
            const n = [...r].sort((e, t) => e - t),
              o = Math.floor(n.length / 2),
              i = n.length % 2 == 0 ? (n[o - 1] + n[o]) / 2 : n[o];
            if (i > 200 && "RECORDING" === t.current && e - y.current >= 6e4) {
              y.current = e;
              const t = n[Math.floor(0.95 * n.length)] ?? n.at(-1),
                r = "undefined" != typeof document && !0 === document.hidden;
              c({
                severity: r ? "info" : "warning",
                source: `${h}.cadenceDrift`,
                reason: "cadence-drift",
                error: new Error("cadence-drift"),
                contextData: {
                  medianMs: i,
                  p95Ms: t,
                  thresholdMs: 200,
                  hidden: r,
                },
              });
            }
          }
        }
        g.current = e;
      },
    }
  );
};
const r = n(14041 /* vendor/module-14041 */),
  o = n(63506 /* vendor/module-63506 */),
  i = n(83817 /* vendor/module-83817 */),
  a = n(39752 /* vendor/module-39752 */),
  s = 1e4,
  l = 2e4;

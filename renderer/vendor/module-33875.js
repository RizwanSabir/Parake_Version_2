// vendor/module-33875.js — webpack module 33875
// params: (e, t, n) = (module, exports, require)
t.useConnectivityTelemetry = function (e) {
  const t = (0, r.c)(6),
    {
      isShareTranscribing: n,
      isMicrophoneTranscribing: a,
      reportLiveCallSessionError: s,
    } = e,
    l = (0, o.useRef)(n),
    c = (0, o.useRef)(a),
    u = (0, o.useRef)(s);
  let d, p, f;
  t[0] !== a || t[1] !== n || t[2] !== s
    ? ((d = () => {
        (l.current = n), (c.current = a), (u.current = s);
      }),
      (t[0] = a),
      (t[1] = n),
      (t[2] = s),
      (t[3] = d))
    : (d = t[3]),
    (0, o.useLayoutEffect)(d),
    t[4] === Symbol.for("react.memo_cache_sentinel")
      ? ((p = () => {
          const e = i.connectivityService.requestPolling("high");
          let t = null,
            n = null;
          const r = i.connectivityService.onStatusChange((e) => {
            if ("offline" === e.status) {
              const e = l.current,
                r = c.current;
              if (!e && !r) return;
              return (t = Date.now()), void (n = { share: e, microphone: r });
            }
            if ("online" !== e.status) return;
            if (null === t) return;
            const r = new Date(t).toISOString(),
              o = Date.now() - t,
              i = n;
            (t = null),
              (n = null),
              u.current({
                severity: "warning",
                source: "useConnectivityTelemetry.recovered",
                reason: "network-offline-recovered",
                error: new Error("network-offline-recovered"),
                contextData: {
                  offlineStartedAt: r,
                  offlineDurationMs: o,
                  activeStreamsAtOffline: i,
                },
              });
          });
          return () => {
            r(), e();
          };
        }),
        (f = []),
        (t[4] = p),
        (t[5] = f))
      : ((p = t[4]), (f = t[5])),
    (0, o.useEffect)(p, f);
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(63506 /* vendor/module-63506 */);

// vendor/module-44183.js — webpack module 44183
// params: (e, t, n) = (module, exports, require)
const r = n(96137 /* vendor/module-96137 */),
  o = n(68540 /* vendor/module-68540 */),
  i = r.defineIntegration((e) => {
    const t = e?.threshold ?? 1e3,
      n = e?.pollInterval || t / 2;
    return {
      name: "EventLoopBlockRenderer",
      setup(r) {
        const i = {
            pollInterval: n,
            anrThreshold: t,
            captureStackTrace: !0,
            ...e,
          },
          a = o.getIPC(r);
        a.sendStatus({ status: document.visibilityState, config: i }),
          setInterval(() => {
            a.sendStatus({ status: "alive", config: i });
          }, i.pollInterval);
      },
    };
  });
t.eventLoopBlockIntegration = i;

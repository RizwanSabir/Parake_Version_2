// vendor/module-87660.js — webpack module 87660
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(58637 /* vendor/module-58637 */),
  o = n(75703 /* vendor/module-75703 */),
  i = n(97190 /* vendor/module-97190 */),
  a = n(98050 /* vendor/module-98050 */),
  s = new WeakMap();
t.recordRequestSession = function (
  e,
  { requestIsolationScope: t, response: n, sessionFlushingDelayMS: l },
) {
  t.setSDKProcessingMetadata({ requestSession: { status: "ok" } }),
    n.once("close", () => {
      const n = t.getScopeData().sdkProcessingMetadata.requestSession;
      if (e && n) {
        o.DEBUG_BUILD &&
          r.debug.log(`Recorded request session with status: ${n.status}`);
        const t = new Date(i.safeDateNow());
        t.setSeconds(0, 0);
        const c = t.toISOString(),
          u = s.get(e),
          d = u?.[c] || { exited: 0, crashed: 0, errored: 0 };
        if (
          (d[
            { ok: "exited", crashed: "crashed", errored: "errored" }[n.status]
          ]++,
          u)
        )
          u[c] = d;
        else {
          o.DEBUG_BUILD && r.debug.log("Opened new request session aggregate.");
          const t = { [c]: d };
          s.set(e, t);
          const n = () => {
              clearTimeout(u), i(), s.delete(e);
              const n = Object.entries(t).map(([e, t]) => ({
                started: e,
                exited: t.exited,
                errored: t.errored,
                crashed: t.crashed,
              }));
              e.sendSession({ aggregates: n });
            },
            i = e.on("flush", () => {
              o.DEBUG_BUILD &&
                r.debug.log(
                  "Sending request session aggregate due to client flush",
                ),
                n();
            }),
            u = setTimeout(() => {
              o.DEBUG_BUILD &&
                r.debug.log(
                  "Sending request session aggregate due to flushing schedule",
                ),
                n();
            }, l);
          a.safeUnref(u);
        }
      }
    });
};
